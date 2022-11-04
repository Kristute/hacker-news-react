import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '@mui/material';

class News extends React.Component {
    render() {
      return (
        <div className="news">
            <Button>MUI</Button>
        </div>
      );
    }
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<News />);
