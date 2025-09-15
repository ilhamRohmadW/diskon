<script setup>
    import Logo from '../assets/image/logo.png';
    import Date from '../assets/image/date.png';
</script>
<template>
    <header class="header bg-primary py-4 inset-x-0 z-20 sticky top-0 transition-transform shadow-md duration-500">
        <div class="container">
            <div class="header-wrapper flex flex-col">
                <a href="#" class="header-logo flex items-end justify-center mb-2.5">
                    <img class="header-logo-image" :src="Logo" width="112" height="41" alt="logo">
                    <img class="header-logo-date" :src="Date" width="16" height="20" alt="logo">
                </a>
                <form id="headerSearch" class="header-search bg-white flex items-center justify-between rounded-lg gap-2" role="search" method="get" action="https://www.liputan6.com/search" autocomplete="off">
                    <!-- <input class="header-search-input placeholder:text-neutral-500 py-2 flex-1 outline-none" type="text" value="" name="q" id="q" placeholder="Cari Product...">
                    <div class="w-full max-w-md mx-auto mt-20"> -->
                        
                        <div class="w-full mx-auto">
                            <div id="search-container" class="relative flex items-center justify-between pr-4">
                                <input
                                id="search-input"
                                type="text"
                                placeholder="Search..."
                                class="w-full p-2 pl-4 focus:outline-none"
                                autocomplete="off"
                                />
                                <button class="header-search-button " type="button">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 14L11.1067 11.1067M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"c/></svg>
                                </button>
                                <div
                                id="dropdown"
                                class="absolute top-full left-0 mt-1 w-full rounded border border-gray-300 bg-white shadow-md z-10 max-h-60 overflow-y-auto text-sm text-gray-700 hidden"
                                ></div>
                            </div>
                        <div id="result-section" class="mt-6 min-h-[60px] hidden"></div>
                    </div>
                </form>
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
<!-- <style lang="sass">
    @import '../assets/sass/components/header.css'
</style> -->