import { EyeOff, EyeOn } from "../../svg";
import s from "./passwordForm.module.css";

export const PasswordForm = ({ onChangePassword, onChangeType, checked }) => {
  return (
    <form className={s.container}>
      <div className={s.block_password}>
        <input
          onChange={onChangePassword}
          className={s.input_text}
          type={checked ? "text" : "password"}
        ></input>
        <span className={s.focus_border}></span>
      </div>
      <div className={s.block_eye}>
        <input
          type="checkbox"
          className={s.input_checkbox}
          id="openPassword"
          onChange={onChangeType}
        />

        <label htmlFor="openPassword" className={s.svgLabel}>
          {checked ? (
            <EyeOff width="24" height="20" />
          ) : (
            <EyeOn width="24" height="20" />
          )}
        </label>
      </div>
    </form>
  );
};
