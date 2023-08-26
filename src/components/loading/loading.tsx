import React from "react";
import "./loading.css";
import { SyncLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <SyncLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
