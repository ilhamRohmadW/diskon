window.addEventListener("load", () => {    
    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('dropdown');
    const resultSection = document.getElementById('result-section');
    const container = document.getElementById('search-container');
    
    const PhSearch = document.querySelector(".header-placeholder");
    let PhIndex = 0;
    let PhInterval;

    const placeholders = [
        "Samsung Galaxy A14",
        "Iphone 14 Pro Max",
        "Macbook Air M2",
        "Lipstick Merah",
        "Parfum Wanita",
    ];

    let allSuggestions = [];
    let recent = [];
    let loading = false;
    
    function showDropdown(show) {
        dropdown.classList.toggle('hidden', !show);
    }
    
    function setLoading(isLoading) {
        loading = isLoading;
        if (isLoading) {
            dropdown.innerHTML = `
                <div class="flex justify-center items-center p-4">
                    <div class="w-6 h-6 border-2 border-t-2 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                </div>
            `;
            showDropdown(true);
        }
    }
    
    function getFilteredSuggestions(query) {
        if (!query.trim()) {
            return recent.length > 0 ? recent.slice(0, 5) : allSuggestions.slice(0, 5);
        }
        return allSuggestions
        .filter(s => s.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);
    }
    
    function addToRecent(value) {
        if (!recent.includes(value)) {
            recent.unshift(value);
            if (recent.length > 10) recent.pop();
        }
    }
    
    function renderSuggestions(suggestions) {
        if (loading) return;
        
        dropdown.innerHTML = '';
        const ul = document.createElement('ul');
        
        if (suggestions.length === 0) {
            dropdown.innerHTML = `<div class="px-4 py-2 text-gray-500 italic">Not found</div>`;
            showDropdown(true);
            return;
        }
        
        suggestions.forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            li.className = 'cursor-pointer px-4 py-2 hover:bg-gray-100';
            li.onclick = () => {
                input.value = s;
                addToRecent(s);
                showDropdown(false);
                showResult(s);
                hideRotation();
            };
            ul.appendChild(li);
        });
        
        dropdown.appendChild(ul);
        
        if (recent.length > 0) {
            const clearBtn = document.createElement('div');
            clearBtn.className = "px-4 py-2 text-red-600 text-sm cursor-pointer hover:bg-gray-100 border-t";
            clearBtn.textContent = "Clear Recent";
            clearBtn.onclick = () => {
                recent = [];
                renderSuggestions(getFilteredSuggestions(input.value));
            };
            dropdown.appendChild(clearBtn);
        }
        
        showDropdown(true);
    }
    function fetchSuggestions() {
        setLoading(true);
        setTimeout(() => {
            fetch('./posts.json')
            .then(res => res.json())
            .then(data => {
                allSuggestions = data.map(p => p.title);
                setLoading(false);
                renderSuggestions(getFilteredSuggestions(input.value));
            })
            .catch(err => {
                console.error('Fetch failed:', err);
                allSuggestions = [];
                setLoading(false);
                renderSuggestions([]);
            });
        }, 800);
    }
    
    function showResult(value) {
        resultSection.innerHTML = `
            <div class="p-4 space-y-2 animate-pulse">
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                <div class="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
        `;
        setTimeout(() => {
            resultSection.innerHTML = `
            <div class="p-4 bg-blue-50 border border-blue-200 rounded text-blue-800 text-sm">
                <p><strong>Search result:</strong> ${value}</p>
            </div>
        `;
        }, 1000);
    }
    
    input.addEventListener('focus', () => {
        if (allSuggestions.length === 0) {
            fetchSuggestions();
        } else {
            renderSuggestions(getFilteredSuggestions(input.value));
        }
        
        stopRotation();
        if (input.value.length <= 0 ) {
            PhSearch.textContent = "Cari Product...";
            showRotation();
        }
    });
    
    input.addEventListener('input', () => {
        renderSuggestions(getFilteredSuggestions(input.value));
        hideRotation();
    });
    
    function startRotation() {
        PhInterval = setInterval(() => {
            
            hideRotation();
            setTimeout(() => {
                PhIndex = (PhIndex + 1) % placeholders.length;
                PhSearch.textContent = placeholders[PhIndex];
                showRotation();
            }, 500);
        }, 2000);
    }

    function hideRotation() {
        PhSearch.classList.add('transition-none!')
        PhSearch.style.opacity = 0; // fade out
    }
    
    function showRotation() {
        PhSearch.classList.remove('transition-none!')
        PhSearch.style.opacity = 1; // fade in
    }
    
    function stopRotation() {
        clearInterval(PhInterval);
    }
    
    startRotation();
    
    input.addEventListener("blur", () => {
        setTimeout(() => {
            if (input.value.length == 0 ) {
                startRotation();
                showRotation();
            }else{
                hideRotation();
            }
        }, 100);
    });
    
    input.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = input.value.trim();
            if (value) {
                addToRecent(value);
                showDropdown(false);
                showResult(value);
            }
        }
        if (input.value.length <= 0) {
            showRotation();
        }
    });
    
    document.addEventListener('click', e => {
        if (!container.contains(e.target)) {
            showDropdown(false);
        }
    });   
    
    
    // let lastScrollTop = 0, lastHeaderPosition = 0;
    // window.addEventListener('scroll', function() {
    //     //unsticky header
    //     let scrollHeaderTop = window.pageYOffset || document.documentElement.scrollTop,
    //     limitHeader = document.querySelector('.header').offsetHeight;
    //     if (scrollHeaderTop  > limitHeader){
    //         if (scrollHeaderTop  > lastHeaderPosition) {
    //             document.querySelector('.header').classList.add('--unsticky')
    //         } else {
        //             document.querySelector('.header').classList.remove('--unsticky')
    //         }
    //     }
    //     lastHeaderPosition = scrollHeaderTop;
    // })
    
    var heroSwiper = new Swiper(".section--hero-swiper", {
        loop: 'true',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".section--hero-swiper .swiper-pagination",
        },
    });
    var productImage = new Swiper(".section--product-image", {
        loop: 'true',
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    var productDesc = new Swiper(".section--product-desc", {
        loop: 'true',
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: ".section--product .swiper-button-next",
            prevEl: ".section--product .swiper-button-prev",
        },
    });
    
    productDesc.controller.control = productImage;
    productImage.controller.control = productDesc;
    
    // video
    let videoTab = document.querySelector('.section--video-box');
    if (videoTab) {
        const mainImg = videoTab.querySelector('.section--video-head .vidio-embed');
        const mainTitle = videoTab.querySelector('.section--video-head .item-title');
        const items = videoTab.querySelectorAll('.section--video-list > .item');
        
        items.forEach(item => {
            if (item.classList.contains('active')) {
                mainImg.src = item.dataset.src;
                mainTitle.textContent = item.textContent.trim();
            };
            
            item.addEventListener('click', () => {
                // Update main content
                mainImg.src = item.dataset.src;
                mainTitle.textContent = item.textContent.trim();
                
                // Active state
                items.forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }
    
    let filter = document.getElementById("filterSection");
    if (filter) {
        const clearBtn = document.getElementById("clearFilter");
        const applyBtnMobile = document.getElementById("applyFilterMobile");
        const products = document.querySelectorAll(".filter-main-product .item");
        const loadingEl = document.getElementById("loading");
        const productList = document.getElementById("productList");
        const noResultEl = document.getElementById("noResult");
        
        function getNumberValue(id) {
            const inputEl = document.getElementById(id);
            const noticeEl = document.getElementById(id + "Notice");
            const val = inputEl.value.trim();
            
            noticeEl.classList.add("hidden"); // reset dulu
            
            if (val === "") return null;
            
            const clean = val.replace(/\./g, "").replace(/,/g, "");
            if (!/^\d+$/.test(clean)) {
                noticeEl.classList.remove("hidden"); // tampilkan notice
                return null;
            }
            return parseInt(clean, 10);
        }
        
        
        function getCheckedValues(selector) {
            let values = [];
            document.querySelectorAll(selector + ":checked").forEach(el => values.push(el.value));
            return values;
        }
        
        function applyFilter() {
            const categories = getCheckedValues(".filter-category");
            const partners = getCheckedValues(".filter-partner");
            const minPrice = getNumberValue("minPrice") ?? 0;
            const maxPrice = getNumberValue("maxPrice") ?? Infinity;
            
            productList.style.display = "none";
            noResultEl.classList.add("hidden");
            loadingEl.classList.remove("hidden");
            
            setTimeout(() => {
                let visibleCount = 0;
                
                products.forEach(p => {
                    const category = p.dataset.category;
                    const partner = p.dataset.partner;
                    const price = parseInt(p.dataset.price);
                    
                    const visible =
                    (categories.length === 0 || categories.includes(category)) &&
                    (partners.length === 0 || partners.includes(partner)) &&
                    price >= minPrice && price <= maxPrice;
                    
                    if (visible) {
                        p.style.display = "block";
                        visibleCount++;
                    } else {
                        p.style.display = "none";
                    }
                });
                
                loadingEl.classList.add("hidden");
                
                if (visibleCount === 0) {
                    noResultEl.classList.remove("hidden");
                } else {
                    productList.style.display = "grid";
                }
            }, 600);
        }
        
        function clearFilter() {
            document.querySelectorAll("input[type=checkbox]").forEach(el => el.checked = false);
            document.getElementById("minPrice").value = "";
            document.getElementById("maxPrice").value = "";
            products.forEach(p => p.style.display = "block");
            noResultEl.classList.add("hidden");
        }
        
        // Desktop: auto filter
        if (window.innerWidth >= 768) {
            document.querySelectorAll(".filter-category, .filter-partner").forEach(el => {
                el.addEventListener("change", applyFilter);
            });
            document.getElementById("minPrice").addEventListener("input", applyFilter);
            document.getElementById("maxPrice").addEventListener("input", applyFilter);
        }
        
        // Mobile: hanya lewat tombol
        applyBtnMobile.addEventListener("click", applyFilter);
        
        clearBtn.addEventListener("click", () => {
            clearFilter();
            if (window.innerWidth >= 768) applyFilter();
        });
        
        applyFilter();
        
        let asideTrigger = document.querySelector('.filter-aside-trigger')
        asideTrigger.addEventListener('click', () => {
            asideTrigger.parentNode.classList.toggle('--open');
        });
    }
    
    const tabs = document.querySelectorAll(".tabs button");
    if (tabs) {
        
        const contents = document.querySelectorAll(".tabs-content-item");
        
        function openTab(tabId, scrollMode = "auto") {
            contents.forEach(c => c.classList.remove("active"));
            tabs.forEach(t => t.classList.remove("active"));
            
            const targetContent = document.getElementById(tabId);
            const targetTab = document.querySelector(`[data-tab="${tabId}"]`);
            
            if (targetContent) targetContent.classList.add("active");
            if (targetTab) {
                targetTab.classList.add("active");
                
                // Scroll behavior depending on tab
                if (scrollMode !== "none") {
                    if (tabId === "tab2") {
                        targetTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                    } else {
                        targetTab.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
                    }
                }
            }
        }
        
        // On page load
        const hash = window.location.hash.substring(1);
        if (hash) {
            openTab(hash, "smooth");
        // } else {
        //     openTab("tab1", "none");
        }
        
        // On tab click
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const tabId = tab.getAttribute("data-tab");
                openTab(tabId, "smooth");
                history.replaceState(null, null, "#" + tabId);
            });
        });
        
        // Handle back/forward navigation
        window.addEventListener("hashchange", () => {
            const hash = window.location.hash.substring(1);
            if (hash) openTab(hash, "smooth");
        });
    }
})

