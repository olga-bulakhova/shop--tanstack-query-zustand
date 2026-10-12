import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";

interface BackButtonProps {
  className?: string;
  fallbackPath?: string;
}

export const BackButton = ({
  className = "",
  fallbackPath = "/",
}: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    const hasHistory = window.history.state && window.history.state.idx > 0;

    if (hasHistory) {
      navigate(-1);
    } else {
      navigate(fallbackPath, { replace: true });
    }
  };

  return (
    <button
      onClick={handleBack}
      className={`flex cursor-pointer items-center gap-2 bg-white py-2 text-sm font-semibold text-brand ${className} `.trim()}
    >
      <ArrowLeftIcon />
      Назад
    </button>
  );
};
