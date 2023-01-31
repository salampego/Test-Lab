import { useEffect, useState } from "react";
import { EyeOff, EyeOn } from "./svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const letter = password.match(/[a-zA-Z]*/g);
    const symbols = password.match(/[!,@,#,$,%,^,&,*,?,_,~,-,(,),",']/g);
    const number = password.match(/\d+/g);

    if (password === "") {
      setStatus("noPassword");
      return;
    }
    if (password.length <= 6) {
      setStatus("notEnough");
      return;
    }
    if (letter && symbols && number) {
      setStatus("strong");
      return;
    }
    if ((letter || symbols) && (letter || number) && (symbols || number)) {
      setStatus("medium");
      return;
    }
    if (password.length >= 8) {
      setStatus("easy");
      return;
    }
  }, [password]);

  const onChangePassword = (e) => {
    setPassword(e.target.value.trim());
  };

  const onChangeType = () => {
    setChecked(!checked);
  };

  return (
    <div className="app">
      <div className="app__block-label">
        <div className="app__block-password">
          <input
            onChange={onChangePassword}
            className="app__block-text"
            type={checked ? "text" : "password"}
          ></input>
          <span className="focus-border"></span>
        </div>
        <input
          type="checkbox"
          className="app__block-checkbox"
          id="openPassword"
          onChange={onChangeType}
        />
        <label htmlFor="openPassword" className="app__block-svg">
          {checked ? (
            <EyeOff width="24" height="20" />
          ) : (
            <EyeOn width="24" height="20" />
          )}
        </label>
      </div>
      <div className="app__indicator">
        <span className={`app__indicator-item ${status}`}></span>
        <span className={`app__indicator-item ${status}`}></span>
        <span className={`app__indicator-item ${status}`}></span>
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
    </div>
  );
}

export default App;
