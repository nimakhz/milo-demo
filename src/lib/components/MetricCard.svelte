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
        background: var(--bg-secondary);
        padding: 20px;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .metric-header span {
        font-weight: 600;
        color: var(--text-muted);
    }

    .metric-icon {
        width: 36px;
        height: 36px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* رنگ‌بندی‌های مختلف برای آیکون‌ها */
    .weight-bg { background: #dcfce7; color: #15803d; }
    .height-bg { background: #fef9c3; color: #a16207; }
    .utensils-bg { background: #f0fdf4; color: #15803d; }
    .zap-bg { background: #eff6ff; color: #1d4ed8; }

    .metric-value {
        display: flex;
        align-items: baseline;
        gap: 4px;
    }

    .metric-value .value {
        font-size: 1.6rem;
        font-weight: 900;
    }

    .metric-value .unit {
        font-size: 0.9rem;
        color: var(--text-muted);
        font-weight: 500;
    }
</style>
