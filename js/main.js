$(document).ready(function(){  
    //section.s1의 제목 애니메이션
    function titleAnimation(){
        $('section.s1 .title').toggleClass('active');
    }
    setInterval(titleAnimation, 6500);
    titleAnimation();

    //section.s3 의 갤러리
    $('.buttons ul li:first').addClass('active');
    $('.photos ul li').hide();
    $('.photos ul li:first').show();
    $('.buttons ul li').click(function(e){
        e.preventDefault();
            $('.buttons ul li').removeClass('active');
            $(this).addClass('active');
        var btn=$(this).index();
        $('.photos ul li').each(function(){
            if($(this).index()==btn){
                $('.photos ul li').hide();
                $(this).fadeIn();                
            }
        });       
    });   
   
    $('.search_btn a').click(function(e){
        e.preventDefault();
        $.fn.fullpage.setAllowScrolling(false);
        var str=$(this).parents('li').index()+1;
        console.log(str);
        $('<div />', { id: 'popup' }).appendTo('body'); 
        $('<div />', { class: 'popup_box' }).appendTo('#popup');  
        $('.popup_box').append('<img src="img/banner_'+str+'.png">');
        $('#popup').append('<div class="close">X</div>');
    });
   
    $('.con_btn a:first-child').click(function(e){
        e.preventDefault();
        $.fn.fullpage.setAllowScrolling(false);
        //$(this):클릭이벤트가 발생한 a객체를 가리킴
        //$(parent(): 클릭이벤트가 발생한 a객체의 부모객체(div))
        //prev(): 부모객체(div)의 위쪽 형제 객체를 가리킴(.con_photo)
        //find('img'): .con_photo의 자식객체 'img'를 찾아라
        //attr('src'): src속성값
        var str1=$(this).parent().prev().find('img').attr('src');
        console.log(str1);
        $('<div />', { id: 'popup' }).appendTo('body'); 
        $('<div />', { class: 'popup_box' }).appendTo('#popup');  
        $('.popup_box').append('<img src="'+str1+'">');
        $('#popup').append('<div class="close">X</div>');
    });

    $('body').on('click', '#popup .close', function(){
       $(this).parent().remove();
       $.fn.fullpage.setAllowScrolling(true);
    });

    //웹포폴 탭메뉴
    $('.con1').show();
    $('.con2').hide();
    $('.tt1').click(function(e){
        e.preventDefault();
        $('.con1').show();
        $('.con2').hide();
        $('.nemo1').show();
        $('.nemo2').hide();
    });
    $('.tt2').click(function(e){
        e.preventDefault();
        $('.con1').hide();
        $('.con2').show();
        $('.nemo1').hide();
        $('.nemo2').show();
    });

           
     //skill
     
    
    var cnt1 = $("#count1");
    var water1 = $("#water1");
    var percent1 = 0;
    var interval1;
    function skillWater1(){
        percent1++;
        cnt1.text(percent1);  
        water1.css({'transform':'translate(0'+','+(100-percent1)+'%'});
        //percent값을 수정하기
        if (percent1 == 80) {
            clearInterval(interval1);
        }
    }
    var cnt2 = $("#count2");
    var water2 = $("#water2");
    var percent2 = 0;
    var interval2;
    function skillWater2(){
        percent2++;
        cnt2.text(percent2);  
        water2.css({'transform':'translate(0'+','+(100-percent2)+'%'});
        //percent값을 수정하기
        if (percent2 == 50) {
            clearInterval(interval2);
        }
    }
    var cnt3 = $("#count3");
    var water3 = $("#water3");
    var percent3 = 0;
    var interval3;
    function skillWater3(){
        percent3++;
        cnt3.text(percent3);  
        water3.css({'transform':'translate(0'+','+(100-percent3)+'%'});
        //percent값을 수정하기
        if (percent3 == 80) {
            clearInterval(interval3);
        }
    }
    var cnt4 = $("#count4");
    var water4 = $("#water4");
    var percent4 = 0;
    var interval4;
    function skillWater4(){
        percent4++;
        cnt4.text(percent4);  
        water4.css({'transform':'translate(0'+','+(100-percent4)+'%'});
        //percent값을 수정하기
        if (percent4 == 60) {
            clearInterval(interval4);
        }
    }
    var cnt5 = $("#count5");
    var water5 = $("#water5");
    var percent5 = 0;
    var interval5;
    function skillWater5(){
        percent5++;
        cnt5.text(percent5);  
        water5.css({'transform':'translate(0'+','+(100-percent5)+'%'});
        //percent값을 수정하기
        if (percent5 == 50) {
            clearInterval(interval5);
        }
    }
    var cnt6 = $("#count6");
    var water6 = $("#water6");
    var percent6 = 0;
    var interval6;
    function skillWater6(){
        percent6++;
        cnt6.text(percent6);  
        water6.css({'transform':'translate(0'+','+(100-percent6)+'%'});
        //percent값을 수정하기
        if (percent6 == 35) {
            clearInterval(interval6);
        }
    }
    function skillZero1(){
        clearInterval(interval1)
        percent1=0;
        cnt1.text(percent1);  
        water1.css({'transform':'translate(0,100%)'});
    }
    function skillZero2(){
        clearInterval(interval2)
        percent2=0;
        //cnt2.text(percent2);  
        water2.css({'transform':'translate(0,100%)'});
    }
    function skillZero3(){
        clearInterval(interval3)
        percent3=0;
        //cnt3.text(percent3);  
        water3.css({'transform':'translate(0,100%)'});
    }
    function skillZero4(){
        clearInterval(interval4)
        percent4=0;
        //cnt4.text(percent4);  
        water4.css({'transform':'translate(0,100%)'});
    }
    function skillZero5(){
        clearInterval(interval5)
        percent5=0;
        //cnt5.text(percent5);  
        water5.css({'transform':'translate(0,100%)'});
    }
    function skillZero6(){
        clearInterval(interval6)
        percent6=0;
        //cnt6.text(percent6);  
        water6.css({'transform':'translate(0,100%)'});
    }

    function skillAni(){   
        interval1=setInterval(skillWater1,60);
        interval2=setInterval(skillWater2,60);
        interval3=setInterval(skillWater3,60);
        interval4=setInterval(skillWater4,60);
        interval5=setInterval(skillWater5,60);
        interval6=setInterval(skillWater6,60);
     }
     function skillStop(){
        skillZero1();
        skillZero2();
        skillZero3();
        skillZero4();
        skillZero5();
        skillZero6();
     }



     //fullpage
    $('#fullpage').fullpage({
        anchors:['HOME', 'ABOUT_ME', 'DESIGN', 'PORTFOLIO', 'GUEST', 'CONTACT'],
        menu:'#myMenu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['HOME', 'ABOUT ME', 'DESIGN', 'PORTFOLIO', 'GUEST', 'CONTACT'],
        afterLoad:function(anchorLink,index){
            if(index==1){
                $('.top').fadeOut();
                $('#fp-nav ul li .fp-tooltip').css({
                    'color':'#faf3db'
                });
                skillStop();

            }else if(index==2){
                skillAni();
                $('.top').fadeIn();
                $('#fp-nav ul li .fp-tooltip').css({
                    'color':'#e64848'
                });
            }else{
                skillStop();
            }
            
        }  
        
    });

    //top버튼
    $('.top').click(function(){
        //fullpage 플러그인을 사용할 때에는 명령어가 아래와 같습니다.
        $.fn.fullpage.moveTo(1, 1);       
    
    });
});