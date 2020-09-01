let clicks = 1;
$(document).ready(function(){
  $("button").next.click(function(){
  clicks++;
  $("#nextpage").load('pg'+ clicks + '.html');

});
  $("button").previous.click(function(){
  clicks--;
  history.back();
}));
