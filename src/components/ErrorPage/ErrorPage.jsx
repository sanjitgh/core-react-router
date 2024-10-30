import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className="flex justify-center items-center gap-5 min-h-screen bg-slate-800 text-white">
      <h1 className="font-bold text-5xl">Oops!!!!</h1>
      {
        error.status === 404 && 
        <div>
            <h3>Page not found</h3>
            <p>Go back where you from</p>
            <Link to="/"><button className="btn">Home</button></Link>
        </div>
      }
    </div>
  );
};

export default ErrorPage;
