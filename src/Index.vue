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
import PartnerList from './components/PartnerList.vue'
import Marquee from './components/Marquee.vue'

//image
import LogoLip6 from './assets/image/logo-lip6.png'
import LogoFimela from './assets/image/logo-fimela.png'
import LogoKL from './assets/image/logo-kl.png'
import News1 from './assets/image/news-1.png'
import News2 from './assets/image/news-2.png'
import Product2 from './assets/image/product-2.png'
import Product3 from './assets/image/product-3.png'
import PartnerCompas from './assets/image/partner-compas.png'
</script>

<template>
    <HeaderC/>
    <main class="main flex flex-col overflow-x-hidden">
        <section class="section section--hero">
            <HeroSwiper/>
        </section>
        <section class="section section--category bg-[#FFB84C] pt-12 pb-20 bg-center lg:pt-20 lg:pb-50">
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
        <section class="section section--news bg-secondary py-14 lg:py-20">
            <Marquee/>
            <div class="container">
                <TitleC 
                :imgRight="LogoLip6"
                imgRightClass="h-6 lg:h-13"
                title="Great Deals"
                titleClass="text-xl"
                subTitle="Highlight promo & berita hot hari ini jangan sampai ketinggalan!"/>
                <NewsList 
                :image="News1"
                listTextColor="text-black/50"
                />
            </div>
        </section>
        <section class="section section--news bg-third text-white py-14 lg:py-20">
            <div class="container">
                <TitleC 
                :imgLeft="LogoFimela"
                imgLeftClass="h-6 lg:h-10"
                title="Essentials"
                titleClass="text-xl"
                subTitle="Highlight promo & berita hot hari ini jangan sampai ketinggalan!"/>
                <NewsList 
                :image="News2"
                textColor="text-black"
                listTextColor="text-white/50"
                />
            </div>
        </section>
        <section class="section section--news bg-fourth py-14 lg:py-20">
            <div class="container">
                <TitleC 
                :imgRight="LogoKL"
                imgRightClass="h-8 lg:h-13"
                title="Koleksi Kalcer"
                titleClass="text-xl"
                subTitle="Highlight promo & berita hot hari ini jangan sampai ketinggalan!"/>
                <NewsList 
                :image="News1"
                listTextColor="text-black/50"
                />
            </div>
        </section>
        <section class="section section--video bg-secondary py-14 lg:py-20">
            <div class="container">
                <TitleC 
                title="Harbolnas Best in Basket"
                subTitle="Tonton ulasan langsung dari pengguna, biar belanja makin yakin!"
                titleClass="text-2xl"
                linkClass="lg:hidden"
                />
                <VideoList/>
            </div>
        </section>
        <section class="section section--product bg-fourth pt-14 pb-30 lg:py-20">
            <div class="container">
                <TitleC 
                title="Rekomendasi"
                titleClass="text-2xl"
                linkClass="lg:hidden"
                />
                <ProductSwiper/>
            </div>
        </section>
        <section class="section section--pick py-14 lg:py-20">
            <div class="container">
                <TitleC 
                class="section-title--centered"
                title="Best Pick Today"
                titleClass="text-2xl"
                subTitleClass="lg:text-base"
                linkClass="lg:hidden"
                subTitle="Supported by"
                :imgSub="PartnerCompas"
                />
                <div class="section--pick-wrapper space-y-10">
                    <ProductList :image="Product2" title="Male" subTitle="Pilihan terbaik untuk pria dari gaya kasual hingga outfit premium, lengkap untuk segala aktivitas."/>
                    <ProductList :image="Product3" title="Female" subTitle="Koleksi fashion dan produk kecantikan yang dirancang khusus untuk wanita modern, percaya diri, dan penuh pesona."/>
                    <ProductList :image="Product2" title="Mom + Kids" subTitle="Belanja praktis untuk ibu dan si kecil nyaman, stylish, dan pas untuk kebutuhan keluarga."/>
                    <ProductList :image="Product3" title="GenZ" subTitle="Produk kekinian untuk generasi Z trendi, berani, dan selalu up-to-date dengan gaya terbaru."/>
                </div>

            </div>
        </section>
        <section class="section section--partner pb-14 border-t-0 lg:pb-20">
            <div class="container">
                <TitleC 
                class="section-title--centered"
                title="Official Partner"
                titleClass="text-2xl"
                linkClass="lg:hidden"
                />
                <PartnerList/>
            </div>
        </section>
    </main>
    <FooterC/>
</template>

<style>
    @layer components{
        .section--category{
            --gridSize: 3.5rem;
            background-size: var(--gridSize) var(--gridSize);
            background-image: linear-gradient(to right, color(srgb 1 1 1 / 0.10) 3px, transparent 3px), linear-gradient(to bottom, color(srgb 1 1 1 / 0.10) 3px, transparent 3px);
        }
        @media (width >= 64rem) {
            .section--category{
                --gridSize: 5.5rem;
            }
        }
    }

</style>

