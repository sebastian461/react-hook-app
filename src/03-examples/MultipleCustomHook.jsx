import { useFetch } from "../hooks";

export const MultipleCustomHook = () => {
  const { data, isLoading, hasError, newQuote } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  );

  const { quote, author } = !!data && data[0]; //si la data tiene un valor, desestructura la data en la posición 0

  return (
    <>
      <h1>MultipleCustomHook</h1>
      <hr />
      <h2>Breaking Bad Quotes</h2>
      {isLoading ? (
        <div className="alert alert-info text-center mt-3">Cargando...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button
        onClick={newQuote}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Siguiente
      </button>
    </>
  );
};
