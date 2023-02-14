import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";

import useApiRequest from "./useApiRequest";

jest.mock("axios");
const url = "https://hacker-news.firebaseio.com/v0/newstories.json";

describe("useApiRequest Hook", () => {
  it("should fetch data from the API and set the state correctly", async () => {
    const useApiMockData = { 
      data: { 
        0: 34773033,
        1: 34772999,
        2: 34772982,
        3: 34772975,
        4: 34772954
      } 
    };

    (axios.get as jest.Mock).mockResolvedValue(useApiMockData);

    const { result, waitForNextUpdate } = renderHook(() => useApiRequest<{ id: number }>(url));

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(undefined);
    expect(result.current.data).toBe(undefined);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(undefined);
    expect(result.current.data).toEqual(useApiMockData.data);
  });

  it("should set the error state correctly if there's an error", async () => {
    const mockError = new Error("Something went wrong");
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    const { result, waitForNextUpdate } = renderHook(() => useApiRequest<{ id: number }>(url));

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(undefined);
    expect(result.current.data).toBe(undefined);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(mockError);
    expect(result.current.data).toBe(undefined);
  });
});
