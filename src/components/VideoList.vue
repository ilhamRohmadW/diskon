<script setup>
import Video1 from '../assets/image/video-1.png'
import Video2 from '../assets/image/video-2.png'
import Video3 from '../assets/image/video-3.png'

</script>

<template>
    <div class="section--video-box">
        <div class="section--video-head bg-white">
            <iframe class="vidio-embed aspect-video" src="" scrolling="no" frameborder="0" allowfullscreen allow="encrypted-media *;"></iframe>
            <!-- <figure class="aspect-video">
                <img :src="Video1" class="w-full h-full object-cover" alt="">
            </figure> -->
            <div class="item-detail">
                <span class="item-title font-bold text-xl lg:text-3xl">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                <!-- <p class="line-clamp-3 text-sm">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari. Rekomendasi coffee shop hits buat nongkrong, fotoan, sekaligus kerja biar makin produktif.</p>
                <div class="text-xs"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div> -->
            </div>
        </div>
        <div class="section--video-list">
            <div class="item active" data-src="https://www.vidio.com/embed/8015558/?autoplay=true&player_only=true&mute=false">
                <figure class="item-figure aspect-video">
                    <img :src="Video1" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-detail">
                    <span class="item-title text-sm font-bold line-clamp-4 lg:text-xl">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                </div>
            </div>
            <div class="item" data-src="https://www.vidio.com/embed/1550718/?autoplay=true&player_only=true&mute=false">
                <figure class="item-figure aspect-video">
                    <img :src="Video2" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-detail">
                    <span class="item-title text-sm font-bold line-clamp-4 lg:text-xl">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                </div>
            </div>
            <div class="item" data-src="https://www.vidio.com/embed/2234894/?autoplay=true&player_only=true&mute=false">
                <figure class="item-figure aspect-video">
                    <img :src="Video3" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-detail">
                    <span class="item-title text-sm font-bold line-clamp-4 lg:text-xl">Audisi Online Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                </div>
            </div>
        </div>

    </div>
</template>


<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';
    @layer components{
        .section--video-box{
            @apply md:flex md:gap-5 md:items-start;
            @apply lg:gap-14;
            .section--video-head{
                @apply mb-5 border-2 rounded-lg overflow-hidden bg-white flex flex-col;
                @apply md:shrink-0 md:w-1/2;
                .vidio-embed{
                    @apply overflow-hidden -m-[5px] w-[calc(100%+10px)] h-[calc(100%+10px)];
                }
                .item-detail{
                    @apply py-4 px-3 flex flex-col gap-1.5;
                }
            }
            .section--video-list{
                @apply flex flex-col gap-5;
                @apply md:gap-6;
                .item{
                    @apply flex items-start gap-3 cursor-pointer;
                    .item-figure{
                        @apply border-2 rounded-lg overflow-hidden w-1/2 shrink-0;
                        @apply md:w-38;
                        @apply lg:w-60;
                    }
                }
            }
        }
    }
</style>