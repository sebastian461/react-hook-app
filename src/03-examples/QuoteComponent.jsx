import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const QuoteComponent = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  /*
   * este hook se lanza cuando el componente ya se renderizo
   */
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect(); //esta función muestra todos la información del elemento
    setBoxSize({
      width,
      height,
    });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

QuoteComponent.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
