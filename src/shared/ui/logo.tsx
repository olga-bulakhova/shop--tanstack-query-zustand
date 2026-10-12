import { Link } from "react-router-dom";
import { ROUTES } from "../model/routes";

export const Logo = () => {
  return (
    <Link to={ROUTES.HOME} className="text-4xl font-bold tracking-tight">
      Logo
    </Link>
  );
};
