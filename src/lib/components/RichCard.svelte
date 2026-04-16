<script>
    /**
     * @file RichCard.svelte
     * @description کارتهای غنی که در پیام‌های بات برای نمایش اطلاعات یا پیشنهادات استفاده می‌شوند.
     */
    import Icon from "./Icon.svelte";

    export let card = {}; // شیء حاوی اطلاعات کارت (عنوان، متن، آیکون و ...)
</script>

{#if card.type === 'info'}
    <div class="info-card" style="background: {card.color.split('-')[0]}">
        <div class="card-header">
            <Icon 
                name={card.title === 'چربی‌های سالم' ? 'droplet' : 'circle'} 
                size={16} 
                color={card.iconColor} 
                fill={card.iconColor} 
            />
            <h4>{card.title}</h4>
        </div>
        <p>{card.desc}</p>
    </div>
{:else if card.type === 'suggestion'}
    <div class="suggestion-card premium-card">
        <div class="suggestion-image">
            <img src={card.image} alt={card.title} />
            <div class="suggestion-tag">پیشنهادی</div>
        </div>
        <p class="suggestion-footer">"{card.footer}"</p>
    </div>
{/if}

<style>
    .info-card {
        padding: 15px;
        border-radius: 15px;
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
    }

    .card-header h4 {
        font-size: 0.9rem;
        font-weight: 800;
        margin: 0;
    }

    .info-card p {
        font-size: 0.8rem;
        margin: 0;
        opacity: 0.8;
    }

    .suggestion-card {
        padding: 0;
        overflow: hidden;
        background: white;
    }

    .suggestion-image {
        position: relative;
        height: 150px;
    }

    .suggestion-image img { width: 100%; height: 100%; object-fit: cover; }

    .suggestion-tag {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: white;
        padding: 4px 12px;
        border-radius: 8px;
        font-size: 0.75rem;
        font-weight: 800;
        color: var(--text-main);
    }

    .suggestion-footer {
        padding: 12px;
        font-style: italic;
        font-size: 0.85rem;
        opacity: 0.8;
        text-align: center;
        margin: 0;
    }
</style>
