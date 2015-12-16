$(function()
  {
  $(window).scroll(function ()
    {
    if ($(this).scrollTop() >0)
      {
      $('#navigation').addClass("fixNavigation");
      }
      else
        {
        $('#navigation').removeClass("fixNavigation");
        }
     });
  });
  $(function(){
       setInterval(function(){
          $(".slideshow ul").animate({marginLeft:-350},800,function(){
             $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
          })
       }, 3500);
    });
