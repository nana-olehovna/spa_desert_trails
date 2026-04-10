import { t } from "../../../languages";

export const DestinationGenerator = (title_content, subtitle_content, button_content, pathname) => {
  return `
    <div id="${pathname}" class="destination_container ${pathname}">
      <div class="destination_background"></div>
      <h1 class="title overlay_text">${t(title_content)}</h1>
      <h3 class="subtitle overlay_text">${t(subtitle_content)}</h3>
      <a href="/${pathname}" class="destination_link">${t(button_content)}</a>
    </div>
    `
}


export const DestinationsSection = () => {
  return `
    <section id="destinations_home_section">
      ${DestinationGenerator("Home.DestinationsSection.Morocco.Title", "Home.DestinationsSection.Morocco.Tagline", "Home.DestinationsSection.Morocco.Button", "morocco")}
      ${DestinationGenerator("Home.DestinationsSection.Jordan.Title", "Home.DestinationsSection.Jordan.Tagline", "Home.DestinationsSection.Jordan.Button", "jordan")}
      ${DestinationGenerator("Home.DestinationsSection.Oman.Title", "Home.DestinationsSection.Oman.Tagline", "Home.DestinationsSection.Oman.Button", "oman")}
    </section>
  `
}

export function openDestination(event) {
  const destContainer = event.target.closest(".destination_container")
  if (!destContainer) return

  const path = destContainer.id
  location.pathname = path
}