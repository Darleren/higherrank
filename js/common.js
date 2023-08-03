$(function(){
    //----------------------------------------------------------main 시작 
    //main visual_txt 글자 올라오는 효과 
    const SEC = 0.1;

    function clip_text(dom) {
        const childs = dom.children();
        for (let i = 0; i < childs.length; i++) {
            childs[i].style.animationDelay = `${SEC * i}s`;
            childs[i].classList.add('on');
        }
    }

    // test = 첫번째줄 , test2 = 두번째줄
    const test = $('#test');
    const test2 = $('#test2');

    // 실행
    clip_text(test);
    clip_text(test2);
    //----------------------------------------------------------portfolio 시작 
    //portfolio .con .item 클릭시 해당 모달창 페이드 인
    $(".portfolio .con .castelbajac").click(function() {
      $(".m_castelbajac").addClass('open');
    });
    $(".portfolio .con .hanwha").click(function() {
      $(".m_hanhwa").addClass('open');
    });
    $(".portfolio .con .elite").click(function() {
      $(".m_elite").addClass('open');
    });
    $(".portfolio .con .artemis").click(function() {
      $(".m_artemis").addClass('open');
    });
    $(".portfolio .con .hyungji").click(function() {
      $(".m_hyungji").addClass('open');
    });
    $(".portfolio .con .willbe").click(function() {
      $(".m_willbe").addClass('open');
    });
    $(".portfolio .con .crocodile").click(function() {
      $(".m_crocodile").addClass('open');
    });
    $(".portfolio .con .chatelaine").click(function() {
      $(".m_chatelaine").addClass('open');
    });
    $(".portfolio .con .olivaia").click(function() {
      $(".m_olivia").addClass('open');
    });
    $(".portfolio .con .spring").click(function() {
      $(".m_spring").addClass('open');
    });
    $(".portfolio .con .live").click(function() {
      $(".m_live").addClass('open');
    });

    //----------------------------------------------------------portfolio modal 시작 
    //portfolio modal header trigger 클릭시 모달창 페이드 아웃
    $(".modal .header .trigger").click(function(){
      $(".modal").removeClass('open')
    });
    //portfolio modal Swiper
    let ww = window.innerWidth;
    
    responsiveSwiper();

    function responsiveSwiper() {
      if (ww >= 768) {     // 화면길이 768 이상인 경우 해당 swiper적용
        swiper = new Swiper('.swiper', {
          direction: 'horizontal',
          spaceBetween: 1,
          loop: true,
          slidesPerView : 3, //preview 1개 
          loopAdditionalSlides: 30,
          centeredSlides: true,   
          pagination: {
          el: '.swiper-pagination',
          clickable: true,
          },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          },
          init:true,
        });
      } else if (ww < 768) {    // 화면길이 768 미만인 경우 해당 swiper적용
        swiper = new Swiper('.swiper', {
          direction: 'horizontal',
          spaceBetween: 1,
          loop: true,
          slidesPerView : 1, //preview 1개 
          loopAdditionalSlides: 30,
          centeredSlides: true,   
          pagination: {
          el: '.swiper-pagination',
          clickable: true,
          },
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          },
          init:true,
        });
      }
    }

  window.addEventListener('resize', function() {
	ww = window.innerWidth;
	responsiveSwiper();
});

    //----------------------------------------------------------marquee 시작 
    const pTag1 = document.querySelector('.first-parallel')
    const pTag2 = document.querySelector('.second-parallel')

    const textArr1 ='AIM HIGH FLY HIGHER * AIM HIGH FLY HIGHER * AIM HIGH FLY HIGHER *'.split(' ')
    const textArr2 ='Towards a higher value * Towards a higher value * Towards a higher value *'.split(' ')

    // 위 배열을 똑같은 내용을 뒤에 push 해준 뒤 각각의 단어를 for 문으로 돌며,
    // 단어뒤에 띄어쓰기 두번처리 한 후 각각의 p태그 안에 삽입한다.

    function initTexts(element, textArray) {
      textArray.push(...textArray)
      for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0`
      }
    }
    
    initTexts(pTag1, textArr1)
    initTexts(pTag2, textArr2)

    let count1 = 0
    let count2 = 0
    
    //count가 element의 절반값 이상이라면 count 를 0, element도 초기화
  
    function marqueeText(count, element, direction) {
      if (count > element.scrollWidth / 2) {
        element.style.transform = `translateX(0)`
        count = 0
      }
      //count에 direction을 곱한만큼 이동시켜주고 count를 return시켜 다음 animate 함수에 반영된다.
      element.style.transform = `translateX(${direction * count}px)`

      return count
    }
    
    function animate() {
      count1++
      count2++

      count1 = marqueeText(count1, pTag1, -1)
      count2 = marqueeText(count2, pTag2, 1)

      // 끈김없이 무한 반복된다.
      window.requestAnimationFrame(animate)
    }

    function scrollHandler() {
      count1 += 20
      count2 += 20
    }

    //실행
    window.addEventListener('scroll', scrollHandler)
    animate()
    //----------------------------------------------------------footer 시작 
    //family site button 클릭시 ul이 슬라이드 되는 on 클래스 토글
    $('.footer_right .family_site').click(function(){
      $('.footer_right ul').toggleClass('list');
    });
    //----------------------------------------------------------스크롤 시 이벤트 
    $(window).scroll(function(){
    //top 버튼 - 스크롤 길이가 400 이상일때 .top on 클래스 추가, 적으면 on 클래스 삭제
      if ($(this).scrollTop() > 400){
          $('.top').addClass('go');
          $('body').addClass('white');
      }else{
          $('.top').removeClass('go');
          $('body').removeClass('white');
      };
    //스트롤 시 .hidden 클래스 가진 태그에 .animate 클래스 추가
      const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) =>{

          if(entry.isIntersecting){
            entry.target.classList.add('animate');
          }else {
            entry.target.classList.remove('.animate');
          }
        });
      });
      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));
    });
      
    // .top 클릭시 스크롤 길이 0으로 스무스하게 이동
    $(".top").click(function(){
        window.scrollTo({top : 0, behavior: 'smooth'}); 
    });
    //---------------------------------------------------------- 마우스 커서
    const cursorParent = document.getElementById('mouse-cursor')
    const cursorChild = cursorParent.children[0]
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mousedown', mousedown)
    window.addEventListener('mouseup', mouseup)

    let scale = 1
    let stage = ''
    let carouselDirection = ''
    let cursorX = 0, cursorY = 0

    //#mouse-cursor가 마우스 커서의 가운데를 따라다니게 됨 
    function mousemove(e) {
      cursorX = e.pageX - cursorParent.offsetWidth / 2
      cursorY = e.pageY - cursorParent.offsetHeight / 2
      cursorParent.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0)`
      
     
      switch(e.target.getAttribute('data-cursor')) {
       //potfolio img_box 호버시 커서 커짐 + date-name ="click" 삽입 
        case 'Click':
          if (stage === 'Click') return
          scale = 5
          stage = 'Click'
          cursorChild.setAttribute('data-name', e.target.getAttribute('data-name'))
          cursorParent.className = 'cursor-text-mode'
          break
        //contant 호버시 커서 커짐 + 해당 내용 date-name 삽입 
        case 'CONTACT':
          if (stage === 'CONTACT') return
          scale = 5
          stage = 'CONTACT'
          cursorChild.setAttribute('data-name', e.target.getAttribute('data-name'))
          cursorParent.className = 'cursor-text-mode'
          break
        //default 값
        default:
          if (stage ==='') return
          scale = 1
          stage = ""
          cursorParent.className = ''
        break
      }
      cursorChild.style.setProperty('--cursor-scale', scale)
    }
    function mousedown(e) {
      scale *= 0.8
      cursorChild.style.setProperty('--cursor-scale', scale)
    }
    function mouseup(e) {
      scale *= 1.25
      cursorChild.style.setProperty('--cursor-scale', scale)
    }
  });