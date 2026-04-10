import { t } from "../../../languages"

const footerLinks = [
    {
        path: "/contacts",
        name: "footer.link.contacts"
    },
    {
        path: "/privacy",
        name: "footer.link.privacy"
    },
    {
        path: "/terms",
        name: "footer.link.terms"
    }
]

export function footerLinkGenerator(currentPath) {
  return footerLinks
    .map(link => `<a href="${link.path}" class="footer_link ${currentPath === link.path ? " active" : ""}" >${t(link.name)}</a>`)
    .join("")
}