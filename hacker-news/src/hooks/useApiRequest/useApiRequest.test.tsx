import { renderHook, act } from "@testing-library/react-hooks";
import useApiRequest from "./useApiRequest";
import axios from "axios";

jest.mock("axios");

const useApiMockData = [
  {
    50: 34477919,
    51: 34477915,
    52: 34477901,
  },
];

describe("useApiRequest Hook", () => {
  it("initial and success state", async () => {
    (axios.get as jest.Mock).mockResolvedValue(useApiMockData);
    // ignore act
    const { result, waitForNextUpdate } = act(() => {
      renderHook(() => useApiRequest("lorem"));
      return { result, waitForNextUpdate };
    });
    expect(result.current).toMatchObject({
      data: [],
      error: "",
      state: "LOADING",
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      data: useApiMockData,
      error: "",
      state: "SUCCESS",
    });
  });

  it("error state", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    const { result, waitForNextUpdate } = act(() => {
      renderHook(() => useApiRequest("lorem"));
      return { result, waitForNextUpdate };
    });

    await waitForNextUpdate();

    expect(result.current).toMatchObject({
      data: [],
      error: "Fetch failed",
      state: "ERROR",
    });
  });
});
