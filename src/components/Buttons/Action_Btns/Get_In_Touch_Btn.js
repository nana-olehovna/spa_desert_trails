import { t } from "../../../languages"
import { wait } from "../../../pages/RegistrationPage/RegistrationMessage/RegistrationMessage"

export const GetInTouchBtn = (content, Class=" ") => {
    return `
        <button type="submit" class="get_in_touch_btn ${Class}"><span class="btn_accent">${t(content)}</span></button>
    `
}

export const SecondaryActionBtn = (content, Class=" ") => {
    return `
        <button type="submit" class="action_btn ${Class}"><span class="btn_casual">${t(content)}</span></button>
    `
}


export async function goToDestinationFromOther(event) {
    if (event.target.closest(".goToDestinationFromOther")) {

        const page = event.target.closest(".page")
        if (page) {
            page.classList.remove("page_leave")
            page.classList.add("page_leave")
            await wait(400)
        }
        location.pathname = "/"
    }
}