import { t } from "../../../languages";

const links = [
    {
        path: "/morocco",
        name: "header.nav.morocco",
    },
    {
        path: "/jordan",
        name: "header.nav.jordan",
    },
    {
        path: "/oman",
        name: "header.nav.oman",
    },
    {
        path: "/about",
        name: "header.nav.about",
    }
]

function linkGenerator(currentPath) {
  return links
    .map(link => `<a href="${link.path}" class="header_link ${currentPath === link.path ? " active" : ""}" >${t(link.name)}</a>`)
    .join("")
}

export function Navigation(currentPath){
  return `
  <nav class="header_nav">
    ${linkGenerator(currentPath)}
  </nav>
  `
}

export function NavigationMob(currentPath){
  return `
  <nav class="nav_mob">
    ${linkGenerator(currentPath)}
  </nav>
  `
}
