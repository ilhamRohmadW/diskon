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
            <div class="section--detail-title bg-gray-50 bg-center">
                <TitleC 
                class="section-title--centered mb-0"
                title="Pilih Yang Kamu Mau"
                titleClass="text-2xl"
                linkClass="hidden"
                />
            </div>
            <div class="tabs">
                <div class="tabs-nav font-extrabold text-lg">
                    <button class="tabs-btn bg-[#FF934B]" data-tab="tab1">Great Deals</button>
                    <button class="tabs-btn bg-fifth" data-tab="tab2">fimela Essentials</button>
                    <button class="tabs-btn bg-[#FDB414]" data-tab="tab3">Koleksi Kalcer</button>
                </div>
                <div class="tabs-content">
                    <div id="tab1" class="tabs-content-item bg-[#FFF9E8]">
                        <div class="container">
                            <DetailList :image="News1"/>
                            <Pagination/>
                        </div>
                    </div>
                    <div id="tab2" class="tabs-content-item bg-[#FFE2ED]">
                        <div class="container">
                            <DetailList :image="News2"/>
                            <Pagination/>
                        </div>
                    </div>
                    <div id="tab3" class="tabs-content-item bg-[#FFE9C8]">
                        <div class="container">
                            <DetailList :image="News1"/>
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
            @apply border-b-4 py-12;
        }
        .tabs{
            .tabs-nav{
                @apply flex overflow-x-auto gap-4 px-6 whitespace-nowrap -my-6;
                @apply sm:justify-center;
                scrollbar-width: none;
                -ms-overflow-style: none;
                &::-webkit-scrollbar{
                    display: none;
                }
                .tabs-btn{
                    @apply px-6 py-2 border-2 rounded-full cursor-pointer;
                }
                &.active { 
                    font-weight: bold;
                    color: red;
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

