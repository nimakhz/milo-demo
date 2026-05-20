<script>
    /**
     * @file ProfileHeader.svelte
     * @description بخش بالایی صفحه پروفایل شامل تصویر آواتار و اطلاعات پایه کاربر.
     */
    import Icon from "./Icon.svelte";

    export let name = "";
    export let bio = "";
    export let avatarUrl = "";
</script>

<section class="profile-header">
    <div class="avatar-container">
        <div class="avatar-ring">
            <img src={avatarUrl} alt="Avatar" />
        </div>
        <button class="edit-btn">
            <Icon name="pencil" size={14} color="white" />
        </button>
    </div>
    <h1>{name}</h1>
    <p class="bio">{bio}</p>
    <button class="btn-primary">ویرایش پروفایل</button>
</section>

<style>
    .profile-header {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 26px 18px 24px;
        border-radius: 34px;
        background:
            radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.14), transparent 11rem),
            rgba(255, 255, 255, 0.68);
        border: 1px solid rgba(255, 255, 255, 0.74);
        box-shadow: var(--shadow-soft);
    }

    .avatar-container {
        position: relative;
        margin-bottom: 10px;
    }

    .avatar-ring {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        padding: 5px;
        background: linear-gradient(135deg, var(--primary), var(--success), var(--accent));
        box-shadow: 0 18px 38px rgba(18, 99, 58, 0.2);
    }

    .avatar-ring img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: white;
        object-fit: cover;
    }

    .edit-btn {
        position: absolute;
        bottom: 5px;
        right: 5px;
        background: linear-gradient(135deg, var(--primary), var(--primary-strong));
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid var(--bg-main);
    }

    h1 {
        font-size: 1.8rem;
        font-weight: 900;
        color: var(--text-main);
    }

    .bio {
        color: var(--text-muted);
        font-weight: 500;
    }

    .btn-primary {
        background: var(--primary);
        color: white;
        padding: 12px 40px;
        border-radius: 30px;
        font-weight: 800;
        font-size: 1rem;
        margin-top: 10px;
        box-shadow: 0 14px 30px rgba(18, 99, 58, 0.22);
    }
</style>
