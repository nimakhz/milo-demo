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
    }

    main {
        flex: 1;
        width: 100%;
    }
</style>
