
var $window = $(window);
var main=function() {
    $(".menu li a").click(function(){
        event.preventDefault();
        $('.active-button').removeClass('active-button');
        $(this).parent().addClass('active-button');
        $(window).off('scroll',handler);
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top -185
        }, 500)
            .promise()
            .done(function () {
            $(window).on('scroll',handler);
        });
        //

    });
    $('.arrow-next').click(function (event) {
        event.preventDefault();
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(300).removeClass('active-slide');
        nextSlide.fadeIn(100).addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        return false;
    });


    $('.arrow-prev').click(function (event) {
        event.preventDefault();
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(300).removeClass('active-slide');
        prevSlide.fadeIn(100).addClass('active-slide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
        return false;
    });



    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    btn.onclick = function() {
        event.preventDefault();
        modal.style.display = "block";
    }


// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    function changeFontSize(scrollNumber) {
        $('.nav .welc').css('font-size', scrollNumber <= 50 ? 96-(Math.floor(scrollNumber/2)):70);
        $('.nav').css('height', scrollNumber <= 50 ? 170-Math.floor(scrollNumber / 2):145);
        $("#section_1 p").css('font-size', scrollNumber <= 100 ? 70-scrollNumber/3.3:40)
        $("#section_1 p").css('opacity', scrollNumber <= 200 ? 1-scrollNumber/200:0)
        $("#section_1 p").css('top', scrollNumber <= 50 ? 430-scrollNumber*2:330)

    }
    function indicate(currentScroll) {

        var d1 = Math.abs(currentScroll-185 - $('#section_1').position().top);
        var d2 = Math.abs(currentScroll-185 - $('#section_2').position().top);
        var d3 = Math.abs(currentScroll-185 - $('#section_3').position().top);
        var d4 = Math.abs(currentScroll-185 - $('#section_4').position().top);

        var mini = Math.min(d1,d2,d3,d4);
        if(mini == d1){
            event.preventDefault();
            $('.active-button').removeClass('active-button');
            $('.button1').addClass('active-button');
            //$(".menu li:nth-child(1) a").trigger("click");
        }
        else if(mini == d2){
            event.preventDefault();
            $('.active-button').removeClass('active-button');
            $('.button2').addClass('active-button');
        }
        else if(mini == d3){
            event.preventDefault();
            $('.active-button').removeClass('active-button');
            $('.button3').addClass('active-button');
        }
        else if(mini == d4){
            event.preventDefault();
            $('.active-button').removeClass('active-button');
            $('.button4').addClass('active-button');
        }

    }
    $window.on('scroll',function () {
        var currentScroll = $window.scrollTop();
        changeFontSize(currentScroll);
    });
    $window.on("scroll", handler) ;
    function handler(){
        var currentScroll = $window.scrollTop();
        indicate(currentScroll);
    };
    //$window.on("scroll", function () {});
}
$(document).ready(main);