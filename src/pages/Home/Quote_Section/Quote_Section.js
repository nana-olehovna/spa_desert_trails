import { t } from "../../../languages"

export const QuoteGenerator = (content) => {
  return `
  <p class="quote">"${t(content)}"</p>
  `
}

export const QuotesSection = () => {
  return `
    <section class="quotes_section">
      ${QuoteGenerator("Home.QuotesSection.Quote1")}
      ${QuoteGenerator("Home.QuotesSection.Quote2")}
    </section>
  `
}