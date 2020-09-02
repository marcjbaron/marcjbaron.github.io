let clicks = 1;
$(document).ready(function(){
  $("button").next.click(function(){
  clicks+=1;
  $("#nextpage").load('pg'+ clicks + '.html');

});
  $("button").previous.click(function(){
  clicks-=1;
  history.back();
}));
