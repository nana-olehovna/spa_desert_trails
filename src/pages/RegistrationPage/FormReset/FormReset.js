export function FormReset() {
  const form = document.querySelectorAll("form")
  if (!form) return
  form.forEach(f => {
    if (f.elements.email) f.elements.email.value = ""
    if (f.elements.password) f.elements.password.value = ""
  })
}