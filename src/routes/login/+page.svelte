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
    <div class="orb orb-green" aria-hidden="true"></div>
    <div class="orb orb-amber" aria-hidden="true"></div>

    <div class="header">
        <AppLogo />
        <p>راهنمای هوشمند تغذیه برای انتخاب‌های روزانه بهتر</p>
    </div>

    <LoginForm on:success={onSuccess} />
</div>

<style>
    .login-page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        padding: 28px 20px;
        background:
            linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0.78)),
            radial-gradient(circle at 12% 18%, rgba(245, 158, 11, 0.16), transparent 15rem),
            radial-gradient(circle at 88% 12%, rgba(34, 197, 94, 0.2), transparent 16rem);
        position: relative;
        overflow: hidden;
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        text-align: center;
        position: relative;
        z-index: 1;
    }

    .header p {
        max-width: 280px;
        color: var(--text-muted);
        font-weight: 700;
        line-height: 1.8;
    }

    .orb {
        position: absolute;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        filter: blur(14px);
        opacity: 0.72;
        pointer-events: none;
    }

    .orb-green {
        top: -54px;
        right: -64px;
        background: rgba(34, 197, 94, 0.18);
    }

    .orb-amber {
        bottom: 8%;
        left: -86px;
        background: rgba(245, 158, 11, 0.16);
    }
</style>

