document.addEventListener('DOMContentLoaded', function() {
    const initLanguageSelector = () => {
        const langSelector = document.getElementById('langSelector');
        if (!langSelector) return;

        langSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
        });

        document.addEventListener('click', function() {
            langSelector.classList.remove('active');
        });

        const langOptions = document.querySelectorAll('.lang_option');
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.dataset.lang;
                const flagSrc = this.querySelector('img').src;
                const langText = this.querySelector('.p2').textContent;

                const selectLang = langSelector.querySelector('.select_lang');
                selectLang.innerHTML = `
                    <img src="${flagSrc}" alt="${langText}">
                    <p class="p2">${langText}</p>
                    <img src="./img/down_arrow.svg" alt="">
                `;

                console.log('Language changed to:', lang);
                langSelector.classList.remove('active');
            });
        });
    };

    const initSwipers = () => {
        const swiperBedroomOne = new Swiper('.swiperBedroomOne', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },


        });

        const swiperBedroomTwo = new Swiper('.swiperBedroomTwo', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
    };

    initLanguageSelector();
    initSwipers();
});