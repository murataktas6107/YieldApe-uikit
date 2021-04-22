import React, { useState } from "react";
import YieldApeToggle from "./YieldApeToggle";

export default {
  title: "Components/YieldApeToggle",
  component: YieldApeToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <YieldApeToggle checked={isChecked} onChange={toggle} />
      </div>
      <div>
        <YieldApeToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
