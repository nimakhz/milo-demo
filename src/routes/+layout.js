import { browser } from "$app/environment";
import { redirect } from "@sveltejs/kit";

const STORAGE_KEY = "milo.auth";
const protectedRoutes = ["/chat", "/history", "/profile"];

export const ssr = false;

export function load({ url }) {
    if (!browser) return;

    const path = url.pathname;
    const authed = window.localStorage.getItem(STORAGE_KEY) === "1";
    const isLogin = path === "/login";
    const needsAuth =
        path === "/" || protectedRoutes.some((r) => path === r || path.startsWith(`${r}/`));

    if (!authed && needsAuth && !isLogin) {
        throw redirect(302, "/login");
    }

    if (authed && isLogin) {
        throw redirect(302, "/chat");
    }
}

