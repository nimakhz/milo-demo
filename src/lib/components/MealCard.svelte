<script>
    /**
     * @file MealCard.svelte
     * @description کارتی برای نمایش یک وعده غذایی در تایم‌لاین تاریخچه.
     */
    import Icon from "./Icon.svelte";
    import { toPersianDigits } from "../stores/userStore";

    export let meal = {};
</script>

<div class="meal-card premium-card">
    <div class="meal-image">
        <img src={meal.image} alt={meal.title} />
        <div class="meal-time">
            <Icon name="clock" size={12} />
            <span>{meal.time}</span>
        </div>
    </div>
    <div class="meal-content">
        <h3>{meal.title}</h3>
        <div class="meal-location">
            <Icon name="mapPin" size={12} />
            <span>{meal.location}</span>
        </div>
        <div class="meal-macros">
            <div class="macro">
                <span class="macro-label">کالری</span>
                <div class="macro-value">
                    <span class="val">kcal {toPersianDigits(meal.calories)}</span>
                </div>
            </div>
            <div class="macro">
                <span class="macro-label">پروتئین</span>
                <div class="macro-value">
                    <span class="val">{toPersianDigits(meal.protein)} گرم</span>
                </div>
            </div>
            {#if meal.fiber}
                <div class="macro">
                    <span class="macro-label">فیبر</span>
                    <div class="macro-value">
                        <span class="val">{toPersianDigits(meal.fiber)} گرم</span>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .meal-card {
        display: flex;
        padding: 0;
        overflow: hidden;
        border-radius: 25px;
        background: var(--bg-card);
        box-shadow: var(--shadow-soft);
        border: 1px solid rgba(0, 0, 0, 0.02);
    }

    .meal-image {
        width: 120px;
        position: relative;
    }

    .meal-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .meal-time {
        position: absolute;
        bottom: 10px;
        left: 10px;
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(4px);
        padding: 4px 8px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 0.7rem;
        font-weight: 700;
    }

    .meal-content {
        flex: 1;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .meal-content h3 {
        font-size: 1rem;
        font-weight: 800;
        margin: 0;
    }

    .meal-location {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--text-muted);
        font-size: 0.8rem;
        font-weight: 500;
    }

    .meal-macros {
        display: flex;
        gap: 15px;
        margin-top: 5px;
    }

    .macro {
        display: flex;
        flex-direction: column;
    }

    .macro-label {
        font-size: 0.65rem;
        color: var(--text-muted);
        font-weight: 600;
    }

    .val {
        font-size: 0.85rem;
        font-weight: 800;
    }
</style>
