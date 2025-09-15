window.addEventListener("load", () => {    
    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('dropdown');
    const resultSection = document.getElementById('result-section');
    const container = document.getElementById('search-container');
    
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
                    <div class="w-6 h-6 border-2 border-t-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
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
        setTimeout(() => { // simulasi loading
            fetch('posts.json')
            .then(res => res.json()) // ambil file JSON lokal
            .then(data => {
                allSuggestions = data.map(p => p.title);
                loading = false;
                renderSuggestions(getFilteredSuggestions(input.value));
            })
            .catch(() => {
                allSuggestions = [];
                loading = false;
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
    });
    
    input.addEventListener('input', () => {
        renderSuggestions(getFilteredSuggestions(input.value));
    });
    
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = input.value.trim();
            if (value) {
                addToRecent(value);
                showDropdown(false);
                showResult(value);
            }
        }
    });
    
    document.addEventListener('click', e => {
        if (!container.contains(e.target)) {
            showDropdown(false);
        }
    });   
    
    
    let lastScrollTop = 0, lastHeaderPosition = 0;
    window.addEventListener('scroll', function() {
        //unsticky header
        let scrollHeaderTop = window.pageYOffset || document.documentElement.scrollTop,
        limitHeader = document.querySelector('.header').offsetHeight;
        if (scrollHeaderTop  > limitHeader){
            if (scrollHeaderTop  > lastHeaderPosition) {
                document.querySelector('.header').classList.add('--unsticky')
            } else {
                document.querySelector('.header').classList.remove('--unsticky')
            }
        }
        lastHeaderPosition = scrollHeaderTop;
    })
    
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
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    var productDesc = new Swiper(".section--product-desc", {
        loop: 'true',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
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
        const items = videoTab.querySelectorAll('.section--video-list > div');
        
        items.forEach(item => {
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
})

