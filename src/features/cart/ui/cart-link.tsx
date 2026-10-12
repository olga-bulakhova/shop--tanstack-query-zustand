import { useState, useEffect } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { ShoppingCartIcon } from "@/shared/icons/shopping-cart-icon";

interface CartButtonProps extends LinkProps {
  iconSize?: number;
  count?: number;
}

const BASE_LINK_CLASSES =
  " cursor-pointer inline-block transition-all duration-300 ease-in-out";
const FIXED_CLASSES = "fixed top-4 right-4 z-50 scale-100";
const RELATIVE_CLASSES = "relative top-0 left-0 scale-95 ";

const BADGE_CLASSES =
  "absolute -top-1 -right-2 min-w-6 h-6 px-1 bg-white text-xs font-semibold flex items-center justify-center rounded-full text-brand shadow-sm select-none";

export const CartLink = ({
  iconSize = 50,
  count = 0,
  className = "",
  ...props
}: CartButtonProps) => {
  const [isFixed, setIsFixed] = useState(false);

  const displayCount = count > 99 ? "99+" : count;

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeFixed = window.scrollY > 100;
      setIsFixed((prev) => (prev !== shouldBeFixed ? shouldBeFixed : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClassName = `${BASE_LINK_CLASSES} ${isFixed ? FIXED_CLASSES : RELATIVE_CLASSES} ${className}`;

  return (
    <div className="inline-block" style={{ width: iconSize, height: iconSize }}>
      <Link className={linkClassName} aria-label="Cart" {...props}>
        {count > 0 && <div className={BADGE_CLASSES}>{displayCount}</div>}
        <ShoppingCartIcon size={iconSize} />
      </Link>
    </div>
  );
};
