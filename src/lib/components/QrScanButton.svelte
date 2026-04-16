<script>
    import Icon from "$lib/components/Icon.svelte";

    export let ariaLabel = "اسکن QR";
    export let onClick = () => {};
    export let size = 24;
</script>

<button class="icon-btn qr-scan-btn" aria-label={ariaLabel} on:click={onClick}>
    <Icon name="qr" size={size} color="#156b3e" />
</button>

<style>
    .icon-btn { background: none; padding: 8px; }

    .qr-scan-btn {
        background: var(--primary-light);
        border: 1px solid rgba(21, 107, 62, 0.15);
        border-radius: 14px;
        padding: 10px;
    }

    .qr-scan-btn:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }
</style>
