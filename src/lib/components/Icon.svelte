<script>
    /**
     * @file Icon.svelte
     * @description یک کامپوننت جامع برای مدیریت آیکون‌های SVG پروژه.
     * این کامپوننت جایگزین کتابخانه‌های سنگین خارجی شده تا پروژه سبک باقی بماند.
     */

    export let name;     // نام آیکون (مانند: 'bell', 'scale', ...)
    export let size = 18; // اندازه آیکون به پیکسل
    export let color = "currentColor"; // رنگ خطوط آیکون
    export let fill = "none"; // رنگ پرکننده آیکون

    // مجموعه‌ای از مسیرهای SVG آیکون‌های استفاده شده در پروژه
    const paths = {
        bell: `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`,
        scale: `<path d="M16 16 5 5"/><path d="m2 5 2.83 2.83"/><path d="M21 16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9Z"/><path d="M7 21h10"/><path d="M12 11h.01"/>`,
        ruler: `<path d="M21.3 15.3 4.4 3.3a1 1 0 0 0-1.2 0L1.7 4.9a1 1 0 0 0 0 1.4l16.9 12a1 1 0 0 0 1.2 0l1.5-1.6a1 1 0 0 0 0-1.4Z"/><path d="m5.2 5.8 1.4 1"/><path d="m8 7.8 1.4 1"/><path d="m10.8 9.8 1.4 1"/><path d="m13.6 11.8 1.4 1"/><path d="m16.4 13.8 1.4 1"/>`,
        flame: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.256 1.181-3.132C7 12 8.5 13.43 8.5 14.5Z"/>`,
        settings: `<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>`,
        plus: `<path d="M5 12h14"/><path d="M12 5v14"/>`,
        pencil: `<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>`,
        calendar: `<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>`,
        utensils: `<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>`,
        zap: `<path d="M4 14.899 15.3 3l-1.3 8.1L20 9.101 8.7 21l1.3-8.1L4 14.899Z"/>`,
        mapPin: `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
        clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
        chat: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
        history: `<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 3"/>`,
        user: `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
        more: `<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>`,
        // آیکن ساده‌ی QR با خط اسکن (فعلا صرفا برای ظاهر)
        qr: `<rect x="4" y="4" width="16" height="16" rx="3"/><rect x="7" y="7" width="5" height="5" rx="1"/><rect x="12" y="7" width="5" height="5" rx="1"/><rect x="7" y="12" width="5" height="5" rx="1"/><path d="M13 13h5"/><path d="M16 13v5"/><circle cx="16" cy="16" r="1"/>`,
        send: `<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>`,
        sparkles: `<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>`,
        circle: `<circle cx="12" cy="12" r="10"/>`,
        droplet: `<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7Z"/>`
    };
</script>

<svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={fill} 
    stroke={color} 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
>
    <!-- تزریق مسیر SVG بر اساس نام انتخابی -->
    {@html paths[name] || ""}
</svg>
