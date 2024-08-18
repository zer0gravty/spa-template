import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-2xl mb-3">An unexpected error has occurred.</h1>
      <i className="text-lg">{JSON.stringify(error, null, 2)}</i>
    </div>
  );
}

export default ErrorPage;
