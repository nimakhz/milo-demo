<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    
    onMount(() => {
        const basePath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
        goto(basePath ? `${basePath}/login` : "/login");
    });
</script>
