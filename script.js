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
