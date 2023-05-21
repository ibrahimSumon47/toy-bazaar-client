import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Toy Bazaar`;
  }, [title]);
};

export default useTitle;
