import { useFetch } from "../hooks";
import { LoadingComponent, QuoteComponent } from "../03-examples/index";

export const Layout = () => {
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
        <LoadingComponent />
      ) : (
        <QuoteComponent quote={quote} author={author} />
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
