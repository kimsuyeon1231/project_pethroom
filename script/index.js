/* 배너 */
const bnrSlide = new Swiper('#bnr .swiper',{
    loop : true,
    centeredSlides: true,
    pagination: {
        el: "#bnr .swiper-pagination",
        clickable: true, 
    },
    autoplay : {delay:3000,},
    })

/* 베스트셀러 */
const bestSeller = new Swiper('#best_seller .swiper',{
    slidesPerView : 5,
    spaceBetween : 30,
    loop : true,
    centeredSlides: true,
    navigation: {
        nextEl: '.best_control .swiper-button-next',
        prevEl: '.best_control .swiper-button-prev',
    },
    scrollbar: {
        el: '#best_seller .swiper-scrollbar',
        draggable: true,
        dragSize: 'auto',
    },
    })

/* 포 도그 */
const forDogSeller = new Swiper('#for_dog .swiper',{
    slidesPerView : 1,
    loop : true,
    centeredSlides: true,
    navigation: {
        nextEl: '#for_dog .swiper-button-next',
        prevEl: '#for_dog .swiper-button-prev',
    },
    scrollbar: {
        el: '#for_dog .swiper-scrollbar',
        draggable: true,
        dragSize: 'auto',
    },
    })

/* 포 캣 */
const forCatSeller = new Swiper('#for_cat .swiper',{
    slidesPerView : 1,
    loop : true,
    centeredSlides: true,
    navigation: {
        nextEl: '#for_cat .swiper-button-next',
        prevEl: '#for_cat .swiper-button-prev',
    },
    scrollbar: {
        el: '#for_cat .swiper-scrollbar',
        draggable: true,
        dragSize: 'auto',
    },
    })

/* 어바웃 */
