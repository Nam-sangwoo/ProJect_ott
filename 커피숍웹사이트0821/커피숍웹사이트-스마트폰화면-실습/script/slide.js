$(function () {
  let timer = 1000; //지연시간

  setInterval(slide, timer); //주기적으로 반복실행

  function slide() {
    $("#slide").animate({ left: 0 }, 2000, function () {
      $("#one").css("backgroundColor", "yellow");
      $("#two").css("backgroundColor", "black");
      $("#three").css("backgroundColor", "black");
      $("#four").css("backgroundColor", "black");
      $("#five").css("backgroundColor", "black");
    });
    $("#slide").animate({ left: -1200 }, 2000, function () {
      $("#one").css("backgroundColor", "black");
      $("#two").css("backgroundColor", "yellow");
      $("#three").css("backgroundColor", "black");
      $("#four").css("backgroundColor", "black");
      $("#five").css("backgroundColor", "black");
    });
    $("#slide").animate({ left: -2400 }, 2000, function () {
      $("#one").css("backgroundColor", "black");
      $("#two").css("backgroundColor", "black");
      $("#three").css("backgroundColor", "yellow");
      $("#four").css("backgroundColor", "black");
      $("#five").css("backgroundColor", "black");
    });
    $("#slide").animate({ left: -3600 }, 2000, function () {
      $("#one").css("backgroundColor", "black");
      $("#two").css("backgroundColor", "black");
      $("#three").css("backgroundColor", "black");
      $("#four").css("backgroundColor", "yellow");
      $("#five").css("backgroundColor", "black");
    });
    $("#slide").animate({ left: -4800 }, 2000, function () {
      $("#one").css("backgroundColor", "black");
      $("#two").css("backgroundColor", "black");
      $("#three").css("backgroundColor", "black");
      $("#four").css("backgroundColor", "black");
      $("#five").css("backgroundColor", "yellow");
    });
  }
});
