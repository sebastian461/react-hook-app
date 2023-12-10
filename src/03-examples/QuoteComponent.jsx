import PropTypes from "prop-types";

export const QuoteComponent = ({ quote, author }) => {
  return (
    <blockquote className="blockquote text-end">
      <p>{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};

QuoteComponent.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
