<script setup>
import Hero1 from '../assets/image/hero-1.png'
import Hero2 from '../assets/image/hero-2.png'
</script>

<template>
    <div class="swiper section--hero-swiper -mx-6!">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img :src="Hero2" alt="hero 2">
            </div>
            <div class="swiper-slide">
                <img :src="Hero1" alt="hero 1">
            </div>
            <div class="swiper-slide">
                <img :src="Hero2" alt="hero 3">
            </div>
        </div>
        <div class="swiper-pagination my-auto h-fit pointer-events-none"></div>
    </div>
</template>

<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';
    
    .section--hero-swiper .swiper-pagination{
        --swiper-pagination-top: 0;
        --swiper-pagination-bottom: 0;
        --swiper-pagination-bullet-size: 4px;
        --swiper-pagination-bullet-inactive-color: var(--color-third);
        --swiper-pagination-bullet-inactive-opacity: 1;
        --swiper-pagination-color:  var(--color-third);
        @apply -translate-y-8;
    }
    .section--hero-swiper .swiper-pagination-bullet{
        @apply rounded-full transition-all;
    }
    .section--hero-swiper .swiper-pagination-bullet-active{
        @apply w-4;
    }
</style>