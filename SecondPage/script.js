$(function(){
   //console startup message
  $('#console-box').append('console is ready...');
  
    //displays selected radio button
  $('input[type=radio]').click(function(){
    $('#console-box').append('value:'+$(this).parent().text());
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
  
});