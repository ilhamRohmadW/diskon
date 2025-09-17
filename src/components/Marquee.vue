<script setup>
</script>
<template>
    <div class="marquee font-bold lg:font-extrabold font-lg lg:text-3xl">
        <!-- Marquee kiri -->
        <div class="marquee-item bg-[#F2E93F] -rotate-7 lg:-rotate-4">
            <ul class="marquee-list animate-marquee-right *:after:bg-black">
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
                <!-- duplikat supaya looping mulus -->
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>

                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
                <!-- duplikat supaya looping mulus -->
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
            </ul>
        </div>

        <!-- Marquee kanan -->
        <div class="marquee-item bg-[#F2E93F] rotate-7 translate-y-[-150%] md:translate-y-[-100%] lg:rotate-11 lg:translate-y-[-75%]">
            <ul class="marquee-list animate-marquee-left *:after:bg-black">
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
                <!-- duplikat supaya looping mulus -->
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
                
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
                <!-- duplikat supaya looping mulus -->
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
            </ul>
        </div>
    </div>
</template>
<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';
    @layer components{
        .marquee{
            @apply -mt-14;
            @apply md:-mt-15;
            @apply lg:-mt-35 lg:mb-14;
            .marquee-item{
                @apply overflow-hidden bg-[#F2E93F] -mx-10 py-5 relative whitespace-nowrap;
                @apply lg:py-10;
                .marquee-list{
                    @apply inline-flex;
                    li{
                        @apply px-1.5 after:ml-3 after:inline-block after:size-2 after:rounded-full after:bg-black
                    }
                }
            }
            .animate-marquee-left{
                animation: marquee-left 20s linear infinite
            }
            .animate-marquee-right{
                animation: marquee-right 20s linear infinite
            }
        }
        @keyframes marquee-left{
            0%{
                transform: translateX(0%);
            }
            100%{
                transform: translateX(-50%);
            }
        }
        @keyframes marquee-right{
            0%{
                transform: translateX(-50%)
            }
            100%{
                transform: translateX(0%)
            }
        }
    }
</style>