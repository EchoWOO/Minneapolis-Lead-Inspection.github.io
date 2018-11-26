$('#startMap').click(function(e){
  $('#modal').fadeToggle("slow");
});

$('#startMap').on('mouseover',function(e){
  $('#startMap').css("border-color","#1b566d");
  $('#startMap').css("color","#41788e");
  $('#startMap').css("font-weight","bold");

});
$('#startMap').on('mouseout',function(e){
  $('#startMap').css("border-color","rgba(0, 191, 255,0.5)");
  $('#startMap').css("color","rgba(10, 75, 96,0.5)");
  $('#startMap').css("font-weight","lighter");
});

$('#info-sign').on('click',function(e){
  $('#originalBar').fadeToggle();
  $('#firstsidebar').hide();
  $('#secondsidebar').hide();
  $('#thirdsidebar').hide();
  $('#fourthsidebar').hide();
  $('#fifthsidebar').hide();
});

$('#firstButton').on('click',function(e){
  $('#originalBar').hide();
  $('#firstsidebar').fadeToggle();
  $('#secondsidebar').hide();
  $('#thirdsidebar').hide();
  $('#fourthsidebar').hide();
  $('#fifthsidebar').hide();
});

$('#secondButton').on('click',function(e){
  $('#originalBar').hide();
  $('#firstsidebar').hide();
  $('#secondsidebar').fadeToggle();
  $('#thirdsidebar').hide();
  $('#fourthsidebar').hide();
  $('#fifthsidebar').hide();
});

$('#thirdButton').on('click',function(e){
  $('#originalBar').hide();
  $('#firstsidebar').hide();
  $('#secondsidebar').hide();
  $('#thirdsidebar').fadeToggle();
  $('#fourthsidebar').hide();
  $('#fifthsidebar').hide();
});

$('#fourthButton').on('click',function(e){
  $('#originalBar').hide();
  $('#firstsidebar').hide();
  $('#secondsidebar').hide();
  $('#thirdsidebar').hide();
  $('#fourthsidebar').fadeToggle();
  $('#fifthsidebar').hide();
});

$('#fifthButton').on('click',function(e){
  $('#originalBar').hide();
  $('#firstsidebar').hide();
  $('#secondsidebar').hide();
  $('#thirdsidebar').hide();
  $('#fourthsidebar').hide();
  $('#fifthsidebar').fadeToggle();
});
