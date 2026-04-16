import { writable } from 'svelte/store';

export const toPersianDigits = (n) => {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

export const userProfile = writable({
    name: "النا ریچاردسون",
    bio: "علاقه‌مند به سلامت کل‌نگر",
    weight: "۶۴.۵",
    height: "۱۷۲",
    calorieGoal: 1850,
    consumed: 1332,
    dietTags: ["گیاهی", "بدون گلوتن", "بدون قند مصنوعی"]
});

export const mealHistory = writable([
    {
        date: "امروز، ۲ آبان",
        active: true,
        meals: [
            {
                id: 1,
                title: "کاسه سبز انرژی",
                location: "کافه سبز، مرکز شهر",
                time: "۱۲:۴۵ ب.ظ",
                calories: "۴۸۰",
                protein: "۲۴",
                fiber: "۱۲",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80"
            },
            {
                id: 2,
                title: "پارفه ماست یونانی",
                location: "آشپزخانه منزل",
                time: "۰۸:۱۵ ق.ظ",
                calories: "۳۲۰",
                protein: "۱۸",
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80"
            }
        ]
    }
]);
