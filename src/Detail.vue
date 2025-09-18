<script setup>
//component
import HeaderC from './components/Header.vue'
import FooterC from './components/Footer.vue'
import TitleC from './components/Title.vue'
import DetailList from './components/DetailList.vue'
import Pagination from './components/Pagination.vue'
import News1 from './assets/image/news-1.png'
import News2 from './assets/image/news-2.png'
</script>

<template>
    <HeaderC/>
    <main class="main flex flex-col overflow-x-hidden">
        <section class="section section--detail">
            <div class="section--detail-title bg-[#8A82FF] bg-center">
                <TitleC 
                class="section-title--centered mb-0"
                title="Pilih Yang Kamu Mau"
                titleClass="text-2xl lg:text-4xl"
                linkClass="hidden"
                />
            </div>
            <div class="tabs">
                <div class="tabs-nav font-extrabold text-lg">
                    <button class="tabs-btn bg-[#FF934B] active" data-tab="deals">Great Deals</button>
                    <button class="tabs-btn bg-fifth" data-tab="essentials">Fimela Essentials</button>
                    <button class="tabs-btn bg-[#FDB414]" data-tab="kalcer">Koleksi Kalcer</button>
                </div>
                <div class="tabs-content">
                    <div id="deals" class="tabs-content-item bg-[#FFF9E8] active">
                        <div class="container">
                            <DetailList :image="News1"/>
                            <Pagination/>
                        </div>
                    </div>
                    <div id="essentials" class="tabs-content-item bg-[#FFE2ED]">
                        <div class="container">
                            <DetailList :image="News2"/>
                            <Pagination/>
                        </div>
                    </div>
                    <div id="kalcer" class="tabs-content-item bg-[#FFE9C8]">
                        <div class="container">
                            <DetailList :image="News2"/>
                            <Pagination/>
                        </div>
                    </div>
                </div>                    
            </div>
        </section>
    </main>
<FooterC/>
</template>

<style>
    @reference "tailwindcss";
    @import './assets/sass/theme.min.css';
    @layer components{
        .section--detail-title{
            --gridSize: 5.5rem;
            background-size: var(--gridSize) var(--gridSize);
            background-image: linear-gradient(to right, rgba(195, 195, 195, 0.1) 3px, transparent 3px), linear-gradient(to bottom, rgba(195, 195, 195, 0.1) 3px, transparent 3px);
            @apply border-b-4 py-12 lg:py-24;
        }
        .tabs{
            .tabs-nav{
                @apply flex overflow-x-auto pb-3 lg:pb-4 gap-4 px-6 whitespace-nowrap -mt-6 -mb-9 lg:-mt-7 lg:-mb-11;
                @apply sm:justify-center lg:text-3xl lg:gap-8;
                scrollbar-width: none;
                -ms-overflow-style: none;
                &::-webkit-scrollbar{
                    display: none;
                }
                .tabs-btn{
                    @apply px-6 py-2 border-2 rounded-full cursor-pointer transition-shadow;
                    &.active { 
                        @apply shadow-[3px_5px_0px_0px_#000000];
                        @apply lg:shadow-[3px_10px_0px_0px_#000000];
                    }
                }
            }
            .tabs-content-item { 
                @apply hidden pb-16 pt-20;
                &.active { 
                    @apply block;     
                }
            }
        }
    }
</style>

