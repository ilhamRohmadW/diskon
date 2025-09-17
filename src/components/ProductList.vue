<script setup>
    defineProps(['image','title','subTitle']);
</script>

<template>
    <div class="section--pick-box">
        <div class="section--pick-title">
            <div class="section--pick-title-wrapper">
                <span class="section--pick-title-text text-xl font-head lg:text-4xl">{{ title }}</span>
                <span class="section--pick-title-sub text-lg font-light">{{ subTitle }}</span>
            </div>
            <a href="#" class="section--pick-title-link font-semibold group lg:text-xl">
                <span>Selengkapnya</span>
                <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.9841 8.4985C23.1143 8.4985 19.5873 5.16517 19.5873 1.5015V0H16.4127V1.5015C16.4127 4.16516 17.6476 6.66366 19.5857 8.4985H0V11.5015H19.5857C17.6476 13.3363 16.4127 15.8348 16.4127 18.4985V20H19.5873V18.4985C19.5873 14.8363 23.1143 11.5015 26.9841 11.5015H28.5714V8.4985H26.9841Z" fill="currentColor"/></svg>
            </a>
        </div>
        <div class="section--pick-list">
            <a v-for="n in 5" :key="n" href="#" class="item">
                <figure class="item-figure aspect-[4/3] bg-gray-100">
                    <img :src="image" class="w-full h-full object-contain" alt="">
                </figure>
                <div class="item-detail">
                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                    <span class="item-title text-[10px] font-bold lg:text-base">Powerstay Transferproof Matte Lip cream</span>
                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">1.100K Sold</span>
                </div>
                <div class="item-price">
                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp107.250</span>
                    <div class="item-price-detail text-[8px] lg:text-sm">
                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                    </div>
                </div>
            </a>
        </div>

    </div>
</template>

<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';
    @layer components{
        .section--pick-title{
            @apply flex items-center justify-between mb-6;
            .section--pick-title-wrapper{
                @apply flex flex-col lg:max-w-lg;
            }
            .section--pick-title-text{
                @apply lg:mb-2;
            }
            .section--pick-title-sub{
                @apply hidden lg:block;
            }
            .section--pick-title-link{
                @apply flex items-center gap-1;
                @apply lg:gap-5;
                svg{
                    @apply transition group-hover:translate-x-1;
                    @apply lg:w-7 lg:h-5;
                }
            }
        }
        .section--pick-list{
            @apply overflow-x-auto -mx-6 px-6 flex items-start gap-3 snap-x snap-mandatory scroll-smooth;
            @apply lg:grid lg:grid-cols-5 lg:gap-6 lg:mx-0 lg:px-0;
            scrollbar-width: none;
            -ms-overflow-style: none;
            &::-webkit-scrollbar{
                display: none;
            }
            .item{
                @apply flex flex-col shrink-0 w-40 snap-always snap-start scroll-ms-6 border rounded-lg overflow-hidden;
                @apply lg:w-full;
                .item-detail,
                .item-price{
                    @apply py-1.5 px-3 flex flex-col;
                    @apply lg:py-2.5 lg:px-5;
                }
                .item-price{
                    @apply border-t;
                    .item-price-tag{
                        @apply block;
                    }
                    .item-price-detail{
                        @apply flex items-center gap-1.5;
                    }
                    .item-price-discount{
                        @apply rounded py-0.5 px-1;
                    }
                }
                .item-shop{
                    @apply mb-0.5;
                }
                .item-title{
                    @apply mb-1;
                }
            }
        }
    }
</style>