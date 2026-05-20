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
        background: rgba(255, 255, 255, 0.82);
        border: 1px solid rgba(255, 255, 255, 0.72);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 8px 18px rgba(20, 32, 25, 0.06);
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--text-main);
    }

    .add-tag {
        background: var(--primary-light);
        color: var(--primary);
        border: 1px dashed rgba(18, 99, 58, 0.22);
        cursor: pointer;
    }
</style>
