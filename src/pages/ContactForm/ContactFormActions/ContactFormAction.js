import { setError } from "../../LoginPage/LoginValidation";
import { clearErrors } from "../../LoginPage/LoginValidation"
import { wait } from "../../RegistrationPage/RegistrationMessage/RegistrationMessage";
import { ContactPopup } from "..";
import { t } from "../../../languages";

export function ContactFormValidate() {
  const form = document.getElementById("contact-form")
  if (!form) return
  const errors = {}

  const firstName = form.elements.firstName.value.trim()
  const email = form.elements.email.value.trim()

  if (!firstName) {
    errors.firstName = t("RegistrationPage.RegisterForm.Error.Name1")
    } else if (firstName.length < 2) {
      errors.firstName = t("RegistrationPage.RegisterForm.Error.Name1")
    }

  if (!email) {
      errors.email = t("RegistrationPage.RegisterForm.Error.Email1")
    } else if (!email.includes("@")) {
      errors.email = t("RegistrationPage.RegisterForm.Error.Email2")
  }

  return errors
}


export function contactMessage(data) {
  return `
  <div class="contactMessageContainer">
    <h3 class="quote">${t("ContactForm.Final")} ${data.firstName}! ${t("ContactForm.Final1")}</h3>
    </div>
  `
}


export async function successfulContact(data) {
  const popup = document.getElementById("contact-form-container")
  const submitBtn = document.querySelector(".contact_submit_btn")
  await wait(1000)
  submitBtn.classList.remove("btn_disabled")
  popup.innerHTML = contactMessage(data)
  await wait(5000)
  ContactPopup()
}


export async function contactSubmit(event) {
  const form = event.target
    if (form.id !== "contact-form") return
    event.preventDefault()

    const submitBtn = document.querySelector(".contact_submit_btn")
    submitBtn.classList.add("btn_disabled")

    clearErrors(form)
      const errors = ContactFormValidate()
  
    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([fieldName, message]) => {
        setError(form, fieldName, message)
      }) 
    submitBtn.classList.remove("btn_disabled")
    return
      } 

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
  
    console.log("Contact data: ", data);



    await emailjs.sendForm("contact_service", "template_k31sx4s", form, {publicKey: "Aq0zDHmoRxghcpM1Y"})

    await emailjs.sendForm("contact_service", "template_injoqap", form, {publicKey: "Aq0zDHmoRxghcpM1Y"})

    successfulContact(data)
}

export function sendEmail(event) {
    const form = event.target
    if (form.id !== "contact-form") return
    event.preventDefault()

    emailjs.sendForm("contact_service", "template_k31sx4s", form, {publicKey: "Aq0zDHmoRxghcpM1Y"} )

}