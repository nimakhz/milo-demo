<script>
    /**
     * @file +page.svelte (Profile)
     * @description صفحه پروفایل کاربر شامل آمار حیاتی، اهداف کالری و ترجیحات غذایی.
     */
    import Icon from "$lib/components/Icon.svelte";
    import MetricCard from "$lib/components/MetricCard.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import ProfileHeader from "$lib/components/ProfileHeader.svelte";
    import { userProfile, toPersianDigits } from "$lib/stores/userStore";

    // محاسبات کالری باقیمانده و درصد پیشرفت
    $: remaining = $userProfile.calorieGoal - $userProfile.consumed;
    $: progress = ($userProfile.consumed / $userProfile.calorieGoal) * 100;
</script>

<div class="profile-page fade-in">
    <!-- هدر صفحه شامل دکمه اعلان‌ها -->
    <header class="flex-between">
        <div class="header-left">
            <span class="greeting">صبح بخیر،</span>
            <div class="date-container">
                <span class="date">{toPersianDigits("۲")} آبان</span>
            </div>
        </div>
        <button class="icon-btn" aria-label="Notifications">
            <Icon name="bell" size={24} />
            <div class="notification-dot"></div>
        </button>
    </header>

    <!-- بخش اطلاعات اصلی پروفایل -->
    <ProfileHeader 
        name={$userProfile.name} 
        bio={$userProfile.bio} 
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Elena" 
    />

    <!-- نمایش شاخص‌های فیزیکی (وزن و قد) -->
    <section class="metrics-grid">
        <MetricCard 
            label="وزن" 
            value={toPersianDigits($userProfile.weight)} 
            unit="کیلوگرم" 
            iconName="scale" 
            iconVariant="weight" 
        />
        <MetricCard 
            label="قد" 
            value={toPersianDigits($userProfile.height)} 
            unit="سانتی‌متر" 
            iconName="ruler" 
            iconVariant="height" 
        />
    </section>

    <!-- بخش مدیریت کالری روزانه -->
    <section class="calorie-goal premium-card">
        <div class="goal-info flex-between">
            <div class="goal-text">
                <span class="label">هدف کالری روزانه</span>
                <div class="goal-value">
                    <span class="unit">kcal</span>
                    <span class="value">{toPersianDigits($userProfile.calorieGoal.toLocaleString())}</span>
                </div>
            </div>
            <div class="goal-icon-bg">
                <Icon name="flame" size={24} color="#FB923C" />
            </div>
        </div>

        <!-- نوار پیشرفت کالری -->
        <div class="progress-container">
            <div class="progress-bar">
                <div class="progress-fill" style="width: {progress}%"></div>
            </div>
            <div class="progress-labels flex-between">
                <span>{toPersianDigits($userProfile.consumed.toLocaleString())} مصرف شده</span>
                <span>{toPersianDigits(remaining.toLocaleString())} باقیمانده</span>
            </div>
        </div>
        
        <div class="goal-settings">
            <Icon name="settings" size={20} color="#666" />
        </div>
    </section>

    <!-- بخش ترجیحات و رژیم‌های غذایی -->
    <section class="diet-preferences">
        <h2 class="section-title">ترجیحات غذایی شما</h2>
        <div class="tags-container">
            {#each $userProfile.dietTags as tag}
                <Tag label={tag} />
            {/each}
            <Tag label="افزودن" isAction={true} />
        </div>
    </section>
</div>

<style>
    .profile-page {
        padding: 20px 18px 120px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        background:
            radial-gradient(circle at top left, rgba(34, 197, 94, 0.14), transparent 14rem),
            linear-gradient(180deg, rgba(255,255,255,0.7), rgba(245,247,239,0.72));
    }

    header { margin-bottom: 10px; }
    .greeting { color: var(--text-muted); font-weight: 500; font-size: 0.95rem; }
    .date { font-weight: 800; font-size: 1.2rem; color: var(--text-main); }
    .icon-btn {
        background: rgba(255,255,255,0.74);
        position: relative;
        padding: 10px;
        border-radius: 16px;
        box-shadow: 0 10px 24px rgba(20, 32, 25, 0.08);
    }
    .notification-dot {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 10px;
        height: 10px;
        background: var(--danger);
        border-radius: 50%;
        border: 2px solid var(--bg-main);
    }

    .metrics-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }

    .calorie-goal {
        position: relative;
        padding: 25px;
        overflow: hidden;
    }

    .calorie-goal::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top left, rgba(245, 158, 11, 0.14), transparent 15rem);
        pointer-events: none;
    }

    .goal-value { display: flex; align-items: baseline; gap: 4px; margin-top: 5px; }
    .goal-value .value { font-size: 1.9rem; font-weight: 900; letter-spacing: -0.04em; }
    .goal-value .unit { font-size: 0.9rem; color: var(--text-muted); font-weight: 600; }
    .goal-icon-bg {
        width: 50px;
        height: 50px;
        background: var(--accent-soft);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .progress-container { margin-top: 25px; }
    .progress-bar {
        height: 12px;
        background: rgba(18, 99, 58, 0.08);
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .progress-fill {
        height: 100%;
        background: linear-gradient(to left, var(--primary), var(--success));
        border-radius: 6px;
        transition: width 0.5s ease-out;
    }
    .progress-labels { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; }

    .goal-settings {
        position: absolute;
        top: 20px;
        right: 20px;
        opacity: 0.6;
        cursor: pointer;
    }

    .section-title {
        font-size: 1.1rem;
        font-weight: 800;
        margin-bottom: 15px;
        color: var(--text-main);
    }

    .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>
