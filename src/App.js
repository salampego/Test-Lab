import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const letter = password.match(/[a-z]/g);
    const symbols = password.match(/[!,@,#,$,%,^,&,*,?,_,~,-,(,),",']/g);
    const number = password.match(/\d+/g);
    console.log(Boolean(password.length >= 8));

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

  const onChange = (e) => {
    setPassword(e.target.value.trim());
  };

  return (
    <div className="app">
      <div className="app__block-input">
        <input
          onChange={onChange}
          value={password}
          className="app__block-password"
          type="text"
        ></input>
      </div>
      <div className="app__indicator">
        <span className={`app__indicator-item ${status}`}></span>
        <span className={`app__indicator-item ${status}`}></span>
        <span className={`app__indicator-item ${status}`}></span>
      </div>
    </div>
  );
}

export default App;
