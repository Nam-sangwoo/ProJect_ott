let iconMenu = document.getElementById("iconMenu");
//스마트폰에서 보여지는 h2메뉴아이콘을 클릭하면 토글메뉴작동
iconMenu.addEventListener("click", function () {
  let mainMenu = document.getElementById("mainMenu");
  mainMenu.classList.toggle("smartphone_menu"); //메인메뉴위치변경 스타일
  iconMenu.classList.toggle("icon_close"); //x아이콘이 보여지는 스타일
});

//게시판 메뉴

$(function () {
  let dl = $("dl");
  let dt = dl.children("dt");
  let dd = dl.children("dd");
  // dd.hide(); //dd숨기기
  dt.click(function () {
    //dt를 클릭했을때 dd보이게만들기
    // dd.show();
    let click_dt = $(this); //this는 사용자가 클릭한 dt

    //사용자가 클릭한 탭메뉴스타일
    dt.css("border", "none");
    click_dt.css("borderBottom", "3px solid red");
    let dt_dd = click_dt.next(); // dt다음에 나오는 태그
    dd.hide(); //열려진dd가 있다면 감추기하고
    dt_dd.show(); // 사용자가 클릭한 dt에 대한 dd만 보여지게한다

    //   $(this).dt_dd.show();
  });
});
