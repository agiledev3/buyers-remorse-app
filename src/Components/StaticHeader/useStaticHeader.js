import { useState } from "react";

const useStaticHeader = () => {
  const [staticHeader, setStaticHeader] = useState({
    title: "Loading...",
    onBackButtonClick: null,
  });

  return {
    staticHeader,
    setStaticHeader,
  };
};

export default useStaticHeader;
