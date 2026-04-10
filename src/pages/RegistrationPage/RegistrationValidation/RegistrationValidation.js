import { t } from "../../../languages"

export function validateRegistrationForm() {
    const form = document.getElementById("register-form")
    if (!form) return
    const errors = {}

    const firstName = form.elements.firstName.value.trim()
    const lastName = form.elements.lastName.value.trim()
    const email = form.elements.email.value.trim()
    const password = form.elements.password.value
    const passwordConfirm = form.elements.passwordConfirm.value

    if (!firstName) {
        errors.firstName = t("RegistrationPage.RegisterForm.Error.Name2")
    } else if (firstName.length < 2) {
        errors.firstName = t("LoginPage.LoginForm.Error.Name1")
        }

    if (!lastName) {
        errors.lastName = t("RegistrationPage.RegisterForm.Error.Name2")
    } else if (lastName.length < 2) {
        errors.lastName = t("LoginPage.LoginForm.Error.Name1")
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

    if (!passwordConfirm) {
        errors.passwordConfirm = t("RegistrationPage.RegisterForm.Error.Password3")
    } else if (passwordConfirm !== password) {
        errors.passwordConfirm = t("RegistrationPage.RegisterForm.Error.Password4")
    }

    return errors
}
