const languages = ["en", "ru", "cz", "ua", "ar"]

function langOptionsGenerator() {
  return languages
    .map(l => `<option value="${l}">${l.toUpperCase()}</option>`)
    .join("")
}


export function LangSelector() {
  return `
  <div class="lang_select_box">
      <select name="lang-select" id="lang-btn">
        ${langOptionsGenerator()}
      </select>
    </div>
  `
}