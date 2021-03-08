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

    try {
      if (!ratio) throw new Error(`Please insert 'ratio' props. ex) <AspectRatioBox ratio="16:9">...</AspectRatioBox>`);
      const [ratioWidth, ratioHeight] = ratio.split(":").map(r => parseInt(r));
      if (!ratioWidth || !ratioHeight) throw new Error('Invalid ratio format. Please confirm and edit. ex) "16:9" ');
      const newHeight = clientWidth / ratioWidth * ratioHeight;
      refWrapper.current.style.height = `${newHeight}px`;
    } catch (e) {
      console.warn(e.message, "\nIt will be 1:1 ratio because of this error.");
      refWrapper.current.style.height = `${clientWidth}px`;
    }
  }, [ratio]);
  return /*#__PURE__*/React.createElement("div", _extends({}, otherProps, {
    ref: refWrapper
  }), children);
};

export default AspectRatioBox;