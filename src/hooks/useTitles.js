import { useEffect } from "react";

export const useTitles = (title) => {
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);
  return null;
};
