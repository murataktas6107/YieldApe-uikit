import React from "react";
import { YieldApeStack, YieldApeInput, YieldApeLabel } from "./StyledYieldApeToggle";
import { YieldApeToggleProps, scales } from "./types";

const YieldApeToggle: React.FC<YieldApeToggleProps> = ({ checked, scale = scales.MD, ...props }) => (
  <YieldApeStack scale={scale}>
    <YieldApeInput id={props.id || "YieldApe-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <YieldApeLabel scale={scale} checked={checked} htmlFor={props.id || "YieldApe-toggle"}>
      <div className="YieldApes">
        <div className="YieldApe" />
        <div className="YieldApe" />
        <div className="YieldApe" />
        <div className="butter" />
      </div>
    </YieldApeLabel>
  </YieldApeStack>
);

YieldApeToggle.defaultProps = {
  scale: scales.MD,
};

export default YieldApeToggle;
