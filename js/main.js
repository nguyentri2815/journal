$(function() {
    // =====================================
    // Layouts/loadingPage
   
        // Animate loader off screen
        $("#preloader").delay(900).fadeOut("slow");
    
    // =====================================
    // Layouts/midbar
    const headerMid = {
        init :function(){
            this.clickSearch()
            this.clickHideModal()
            this.clickClose()
            this.hoveritem()
            this.showMenuMobile()
        },
        clickSearch:function(){
            var btnSearch =document.getElementById('search');
            var geaderSearch =document.querySelector('.header__mid-search');
            btnSearch.addEventListener('click',function(e){
                e.preventDefault();
                geaderSearch.classList.toggle('active')
            })
        },
        clickHideModal:function(){
            var md = document.querySelectorAll('.md');
            md.forEach( function( el, i ) {
                var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) );
                var ovelay = document.querySelector('.md-overlay');
                el.addEventListener( 'click', function(e) {
                    e.preventDefault();
                    modal.classList.add('md-show')
                });
            })
        },
        clickClose:function(){
            var close= document.querySelectorAll('.close');
            var modal = document.querySelectorAll('.md-modal');
            for (let i = 0; i < close.length; i++) {
                close[i].addEventListener('click',function(){
                    for (let j = 0; j < modal.length; j++) {
                        modal[j].classList.remove('md-show')
                    }
                })
            }
        },
        hoveritem:function(){
            var HoverItem=document.querySelectorAll('.mega-menu__right ul li');
            var img=document.querySelectorAll('.mega-menu__left img');
            HoverItem.forEach(element => {
                element.addEventListener('mouseover',function(e){
                    if (this.getAttribute("data-linkimg")!==null) {
                        var boximg =this.parentNode.parentNode.parentNode.previousElementSibling.children[0].children[0];
                        var linkimg=this.getAttribute("data-linkimg");
                        boximg.setAttribute("src", linkimg);      
                    }
                    e.preventDefault();
                })
            });
        },
        showMenuMobile:function(){
            var iconMobIle = document.querySelectorAll('.header__menu-icon');
            iconMobIle.forEach(element => {
                element.addEventListener('click',function(e){
                    var showdropdow = this.parentNode.nextElementSibling;
                    this.classList.toggle('active')
                    showdropdow.classList.toggle('active')
                    console.log(showdropdow.offsetHeight );
                    e.preventDefault();
                })
            });
        }
    }
    headerMid.init()
    // =====================================
    //tab footer menu slide
    const slideMenu = {
        init:function(){
            this.clickTab()
        },
        clickTab:function(){
            var tabName = document.querySelectorAll('.mega-menu__slide-name .title-tab');
            var navslideItem = document.querySelectorAll('.mega-menu__slide-content');
            tabName.forEach(element => {
                tabName.forEach(element => {
                    element.addEventListener('click',function(){
                        for (let k = 0; k < tabName.length; k++) {
                            tabName[k].classList.remove('border-active');
                            this.classList.add('border-active')
                            
                        }
                        var idName =this.getAttribute('data-show');
                        var idShow =document.getElementById(idName );
                        for (let i = 0; i < navslideItem.length; i++) {
                            navslideItem[i].classList.remove('active');
                        }
                        idShow.classList.add('active');
                    })
                });
            });
        }
    }
    slideMenu.init()
    // =====================================
    //tab footer title
    const tabTitle = {
        init:function(){
            this.clickTab()
        },
        clickTab:function(){
            var tabName = document.querySelectorAll('.footer-top__item .title-tab');
            var footerItem = document.querySelectorAll('.footer-top__slide');
            tabName.forEach(element => {
                element.addEventListener('click',function(){
                    for (let k = 0; k < tabName.length; k++) {
                        tabName[k].classList.remove('border-active');
                        this.classList.add('border-active')
                        
                    }
                    var idName =this.getAttribute('data-show');
                    var idShow =document.getElementById(idName );
                    for (let i = 0; i < footerItem.length; i++) {
                        footerItem[i].classList.remove('active');
                    }
                    idShow.classList.add('active');
                })
            });
        }
    }
    tabTitle.init()
    // =====================================
    //why/tab-title
    const tabTitleWhy = {
        init:function(){
            this.clickTab()
        },
        clickTab:function(){
            var tabName = document.querySelectorAll('.why .why__tab .tab-tem');
            var whyContent = document.querySelectorAll('.why__content');
            tabName.forEach(element => {
                element.addEventListener('click',function(e){
                    for (let k = 0; k < tabName.length; k++) {
                        tabName[k].classList.remove('active');
                        this.classList.add('active')
                        
                    }
                    var idName =this.getAttribute('data-show');
                    var idShow =document.getElementById(idName );
                    for (let i = 0; i < whyContent.length; i++) {
                        whyContent[i].classList.remove('active');
                    }
                    idShow.classList.add('active');
                    e.preventDefault();
                })
            });
        }
    }
    tabTitleWhy.init()
    // =====================================
    //products/tab-title
    const tabTitleProducts = {
        init:function(){
            this.clickTab()
        },
        clickTab:function(){
            var tabName = document.querySelectorAll('.products .products__tab .tab-tem');
            var whyContent = document.querySelectorAll('.products__content');
            tabName.forEach(element => {
                element.addEventListener('click',function(e){
                    for (let k = 0; k < tabName.length; k++) {
                        tabName[k].classList.remove('active');
                        this.classList.add('active')
                        
                    }
                    var idName =this.getAttribute('data-show');
                    var idShow =document.getElementById(idName );
                    for (let i = 0; i < whyContent.length; i++) {
                        whyContent[i].classList.remove('active');
                    }
                    idShow.classList.add('active');
                    e.preventDefault();
                })
            });
        }
    }
    tabTitleProducts.init()
    // =====================================
    // scroll top
        const scrollTop={
            init:function(){
                this.scrollMenu()
                this.clickBackTopTop()
            },
            scrollMenu:function(){
                window.addEventListener('scroll',function(){
                    var menuBot=document.querySelector('.header__bottom')
                    if (window.scrollY>186) {
                        menuBot.classList.add('active')
                    }
                    else{
                        menuBot.classList.remove('active')
                    }
                })
            },
            clickBackTopTop:function(){
                var backToTop =document.getElementById('back-to-top');
                window.addEventListener('scroll',function(){
                    if (window.scrollY>400) {
                        backToTop.classList.add('active')
                    }
                    else{
                        backToTop.classList.remove('active')
                    }
                })
                backToTop.addEventListener('click',function(){
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                     return false;
                })
            }
        }
        scrollTop.init()
    // =====================================
    // product
        const product={
            init:function(){
               this.numberProduct()
            },
            numberProduct:function(){
                var count = 1;
                var plus=document.querySelectorAll('.plus')
                var minus=document.querySelectorAll('.minus')
                plus.forEach(element => {
                    element.addEventListener('click',function(){
                        var stepNumber=this.parentNode.previousElementSibling;
                        count++;
                        stepNumber.value = count;
                    })
                });
                minus.forEach(element => {
                    element.addEventListener('click',function(){
                        var stepNumber=this.parentNode.previousElementSibling;
                        if (count > 1) {
                            count--;
                            stepNumber.value = count;
                        } 
                    })
                });
            }
        }
        product.init()
    // =====================================
    //show more
    const showMore ={
        init:function(){
            this.clickShow()
        },
        clickShow:function(){
            var btnShowMore=document.querySelectorAll('.show-more');
            btnShowMore.forEach(element => {
                element.addEventListener('click',function(e){
                    e.preventDefault();
                    this.parentNode.classList.toggle('active');
                    this.classList.toggle('active');
                })
            });
        }
    }
    showMore.init()
    $('.mega-menu__slide-content').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        items:2,
        dots:true, 
        responsive:{
            0:{
                items:2,
                nav:false,
                dots:true
            },
            600:{
                items:2,
                nav:false,
                dots:true
            },
            1200:{
                items:2
            }
        }
    })
    // =====================================
    //footer>footer-top>footer-top__slide
    $('.footer-top__slide').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:4,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots:true,
            },
            767:{
                items:3,
                nav:false,
                dots:true,
            },
            1023:{
                items:4,
                nav:false,
                dots:false,
            }
        }
    })
    //banner
    $(function () {
        var $owl = $('.banner__left'),
            effect = getAnimationName(),
            outIndex,
            isDragged = false;
      
        $owl.owlCarousel({
          margin: 0,
          navSpeed: 500,
          nav: true,
          items: 1,
          animateIn: 'fake',
          animateOut: 'fake',
          autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true
        });
      
        $owl.on('change.owl.carousel', function(event) {
          outIndex = event.item.index;
        });
      
        $owl.on('changed.owl.carousel', function(event) {
          var inIndex = event.item.index,
              dir = outIndex <= inIndex ? 'Next' : 'Prev';
      
          var animation = {
            moveIn: {
              item: $('.owl-item', $owl).eq(inIndex),
              effect: effect + 'In' + dir
            },
            moveOut: {
              item: $('.owl-item', $owl).eq(outIndex),
              effect: effect + 'Out' + dir
            },
            run: function (type) {
              var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                  animationObj = this[type],
                  inOut = type == 'moveIn' ? 'in' : 'out',
                  animationClass = 'animated owl-animated-' + inOut + ' ' + animationObj.effect,
                  $nav = $owl.find('.owl-prev, .owl-next, .owl-dot, .owl-stage');
      
              $nav.css('pointerEvents', 'none');
      
              animationObj.item.stop().addClass(animationClass).one(animationEndEvent, function () {
                // remove class at the end of the animations
                animationObj.item.removeClass(animationClass);
                $nav.css('pointerEvents', 'auto');
              });
            }
          };
      
          if (!isDragged){
            animation.run('moveOut');
            animation.run('moveIn');
          }
        });
      
        $owl.on('drag.owl.carousel', function(event) {
          isDragged = true;
        });
      
        $owl.on('dragged.owl.carousel', function(event) {
          isDragged = false;
        });
      
        /**
         * Get Animation Name from the class 'owl-carousel',
         * animation name begins with fx...
         */
        function getAnimationName(){
          var re = /fx[a-zA-Z0-9\-_]+/i,
              matches = re.exec($owl.attr('class'));
      
          return matches !== null ? matches[0] : matches;
        }
      
      
        /**
         * For Demo (Selectbox)
         * Change select options with animation name
         */
        $('#fxselect').on('change', function (e) {
          var $owlCarousel = $('.banner__left'),
              animationName = getAnimationName();
          effect = $(this).find('option:selected').val();
      
          //remove old root class
          if (animationName !== null){
            $owl.removeClass(animationName);
          }
      
          //add new root class
          $owlCarousel.addClass(effect);
        });
      });
      //why
      $('.why__content').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            500:{
                items:3,
                nav:false
            },
            767:{
                items:4,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
    //products
      $('.products__content').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            500:{
                items:2,
                nav:false
            },
            767:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
    //caegory
      $('.category__right-content').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            500:{
                items:2,
                nav:false
            },
            767:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
    //brand
      $('.brand__content').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            500:{
                items:3,
                nav:false
            },
            767:{
                items:6,
                nav:false
            },
            1000:{
                items:9,
                nav:true,
                loop:false
            }
        }
    })
    //blog
      $('.blog__content').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            500:{
                items:1,
                nav:false
            },
            767:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
    //about
      $('.about__content').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            500:{
                items:1,
                nav:false
            },
            767:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
});