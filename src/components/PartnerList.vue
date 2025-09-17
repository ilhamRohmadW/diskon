<script setup>
    import PartnerLip6 from '../assets/image/partner-lip6.png'
    import PartnerKl from '../assets/image/partner-kl.png'
    import PartnerMerdeka from '../assets/image/partner-mdk.png'
    import PartnerOtosia from '../assets/image/partner-otosia.png'
    import PartnerBolanet from '../assets/image/partner-bolanet.png'
    import PartnerCompas from '../assets/image/partner-compas.png'
    import PartnerFimela from '../assets/image/partner-fimela.png'
</script>

<template>
    <div class="section--partner-list">
        <a href="#" class="section--partner-list-item">
            <img :src="PartnerLip6" class="w-full h-full object-contain" width="110" height="29" alt="">
        </a>
        <a href="#" class="section--partner-list-item">
            <img :src="PartnerMerdeka" class="w-full h-full object-contain" width="86" height="27" alt="">
        </a>
        <a href="#" class="section--partner-list-item">
            <img :src="PartnerKl" class="w-full h-full object-contain" width="100" height="29" alt="">
        </a>
        <a href="#" class="section--partner-list-item">
            <img :src="PartnerBolanet" class="w-full h-full object-contain" width="110" height="34" alt="">
        </a>
        <a href="#" class="section--partner-list-item">
            <img :src="PartnerOtosia" class="w-full h-full object-contain" width="87" height="28" alt="">
        </a>
        <a href="#" class="section--partner-list-item">
            <img :src="PartnerFimela" class="w-full h-full object-contain" width="87" height="28" alt="">
        </a>
        <a href="#" class="section--partner-list-item">
            <img :src="PartnerCompas" class="w-full h-full object-contain" width="94" height="33" alt="">
        </a>
    </div>
</template>

<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';
    @layer components{
        .section--partner-list{
            @apply flex flex-wrap items-center justify-center gap-3;
            @apply lg:gap-8 xl:justify-center;
            .section--partner-list-item{
                @apply max-w-25 max-h-8 block;
                @apply lg:max-w-36 lg:max-h-none;
            }
        }
    }
</style>