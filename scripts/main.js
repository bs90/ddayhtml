$(function(){
  $(".button, .task").button_hover();
  $(".task-detail").hide();
  $(".tasks-table > tbody > tr > td > .ctf").click(function(){
    // From API
    data = {
      task_name: "Machinarium",
      task_type: "ctf",
      task_typename: "C.T.F.",
      task_level: 3,
      task_openpoint: 4,
      task_clearpoint: 7,
      task_status: "unlockable"
    };
    show_task(data);
  });
  $(".tasks-table > tbody > tr > td > .cc").click(function(){
    // From API
    data = {
      task_name: "Super Computer",
      task_type: "cc",
      task_typename: "Code Contest",
      task_level: 5,
      task_openpoint: 7,
      task_clearpoint: 15,
      task_status: "locked"
    };
    show_task(data);
  });
  $(".tasks-table > tbody > tr > td > .game").click(function(){
    // From API
    data = {
      task_name: "A Strange Machine",
      task_type: "game",
      task_typename: "Logic Game",
      task_level: 1,
      task_openpoint: 1,
      task_clearpoint: 2,
      task_status: "unlocked"
    };
    show_task(data);
  });
});

function show_task(data){
  $(".task-detail").hide();
  $(".task-detail .name").html(data.task_name);
  $(".task-detail .type").html(data.task_typename);
  $(".task-detail .type").removeClass("game");
  $(".task-detail .type").removeClass("ctf");
  $(".task-detail .type").removeClass("cc");
  $(".task-detail .type").addClass(data.task_type);
  $(".task-detail .level").html("");
  for(var i = 0; i < data.task_level; i++) {
    $(".task-detail .level").append("<img src='images/star.png' />")
  }
  $(".unlock > .score").html(data.task_openpoint);
  $(".done > .score").html(data.task_clearpoint);
  $(".status").html(data.task_status);
  $(".status").removeClass("unlockable");
  $(".status").removeClass("locked");
  $(".status").removeClass("unlocked");
  $(".status").removeClass("solved");
  $(".status").addClass(data.task_status);
  $(".button").hide();
  switch (data.task_status) {
    case "locked":
      break;
    case "unlockable":
      $(".button").first().show();
      break;
    case "unlocked":
    case "solved":
      $(".button").last().show();
    break;
  }
  $(".task-detail").fadeIn("fast");
}