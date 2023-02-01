import { useEffect, useState } from "react";
import "./App.css";
import { PasswordIndicator } from "./passwordIndicator/passwordIndicator";
import { PasswordForm } from "./passwordForm/passwordForm";

function App() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const letter = password.match(/[a-zA-Z]/);
    const symbols = password.match(/[!,@,#,$,%,^,&,*,?,_,~,-,(,),",',]/g);
    const number = password.match(/\d+/g);

    if (password === "") {
      setStatus("noPassword");
      return;
    }
    if (password.length <= 7) {
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
      <PasswordForm
        onChangePassword={onChangePassword}
        onChangeType={onChangeType}
        checked={checked}
      />
      <PasswordIndicator status={status} />
    </div>
  );
}

export default App;
