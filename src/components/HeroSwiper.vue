<script setup>
import Hero1 from '../assets/image/hero-1.png'
import Hero2 from '../assets/image/hero-2.png'
import Hero1Desktop from '../assets/image/d-hero-1.png'
import Hero2Desktop from '../assets/image/d-hero-2.png'
import Hero3Desktop from '../assets/image/d-hero-3.png'

</script>

<template>
    <div class="swiper section--hero-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img :src="Hero2" class="section--hero-swiper-mobile w-full h-full object-cover" alt="hero 2">
                <img :src="Hero1Desktop" class="section--hero-swiper-desktop w-full h-full object-cover" alt="hero 2">
            </div>
            <div class="swiper-slide">
                <img :src="Hero1" class="section--hero-swiper-mobile w-full h-full object-cover" alt="hero 1">
                <img :src="Hero2Desktop" class="section--hero-swiper-desktop w-full h-full object-cover" alt="hero 1">
            </div>
            <div class="swiper-slide">
                <img :src="Hero2" class="section--hero-swiper-mobile w-full h-full object-cover" alt="hero 3">
                <img :src="Hero3Desktop" class="section--hero-swiper-desktop w-full h-full object-cover" alt="hero 3">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';
    
    .section--hero-swiper{
        .section--hero-swiper-mobile{
            @apply md:hidden;
        }
        .section--hero-swiper-desktop{
            @apply hidden md:block;
        }    
        .swiper-pagination{
            --swiper-pagination-bullet-inactive-color: var(--color-primary);
            --swiper-pagination-bullet-inactive-opacity: 1;
            --swiper-pagination-color:  var(--color-primary);
            @apply -translate-y-8 my-auto h-fit pointer-events-none inset-y-0;
            @apply md:top-auto md:bottom-2 md:translate-y-0;
            @apply lg:bottom-13;
            .swiper-pagination-bullet{
                @apply size-1 md:size-2;
                @apply rounded-full transition-all;
                &.swiper-pagination-bullet-active{
                    @apply w-4 md:w-6;
                }
            }
        }
    }
</style>

<!-- <style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';

    .section--hero-swiper{
        @apply -mx-6;
    }
    .section--hero-swiper .swiper-pagination{
        --swiper-pagination-top: 0;
        --swiper-pagination-bottom: 0;
        --swiper-pagination-bullet-size: 4px;
        --swiper-pagination-bullet-inactive-color: var(--color-primary);
        --swiper-pagination-bullet-inactive-opacity: 1;
        --swiper-pagination-color:  var(--color-primary);
        @apply -translate-y-8 my-auto h-fit pointer-events-none;
    }
    .section--hero-swiper .swiper-pagination-bullet{
        @apply rounded-full transition-all;
    }
    .section--hero-swiper .swiper-pagination-bullet-active{
        @apply w-4;
    }
</style> -->