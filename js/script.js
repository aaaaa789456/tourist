$(function(){
    $('.btn-nav').click(function(){
        let flag = $(this).attr('flag');
        if(flag==1){
            $('.head-cont').slideDown(300);
            $('#header').css('background','#f5d04bd3');
            $(this).children().eq(0).css('transform','rotate(33deg)');
            $(this).children().eq(1).css('transform','rotateX(-90deg)');
            $(this).children().eq(2).css('transform','rotate(-33deg)');
            $(this).attr('flag',0);
        }else{
            $('.head-cont').slideUp(300);
            $('#header').css('background','#f0ede13d');
            $(this).children().eq(0).css('transform','rotate(0deg)');
            $(this).children().eq(1).css('transform','rotateX(0deg)');
            $(this).children().eq(2).css('transform','rotate(0deg)');
            $(this).attr('flag',1);
        }
    })


    $('.noaside').click(function(){
        $('.aa').toggle('.active');
    })


    $('.main-nav').children().mouseenter(function(){
        $('.main-nav').children().children('ul').css('display','none');
        $('.main-nav').children().removeClass('active');
        $(this).addClass('active');
        $(this).children('ul').css('display','flex');
    });
    $('.main-nav').children().children('ul').mouseleave(function(){
        $('.main-nav').children().children('ul').css('display','none');
        $('.main-nav').children().removeClass('active');
    })


    $('.bxslider').bxSlider();

    let sliders = $('.desk-top article');
    let btnNums = $('.slide-num');
    let idx=1;
    function mySlider(){
        sliders.fadeOut(1000);
        sliders.eq(idx).fadeIn(1000);
        btnNums.removeClass('active');
        btnNums.eq(idx++).addClass('active');

        if(idx>=3){
            idx=0;
        }
    }

    let cngSlider = setInterval(mySlider,4000);

    $('.stop').click(function(){
        clearInterval(cngSlider);
        $(this).css('display','none');
        $('.start').css('display','block');
    })
    $('.start').click(function(){
        cngSlider = setInterval(mySlider,4000);
        $(this).css('display','none');
        $('.stop').css('display','block');
    })
    btnNums.click(function(){
        idx = $(this).index() - 1;
        clearInterval(cngSlider);
        mySlider();
        cngSlider = setInterval(mySlider,4000);
    })
    $('#travel a').click(function(){
        return false;
    })

    $('#travel article').click(function(){
        console.log($(this));
    })

    let docHeight;
    function fnDocHeight(){
        docHeight = $(document).height();
        $('.pop-box').css('height',`${docHeight}px`);
    }
    fnDocHeight();

    $('#travel article').click(function(){
        $(this).children('.pop-box').toggle(0);
    })

    

    $(document).bind("mouseleave", function(){
        docReset();
    })
    $(window).resize(function (){
        showSide();
        docReset();
        docReset2();
    })
    $(window).scroll(function (){
        docReset();
        docReset2();
    })


    function docReset(){
        $('.main-nav').children().children('ul').css('display','none');
        $('.main-nav').children().removeClass('active');
    }

    function docReset2(){
        $('.head-cont').slideUp(300);
        $('#header').css('background','#f0ede13d');
        $('.btn-nav').children().eq(0).css('transform','rotate(0deg)');
        $('.btn-nav').children().eq(1).css('transform','rotateX(0deg)');
        $('.btn-nav').children().eq(2).css('transform','rotate(0deg)');
        $('.btn-nav').attr('flag',1);
    }

    function showSide(){
        $('.aa').css('display','block');
    }

})