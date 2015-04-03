$(function(){
  $(".button, .task").button_hover();
});

function show_task(data){
  $(".task-detail").hide();
  $(".task-detail .name").html(data.name);
  $(".task-detail .type").html(data.type);
  $(".task-detail .type").removeClass("game");
  $(".task-detail .type").removeClass("ctf");
  $(".task-detail .type").removeClass("cc");
  $(".task-detail .type").addClass(data.type);
  $(".task-detail").fadeIn("fast");
}