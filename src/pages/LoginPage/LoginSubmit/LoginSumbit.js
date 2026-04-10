import { setError, clearErrors, validateLoginForm } from "../LoginValidation";
import { successfullLogin } from "../LoginMessage/LoginMessage";
import { t } from "../../../languages";

export function loginSubmit(event) {
    const form = event.target
    if (form.id !== "login-form") return
    event.preventDefault()
    clearErrors(form)
    const errors = validateLoginForm()

    if (Object.keys(errors).length > 0) {
        Object.entries(errors).forEach(([fieldName, message]) => {
            setError(form, fieldName, message)
            
        }) 
        return
    } 

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    console.log("Login data: ", data);
    
    successfullLogin(data)
}