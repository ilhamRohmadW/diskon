<script setup>
    defineProps([
        'titleClass',
        'title',
        'subTitle',
        'subTitleClass',
        'imgSub',
        'imgLeft',
        'imgRight',
        'imgLeftClass',
        'imgRightClass',
        'linkClass'
    ]);
</script>

<template>
    <div class="section-title">
        <div class="section-title-wrapper">
            <div class="section-title-main font-head lg:text-4xl"
                :class="titleClass"
                >
                <figure 
                    class="section-title-logo"
                    v-if="imgLeft" 
                        :class="imgLeftClass">
                    <img 
                        :src="imgLeft" alt="" 
                        class="w-full h-full object-contain"/>
                </figure>
                <span>{{ title }}</span>
                <figure 
                    class="section-title-logo"
                    v-if="imgRight" 
                    :class="imgRightClass">
                    <img 
                        :src="imgRight" alt="" 
                        class="w-full h-full object-contain"/>
                </figure>
            </div>
            <div class="section-title-sub font-light lg:text-2xl">
                <span class="section-title-sub-text font-light" 
                    v-if="subTitle" 
                    :class="subTitleClass">{{ subTitle }}
                </span>
                <figure 
                    class="section-title-sub-logo"
                    v-if="imgSub">
                    <img 
                        :src="imgSub" alt="" 
                        class="w-full h-full object-contain"/>
                </figure>
            </div>
        </div>
        <a href="#" class="section-title-link font-semibold text-xl group"
            :class="linkClass"
        >
            <span>Selengkapnya</span>
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.9841 8.4985C23.1143 8.4985 19.5873 5.16517 19.5873 1.5015V0H16.4127V1.5015C16.4127 4.16516 17.6476 6.66366 19.5857 8.4985H0V11.5015H19.5857C17.6476 13.3363 16.4127 15.8348 16.4127 18.4985V20H19.5873V18.4985C19.5873 14.8363 23.1143 11.5015 26.9841 11.5015H28.5714V8.4985H26.9841Z" fill="currentColor"/></svg>
        </a>
    </div>
</template>

<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';

    @layer components{
        .section-title{
            @apply mb-5 text-center;
            @apply lg:text-left lg:flex lg:items-center lg:justify-between lg:mb-12;
            &.section-title--centered{
                @apply lg:justify-center lg:uppercase;
                .section-title-wrapper{
                    @apply lg:items-center;
                }
            }
            .section-title-wrapper{
                @apply flex flex-col items-center;
                @apply lg:items-start;
                .section-title-main{
                    @apply mb-2.5 flex items-center gap-2.5;
                    @apply lg:gap-4;
                }
                .section-title-sub{
                    @apply flex items-center gap-2;
                    @apply lg:normal-case;
                    .section-title-sub-logo{
                        @apply h-10 w-29;
                    }
                }
            }
            .section-title-link{
                @apply hidden items-center gap-4;
                @apply lg:flex;
                svg{
                    @apply transition group-hover:translate-x-1;
                }
            }
        }
    }
</style>