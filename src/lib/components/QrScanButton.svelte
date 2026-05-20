<script>
    import Icon from "$lib/components/Icon.svelte";

    export let ariaLabel = "اسکن QR";
    export let onClick = () => {};
    export let size = 24;
</script>

<button class="icon-btn qr-scan-btn" aria-label={ariaLabel} on:click={onClick}>
    <Icon name="qr" size={size} color="#12633a" />
</button>

<style>
    .icon-btn { background: none; padding: 8px; }

    .qr-scan-btn {
        background: rgba(237, 249, 241, 0.9);
        border: 1px solid rgba(18, 99, 58, 0.14);
        border-radius: 16px;
        padding: 10px;
        box-shadow: 0 10px 22px rgba(18, 99, 58, 0.08);
    }

    .qr-scan-btn:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }
</style>
