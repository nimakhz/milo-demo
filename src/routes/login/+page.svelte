<script>
    import { goto } from "$app/navigation";
    import AppLogo from "$lib/components/AppLogo.svelte";
    import LoginForm from "$lib/components/LoginForm.svelte";

    function onSuccess() {
        const basePath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
        goto(basePath ? `${basePath}/chat` : "/chat");
    }
</script>

<div class="login-page fade-in">
    <div class="header">
        <AppLogo />
    </div>

    <LoginForm on:success={onSuccess} />
</div>

<style>
    .login-page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 18px;
        padding: 20px;
        background: #fcfcfc;
    }

    .header {
        display: flex;
        justify-content: center;
        margin-bottom: 4px;
    }
</style>

