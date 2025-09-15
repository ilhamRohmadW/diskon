<script setup>
//component
import HeaderC from './components/Header.vue'
import FooterC from './components/Footer.vue'
import TitleC from './components/Title.vue'
import NewsList from './components/NewsList.vue'
import VideoList from './components/VideoList.vue'
import CategoryList from './components/CategoryList.vue'
import HeroSwiper from './components/HeroSwiper.vue'
import ProductSwiper from './components/ProductSwiper.vue'
import ProductList from './components/ProductList.vue'
import Marquee from './components/Marquee.vue'

//image
import LogoLip6 from './assets/image/logo-lip6.png'
import LogoFimela from './assets/image/logo-fimela.png'
import LogoKL from './assets/image/logo-kl.png'
import News1 from './assets/image/news-1.png'
import News2 from './assets/image/news-2.png'
import Product2 from './assets/image/product-2.png'
import Product3 from './assets/image/product-3.png'
import PartnerLip6 from './assets/image/partner-lip6.png'
import PartnerKl from './assets/image/partner-kl.png'
import PartnerMerdeka from './assets/image/partner-mdk.png'
import PartnerOtosia from './assets/image/partner-otosia.png'
import PartnerBolanet from './assets/image/partner-bolanet.png'
import PartnerCompas from './assets/image/partner-compas.png'
import PartnerFimela from './assets/image/partner-fimela.png'
</script>

<template>
    <HeaderC/>
    <main class="main flex flex-col">
        <section class="section section--hero">
            <div class="container">
                <HeroSwiper/>
            </div>
        </section>
        <section class="section section--category bg-[#FFB84C] pt-12 pb-20 bg-center">
            <div class="container">
                <TitleC 
                title="Jelajahi Kategori Populer"
                subTitle="Semua yang kamu butuhkan ada di sini"
                titleClass="text-2xl"
                subTitleClass="text-xl"
                />
                <CategoryList/>
            </div>
        </section>
        <!-- <section class="section section--ticker bg-[#FFF9E8] z-1">
            <Marquee/>
        </section> -->
        <section class="section section--news bg-[#FFF9E8] py-14">
            <div class="container">
                <TitleC 
                :imgRight="LogoLip6"
                imgRightClass="h-6"
                title="Great Deals"
                subTitle="Highlight promo & berita hot hari ini jangan sampai ketinggalan!"/>
                <NewsList :image="News1"/>
            </div>
        </section>
        <section class="section section--news bg-[#1C1C1E] text-white py-14">
            <div class="container">
                <TitleC 
                :imgLeft="LogoFimela"
                imgLeftClass="h-6"
                title="Essentials"
                subTitle="Highlight promo & berita hot hari ini jangan sampai ketinggalan!"/>
                <NewsList :image="News2" textColor="text-black"/>
            </div>
        </section>
        <section class="section section--news bg-[#FFE9C8] py-14">
            <div class="container">
                <TitleC 
                :imgRight="LogoKL"
                imgRightClass="h-8"
                title="Koleksi Kalcer"
                subTitle="Highlight promo & berita hot hari ini jangan sampai ketinggalan!"/>
                <NewsList :image="News1"/>
            </div>
        </section>
        <section class="section section--video bg-[#FFF9E8] pt-12 pb-20">
            <div class="container">
                <TitleC 
                title="Harbolnas Best in Basket"
                subTitle="Tonton ulasan langsung dari pengguna, biar belanja makin yakin!"
                titleClass="text-2xl"
                />
                <VideoList/>
            </div>
        </section>
        <section class="section section--product bg-[#FFE9C8] py-16">
            <div class="container">
                <TitleC 
                title="Rekomendasi"
                titleClass="text-2xl"
                />
                <ProductSwiper/>
                
            </div>
        </section>
        <section class="section section--pick py-14">
            <div class="container">
                <TitleC 
                title="Best Pick Today"
                />
                <div class="space-y-10">
                    <ProductList :image="Product2" title="Male"/>
                    <ProductList :image="Product3" title="Female"/>
                    <ProductList :image="Product2" title="Mom + Kids"/>
                    <ProductList :image="Product3" title="GenZ"/>
                </div>

            </div>
        </section>
        <section class="section section--partner pb-14 border-t-0">
            <div class="container">
                <TitleC 
                title="Official Partner"
                />
                <div class="flex flex-wrap items-center justify-center gap-3">
                    <a href="#">
                        <img :src="PartnerLip6" width="110" height="29" alt="">
                    </a>
                    <a href="#">
                        <img :src="PartnerMerdeka" width="86" height="27" alt="">
                    </a>
                    <a href="#">
                        <img :src="PartnerKl" width="100" height="29" alt="">
                    </a>
                    <a href="#">
                        <img :src="PartnerBolanet" width="110" height="34" alt="">
                    </a>
                    <a href="#">
                        <img :src="PartnerOtosia" width="87" height="28" alt="">
                    </a>
                    <a href="#">
                        <img :src="PartnerFimela" width="87" height="28" alt="">
                    </a>
                    <a href="#">
                        <img :src="PartnerCompas" width="94" height="33" alt="">
                    </a>
                </div>
            </div>
        </section>
    </main>
    <FooterC/>
</template>

<style lang="postcss">
.section--category{
    --gridSize: 3.5rem;
    background-size: var(--gridSize) var(--gridSize);
    background-image: linear-gradient(to right, color(srgb 1 1 1 / 0.10) 3px, transparent 3px), linear-gradient(to bottom, color(srgb 1 1 1 / 0.10) 3px, transparent 3px);
}
</style>

