<script>
    /**
     * @file Tag.svelte
     * @description یک جزء رابط کاربری کوچک برای نمایش تگ‌ها (مانند رژیم‌های غذایی).
     */
    import Icon from "./Icon.svelte";

    export let label = "";
    export let isAction = false; // اگر دکمه باشد (مثل دکمه افزودن)
</script>

{#if isAction}
    <button class="tag add-tag" on:click>
        <Icon name="plus" size={16} />
        {label}
    </button>
{:else}
    <span class="tag">{label}</span>
{/if}

<style>
    .tag {
        background: white;
        border: 1px solid #f3f4f6;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 2px 5px rgba(0,0,0,0.03);
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    .add-tag {
        background: var(--bg-secondary);
        color: var(--text-muted);
        border: none;
        cursor: pointer;
    }
</style>
