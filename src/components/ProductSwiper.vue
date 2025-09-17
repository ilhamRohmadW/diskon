<script setup>
import Product1 from '../assets/image/prod-swiper-1.webp'
import Product2 from '../assets/image/prod-swiper-2.webp'
import Product3 from '../assets/image/prod-swiper-3.webp'
import ProductSpinner from '../assets/image/product-spinner.png'
</script>

<template>
    <div class="section--product-box text-center">
        <div class="section--product-title text-[315px] leading-none font-black font-product lg:text-[370px]">
            <span class="section--product-title-text">PR</span>
            <svg class="absolute -bottom-5 -left-4 lg:left-14 lg:-bottom-3" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 42.8785H23.514L6.91589 59.4766L14.5234 67.0841L31.1215 50.486V74H42.8785V50.486L59.4766 67.0841L67.0841 59.4766L50.486 42.8785H74V31.1215H50.486L67.0841 14.5234L59.4766 6.91589L42.8785 23.514V0H31.1215V23.514L14.5234 6.91589L6.91589 14.5234L23.514 31.1215H0V42.8785Z" fill="#FFB84C"/></svg>
        </div>
        <div class="section--product-wrapper w-[325px]">
            <div class="section--product-inner">
                <img class="section--product-spinner animate-spin" :src="ProductSpinner" width="322" height="322" alt="">
                <div class="swiper section--product-image shadow-[5px_6px_0px_0px_var(--color-primary)] w-[265px] bg-white border-orange-500">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img :src="Product1" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img :src="Product2" class="w-full h-full object-cover" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img :src="Product3" class="w-full h-full object-cover" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper section--product-desc">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <span class="font-head block">GABRIELLE CHANEL</span>
                        <span class="text-lg font-bold">Rp3.900.000</span>
                    </div>
                    <div class="swiper-slide">
                        <span class="font-head block">ANGELA CHANEL</span>
                        <span class="text-lg font-bold">Rp1.900.000</span>
                    </div>
                    <div class="swiper-slide">
                        <span class="font-head block">JOHNSON CHANEL</span>
                        <span class="text-lg font-bold">Rp4.100.000</span>
                    </div>
                </div>
                <div class="swiper-button-next">
                    <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29 9C24.8012 9 21 6.03003 21 2V0H18V2C18 4.93003 18.8972 6.98168 21 9H0V13H21C18.8972 15.0183 18 17.07 18 20V22H21V20C21 15.9716 24.8012 13 29 13H31V9H29Z" fill="currentColor"/></svg>
                </div>
                <div class="swiper-button-prev">
                    <svg width="31" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C6.19878 9 10 6.03003 10 2V0H13V2C13 4.93003 12.1028 6.98168 10 9H31V13H10C12.1028 15.0183 13 17.07 13 20V22H10V20C10 15.9716 6.19878 13 2 13H0V9H2Z" fill="currentColor"/></svg>
                </div>
            </div>
        </div>
        <div class="section--product-title text-[230px] leading-none font-black font-product lg:text-[370px]">
            <svg class="absolute -bottom-10 -right-6 text-primary lg:-bottom-4 lg:size-50 lg:-right-20" width="153" height="152" viewBox="0 0 153 152" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M152.324 304.197V0.341797" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/><path d="M114.301 304.197V0.341797" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/><path d="M76.2856 304.197V0.341797" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/><path d="M38.2628 304.197V0.341797" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/><path d="M0.391968 152.266H304.255" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/><path d="M0.391968 114.243H304.255" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/><path d="M0.391968 76.2285H304.255" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/><path d="M0.391968 38.2051H304.255" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/><path d="M304.324 0.182617H0.23999V304.35H304.407V0.182617H304.324Z" stroke="currentColor" stroke-width="1.52" stroke-miterlimit="10"/></svg>
            <span class="section--product-title-text">DUK</span>
            <svg class="absolute right-8 -top-4 text-primary lg:inset-x-0 lg:mx-auto lg:size-24 lg:top-4" width="68" height="69" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33.8551" cy="34.4929" r="17.0297" transform="rotate(6.25934 33.8551 34.4929)" fill="white"/><path d="M42.3979 59.8944L42.3819 59.8997C42.1265 59.9844 41.8529 60.0009 41.5884 59.948L35.729 58.7721C35.4987 58.7255 35.2617 58.7321 35.0353 58.7905C33.1498 59.2761 31.1759 60.3004 29.3348 60.6893C28.8164 60.7991 28.3249 60.7229 27.8879 60.4303C26.3383 59.397 24.8512 57.5169 23.2942 56.321C23.1112 56.1801 22.8976 56.0837 22.6717 56.0368L16.7958 54.8043C16.4791 54.7377 16.1869 54.5776 15.9729 54.3363C15.8209 54.1652 15.6913 53.9712 15.6121 53.7992C14.8241 52.0904 14.4653 49.8959 13.7293 48.0934C13.6406 47.8759 13.5033 47.6822 13.3294 47.525L8.88399 43.5293C8.68351 43.3488 8.5333 43.1196 8.44862 42.8641L8.44333 42.8482C8.35865 42.5928 8.34214 42.3192 8.39509 42.0547L9.57101 36.1953C9.61759 35.965 9.61099 35.728 9.55252 35.5015C9.06696 33.616 8.0427 31.6422 7.65379 29.8011C7.54394 29.2827 7.6202 28.7912 7.91276 28.3542C8.94606 26.8046 10.8262 25.3175 12.0221 23.7604C12.163 23.5775 12.2594 23.3639 12.3063 23.138L13.5387 17.2621C13.6054 16.9454 13.7654 16.6532 14.0068 16.4392C14.1779 16.2872 14.3719 16.1575 14.5439 16.0784C16.2547 15.2897 18.4525 14.9309 20.2563 14.1923C20.4688 14.1052 20.6595 13.9722 20.8147 13.8023L24.9055 9.3298C25.1812 9.02909 25.5648 8.84656 25.9737 8.83393C25.9767 8.83294 25.9803 8.83394 25.9836 8.83395C27.7039 8.78522 30.3327 9.93029 32.2268 10.0886C32.3873 10.1018 32.5486 10.0905 32.7055 10.0528C34.6325 9.58227 36.6573 8.51788 38.544 8.1194C39.0624 8.00956 39.5539 8.08581 39.9908 8.37837C41.5405 9.41167 43.0276 11.2918 44.5836 12.488C44.7666 12.6289 44.9801 12.7253 45.2074 12.7729L51.0833 14.0054C51.4 14.072 51.6922 14.232 51.9072 14.4731C52.0592 14.6442 52.1889 14.8382 52.268 15.0101C53.063 16.7333 53.42 18.9493 54.17 20.7605C54.2475 20.9474 54.3576 21.1191 54.4999 21.2613C55.544 22.3061 56.7494 23.2298 57.8541 24.2168C58.9587 25.2038 59.5099 26.7896 59.204 28.2886C58.8981 29.7876 58.4929 31.201 58.2798 32.6625C58.2509 32.8626 58.2652 33.066 58.3144 33.2612C58.7946 35.1607 59.8324 37.1522 60.2243 39.0089C60.386 39.7771 60.1762 40.1799 59.7305 40.7529C58.5887 42.2223 57.0883 43.5857 55.872 45.0343C55.7348 45.1983 55.6344 45.3899 55.5763 45.5953C55.0364 47.4874 54.9683 49.8976 54.3409 51.6593C54.1649 52.1539 53.8173 52.5084 53.3353 52.7313C51.6264 53.5193 49.4316 53.8771 47.6295 54.6141C47.412 54.7028 47.2183 54.8401 47.0621 55.0137L43.0657 59.4571C42.8852 59.6576 42.656 59.8078 42.4005 59.8925L42.3979 59.8944ZM39.6053 25.5636C38.7921 25.8332 37.9139 25.3924 37.6444 24.5792L37.0268 22.7164C36.8541 22.1956 35.766 21.058 35.2992 20.7022C33.6237 19.4261 31.7138 19.3472 29.7362 19.8788C28.5965 20.1858 26.3639 20.7299 26.5369 22.2639C26.7099 23.7979 27.8835 25.9249 28.2238 27.5928C28.4721 28.8094 28.1825 30.107 27.4533 31.0974C27.2824 31.3301 27.0474 31.5066 26.779 31.6122C24.9509 32.3278 22.6843 32.7028 20.9838 33.5024C20.6082 33.679 20.3224 34.0395 20.1968 34.4422C20.0955 34.7681 20.1259 35.1202 20.254 35.4365C21.9114 39.5337 22.8016 44.4268 24.5425 48.4122C24.8224 49.0525 25.6225 49.4284 26.3 49.2105L46.7288 42.4377C46.7907 42.4172 46.8516 42.3937 46.9098 42.3655C48.5452 41.5797 49.634 39.8201 49.6482 38.0158C49.666 35.6345 49.1401 31.8034 48.7967 29.3713C48.5565 27.668 48.2551 26.5819 46.8655 25.4435C46.0336 24.7614 44.0017 24.1072 42.964 24.4512L39.6066 25.5643L39.6053 25.5636Z" fill="currentColor"/><path d="M33.3271 43.5606L29.8771 33.1541C30.9285 31.7191 31.5563 29.9385 31.4492 28.1324C31.432 27.8335 31.3567 26.9482 31.2809 26.7197L30.0759 23.0849C31.2903 22.6059 32.6637 22.4662 33.6683 23.4521C34.6728 24.438 35.0252 27.3012 35.6957 28.6724C36.0668 29.4309 36.8751 29.7111 37.6762 29.522C39.5636 29.0756 41.6905 27.9286 43.5485 27.5806C44.4433 27.4135 45.3148 28.0615 45.577 28.9092C45.6744 31.7684 46.4684 34.9381 46.4934 37.7593C46.4956 38.0564 46.4586 38.4928 46.3236 38.7535C46.2669 38.8631 45.7687 39.4347 45.7248 39.4493L33.3268 43.5596L33.3271 43.5606Z" fill="currentColor"/><path d="M27.1037 34.7927L23.7183 35.915L26.9537 45.674L30.3391 44.5517L27.1037 34.7927Z" fill="currentColor"/></svg>
            <svg class="absolute left-0 bottom-12 text-primary lg:bottom-20 lg:size-24 lg:-left-6" width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000125551 2.46219e-06C10.2485 3.20914e-06 18.5568 13.1214 18.5568 29.6907C18.5568 46.26 10.2485 60 0.000123978 60L0.000125551 2.46219e-06Z" fill="currentColor"/><path d="M18.5568 2.68761e-06C27.0979 3.31012e-06 34.0208 13.1214 34.0208 29.6907C34.0208 46.26 27.0979 60 18.5568 60L18.5568 2.68761e-06Z" fill="currentColor"/><path d="M34.0207 2.95811e-06C40.5111 3.43116e-06 45.7733 13.1214 45.7733 29.6907C45.7733 46.26 40.5111 60 34.0207 60L34.0207 2.95811e-06Z" fill="currentColor"/><path d="M45.7733 3.18353e-06C50.5553 3.53206e-06 54.4331 13.1214 54.4331 29.6907C54.4331 46.26 50.5553 60 45.7733 60L45.7733 3.18353e-06Z" fill="currentColor"/><path d="M54.4331 3.36386e-06C57.8511 3.61298e-06 60.6187 13.1214 60.6187 29.6907C60.6187 46.26 57.8481 60 54.4331 60L54.4331 3.36386e-06Z" fill="currentColor"/></svg>
        </div>
    </div>
</template>

<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';

    /* .section--product-image {
        box-shadow: 5px 6px 0px 0px var(--color-primary);
    } */
    .section--product-box {
        @apply flex flex-col gap-7;
        @apply lg:flex-row lg:gap-4 lg:items-end lg:-mt-10;
        .section--product-title{
            @apply relative w-fit mx-auto pointer-events-none;
            @apply lg:-mb-2;
            .section--product-title-text{
                @apply relative;
            }
        }
        .section--product-wrapper{
            @apply overflow-hidden mx-auto;
        }
        .section--product-inner{
            @apply overflow-hidden aspect-square relative flex items-center justify-center mx-auto mb-4;
        }
        .section--product-spinner{
            @apply pointer-events-none;
            animation-duration: 10s;
        }
        .section--product-image{
            @apply rounded-full absolute! aspect-square m-auto inset-0 border-8;
        }
        .swiper-button-prev,
        .swiper-button-next{
            --swiper-navigation-sides-offset: 0; 
            @apply text-black;
            &:after,
            &:after{
                @apply hidden 
            }

        }
    }

</style>