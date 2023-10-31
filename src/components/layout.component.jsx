// Section Container
export const SectionContainer = ({ className, children, ...others }) => {
  return (
    <div className={`mx-auto container px-6 lg:px-8 ${className}`} {...others}>
      {children}
    </div>
  );
};
