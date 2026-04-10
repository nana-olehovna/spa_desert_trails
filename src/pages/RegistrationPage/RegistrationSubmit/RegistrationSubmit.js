import { setError, clearErrors } from "../../LoginPage/LoginValidation";
import { validateRegistrationForm } from "../RegistrationValidation";
import { successfullRegistration } from "../RegistrationMessage/RegistrationMessage";
import { FormReset } from "../FormReset/FormReset";

export function registrationSubmit(event) {
    const form = event.target
    if (form.id !== "register-form") return
    event.preventDefault()
    clearErrors(form)
    const errors = validateRegistrationForm()

    if (Object.keys(errors).length > 0) {
        Object.entries(errors).forEach(([fieldName, message]) => {
            setError(form, fieldName, message)
            
        }) 
        return
    } 

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    console.log("Registration data: ", data);

    

    successfullRegistration(data)
    
}