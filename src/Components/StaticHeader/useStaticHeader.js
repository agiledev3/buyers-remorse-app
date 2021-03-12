import { useState } from "react";

//holds the header state of a page
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
