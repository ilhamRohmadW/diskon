<script setup>
    defineProps(['image','textColor','listTextColor']);
</script>

<template>
    <div class="section--news-box">
        <div class="section--news-headline">
            <a href="#" class="item group bg-white hover:shadow-(--item-shadow)"
            :class="textColor || ''"
            >
                <figure class="item-figure aspect-[4/3]">
                    <img :src="image" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-detail">
                    <span class="item-title font-bold text-xl lg:text-2xl">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                    <p class="item-desc line-clamp-3 text-sm lg:text-base">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari. Rekomendasi coffee shop hits buat nongkrong, fotoan, sekaligus kerja biar makin produktif.</p>
                    <div class="item-info text-black/50 text-xs lg:text-base"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
                </div>
            </a>
        </div>
        <div class="section--news-list">
            <a v-for="n in 4" :key="n" href="#" class="item group">
                <figure class="item-figure aspect-[4/3] border-black group-hover:shadow-(--item-shadow)">
                    <img :src="image" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-detail">
                    <span class="item-title text-xs font-bold lg:text-lg line-clamp-3">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                    <div class="item-info text-[10px] lg:text-base"
                    :class="listTextColor || ''"
                    ><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
                </div>
            </a>
        </div>

    </div>
</template>
<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';

    @layer components{
        .section--news-box{
            @apply md:flex flex-row gap-4 lg:gap-12 items-start;
            .section--news-headline{
                @apply mb-6;
                @apply md:flex-1;
                .item{
                    @apply border-2 rounded-lg overflow-hidden flex flex-col;
                    .item-detail{
                        @apply py-4 px-3 flex flex-col gap-1.5;
                        @apply lg:p-10;
                    }
                }
            }
            .section--news-list{
                @apply overflow-x-auto -mx-6 px-6 flex items-start gap-x-3 gap-y-6 snap-x snap-mandatory scroll-smooth;
                @apply md:grid md:grid-cols-2 md:mx-0 md:px-0 md:w-1/2 md:overflow-visible;
                @apply lg:gap-x-8 md:mx-0 md:px-0 md:w-1/2;
                scrollbar-width: none;
                -ms-overflow-style: none;
                &::-webkit-scrollbar{
                    display: none;
                }
                .item{
                    @apply flex flex-col shrink-0 w-40 snap-always snap-start scroll-ms-6;
                    @apply md:w-full;
                    .item-title{
                        @apply mb-1.5;
                    }
                    .item-figure{
                        @apply mb-2.5 border-2 rounded-lg overflow-hidden;
                    }
                }
            }
        }
    }

</style>