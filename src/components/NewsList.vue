<script setup>
    defineProps(['image','textColor']);
</script>

<template>
    <div class="section--news-box">
        <div class="section--news-head mb-6">
            <a href="#" class="border-2 rounded-lg overflow-hidden bg-white flex flex-col"
            :class="textColor || ''"
            >
                <figure class="aspect-[4/3]">
                    <img :src="image" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc py-4 px-3 flex flex-col gap-1.5">
                    <span class="item-title font-bold text-xl">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                    <p class="line-clamp-3 text-sm">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari. Rekomendasi coffee shop hits buat nongkrong, fotoan, sekaligus kerja biar makin produktif.</p>
                    <div class="text-xs"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
                </div>
            </a>
        </div>
        <div class="section--news-list overflow-x-auto -mx-6 px-6 flex items-start gap-3 snap-x snap-mandatory scroll-smooth">
            <a v-for="n in 4" :key="n" href="#" class="flex flex-col shrink-0 w-40 snap-always snap-start scroll-ms-6">
                <figure class="aspect-[4/3] mb-2.5 border-2 rounded-lg overflow-hidden">
                    <img :src="image" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc">
                    <span class="item-title text-xs font-bold mb-1.5">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                    <div class="text-[10px]"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
                </div>
            </a>
        </div>

    </div>
</template>