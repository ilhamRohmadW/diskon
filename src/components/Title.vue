<script setup>
    defineProps(['titleClass','title','subTitle','subTitleClass','imgLeft','imgRight','imgLeftClass','imgRightClass']);
</script>

<template>
    <div class="section-title mb-5 flex flex-col items-center text-center">
        <span 
            class="section-title-main font-head mb-2.5 flex items-center gap-2.5"
            :class="titleClass || 'text-xl'"
            >
            <figure 
                v-if="imgLeft" 
                    :class="imgLeftClass">
                <img 
                    :src="imgLeft" alt="" 
                    class="w-full h-full object-contain"/>
            </figure>
            {{ title }}
            <figure 
                v-if="imgRight" 
                :class="imgRightClass">
                <img 
                    :src="imgRight" alt="" 
                    class="w-full h-full object-contain"/>
            </figure>
        </span>
        <span 
            class="section-title-sub font-light" 
            v-if="subTitle" 
            :class="subTitleClass">{{ subTitle }}
        </span>
    </div>
</template>