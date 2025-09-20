import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold hero-gradient">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="btn-hero text-white inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
