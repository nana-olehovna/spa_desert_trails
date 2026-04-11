const base = import.meta.env.BASE_URL;

export const HeaderMenuBtn = () => {
    return`
      <button class="header_menu_btn">
        <div id="header-menu-btn" class="open_btn_box"><img src="${base}icons/menu_burger.svg" alt="Header Menu Button"></div>
        <div id="header-menu-close" class="closing_btn_box hidden"><img src="${base}icons/cross.svg" alt="Header Menu Closing Button"></img></div>
      </button>
    `
}


export function ShowMenu(event) {
  if (event.target.closest("#header-menu-btn")) {
    document.getElementById("header-menu").classList.remove("hidden")
    document.body.classList.add("no_scroll")
    document.getElementById("header-menu-btn").classList.add("hidden")
    document.getElementById("header-menu-close").classList.remove("hidden")
  }
}

export function HideMenu(event) {
  if (event.target.closest("#header-menu-close")|| event.target.closest("#header-menu a"))  {
    document.getElementById("header-menu").classList.add("hidden")
    document.body.classList.remove("no_scroll")
    document.getElementById("header-menu-btn").classList.remove("hidden")
    document.getElementById("header-menu-close").classList.add("hidden")
  }
}
