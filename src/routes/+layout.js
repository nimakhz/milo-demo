import { browser } from "$app/environment";
import { redirect } from "@sveltejs/kit";
import { base } from "$app/paths";

const STORAGE_KEY = "milo.auth";
const protectedRoutes = ["/chat", "/history", "/profile"];

export const ssr = false;

export function load({ url }) {
    if (!browser) return;

    const path = url.pathname;
    const authed = window.localStorage.getItem(STORAGE_KEY) === "1";
    const loginPath = `${base}/login`;
    const chatPath = `${base}/chat`;

    const isLogin = path === loginPath;
    const needsAuth =
        path === `${base}/` ||
        protectedRoutes.some((r) => path === `${base}${r}` || path.startsWith(`${base}${r}/`));

    if (!authed && needsAuth && !isLogin) {
        throw redirect(302, loginPath);
    }

    if (authed && isLogin) {
        throw redirect(302, chatPath);
    }
}

