<script setup>
//component
import HeaderC from './components/Header.vue'
import FooterC from './components/Footer.vue'
import TitleC from './components/Title.vue'
import Pagination from './components/Pagination.vue'

//image
import Product1 from './assets/image/product-1.png'
import Product2 from './assets/image/product-2.png'
import Product3 from './assets/image/product-3.png'
</script>

<template>
    <HeaderC/>
    <main class="main flex flex-col overflow-x-hidden">
        <section class="section section--filter py-14 lg:py-20">
            <div class="container">
                <TitleC 
                class="section-title--centered"
                title="Best Pick Today"
                titleClass="text-2xl"
                linkClass="lg:hidden"
                />
                
                <div id="filterSection" class="filter">
                    <!-- Sidebar Filter -->
                    <div class="filter-aside group/filterAside text-lg bg-secondary">
                        <div class="filter-aside-trigger lg:cursor-default">
                            <h2 class="font-semibold">Filter</h2>
                            <svg class="group-[.--open]/filterAside:hidden lg:hidden" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L8 8L1 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            <button id="clearFilter" class="filter-aside-trigger-btn hidden group-[.--open]/filterAside:block lg:block text-sm text-red-600">Clear</button>
                        </div>
                        
                        <!-- Kategori -->
                        <details class="filter-aside-item">
                            <summary class="filter-aside-item-trigger font-medium">
                                <span>Kategori</span>
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L8 8L1 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </summary>
                            <div class="filter-aside-item-main">
                                <label>
                                    <span>Mens daily</span>
                                    <input type="checkbox" value="Mens" class="filter-category">
                                </label>
                                <label>
                                    <span>Female</span>
                                    <input type="checkbox" value="Female" class="filter-category">
                                </label>
                                <label>
                                    <span>Mom&Kids</span>
                                    <input type="checkbox" value="Mom&Kids" class="filter-category">
                                </label>
                                <label>
                                    <span>Genz</span>
                                    <input type="checkbox" value="Genz" class="filter-category">
                                </label>
                            </div>
                        </details>
                        
                        <!-- Partner -->
                        <details class="filter-aside-item">
                            <summary class="filter-aside-item-trigger font-medium">
                                <span>Partner</span>
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L8 8L1 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </summary>
                            <div class="filter-aside-item-main">
                                <label>
                                    <span>Official Store</span>
                                    <input type="checkbox" value="Official" class="filter-partner">
                                </label>
                                <label>
                                    <span>Seller</span>
                                    <input type="checkbox" value="Seller" class="filter-partner">
                                </label>
                            </div>
                        </details>
                        
                        <!-- Harga -->
                        <details class="filter-aside-item">
                            <summary class="filter-aside-item-trigger font-medium">
                                <span>Harga</span>
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L8 8L1 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </summary>
                            <div class="filter-aside-item-main">
                                <div>
                                    <input type="text" id="minPrice" placeholder="Min (contoh: 100000 / 100.000)" class="filter-aside-item-price text-sm bg-white">
                                    <small id="minPriceNotice" class="text-red-500 text-xs block mt-1 hidden">Nominal harus berupa angka. Contoh: 100000 atau 100.000</small>
                                </div>
                                <div>
                                    <input type="text" id="maxPrice" placeholder="Max (contoh: 200000 / 200.000)" class="filter-aside-item-price text-sm bg-white">
                                    <small id="maxPriceNotice" class="text-red-500 text-xs block mt-1 hidden">Nominal harus berupa angka. Contoh: 200000 atau 200.000</small>
                                </div>
                            </div>
                        </details>
                        
                        <button id="applyFilterMobile" class="filter-aside-btn bg-fifth text-white">Terapkan</button>
                        
                    </div>
                    
                    <!-- Product List -->
                    <div class="filter-main">
                        <!-- Spinner -->
                        <div id="loading" class="filter-main-status">
                            <div class="filter-main-status-spin border-gray-200 border-t-primary"></div>
                            <p class="text-sm text-gray-500 mt-2">Loading...</p>
                        </div>
                        
                        <!-- Produk tidak ditemukan -->
                        <div id="noResult" class="filter-main-status text-gray-500">
                            ❌ Produk tidak ditemukan
                        </div>
                        
                        <!-- Grid Produk -->
                        <div id="productList" class="filter-main-product">
                            
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mens"
                                data-partner="Official"
                                data-price="15000000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product1" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Laptop Gaming</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">120 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Female"
                                data-partner="Seller"
                                data-price="75000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product2" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Kaos Polos</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">300 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 75.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Genz"
                                data-partner="Seller"
                                data-price="15000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product3" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Roti Coklat</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">500 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mens"
                                data-partner="Official"
                                data-price="15000000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product1" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Laptop Gaming</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">120 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mom&Kids"
                                data-partner="Seller"
                                data-price="75000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product2" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Kaos Polos</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">300 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 75.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Genz"
                                data-partner="Seller"
                                data-price="15000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product3" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Roti Coklat</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">500 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mens"
                                data-partner="Official"
                                data-price="15000000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product1" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Laptop Gaming</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">120 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mom&Kids"
                                data-partner="Seller"
                                data-price="75000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product2" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Kaos Polos</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">300 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 75.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Genz"
                                data-partner="Seller"
                                data-price="15000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product3" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Roti Coklat</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">500 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                            
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mens"
                                data-partner="Official"
                                data-price="15000000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product1" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Laptop Gaming</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">120 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Female"
                                data-partner="Seller"
                                data-price="75000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product2" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Kaos Polos</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">300 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 75.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Genz"
                                data-partner="Seller"
                                data-price="15000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product3" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Roti Coklat</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">500 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mens"
                                data-partner="Official"
                                data-price="15000000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product1" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Laptop Gaming</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">120 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Female"
                                data-partner="Seller"
                                data-price="75000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product2" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Kaos Polos</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">300 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 75.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Genz"
                                data-partner="Seller"
                                data-price="15000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product3" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Roti Coklat</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">500 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                            
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mens"
                                data-partner="Official"
                                data-price="15000000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product1" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Laptop Gaming</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">120 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Female"
                                data-partner="Seller"
                                data-price="75000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product2" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Kaos Polos</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">300 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 75.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Genz"
                                data-partner="Seller"
                                data-price="15000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product3" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Roti Coklat</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">500 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Mens"
                                data-partner="Official"
                                data-price="15000000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product1" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Laptop Gaming</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">120 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 15.000.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        
                            <a href="#" class="item group hover:shadow-(--item-shadow)"
                                data-category="Female"
                                data-partner="Seller"
                                data-price="75000">
                                <figure class="item-figure aspect-[4/3] bg-gray-100">
                                    <img :src="Product2" class="w-full h-full object-contain" alt="">
                                </figure>
                                <div class="item-detail">
                                    <span class="item-shop text-primary text-[8px] lg:text-xs">yessicas shop</span>
                                    <span class="item-title text-[10px] font-bold lg:text-base">Kaos Polos</span>
                                    <span class="item-sold text-neutral-400 text-[8px] lg:text-xs">300 Sold</span>
                                </div>
                                <div class="item-price">
                                    <span class="item-price-tag text-primary text-xs font-bold lg:text-xl">Rp 75.000</span>
                                    <div class="item-price-detail text-[8px] lg:text-sm">
                                        <span class="item-price-real line-through text-neutral-400">Rp200.250</span>
                                        <span class="item-price-discount bg-primary/50 text-white lg:text-xs">save up to 50%</span>
                                    </div>
                                </div>
                            </a>
                        

                        </div>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </section>
    </main>
