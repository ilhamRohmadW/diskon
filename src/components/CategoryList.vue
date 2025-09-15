<script setup>
import Cat1 from '../assets/image/cat-1.png'
import Cat2 from '../assets/image/cat-2.png'
import Cat3 from '../assets/image/cat-3.png'
import Cat4 from '../assets/image/cat-4.png'

import { ref } from 'vue'

var category = ref([
{ 
    link: '#',
    title: 'Mens Daily', 
    image: Cat1,
    alt: 'category 1'
},
{ 
    link: '#',
    title: 'Female', 
    image: Cat2,
    alt: 'category 2'
},
{ 
    link: '#',
    title: 'Mom & Kids?',
    image: Cat3,
    alt: 'category 3'
},
{ 
    link: '#',
    title: 'GenZ', 
    image: Cat4,
    alt: 'category 4'
},
]);
</script>

<template>
    <div class="section--category-list flex items-center gap-1.5 overflow-x-auto -mx-6 px-6 snap-x snap-mandatory scroll-smooth">
        <template v-for="item in category">
            <a :href="item.link" class="border-3 rounded-lg bg-white w-40 h-44 shrink-0 flex flex-col items-center justify-between pb-3 pt-10 text-center snap-always snap-start scroll-ms-6">
                <figure class="h-20">
                    <img class="h-full w-full object-contain" :src="item.image" :alt="item.alt">
                </figure>
                <span class="font-bold text-xl">{{item.title}}</span>
            </a>
        </template>
    </div>
</template>