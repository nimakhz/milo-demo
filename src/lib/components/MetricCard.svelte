<script>
    /**
     * @file MetricCard.svelte
     * @description کارتی برای نمایش شاخص‌های عددی (مثل وزن، قد، کالری).
     */
    import Icon from "./Icon.svelte";

    export let label = "";      // عنوان شاخص (مثلاً 'وزن')
    export let value = "";      // مقدار شاخص
    export let unit = "";       // واحد شاخص (مثلاً 'کیلوگرم')
    export let iconName = "";   // نام آیکون مورد نظر
    export let iconVariant = "default"; // واریانت رنگی برای آیکون
</script>

<div class="metric-card">
    <div class="metric-header flex-between">
        <span>{label}</span>
        <div class="metric-icon {iconVariant}-bg">
            <Icon name={iconName} size={18} />
        </div>
    </div>
    <div class="metric-value">
        <span class="value">{value}</span>
        <span class="unit">{unit}</span>
    </div>
</div>

<style>
    .metric-card {
        background: linear-gradient(180deg, rgba(255,255,255,0.88), rgba(238,244,234,0.76));
        padding: 20px;
        border-radius: var(--radius-lg);
        display: flex;
        flex-direction: column;
        gap: 15px;
        border: 1px solid rgba(255, 255, 255, 0.76);
        box-shadow: var(--shadow-soft);
    }

    .metric-header span {
        font-weight: 600;
        color: var(--text-muted);
    }

    .metric-icon {
        width: 36px;
        height: 36px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.52);
    }

    /* رنگ‌بندی‌های مختلف برای آیکون‌ها */
    .weight-bg { background: var(--primary-soft); color: var(--primary); }
    .height-bg { background: #fef3c7; color: #a16207; }
    .utensils-bg { background: var(--primary-light); color: var(--primary); }
    .zap-bg { background: #e0f2fe; color: #0369a1; }

    .metric-value {
        display: flex;
        align-items: baseline;
        gap: 4px;
    }

    .metric-value .value {
        font-size: 1.6rem;
        font-weight: 900;
        letter-spacing: -0.04em;
    }

    .metric-value .unit {
        font-size: 0.9rem;
        color: var(--text-muted);
        font-weight: 500;
    }
</style>
