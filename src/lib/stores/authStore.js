import { writable } from "svelte/store";
import { browser } from "$app/environment";

const STORAGE_KEY = "milo.auth";

function readInitialAuth() {
    if (!browser) return false;
    try {
        return window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
        return false;
    }
}

export const isAuthenticated = writable(readInitialAuth());

function persist(value) {
    if (!browser) return;
    try {
        window.localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    } catch {
        // ignore
    }
}

export function login(username, password) {
    const ok = username === "Milo" && password === "1234";
    if (ok) {
        isAuthenticated.set(true);
        persist(true);
    }
    return ok;
}

export function logout() {
    isAuthenticated.set(false);
    persist(false);
}

