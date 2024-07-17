import { useEffect, useState } from "react";

const useScroll = () => {
    const [top, setTop] = useState<boolean>(!window.scrollY);
  
    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
      };
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }, []);
  
    return top;
  };

  export default useScroll;