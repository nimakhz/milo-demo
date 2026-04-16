<script>
    /**
     * @file +page.svelte (Chat)
     * @description رابط کاربری گفتگو با کیندبات (Kindbat AI).
     * این صفحه شامل نمایش پیام‌ها، کارت‌های غنی و بخش ورودی پیام است.
     */
    import Icon from "$lib/components/Icon.svelte";
    import ChatMessage from "$lib/components/ChatMessage.svelte";
    import AppLogo from "$lib/components/AppLogo.svelte";
    import QrScanButton from "$lib/components/QrScanButton.svelte";
    import { toPersianDigits } from "$lib/stores/userStore";
    import { onMount } from "svelte";

    // پیام‌های اولیه گفتگو (Mock Data)
    let messages = [
        {
            id: 1,
            role: "bot",
            text: "سلام! من کیندبات هستم، همراه تغذیه شما. چطور می‌توانم امروز به تغذیه بدن شما کمک کنم؟ آیا به دنبال ایده‌ای برای ناهار هستید؟",
            time: "۰۹:۱۲ ق.ظ"
        },
        {
            id: 2,
            role: "user",
            text: "سلام کیندبات! دارم بین یک کاسه کینوآ مدیترانه‌ای یا رپ مرغ گریل شده برای ناهار تصمیم می‌گیرم. کدام یک برای حفظ انرژی در طول بعد از ظهر بهتر است؟",
            time: "۰۹:۱۴ ق.ظ"
        },
        {
            id: 3,
            role: "bot",
            text: "هر دو گزینه عالی هستند، اما برای انرژی پایدار، من کاسه کینوآ مدیترانه‌ای را پیشنهاد می‌کنم. به این دلایل:",
            time: "۰۹:۱۵ ق.ظ",
            richCards: [
                {
                    type: "info",
                    title: "کربوهیدرات‌های پیچیده",
                    desc: "کینوآ گلوکز را به آرامی آزاد می‌کند و از افت انرژی بعد از ظهر جلوگیری می‌کند.",
                    color: "#f0fdf4-dot",
                    iconColor: "#15803d"
                },
                {
                    type: "info",
                    title: "چربی‌های سالم",
                    desc: "روغن زیتون و پنیر فتا باعث سیری بیشتر و جذب بهتر مواد مغذی می‌شوند.",
                    color: "#fff7ed-dot",
                    iconColor: "#c2410c"
                },
                {
                    type: "suggestion",
                    title: "پیشنهادی",
                    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=400&q=80",
                    footer: "ذهنی شاداب با یک ناهار سبک و مغذی آغاز می‌شود."
                }
            ]
        }
    ];

    let newMessage = "";
    let chatContainer;

    // متد اسکرول به انتهای لیست پیام‌ها
    function scrollToBottom() {
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }

    onMount(scrollToBottom);

    /**
     * ارسال پیام جدید کاربر و شبیه‌سازی پاسخ بات
     */
    function sendMessage() {
        if (!newMessage.trim()) return;
        
        // اضافه کردن پیام کاربر
        messages = [...messages, {
            id: Date.now(),
            role: "user",
            text: newMessage,
            time: toPersianDigits(new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }))
        }];
        
        newMessage = "";
        setTimeout(scrollToBottom, 50);
        
        // شبیه‌سازی تفکر و پاسخ بات (Bot Thinking Simulator)
        setTimeout(() => {
            messages = [...messages, {
                id: Date.now() + 1,
                role: "bot",
                text: "در حال بررسی موجودی آشپزخانه شما و پیشنهاد بهترین دستور غذا...",
                time: toPersianDigits(new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }))
            }];
            setTimeout(scrollToBottom, 50);
        }, 1000);
    }

    function openQrScanner() {
        // فعلا فقط ظاهر دکمه درست می‌شود.
        // TODO: پیاده‌سازی اسکن QR (بعدا)
        console.log("QR scanner not implemented yet");
    }
</script>

<div class="chat-page">
    <!-- هدر صفحه گفتگو -->
    <header class="flex-between">
        <AppLogo />
        <QrScanButton onClick={openQrScanner} />
    </header>

    <div class="chat-meta">
        <h1>گفتگوی تغذیه</h1>
        <p>در حال گفتگو با <span>کیندبات</span></p>
    </div>

    <!-- محفظه پیام‌ها با اسکرول خودکار -->
    <div class="messages-container" bind:this={chatContainer}>
        {#each messages as msg}
            <ChatMessage 
                role={msg.role} 
                text={msg.text} 
                time={msg.time} 
                richCards={msg.richCards} 
                userAvatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
            />
        {/each}
    </div>

    <!-- بخش ورودی پیام کاربر -->
    <div class="input-area">
        <div class="input-wrapper">
            <button class="add-btn flex-center" aria-label="Add attachment">
                <Icon name="plus" size={24} />
            </button>
            <input 
                type="text" 
                placeholder="سوال خود را بپرسید..." 
                bind:value={newMessage}
                on:keydown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button class="send-btn flex-center" on:click={sendMessage} aria-label="Send message">
                <Icon name="send" size={20} color="white" fill="white" />
            </button>
        </div>
    </div>
</div>

<style>
    .chat-page {
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 20px;
        background: #fcfcfc;
    }

    .chat-meta { margin: 10px 0 20px; }
    .chat-meta h1 { font-size: 1.6rem; font-weight: 900; color: var(--text-main); }
    .chat-meta p { color: var(--text-muted); font-weight: 500; }
    .chat-meta span { color: var(--primary); font-weight: 700; }

    .messages-container {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding-bottom: 110px;
        mask-image: linear-gradient(to bottom, transparent, black 1%, black 95%, transparent);
    }

    .messages-container::-webkit-scrollbar { display: none; }

    .input-area {
        position: fixed;
        bottom: 110px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 40px);
        max-width: 440px;
        z-index: 10;
    }

    .input-wrapper {
        background: #f1f5f1;
        border-radius: 35px;
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }

    input {
        flex: 1;
        background: none;
        border: none;
        outline: none;
        padding: 10px;
        font-family: inherit;
        font-size: 1rem;
    }

    .add-btn {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: none;
        color: #666;
    }

    .send-btn {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: var(--primary);
    }
</style>
