function more(){//alert("ok");
    let coffee = document.createElement("p");//태그생성
    coffee.innerHTML = "<img src='./images/iceAmericano.jpg' alt='' />";  
                        //생성한 태그에 내용(이미지)넣기
    var new_product = document.getElementById("new");
                      //생성한 태그를 담을 영역
    new_product.appendChild(coffee);//생성한 태그를 id가 new인 영역의 자식노드로 보낸다
}