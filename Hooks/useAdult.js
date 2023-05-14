import { useEffect } from "react";

function useAdult() {
  useEffect(() => {
    alert("hello");
  }, []);

  return <div></div>;
}

export default useAdult;
