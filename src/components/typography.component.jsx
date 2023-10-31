// Page title
export const PageTitle = ({ className, children, ...others }) => {
  return (
    <h1
      className={`text-[30px] sm:text-[34px] md:text-[40px] font-medium leading-tight ${className}`}
      {...others}
    >
      {children}
    </h1>
  );
};

// Section title
export const SectionTitle = ({ className, children, ...others }) => {
  return (
    <h2
      className={`text-[28px] sm:text-[30px] md:text-[32px]  font-semibold ${className}`}
      {...others}
    >
      {children}
    </h2>
  );
};

// Section title
export const SectionSubTitle = ({ className, children, ...others }) => {
  return (
    <h4
      className={`text-[17px] uppercase font-medium ${className}`}
      {...others}
    >
      {children}
    </h4>
  );
};

// Heading
export const Heading = ({ className, children, ...others }) => {
  return (
    <h3
      className={`text-[24px] sm:text-[26px] md:text-[28px] uppercase text-dark-teal font-medium ${className}`}
      {...others}
    >
      {children}
    </h3>
  );
};
