import { RegistrationSuccessPage } from "../RegistrationSuccessPage"
import { t } from "../../../languages"

export function wait(ms){
    return new Promise( resolve=> 
        setTimeout(resolve, ms)
    )
}


export async function processingMessage() {
    const rForm = document.getElementById("register-form")
    rForm.innerHTML = `<h3 class="subtitle">${t("RegistrationPage.Processing1")}</h3>`

    await wait(1500)

    rForm.innerHTML = `<h3 class="subtitle">${t("RegistrationPage.Processing2")}</h3>`

    await wait(1500)
}




export async function successfullRegistration(data) {
    await processingMessage()
    const page = document.getElementById("registration_page")
    page.innerHTML = RegistrationSuccessPage(data)
}