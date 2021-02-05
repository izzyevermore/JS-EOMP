$( document ).ready(function() {
    // Main variables
      var $aboutTitle = $('.about-myself .content h2');
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;
  
  
   
  
/*###### SKILLS SECTION ######*/

var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;


$('.skills-bar-container li').each( function(){

    var $barContainer = $(this).find('.bar-container');
    var dataPercent = parseInt($barContainer.data('percent'));
    var elem = $(this).find('.progressbar');
    var percent = $(this).find('.percent');
    var width = 0;

    var id = setInterval(frame, 15);

    function frame() {
    if (width >= dataPercent) {
        clearInterval(id);
    } else {
        width++;
        elem.css("width", width+"%");
        percent.html(width+" %");
    }
    }
});
developmentIsVisible = true;

}); // -- End window scroll --
