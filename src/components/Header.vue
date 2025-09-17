<script setup>
    import Logo from '../assets/image/logo.png';
    import LogoPowered from '../assets/image/logo-powered.png';
</script>
<template>
    <header class="header bg-primary text-white">
        <div class="container">
            <div class="header-wrapper">
                <div class="header-logo">
                    <a href="#" class="header-logo-item header-logo-item--main">
                        <img class="header-logo-image w-full h-full object-contain" :src="Logo" width="93" height="52" alt="logo">
                    </a>
                    <a href="#" class="header-logo-item header-logo-item--powered border-white">
                        <img class="header-logo-image w-full h-full object-contain" :src="LogoPowered" width="97" height="26" alt="logo">
                    </a>
                </div>
                <div id="search-container" class="header-search bg-white text-black" role="search" method="get" action="https://www.liputan6.com/search" autocomplete="off">
                    <!-- <input class="header-search-input placeholder:text-neutral-500 py-2 flex-1 outline-none" type="text" value="" name="q" id="q" placeholder="">
                    <div class="w-full max-w-md mx-auto mt-20"> -->
                        <input
                        id="search-input"
                        type="text"
                        class="header-search-input placeholder:text-neutral-500"
                        autocomplete="off"
                        />
                        <span class="header-placeholder">Cari Product...</span>
                        <button class="header-search-button" type="button">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1912 21L16.8512 16.66M19.1912 11C19.1912 15.4183 15.6094 19 11.1912 19C6.77288 19 3.19116 15.4183 3.19116 11C3.19116 6.58172 6.77288 3 11.1912 3C15.6094 3 19.1912 6.58172 19.1912 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <div
                        id="dropdown"
                        class="header-search-dropdown border-gray-300 bg-white text-sm text-gray-700 hidden"
                        ></div>
                    <div id="result-section" class="mt-6 min-h-[60px] hidden"></div>
                </div>
                <div class="header-right">
                    <a href="#" class="header-right-item">Official Partner</a>
                </div>
                <!-- <ul class="header-submenu flex items-center overflow-x-auto whitespace-nowrap -mx-4 px-1 text-white *:*:block *:*:py-2.5 *:*:px-3">
                    <li class="header--submenu__item">
                        <a class="header--submenu__link" href="#">Paling diminati</a>
                    </li>
                    <li class="header--submenu__item">
                        <a class="header--submenu__link" href="#">HP Samsung</a>
                    </li>
                    <li class="header--submenu__item">
                        <a class="header--submenu__link" href="#">Iphone 16</a>
                    </li>
                    <li class="header--submenu__item">
                        <a class="header--submenu__link" href="#">Kaos Lari</a>
                    </li>
                    <li class="header--submenu__item">
                        <a class="header--submenu__link" href="#">Mainan Anak</a>
                    </li>
                    <li class="header--submenu__item">
                        <a class="header--submenu__link" href="#">Sepatu Adidas</a>
                    </li>
                    <li class="header--submenu__item">
                        <a class="header--submenu__link" href="#">Sepatu Bola</a>
                    </li>
                    <li class="header--submenu__item">
                        <a class="header--submenu__link" href="#">Sabun Mandi</a>
                    </li>
                </ul> -->
            </div>
        </div>
    </header>

</template>
<style>
    @reference "tailwindcss";
    @import '../assets/sass/theme.min.css';

    .header{
        @apply pt-2.5 pb-5 inset-x-0 z-20 sticky top-0;
        @apply lg:py-3;
        .header-wrapper{
            @apply flex flex-col items-center gap-x-12;
            @apply lg:flex-row;
        }
        .header-placeholder{
            @apply h-fit absolute left-4 inset-y-0 my-auto pointer-events-none transition-opacity whitespace-nowrap duration-500;
        }
        .header-logo{
            @apply flex items-center justify-center gap-2.5 mb-2.5 shrink-0;
            @apply lg:mb-0;
            .header-logo-item--main{
                @apply h-13;
                @apply lg:w-34 lg:h-18;
            }
            .header-logo-item--powered{
                @apply py-1 border-l pl-2.5 h-9 w-30;
            }
        }
        .header-search{
            @apply flex items-center justify-between rounded-lg gap-2 w-full mx-auto relative pr-4;
            .header-search-input{
                @apply w-full p-2 pl-4 focus:outline-none flex-1 outline-none;
            }
            .header-search-dropdown{
                @apply absolute top-full left-0 mt-1 w-full rounded border shadow-md z-10 max-h-60 overflow-y-auto text-sm;
            }
        }
        .header-right{
            @apply hidden whitespace-nowrap lg:block
        }
    }
</style>