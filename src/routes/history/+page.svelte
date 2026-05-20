<script>
    /**
     * @file +page.svelte (History)
     * @description صفحه تاریخچه مصرف غذا شامل آمار هفتگی و تایم‌لاین روزانه وعده‌های میل شده.
     */
    import Icon from "$lib/components/Icon.svelte";
    import MetricCard from "$lib/components/MetricCard.svelte";
    import MealCard from "$lib/components/MealCard.svelte";
    import { mealHistory, toPersianDigits } from "$lib/stores/userStore";
</script>

<div class="history-page fade-in">
    <!-- هدر صفحه شامل دکمه تقویم -->
    <header class="flex-between">
        <div class="header-content">
            <h1>تاریخچه تغذیه</h1>
            <div class="subtitle flex-center">
                <span>هفته جاری</span>
            </div>
        </div>
        <button class="icon-btn" aria-label="Select Date">
            <Icon name="calendar" size={24} />
        </button>
    </header>

    <!-- خلاصه آمار هفتگی -->
    <div class="summary-stats">
        <MetricCard 
            label="وعده‌های آگاهانه" 
            value={toPersianDigits(42)} 
            iconName="utensils" 
            iconVariant="utensils" 
        />
        <MetricCard 
            label="میانگین کالری روزانه" 
            value={toPersianDigits("2,150")} 
            iconName="zap" 
            iconVariant="zap" 
        />
    </div>

    <!-- تایم‌لاین وعده‌های غذایی -->
    <section class="timeline-container">
        <div class="section-header flex-between">
            <h2 class="section-title">وعده‌های اخیر</h2>
            <button class="text-btn">مشاهده همه</button>
        </div>

        <div class="timeline">
            {#each $mealHistory as day}
                <div class="timeline-day">
                    <div class="day-marker">
                        <div class="dot" class:active={day.active}></div>
                        <div class="line"></div>
                    </div>
                    
                    <div class="day-content">
                        <h3 class="day-date">{day.date}</h3>
                        <div class="meals-list">
                            {#each day.meals as meal}
                                <MealCard {meal} />
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</div>

<style>
    .history-page {
        padding: 20px 18px 120px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        background:
            radial-gradient(circle at top right, rgba(245, 158, 11, 0.12), transparent 15rem),
            linear-gradient(180deg, rgba(255,255,255,0.7), rgba(245,247,239,0.72));
    }

    header { margin-bottom: 10px; }
    h1 { font-size: 1.62rem; font-weight: 900; color: var(--text-main); letter-spacing: -0.04em; }
    .subtitle {
        color: var(--primary);
        font-weight: 700;
        font-size: 0.85rem;
        background: var(--primary-light);
        padding: 4px 12px;
        border-radius: 20px;
        width: fit-content;
        margin-top: 4px;
    }

    .icon-btn {
        background: rgba(255,255,255,0.74);
        padding: 10px;
        border-radius: 16px;
        box-shadow: 0 10px 24px rgba(20, 32, 25, 0.08);
    }

    .summary-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    .section-header { margin: 10px 0; }
    .section-title { font-size: 1.2rem; font-weight: 800; }
    .text-btn {
        background: var(--primary-light);
        color: var(--primary);
        font-weight: 800;
        font-size: 0.9rem;
        border-radius: 999px;
        padding: 6px 12px;
    }

    .timeline {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    .timeline-day {
        display: flex;
        gap: 20px;
    }

    .day-marker {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 12px;
    }

    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(18, 99, 58, 0.16);
        z-index: 2;
        margin-top: 6px;
    }

    .dot.active {
        background: var(--primary);
        box-shadow: 0 0 0 5px rgba(18, 99, 58, 0.12);
    }

    .line {
        flex: 1;
        width: 2px;
        background: rgba(18, 99, 58, 0.1);
        margin: 4px 0;
    }

    .day-content {
        flex: 1;
        padding-bottom: 30px;
    }

    .day-date {
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 15px;
        color: var(--text-main);
    }

    .meals-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
</style>
