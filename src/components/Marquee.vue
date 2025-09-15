<script setup>
</script>
<template>
    <div class="max-w-xl mx-auto font-bold -mb-14">
        <!-- Marquee kiri -->
        <div class="overflow-hidden bg-[#F2E93F] -mx-10 py-5 relative whitespace-nowrap -rotate-7">
            <ul class="inline-flex animate-marquee-right *:px-1.5 *:after:ml-3 *:after:inline-block *:after:size-2 *:after:rounded-full *:after:bg-black">
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
                <!-- duplikat supaya looping mulus -->
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
            </ul>
        </div>

        <!-- Marquee kanan -->
        <div class="overflow-hidden bg-[#F2E93F] -mx-10 py-5 relative whitespace-nowrap rotate-7 translate-y-[-150%]">
            <ul class="inline-flex animate-marquee-left *:px-1.5 *:after:ml-3 *:after:inline-block *:after:size-2 *:after:rounded-full *:after:bg-black">
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
                <!-- duplikat supaya looping mulus -->
                <li>Waktunya Cari Diskon di Harbolnas</li>
                <li>HEMAT HINGGA 50%</li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass">
    @keyframes marquee-left
        0%
            transform: translateX(0%)
        100%
            transform: translateX(-50%)
    @keyframes marquee-right
        0%
            transform: translateX(-50%)
        100%
            transform: translateX(0%)
    .animate-marquee
        &-left
            animation: marquee-left 20s linear infinite
        &-right
            animation: marquee-right 20s linear infinite
</style>