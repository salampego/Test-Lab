import "./passwordIndicator.css";

export const PasswordIndicator = ({ status }) => {
  return (
    <>
      <div className="indicator">
        <span className={`indicator_item ${status}`}></span>
        <span className={`indicator_item ${status}`}></span>
        <span className={`indicator_item ${status}`}></span>
      </div>
      <div className="text__status-block">
        {status === "notEnough" ? (
          <p className="text__status-notEnough">
            must be a minimum of 8 values
          </p>
        ) : null}
        {status === "easy" ? (
          <p className="text__status-easy">the password is easy</p>
        ) : null}
        {status === "medium" ? (
          <p className="text__status-medium">the password is medium</p>
        ) : null}
        {status === "strong" ? (
          <p className="text__status-strong">the password is strong</p>
        ) : null}
      </div>
    </>
  );
};
