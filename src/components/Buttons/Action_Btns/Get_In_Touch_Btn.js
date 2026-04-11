import { t } from "../../../languages"
import { wait } from "../../../pages/RegistrationPage/RegistrationMessage/RegistrationMessage"
import page from "page"

export const GetInTouchBtn = (content, Class=" ", type = "button") => {
    return `
        <button type="${type}" class="get_in_touch_btn ${Class}"><span class="btn_accent">${t(content)}</span></button>
    `
}

export const SecondaryActionBtn = (content, Class=" ") => {
    return `
        <button type="submit" class="action_btn ${Class}"><span class="btn_casual">${t(content)}</span></button>
    `
}


export async function goToDestinationFromOther(event) {
    if (event.target.closest(".goToDestinationFromOther")) {

        const pageContainer = event.target.closest(".page")
        if (pageContainer) {
            pageContainer.classList.remove("page_leave")
            pageContainer.classList.add("page_leave")
            await wait(400)
        }
        page.show("/")
    }
}
