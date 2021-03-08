import React, { useEffect, useRef } from "react";

const AspectRatioBox = ({ ratio, children, ...otherProps }) => {
  const refWrapper = useRef(null);
  useEffect(() => {
    const { clientWidth } = refWrapper.current;
    if (!ratio) refWrapper.current.style.height = `${clientWidth}px`;
    else {
      const [ratioWidth, ratioHeight] = ratio.split(":");
      const newHeight = (clientWidth / ratioWidth) * ratioHeight;
      refWrapper.current.style.height = `${newHeight}px`;
    }
  }, [ratio]);
  return (
    <div id="aspect" {...otherProps} ref={refWrapper}>
      {children}
    </div>
  );
};

export default AspectRatioBox;