<FooterC/>
</template>

<style>
    @reference "tailwindcss";
    @import './assets/sass/theme.min.css';
    @layer components{
        .filter{
            @apply flex flex-col items-start lg:flex-row gap-6;
            .filter-aside{
                @apply w-full border divide-y overflow-hidden max-h-13 transition-[max-height] duration-500;
                @apply lg:w-64 lg:max-h-[1000px] lg:border-b-0;
                &.--open{
                    @apply max-h-[1000px] border-b-0;
                }
                .filter-aside-trigger{
                    @apply px-5 py-3 flex items-center justify-between cursor-pointer min-h-12 outline-none;
                    .filter-aside-trigger-btn{
                        @apply cursor-pointer;
                    }
                }
                .filter-aside-item{
                    .filter-aside-item-trigger{
                        @apply px-5 py-3 flex items-center justify-between cursor-pointer min-h-12 outline-none;
                    }
                    .filter-aside-item-main{
                        @apply max-h-12 transition-[max-height] duration-500 px-5 pb-4 flex flex-col gap-3;
                        label{
                            @apply w-full flex justify-between cursor-pointer relative;
                            &::after{
                                @apply content-[''] absolute inset-y-0 right-0 my-auto flex items-center justify-center size-4 rounded bg-[#E5D9B8];
                            }
                            &:has(> input:checked)::after{
                                @apply bg-primary content-['✓'] text-white text-xs;
                            }
                            input{
                                @apply hidden;
                            }
                        }
                        .filter-aside-item-price{
                            @apply w-full border p-1 rounded outline-none;
                        }
                    }
                    svg{
                        @apply transition;
                    }
                    &[open]{
                        svg{
                            @apply rotate-90;
                        }
                        .filter-aside-item-main{
                            @apply max-h-[1000px];
                        }
                    }
                }
                .filter-aside-btn{
                    @apply px-5 w-full min-h-12 text-left block md:hidden;
                }
            }
        }
        .filter-main{
            @apply flex-1;
            .filter-main-status{
                @apply text-center py-10;
                .filter-main-status-spin{
                    @apply size-8 border-4 rounded-full animate-spin mx-auto;
                }
            }
            .filter-main-product{
                @apply grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-y-10;
                .item{
                    @apply flex flex-col border rounded-lg overflow-hidden;
                    .item-figure{
                        @apply p-2;
                    }
                    .item-detail,
                    .item-price{
                        @apply py-1.5 px-3 flex flex-col;
                        @apply lg:py-2.5 lg:px-5;
                    }
                    .item-price{
                        @apply border-t;
                        .item-price-tag{
                            @apply block;
                        }
                        .item-price-detail{
                            @apply flex items-center gap-1.5;
                        }
                        .item-price-discount{
                            @apply rounded py-0.5 px-1;
                        }
                    }
                    .item-shop{
                        @apply mb-0.5;
                    }
                    .item-title{
                        @apply mb-1;
                    }
                }
            }
        }
    }

</style>

