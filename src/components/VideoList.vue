<script setup>
import Video1 from '../assets/image/video-1.png'
import Video2 from '../assets/image/video-2.png'
import Video3 from '../assets/image/video-3.png'

</script>

<template>
    <div class="section--news-box">
        <div class="section--news-head mb-5">
            <a href="#" class="border-2 rounded-lg overflow-hidden bg-white flex flex-col">
                <figure class="aspect-video">
                    <img :src="Video1" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc py-4 px-3 flex flex-col gap-1.5">
                    <span class="item-title font-bold text-xl">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                    <p class="line-clamp-3 text-sm">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari. Rekomendasi coffee shop hits buat nongkrong, fotoan, sekaligus kerja biar makin produktif.</p>
                    <div class="text-xs"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
                </div>
            </a>
        </div>
        <div class="section--news-list flex flex-col gap-5">
            <a href="#" class="flex items-start gap-3">
                <figure class="aspect-video border-2 rounded-lg overflow-hidden w-1/2 shrink-0">
                    <img :src="Video1" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc">
                    <span class="item-title text-sm font-bold line-clamp-4">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                </div>
            </a>
            <a href="#" class="flex items-start gap-3">
                <figure class="aspect-video border-2 rounded-lg overflow-hidden w-1/2 shrink-0">
                    <img :src="Video2" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc">
                    <span class="item-title text-sm font-bold line-clamp-4">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                </div>
            </a>
            <a href="#" class="flex items-start gap-3">
                <figure class="aspect-video border-2 rounded-lg overflow-hidden w-1/2 shrink-0">
                    <img :src="Video3" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc">
                    <span class="item-title text-sm font-bold line-clamp-4">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                </div>
            </a>
        </div>

    </div>
</template>