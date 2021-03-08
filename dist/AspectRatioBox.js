function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useRef } from "react";

const AspectRatioBox = ({
  ratio,
  children,
  ...otherProps
}) => {
  const refWrapper = useRef(null);
  useEffect(() => {
    const {
      clientWidth
    } = refWrapper.current;
    if (!ratio) refWrapper.current.style.height = `${clientWidth}px`;else {
      const [ratioWidth, ratioHeight] = ratio.split(":");
      const newHeight = clientWidth / ratioWidth * ratioHeight;
      refWrapper.current.style.height = `${newHeight}px`;
    }
  }, [ratio]);
  return /*#__PURE__*/React.createElement("div", _extends({
    id: "aspect"
  }, otherProps, {
    ref: refWrapper
  }), children);
};

export default AspectRatioBox;