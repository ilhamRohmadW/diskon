<script setup>
    defineProps(['image','title']);
</script>

<template>
    <div class="section--pick-box">
        <div class="section--pick-title flex items-center justify-between mb-6">
            <span class="text-xl font-head">{{ title }}</span>
            <a href="#" class="flex items-center gap-1">
                <span>Selengkapnya</span>
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7586 5.3C14.3206 5.3 12.4138 3.8982 12.4138 1.7V0.5H10.5517V1.7C10.5517 3.2982 11.1928 4.1991 12.4138 5.3H0V7.7H12.4138C11.1928 8.8009 10.5517 9.7018 10.5517 11.3V12.5H12.4138V11.3C12.4138 9.1027 14.3206 7.7 16.7586 7.7H18V5.3H16.7586Z" fill="currentColor"/></svg>
            </a>
        </div>
        <div class="section--pick-list overflow-x-auto -mx-6 px-6 flex items-start gap-3 snap-x snap-mandatory scroll-smooth">
            <a v-for="n in 5" :key="n" href="#" class="flex flex-col shrink-0 w-40 snap-always snap-start scroll-ms-6 border rounded-lg overflow-hidden">
                <figure class="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img :src="image" class="w-full h-full object-contain" alt="">
                </figure>
                <div class="item-desc py-1.5 px-3 flex flex-col">
                    <span class="text-third text-[8px] mb-0.5">yessicas shop</span>
                    <span class="text-[10px] font-bold mb-1">Powerstay Transferproof Matte Lip cream</span>
                    <span class="text-neutral-400 text-[8px]">1.100K Sold</span>
                </div>
                <div class="item-price py-1.5 px-3 flex flex-col border-t">
                    <span class="text-third text-xs font-bold block">Rp107.250</span>
                    <div class="flex items-center gap-1.5 text-[8px]">
                        <span class="line-through text-neutral-400">Rp200.250</span>
                        <span class="bg-third/50 text-white rounded py-0.5 px-1">save up to 50%</span>
                    </div>
                </div>
            </a>
        </div>

    </div>
</template>