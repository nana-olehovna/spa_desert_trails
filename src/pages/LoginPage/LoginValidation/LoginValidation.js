import { t } from "../../../languages"

export function setError(form, fieldName, message) {
    if (!form) return
    const errorElement = form.querySelector(`[data-error-for="${fieldName}"]`)
    if (errorElement) errorElement.textContent = message
}

export function clearErrors(form) {
    form.querySelectorAll(".error").forEach((el) => {el.textContent = ""})
}

export function validateLoginForm() {
    const form = document.getElementById("login-form")
    if (!form) return
    const errors = {}

    const firstName = form.elements.firstName.value.trim()
    const email = form.elements.email.value.trim()
    const password = form.elements.password.value

    if (!firstName) {
        errors.firstName = t("RegistrationPage.RegisterForm.Error.Name2")
    } else if (firstName.length < 2) {
        errors.firstName = t("LoginPage.LoginForm.Error.Name1")
        }

    if (!email) {
        errors.email = t("LoginPage.LoginForm.Error.Email1")
    } else if (!email.includes("@")) {
        errors.email = t("LoginPage.LoginForm.Error.Email2")
    }

    if (!password) {
        errors.password = t("LoginPage.LoginForm.Error.Password1")
    } else if (password.length < 6) {
        errors.password = t("LoginPage.LoginForm.Error.Password2")
    }

    return errors
}

