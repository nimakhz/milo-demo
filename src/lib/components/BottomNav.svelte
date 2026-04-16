<script>
    /**
     * @file BottomNav.svelte
     * @description منوی ناوبری شناور در پایین صفحه. 
     * این کامپوننت مدیریت جابجایی بین بخش‌های اصلی اپلیکیشن را بر عهده دارد.
     */
    import Icon from "./Icon.svelte";
    import { base } from "$app/paths";
    
    export let activeTab = "/";

    // لیست آیتم‌های منو شامل مسیر و آیکون مربوطه
    const navItems = [
        { id: "chat", icon: "chat", label: "گفتگو", path: "/chat" },
        { id: "history", icon: "history", label: "تاریخچه", path: "/history" },
        { id: "profile", icon: "user", label: "پروفایل", path: "/profile" }
    ];

    // تشخیص تب فعال فعلی برای اعمال استایل‌های های‌لایت
    $: currentTab = activeTab === `${base}/` ? `${base}/profile` : activeTab;
</script>

<nav class="bottom-nav">
    <div class="nav-content">
        {#each navItems as item}
            <a 
                href={`${base}${item.path}`} 
                class="nav-item" 
                class:active={currentTab.includes(`${base}${item.path}`)}
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
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 40px);
        max-width: 440px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 30px;
        padding: 10px 0;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .nav-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--text-muted);
        gap: 4px;
        flex: 1;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 0.75rem;
        font-weight: 500;
    }

    .nav-item.active {
        color: var(--primary);
    }

    .nav-item.active :global(svg) {
        transform: scale(1.1);
        fill: var(--primary-light);
    }

    span {
        opacity: 0.8;
    }

    .nav-item.active span {
        opacity: 1;
        font-weight: 700;
    }
</style>
