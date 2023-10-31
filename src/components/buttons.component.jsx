import Link from "next/link";

// Primary Button
export const PrimaryButton = ({ url, className, handleClick, children, ...others }) => {
  return (
    <Link
      href={url ? url : ""}
      passHref
      className={`primary-button rounded-full ${className}`}
      onClick={handleClick}
      {...others}
    >
      {children}
    </Link>
  );
};

// Secondary Button
export const SecondaryButton = ({ url, className, handleClick, children, ...others }) => {
  return (
    <Link
      href={url ? url : ""}
      passHref
      className={`secondary-button rounded-full ${className}`}
      onClick={handleClick}
      {...others}
    >
      {children}
    </Link>
  );
};

// Outlined White Button
export const OutlinedWhiteButton = ({
  url,
  className,
  handleClick,
  children,
  ...others
}) => {
  return (
    <Link
      href={url ? url : ""}
      passHref
      className={`outlined-white-button rounded-full ${className}`}
      onClick={handleClick}
      {...others}
    >
      {children}
    </Link>
  );
};

// Outlined White Button
export const OutlinedButton = ({
  url,
  className,
  handleClick,
  children,
  ...others
}) => {
  return (
    <Link
      href={url ? url : ""}
      passHref
      className={`outlined-button rounded-full ${className}`}
      onClick={handleClick}
      {...others}
    >
      {children}
    </Link>
  );
};
