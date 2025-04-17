const SecHeader = ({
  title,
  subtitle,
  text,
  className,
  stClass,
  tClass,
  pClass,
}) => {
  return (
    <div className={`text-center mb-10 ${className || ""}`}>
      <h6
        className={`font-semibold text-fountain-blue text-2xl ${stClass || ""}`}
      >
        {subtitle}
      </h6>
      <h3
        className={`font-bold text-gray-900 text-4xl capitalize ${
          tClass || ""
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {text && (
        <p
          className={`font-open-sans text-gray-500 text-base m-0 ${
            pClass || ""
          }`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </div>
  );
};

export default SecHeader;
