import { loginSubmit, registrationSubmit, contactSubmit, subscriptionSubmit } from "../pages";


export const submitListener = () => {
  document.addEventListener("submit", (event) => {
    const form = event.target

    switch(form.id) {
      case "login-form":
        loginSubmit(event)
        break;

      case "register-form":
        registrationSubmit(event)
        break;
        
      case "contact-form":
        contactSubmit(event)
        break;

      case "subscribtion_form":
        subscriptionSubmit(event)
        break;

      default: break;
    }
})
}
