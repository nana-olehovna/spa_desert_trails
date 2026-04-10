import { t } from "../../languages";
import { LoginForm } from "./LoginForm";

import "./LoginForm/LoginForm.scss"

export const LoginPage = () => {
    return `
    <div id="login_page">
      ${LoginForm()}
    </div>
    `
}