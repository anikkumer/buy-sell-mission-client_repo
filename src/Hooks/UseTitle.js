import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- Buy&Sell Mission`;
  }, [title]);
};

export default UseTitle;
