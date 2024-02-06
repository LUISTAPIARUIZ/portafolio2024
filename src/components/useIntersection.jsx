import { useEffect, useRef, useState } from "react";

const useIntersection = (opciones = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const elementoRef = useRef();

  useEffect(() => {
    const elemento = elementoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAppeared) {
            setIsIntersecting(entry.isIntersecting);
            setHasAppeared(true); // Esta opción permite que la ejecución ocurra solo una vez
          }
        });
      },
      opciones
    );

    if (elemento) {
      observer.observe(elemento);
    }

    return () => {
      if (elemento) {
        observer.unobserve(elemento);
      }
    };
  }, [opciones, hasAppeared]);

  return [elementoRef, isIntersecting];
};

export default useIntersection;