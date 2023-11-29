import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    setData(window.innerWidth);
  }, []);
  return { data };
};
export default useWindowSize;
