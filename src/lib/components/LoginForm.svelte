<script>
    import { createEventDispatcher } from "svelte";
    import { login } from "$lib/stores/authStore";

    const dispatch = createEventDispatcher();

    let username = "";
    let password = "";
    let error = "";

    function submit() {
        error = "";
        const ok = login(username.trim(), password);
        if (!ok) {
            error = "نام کاربری یا رمز عبور اشتباه است.";
            return;
        }
        dispatch("success");
    }
</script>

<form class="login-card premium-card" on:submit|preventDefault={submit}>
    <div class="title">
        <h1>ورود</h1>
        <p>برای ادامه وارد حساب کاربری شوید</p>
    </div>

    <div class="fields">
        <label>
            <span>نام کاربری</span>
            <input autocomplete="username" inputmode="text" bind:value={username} />
        </label>

        <label>
            <span>رمز عبور</span>
            <input type="password" autocomplete="current-password" bind:value={password} />
        </label>
    </div>

    {#if error}
        <div class="error" role="alert">{error}</div>
    {/if}

    <button class="login-btn" type="submit">ورود</button>
</form>

<style>
    .login-card {
        width: 100%;
        padding: 26px;
        position: relative;
        z-index: 1;
    }

    .title h1 {
        font-size: 1.75rem;
        font-weight: 900;
        color: var(--text-main);
        margin-bottom: 4px;
        letter-spacing: -0.04em;
    }
    .title p {
        color: var(--text-muted);
        font-weight: 500;
        font-size: 0.95rem;
    }

    .fields {
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    label span {
        display: block;
        font-size: 0.85rem;
        color: var(--text-muted);
        font-weight: 700;
        margin-bottom: 6px;
    }

    input {
        width: 100%;
        background: rgba(238, 244, 234, 0.82);
        border: 1px solid var(--border-subtle);
        border-radius: 18px;
        padding: 13px 15px;
        outline: none;
        font-family: inherit;
        font-size: 1rem;
        color: var(--text-main);
        transition: border-color 0.2s var(--ease-smooth), box-shadow 0.2s var(--ease-smooth), background 0.2s var(--ease-smooth);
    }
    input:focus {
        background: white;
        border-color: rgba(18, 99, 58, 0.35);
        box-shadow: 0 0 0 5px rgba(18, 99, 58, 0.08);
    }

    .error {
        margin-top: 12px;
        background: #fef2f2;
        border: 1px solid rgba(239, 68, 68, 0.25);
        color: #991b1b;
        border-radius: 14px;
        padding: 10px 12px;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .login-btn {
        margin-top: 18px;
        width: 100%;
        height: 52px;
        border-radius: 18px;
        background: linear-gradient(135deg, var(--primary), var(--primary-strong));
        color: white;
        font-weight: 800;
        font-size: 1rem;
        box-shadow: 0 16px 32px rgba(18, 99, 58, 0.24);
    }
    .login-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 20px 38px rgba(18, 99, 58, 0.28);
    }
    .login-btn:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }
</style>

