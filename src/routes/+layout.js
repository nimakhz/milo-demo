import { browser } from "$app/environment";
import { redirect } from "@sveltejs/kit";

const STORAGE_KEY = "milo.auth";
const protectedRoutes = ["/chat", "/history", "/profile"];

export const ssr = false;

export function load({ url }) {
    if (!browser) return;

    const basePath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
    const withBase = (p) => (basePath ? `${basePath}${p}` : p);

    const path = url.pathname;
    const authed = window.localStorage.getItem(STORAGE_KEY) === "1";
    const loginPath = withBase("/login");
    const chatPath = withBase("/chat");

    const isLogin = path === loginPath;
    const needsAuth =
        path === withBase("/") ||
        protectedRoutes.some((r) => path === withBase(r) || path.startsWith(`${withBase(r)}/`));

    if (!authed && needsAuth && !isLogin) {
        throw redirect(302, loginPath);
    }

    if (authed && isLogin) {
        throw redirect(302, chatPath);
    }
}

