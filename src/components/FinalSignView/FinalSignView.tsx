import React from "react";
import "../../styles/LeftPanelStyle";
import StaticDataArea from "./StaticDataArea/StaticDataArea";
import DynamicDataArea from "./DynamicDataArea/DynamicDataArea";

const FinalSignView = () => {
  return (
    <div className={"mt-32"}>
      <div className={"text-center"}>
        <div style={{ width: "50%", margin: "auto" }}>
          <StaticDataArea />
          <DynamicDataArea />
        </div>
      </div>
    </div>
  );
};

export default FinalSignView;
