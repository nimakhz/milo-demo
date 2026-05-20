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
        border-radius: 18px;
        border: 1px solid rgba(255, 255, 255, 0.72);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
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
        box-shadow: 0 14px 32px rgba(20, 32, 25, 0.1);
    }

    .suggestion-image {
        position: relative;
        height: 150px;
    }

    .suggestion-image img { width: 100%; height: 100%; object-fit: cover; }

    .suggestion-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 45%, rgba(0, 0, 0, 0.28));
    }

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
        z-index: 1;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
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
