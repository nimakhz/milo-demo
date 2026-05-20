<script>
    /**
     * @file ChatMessage.svelte
     * @description یک حباب پیام در چت، شامل متن پیام و آواتار فرستنده.
     */
    import Icon from "./Icon.svelte";
    import RichCard from "./RichCard.svelte";

    export let role = "bot"; // 'bot' یا 'user'
    export let text = "";    // متن اصلی پیام
    export let time = "";    // زمان ارسال پیام
    export let richCards = []; // کارت‌های غنی اختیاری (فقط برای بات)
    export let userAvatar = ""; // تصویر آواتار کاربر
</script>

<div class="message-wrapper {role}">
    {#if role === 'bot'}
        <div class="bot-avatar flex-center">
            <Icon name="sparkles" size={16} color="white" fill="white" />
        </div>
    {/if}
    
    <div class="message-bubble">
        <p>{text}</p>
        
        {#if richCards && richCards.length > 0}
            <div class="rich-cards" role="list">
                {#each richCards as card}
                    <RichCard {card} />
                {/each}
            </div>
        {/if}
        
        <span class="time">{time}</span>
    </div>

    {#if role === 'user'}
         <div class="user-avatar">
            <img src={userAvatar} alt="کاربر" />
        </div>
    {/if}
</div>

<style>
    .message-wrapper {
        display: flex;
        gap: 12px;
        max-width: 85%;
        align-items: flex-end;
    }

    .message-wrapper.bot { align-self: flex-start; }
    .message-wrapper.user { align-self: flex-end; flex-direction: row-reverse; }

    .bot-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary), var(--success));
        box-shadow: 0 10px 22px rgba(18, 99, 58, 0.2);
        flex-shrink: 0;
    }

    .user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        background: var(--bg-secondary);
        box-shadow: 0 8px 18px rgba(20, 32, 25, 0.08);
        flex-shrink: 0;
    }

    .user-avatar img { width: 100%; height: 100%; }

    .message-bubble {
        padding: 16px;
        border-radius: 22px;
        position: relative;
        font-size: 0.95rem;
        font-weight: 500;
        line-height: 1.6;
        box-shadow: 0 10px 26px rgba(20, 32, 25, 0.07);
    }

    .bot .message-bubble {
        background: rgba(255, 255, 255, 0.86);
        color: var(--text-main);
        border-bottom-right-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.82);
    }

    .user .message-bubble {
        background: linear-gradient(135deg, var(--primary), var(--primary-strong));
        color: white;
        border-bottom-left-radius: 4px;
        box-shadow: 0 14px 30px rgba(18, 99, 58, 0.2);
    }

    .time {
        display: block;
        font-size: 0.7rem;
        margin-top: 8px;
        opacity: 0.6;
    }

    .rich-cards {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 15px;
    }
</style>
