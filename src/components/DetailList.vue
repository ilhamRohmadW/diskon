<script setup>
    defineProps(['image']);
</script>

<template>
    <div class="section--detail-box">
        <div class="grid-item">
            <div class="section--detail-headline">
                <a href="#" class="item group bg-white hover:shadow-(--item-shadow)">
                    <figure class="item-figure aspect-[4/3] w-full">
                        <img :src="image" class="w-full h-full object-cover" alt="">
                    </figure>
                    <div class="item-detail">
                        <span class="item-title font-bold text-xl lg:text-2xl">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari.</span>
                        <p class="item-desc line-clamp-3 text-sm lg:text-base">Intip tren outfit kece yang lagi rame di FYP, gampang ditiru buat gaya sehari-hari. Rekomendasi coffee shop hits buat nongkrong, fotoan, sekaligus kerja biar makin produktif.</p>
                        <div class="item-info text-black/50 text-xs lg:text-base"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
                    </div>
                </a>
            </div>
            <div class="section--detail-list">
                <a v-for="n in 4" :key="n" href="#" class="item group">
                    <figure class="item-figure aspect-[4/3] border-black group-hover:shadow-(--item-shadow)">
                        <img :src="image" class="w-full h-full object-cover" alt="">
                    </figure>
                    <div class="item-detail">
                        <span class="item-title font-bold line-clamp-3 lg:text-xl leading-tight">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                        <div class="item-info text-black/50 text-[10px] lg:text-sm xl:text-base"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
                    </div>
                </a>
            </div>
        </div>
        <div v-for="n in 4" :key="n" class="grid-item">
            <a href="#" class="item group">
                <figure class="item-figure aspect-[4/3] border-black group-hover:shadow-(--item-shadow)">
                    <img :src="image" class="w-full h-full object-cover" alt="">
                </figure>
                <div class="item-detail">
                    <span class="item-title font-bold line-clamp-3 lg:text-xl leading-tight">Panggung Megah Konser D'Academy 7 Siap Digelar! Audisi Online</span>
                    <div class="item-info text-black/50 text-[10px] lg:text-sm xl:text-base"><span>Kapanlagi.com</span> - <span>2 jam yang lalu</span></div>
                </div>
            </a>
        </div>

    </div>
</template>
<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';

    @layer components{
        .section--detail-box{
            @apply grid md:grid-cols-2 gap-7 items-start lg:grid-cols-4;
            .grid-item{
                @apply md:col-span-2 lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-7;
            }
            .section--detail-headline{
                @apply md:col-span-2;
                .item{
                    @apply border-2 rounded-lg overflow-hidden flex flex-col gap-0;
                    .item-figure{
                        @apply border-0 rounded-none;
                    }
                    .item-detail{
                        @apply py-4 px-3 flex flex-col gap-1.5;
                        @apply xl:p-10;
                    }
                }
            }
            .section--detail-list{
                @apply flex flex-col gap-7 w-full;
                @apply md:col-span-2 md:grid md:grid-cols-2;
                @apply lg:grid lg:grid-cols-2 lg:mx-0 lg:px-0 lg:w-1/2 lg:gap-x-8 md:mx-0 md:px-0 md:w-1/2;
                scrollbar-width: none;
                -ms-overflow-style: none;
                &::-webkit-scrollbar{
                    display: none;
                }
            }
            .item{
                @apply flex items-start gap-2.5;
                @apply lg:flex-col;
                .item-title{
                    @apply mb-1.5;
                }
                .item-figure{
                    @apply w-[120px] shrink-0 border-2 rounded-lg overflow-hidden;
                    @apply lg:w-full;
                }
            }
        }
    }

</style>