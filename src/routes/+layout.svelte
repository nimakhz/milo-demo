<script>
    import "../app.css";
    import BottomNav from "$lib/components/BottomNav.svelte";
    import { page } from "$app/stores";

    $: isLoginRoute = $page.url.pathname === "/login";
</script>

<div class="app-container">
    <main>
        <slot />
    </main>

    {#if !isLoginRoute}
        <BottomNav activeTab={$page.url.pathname} />
    {/if}
</div>

<style>
    .app-container {
        max-width: 480px;
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding-bottom: 90px; /* Space for BottomNav */
        position: relative;
        background: linear-gradient(180deg, rgba(255,255,255,0.62), rgba(255,255,255,0.24));
        box-shadow: 0 0 0 1px rgba(18, 99, 58, 0.05), 0 28px 80px rgba(20, 32, 25, 0.08);
        overflow: hidden;
    }

    main {
        flex: 1;
        width: 100%;
    }
</style>
