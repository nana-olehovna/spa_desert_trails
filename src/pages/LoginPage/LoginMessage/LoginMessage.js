import { wait } from "../../RegistrationPage/RegistrationMessage/RegistrationMessage";
import { t } from "../../../languages";
import { LoginSuccessPage } from "../LoginSuccessPage";

export async function processingLoginMessage() {
    const lForm = document.getElementById("login-form")
    lForm.innerHTML = `<h3 class="subtitle">${t("LoginPage.Processing1")}</h3>`

    await wait(1500)

    lForm.innerHTML = `<h3 class="subtitle">${t("LoginPage.Processing2")}</h3>`

    await wait(1500)
}



export async function successfullLogin(data) {
    await processingLoginMessage()
    const page = document.getElementById("login_page")
    page.innerHTML = LoginSuccessPage(data)
}
