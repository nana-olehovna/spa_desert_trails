import {t} from "../../languages"
import { getCurrentRoute } from "../../router";

export function Main(currentPage) {
  const { currentPage: Page } = getCurrentRoute()
  return `
    <main class="Main">
        ${Page()}
    </main>
    `;
};