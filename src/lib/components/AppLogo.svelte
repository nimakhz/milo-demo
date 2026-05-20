<div class="logo-container flex-center">
    <span class="logo-text">Milo</span>
    <div class="logo-icon flex-center" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 15 5 15 8C15 11 12 14 12 14C12 14 9 11 9 8C9 5 12 2 12 2Z" fill="#156b3e"/>
            <path d="M12 22C12 22 19 19 19 12C19 5 12 2 12 2C12 2 5 5 5 12C5 19 12 22 12 22Z" stroke="#156b3e" stroke-width="2"/>
        </svg>
    </div>
</div>

<style>
    .logo-container {
        gap: 9px;
        width: fit-content;
        padding: 7px 11px 7px 14px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.68);
        border: 1px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 10px 24px rgba(18, 99, 58, 0.08);
        backdrop-filter: blur(14px);
    }

    .logo-text {
        font-size: 1.45rem;
        font-weight: 900;
        letter-spacing: -0.04em;
        color: var(--primary-strong);
    }

    .logo-icon {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: linear-gradient(145deg, var(--primary), var(--success));
        box-shadow: 0 10px 22px rgba(18, 99, 58, 0.24);
    }

    .logo-icon :global(path) {
        fill: white;
        stroke: white;
    }
</style>

