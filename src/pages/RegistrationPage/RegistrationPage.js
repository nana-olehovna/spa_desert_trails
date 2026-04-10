import { RegistrationForm } from "./RegistrationForm";


import "./RegistrationForm/RegistrationForm.scss"

export const RegistrationPage = () => {
    return `
    <div id="registration_page">
      ${RegistrationForm()}
    </div>
    `
}