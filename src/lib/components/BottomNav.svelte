<script>
    /**
     * @file BottomNav.svelte
     * @description منوی ناوبری شناور در پایین صفحه. 
     * این کامپوننت مدیریت جابجایی بین بخش‌های اصلی اپلیکیشن را بر عهده دارد.
     */
    import Icon from "./Icon.svelte";
    
    export let activeTab = "/";

    // لیست آیتم‌های منو شامل مسیر و آیکون مربوطه
    const navItems = [
        { id: "chat", icon: "chat", label: "گفتگو", path: "/chat" },
        { id: "history", icon: "history", label: "تاریخچه", path: "/history" },
        { id: "profile", icon: "user", label: "پروفایل", path: "/profile" }
    ];

    // Base path (GitHub Pages serves under /<repo>/)
    const basePath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

    const withBase = (p) => (basePath ? `${basePath}${p}` : p);

    // تشخیص تب فعال فعلی برای اعمال استایل‌های های‌لایت
    $: currentTab = activeTab === withBase("/") ? withBase("/profile") : activeTab;
</script>

<nav class="bottom-nav">
    <div class="nav-content">
        {#each navItems as item}
            <a 
                href={withBase(item.path)} 
                class="nav-item" 
                class:active={currentTab.includes(withBase(item.path))}
            >
                <Icon name={item.icon} size={24} />
                <span>{item.label}</span>
            </a>
        {/each}
    </div>
</nav>

<style>
    .bottom-nav {
        position: fixed;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 32px);
        max-width: 448px;
        background: rgba(255, 255, 255, 0.82);
        backdrop-filter: blur(22px);
        border-radius: 32px;
        padding: 9px;
        box-shadow: 0 22px 48px rgba(20, 32, 25, 0.16);
        z-index: 1000;
        border: 1px solid rgba(255, 255, 255, 0.78);
    }

    .nav-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--text-muted);
        gap: 5px;
        flex: 1;
        min-height: 58px;
        justify-content: center;
        border-radius: 24px;
        transition: all 0.28s var(--ease-smooth);
        font-size: 0.75rem;
        font-weight: 700;
    }

    .nav-item.active {
        color: var(--primary-strong);
        background: linear-gradient(180deg, var(--primary-light), rgba(223, 245, 233, 0.58));
        box-shadow: inset 0 0 0 1px rgba(18, 99, 58, 0.08);
    }

    .nav-item.active :global(svg) {
        transform: translateY(-1px) scale(1.08);
        fill: rgba(18, 99, 58, 0.12);
    }

    span {
        opacity: 0.8;
    }

    .nav-item.active span {
        opacity: 1;
        font-weight: 700;
    }
</style>
