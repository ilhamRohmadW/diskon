<script setup>
    import Logo from '../assets/image/logo.png';
    import Date from '../assets/image/date.png';
</script>
<template>
    <footer class="footer bg-[#1C1C1E] text-white">
        <div class="container">
            <div class="footer-wrapper flex flex-col gap-8 py-12 text-sm">
                <div class="footer-top flex flex-col gap-3">
                    <a href="#" class="header-logo flex items-end justify-center mb-2.5">
                        <img class="header-logo-image" :src="Logo" width="213" height="78" alt="logo">
                        <img class="header-logo-date" :src="Date" width="31" height="38" alt="logo">
                    </a>
                    <p class="footer-desc text-center">Hadir buat kamu yang doyan cari diskon kece! Dari produk hits, artikel seru, sampai daily deals yang sayang dilewatin - semua ada di sini!</p>
                </div>
                <nav class="footer-list grid grid-cols-2 text-center gap-y-1.5">
                    <a href="#">Tentang Diskonverse</a>
                    <a href="#">Tentang Kami</a>
                    <a href="#">Official Partner</a>
                    <a href="#">Bantuan</a>
                </nav>
                <div class="footer-contact text-center">
                    <div class="footer-contact-item flex flex-col items-center gap-1">
                        <span class="footer-contact-title font-head">Support:</span>
                        <span class="footer-contact-detail font-light">support@diskonverse.com</span>
                    </div>
                    <div class="footer-contact-item flex flex-col items-center gap-1">
                        <span class="footer-contact-title font-head">Partnership:</span>
                        <span class="footer-contact-detail font-light">partnership@diskonverse.com</span>
                    </div>
                </div>
                <div class="footer-socmed flex items-center justify-center gap-8">
                    <a class="footer-socmed-item" href="#">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 13C24 6.91278 19.072 2 13 2C6.928 2 2 6.91278 2 13C2 18.3373 5.984 22.9744 11 24V16H9V13H11V10C11 7.87168 12.877 6 15 6H17V10H15C14.395 10 14 10.3935 14 11V13H17V16H14V24C19.555 23.4486 24 18.7233 24 13Z" fill="currentColor"/></svg>
                    </a>
                    <a class="footer-socmed-item" href="#">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2H18C21.52 2 24 4.48 24 8V18C24 19.6921 23.1965 20.8035 22 22C20.8035 23.1965 19.6921 24 18 24H8C4.48 24 2 21.52 2 18V8C2 6.30792 2.80352 5.19648 4 4C5.19648 2.80352 6.30792 2 8 2ZM8 4C6.94974 4 5.74264 4.25736 5 5C4.25736 5.74264 4 6.94974 4 8V18C4 20.189 5.811 22 8 22H18C19.0503 22 20.2574 21.7426 21 21C21.7426 20.2574 22 19.0503 22 18V8C22 5.811 20.189 4 18 4H8ZM19 6C19.3647 6 19.7421 5.74214 20 6C20.2579 6.25786 20 6.63533 20 7C20 7.36467 20.2579 7.74214 20 8C19.7421 8.25786 19.3647 9 19 9C18.6353 9 18.2579 8.25786 18 8C17.7421 7.74214 17 7.36467 17 7C17 6.63533 17.7421 6.25786 18 6C18.2579 5.74214 18.6353 6 19 6ZM13 8C14.4587 8 15.9685 7.96855 17 9C18.0315 10.0315 19 11.5413 19 13C19 14.4587 18.0315 15.9685 17 17C15.9685 18.0315 14.4587 19 13 19C11.5413 19 10.0315 18.0315 9 17C7.96855 15.9685 8 14.4587 8 13C8 11.5413 7.96855 10.0315 9 9C10.0315 7.96855 11.5413 8 13 8ZM13 10C12.1248 10 11.6189 10.3811 11 11C10.3811 11.6189 10 12.1248 10 13C10 13.8752 10.3811 14.3811 11 15C11.6189 15.6189 12.1248 16 13 16C13.8752 16 14.3811 15.6189 15 15C15.6189 14.3811 16 13.8752 16 13C16 12.1248 15.6189 11.6189 15 11C14.3811 10.3811 13.8752 10 13 10Z" fill="currentColor"/></svg>
                    </a>
                    <a class="footer-socmed-item" href="#">
                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 1.5H22L14 10.5L23 22.5H16L10 15.5L4 22.5H0L9 12.5L0 1.5H7L12 8.5L18 1.5ZM17 20.5H19L6 3.5H4L17 20.5Z" fill="currentColor"/></svg>
                    </a>
                    <a class="footer-socmed-item" href="#">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 15.9995L17 12.9995L11 8.99954V15.9995ZM24 6.99954C24.143 7.50312 23.934 8.1424 24 8.99954C24.077 9.85669 24 11.3567 24 11.9995V12.9995C24 15.346 24.308 16.896 24 17.9995C23.725 18.9638 22.99 19.7317 22 19.9995C21.483 20.1388 20.452 19.9353 19 19.9995C17.57 20.0745 16.21 19.9995 15 19.9995H13C8.39099 19.9995 5.13299 20.2995 3.99999 19.9995C3.00999 19.7317 2.27499 18.9638 1.99999 17.9995C1.85699 17.496 2.06599 16.8567 1.99999 15.9995C1.92299 15.1424 1.99999 13.6424 1.99999 12.9995C1.99999 10.6531 1.69199 8.10312 1.99999 6.99954C2.27499 6.03526 3.00999 5.2674 3.99999 4.99954C4.51699 4.86026 5.54799 5.06383 6.99999 4.99954C8.42999 4.92454 9.78999 4.99954 11 4.99954H13C17.609 4.99954 20.867 4.69954 22 4.99954C22.99 5.2674 23.725 6.03526 24 6.99954Z" fill="currentColor"/></svg>
                    </a>
                </div>
                <p class="footer__copyright text-center">Copyright © 2025. Diskonverse. <br class="lg:hidden"> KLY KapanLagi Youniverse. All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>