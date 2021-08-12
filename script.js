
  let arrays = [
    '1 — Birinchi smaylikni yuborish Kevin Makkenzi nomi bilan bog‘liq (1979 yil). U juda sodda ko‘rinishda bo‘lgan :-).',
    '2 — 1995 – birinchi veb brauzer Netscape Navigator sotuvga chiqarildi.',
    '3 — Eng qimmat domen nomi Vacationrentals.com. U 2007 yilda 35 million dollarga sotilgan.',
    '4 — Linux operatsion tizimining kompaniya belgisi – pingvin. Chunki bu sistemani yaratuvchi shaxsni yoshligida zooparkda pingvin tishlab olgan.',
    '5 — Har soatda taxminan 4200 ta yangi domen nomlari indekslanadi.',
    '6 — Shveysariyada katta hajmli ma‘lumotlar saqlanuvchi server markazlaridan chiqqan issiqlik sabab kichik ko‘ldagi suv iluq turadi.',
    '7 — 2001 – Fayl almashish xizmati ommaviylashib ketdi.',
    '8 — Birinchi kompyuter virusi 1982-yilda sistemalarni buzish maqsadida Apple tomonidan ishlab chiqilgan.',
    '9 — 1982-yilda “smaylik“ belgisi ro‘yxatga olingan, u aloqa jarayonida tabassumni ifodalash uchun ishlatilgan.',
    '10 — Statistikaga ko‘ra, aksariyat kompyuterlar o‘z imkoniyatlarining yarmidan foydalanadi, xolos.',
    '11 — Xitoy hukumati odamlarni o‘ldirish aks etgan kompyuter o‘yinlarini taqiqlagan.',
    '12 — Barcha elektron pochta xabarlarining 75 foizdan ortig‘i spamdir. Foydalanuvchilar tomonidan ularning atigi 6% ochiladi.',
    '13 — 1972 – Larry Roberts tomonidan elektron pochta uchun birinchi dastur yaratildi.',
    '14 — Barcha internet foydalanuvchilarining yarmidan ko‘pi Facebook‘da o‘z akkauntlariga ega.',
    '15 — 1999 – yirik shaharlarda DSL liniyalari orqali internetga ulanish ommaviylasha boshladi.',

]
let btn = document.getElementById("btn");
let btnPrev = document.getElementById("prev");
let output = document.getElementById("useful");

x = -1;

btn.addEventListener("click", ()=> {
    x++;
    arrays.length < x?
    x = arrays.length:
    result();
})

btnPrev.addEventListener("click", ()=> {
    x--;
    x < 0?
    x=1:
    result();
})

function result(){
    if(arrays.length > x && x > -1){
    output.innerHTML = arrays[x]
    } else {
    output.innerHTML = `Tugadi:)`;
    }
    if(x==0){
    btnPrev.disabled = true
    }else if(x == arrays.length) {
        btn.disabled = true
    } else {
    btnPrev.disabled = false;
    btn.disabled = false;
    }
}

