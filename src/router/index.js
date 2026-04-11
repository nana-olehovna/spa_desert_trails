import page from 'page';
import { Home, About, LoginPage, RegistrationPage, Jordan, Morocco, Oman, Page404 } from "../pages";

page.base("/spa_desert_trails")

let currentPage = null
let currentPath = null

export function setCurrentRoute(page, path) {
    currentPage = page
    currentPath = path
}

export function getCurrentRoute() {
    return { currentPage, currentPath }
}

const routes = [
    {
        path: "/",
        page: Home
    },
    {
        path: "/about",
        page: About
    },
    {
        path: "/login",
        page: LoginPage
    },
    {
        path: "/registration",
        page: RegistrationPage
    },
    {
        path: "/morocco",
        page: Morocco
    },
    {
        path: "/jordan",
        page: Jordan
    },
    {
        path: "/oman",
        page: Oman
    }
]


export function resetUI(){
  document.body.classList.remove("no_scroll")
}


export const InitRouter = (renderApp) => {
    page("*", (ctx) => {
        const route = routes.find(r => r.path === ctx.path)
        const Page = route?.page || Page404

        setCurrentRoute(Page, ctx.path)
        renderApp(Page, ctx.path)
        resetUI()

        window.scrollTo(0, 0)
    })

    page()
}



