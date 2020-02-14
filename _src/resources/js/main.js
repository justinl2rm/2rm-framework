
/*
  Set Session Cookie
  */

function sessionCookie(key){
  if ($.cookie(key) != 'true'){
    /*$('#popup').modal('show');*/
    $.cookie(key, 'true', { expires: 15 });
  }
}


function iframeEmbed(selector){
  var elem = $(selector);
  elem.wrap( "<div class='video-container'></div>" );
}


// Trigger Mobile Navigation


function navTrigger(trigger,element){
  $(trigger).click(function(e){
    e.preventDefault();
    $('body').toggleClass('nav-open')
  })
}



// ajax craft form submissions

function formSubmit(element,thankYou) {

        $('form button').click(function(){
          $(this).closest(element).submit();
        })

        $(element).submit(function(ev) {
        // Prevent the form from actually submitting
        ev.preventDefault();

        // Get the post data
        var data = $(this).serialize();

        // Send it to the server
        $.post('/', data, function(response) {
            if (response.success) {
                $(element).fadeOut();
                $(thankYou).fadeIn();

            } else {
                // response.error will be an object containing any validation errors that occurred, indexed by field name
                // e.g. response.error.fromName => ['From Name is required']
                alert('An error occurred. Please try again.');
            }
        });
    });
}

function smoothScrollingTo(target){
  $('html,body').animate({scrollTop:$(target).offset().​top}, 500);
}


/* Init */

function init(){


 /*   AOS.init({
      easing: 'ease-out-back',
      duration: 1000,
      once: true
    });*/

    iframeEmbed('iframe');

    formSubmit('.main-form','#thankYou');
    sessionCookie('visited');

    navTrigger('#navTrigger','body');


}


$(window).resize(function(){

})


$(document).ready(function(){
  init();
})
