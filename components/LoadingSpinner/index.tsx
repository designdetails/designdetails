import React from "react";
import Donut from "./Donut";

export default ({ style }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100%", ...style }}>
    <Donut />
  </div>
);
