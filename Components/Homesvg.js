import React from "react";
import Svg, { Path } from "react-native-svg";

const Homesvg = ({ width = 24, height = 24, fill = "black" }) => (
  <Svg width={width} height={height} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <Path d="M9.00002 1.16188L0.947353 6.08185V19.0042H6.04945V12.0333H11.9951V19.0042H17.0526V6.04633L9.00002 1.16188ZM9.00002 0L18 5.28399V20H11.0478V13.0291H6.99681V20H0V5.33142L9.00002 0Z" fill={fill}/>
  </Svg>
  
);

export default Homesvg;