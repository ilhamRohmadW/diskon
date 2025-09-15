<script setup>
import Video1 from '../assets/image/video-1.png'
import Video2 from '../assets/image/video-2.png'
import Video3 from '../assets/image/video-3.png'

</script>

<template>
    <div class="section--video-box">
        <div class="section--video-head mb-5 border-2 rounded-lg overflow-hidden bg-white flex flex-col">
            <iframe class="vidio-embed w-full h-full" src="" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
            <!-- <figure class="aspect-video">
                <img :src="Video1" class="w-full h-full object-cover" alt="">
            </figure> -->
            <div class="item-desc py-4 px-3 flex flex-col gap-1.5">
                <span class="item-title font-bold text-xl">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                <p class="line-clamp-3 text-sm">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari. Rekomendasi coffee shop hits buat nongkrong, fotoan, sekaligus kerja biar makin produktif.</p>
                <div class="text-xs"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
            </div>
        </div>
        <div class="section--video-list flex flex-col gap-5">
            <div 
                data-src="https://www.vidio.com/embed/8015558/?autoplay=true&player_only=true&mute=false" 
                class="flex items-start gap-3"
            >
                <figure class="aspect-video border-2 rounded-lg overflow-hidden w-1/2 shrink-0">
                    <img :src="Video1" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc">
                    <span class="item-title text-sm font-bold line-clamp-4">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                </div>
            </div>
            <div 
                data-src="https://www.vidio.com/embed/1550718/?autoplay=true&player_only=true&mute=false" 
                class="flex items-start gap-3"
            >
                <figure class="aspect-video border-2 rounded-lg overflow-hidden w-1/2 shrink-0">
                    <img :src="Video2" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc">
                    <span class="item-title text-sm font-bold line-clamp-4">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                </div>
            </div>
            <div 
                data-src="https://www.vidio.com/embed/2234894/?autoplay=true&player_only=true&mute=false" 
                class="flex items-start gap-3"
            >
                <figure class="aspect-video border-2 rounded-lg overflow-hidden w-1/2 shrink-0">
                    <img :src="Video3" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-desc">
                    <span class="item-title text-sm font-bold line-clamp-4">Audisi Online Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                </div>
            </div>
        </div>

    </div>
</template>