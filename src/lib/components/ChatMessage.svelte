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
        background: #4ade80;
        flex-shrink: 0;
    }

    .user-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        background: #eee;
        flex-shrink: 0;
    }

    .user-avatar img { width: 100%; height: 100%; }

    .message-bubble {
        padding: 16px;
        border-radius: 20px;
        position: relative;
        font-size: 0.95rem;
        font-weight: 500;
        line-height: 1.6;
    }

    .bot .message-bubble {
        background: #f1f5f1;
        color: var(--text-main);
        border-bottom-right-radius: 4px;
    }

    .user .message-bubble {
        background: var(--primary);
        color: white;
        border-bottom-left-radius: 4px;
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
