import { useEffect } from "react";

export const useOutclick = (callback) => {
  const ref = useRef();

  const handclick = (event) => {
    if (!ref.current.contains(event.target)) {
      callback({ ref, target: event.target });
    } else {
      console.log("clicou dentro");
    }
  };

  window.addEventListener("mousedown", handclick);

  useEffect(() => {
    return () => {
      window.removeEventListener("mousedown", handclick);
    };
  }, []);

  return ref;
};
