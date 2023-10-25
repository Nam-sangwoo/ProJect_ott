        var total = 0;//total 값 초기화, 전역변수로 사용
                     
        function coffeeMachine(x){alert("ok");
            //alert("커피를 주문하는 프로그램");
            
            total += x;
            alert(total + " 원 넣었습니다.");
            
            var hot_americano = 1500;
            var ice_americano = 2500;
            //var total = null;//합계
            
            /*for(var i=0 ; i< arguments.length ; i++ ){
                total += arguments[i]
            }*/
            alert("현재 합계는 " + total + "입니다");
            
            //조건문
            if( total == 1500 ){
                //합계가 1500일 경우 핫아메리카노를 먹을 수 있게 작동
                //var message = "핫아메리카노 주문 할 수 있습니다";
                //return alert(message);
                var return_money = total-1500;//돌려받을 잔돈계산
                
                var box1 = confirm("핫아메리카노 주문하시겠습니까?.");
                if(box1 == 1){//확인버튼을 클릭했을경우
                    document.writeln("<p>핫아메리카노 주문되었습니다.</p><img src='images/americano.jpg' alt='핫아메리카노' />");
                    alert("잔돈" + return_money + " 원 받으세요~");
                    
                }else{//취소버튼을 클릭했을경우
                    alert("취소되었습니다");
                    alert(total + " 원 받으세요~");
                }
                
                
            }
           else if(total >= 4000){ 
                //합계가 4000이상일 경우 상품 2개 이상 주문이 가능하게 작동
                var message = "핫아메리카노와 아이스아메리카노를 주문할 수 있습니다";
               alert(message);
               
                var box1 = confirm("핫아메리카노 주문하시겠습니까?");
                var box2 = confirm("아이스아메리카노를 주문하시겠습니까?");
                
                if( (box1==1) && (box2==0) ){
                    //핫아메리카노를 주문 할 경우 box1의 값이 1이고, box2의 값이 0여야 한다.
                    var message2 = "핫아메리카노 주문되었습니다.";
                    var return_money = total-1500;//돌려받을 잔돈계산
                    //alert("잔돈" + return_money + " 원 받으세요~");
					document.writeln(`<p>현재 카드의 잔액은 <span style="color:red">${return_money}</span> 입니다</p>`);              

                    
                    document.writeln("<p>핫아메리카노 주문되었습니다.</p><img src='images/americano.jpg' alt='핫아메리카노' />");
                    
                }else if( (box1==1) && (box2==1) ){
                    var message2 = "핫아메리카노, 아이스아메리카노 주문되었습니다.!";
                   var return_money = total-4000;//돌려받을 잔돈계산
                    alert("잔돈" + return_money + " 원 받으세요~");
					//var result = `현재 카드의 잔액은 ${return_money} 입니다` ;
					//var result = `현재 카드의 잔액은 ${return_money} 입니다` ;
					document.writeln(`<p>현재 카드의 잔액은 <span class="result">${return_money}</span> 입니다</p>`);

                    
                    document.writeln("<p>핫아메리카노, 아이스아메리카노 주문되었습니다.!</p><img src='images/iceAmericano.jpg' alt='아이스아메리카노' /> <img src='images/americano.jpg' alt='아이스아메리카노' />");
                    
                }else if( (box1==0) && (box2==0) ){
                    var message2 = "주문이 취소되었습니다.";
                    return alert(message2);
                    
                }else if( (box1==0) && (box2==1) ){
                   var return_money = total-2500;//돌려받을 잔돈계산
                    alert("잔돈" + return_money + " 원 받으세요~");
                    document.writeln("<p>아이스아메리카노가 주문되었습니다.</p> <img src='images/iceAmericano.jpg' alt='아이스아메리카노' />");
                }
                
            }
             else if( (total > 1500)  &&  (total < 2500) ){
                //합계가 2500 이상일 경우 핫아메리카노와 아이스아메리카노를 먹을 수 있게 작동
                var message = "핫아메리카노를 주문할 수 있습니다";
                alert(message);
                var box1 = confirm("핫아메리카노 주문하시겠습니까?");
                
                if( box1==1){
                    //핫아메리카노를 주문 할 경우 box1의 값이 1이고, box2의 값이 0여야 한다.
                    var message2 = "핫아메리카노 주문되었습니다."; 
                    document.writeln("<p>핫아메리카노 주문되었습니다.</p><img src='images/americano.jpg' alt='핫아메리카노' />");
                    
                }else{
                    var message = "취소 되었습니다";
                    alert(message);
                }
                
            }           
            else if( (total >= 2500)  &&  (total < 4000) ){
                //합계가 2500 이상일 경우 핫아메리카노와 아이스아메리카노를 먹을 수 있게 작동
                var message = "핫아메리카노와 아이스아메리카노를 주문할 수 있습니다";
                var box1 = confirm("핫아메리카노 주문하시겠습니까?");
                var box2 = confirm("아이스아메리카노를 주문하시겠습니까?");
                
                if( (box1==1) && (box2==0) ){
                    //핫아메리카노를 주문 할 경우 box1의 값이 1이고, box2의 값이 0여야 한다.
                    var message2 = "핫아메리카노 주문되었습니다."; 
                    document.writeln("<p>핫아메리카노 주문되었습니다.</p><img src='images/americano.jpg' alt='아이스아메리카노' />");
                    
                }else if( (box1==1) && (box2==1) ){
                    var message2 = "한가지 상품만 주문가능합니다.";
                    return alert(message2);
                    
                }else if( (box1==0) && (box2==0) ){
                    var message2 = "주문이 취소되었습니다.";
                    return alert(message2);
                    
                }else if( (box1==0) && (box2==1) ){
                    var message2 = "아이스아메리카노 주문이 되었습니다.";
                    var return_money = total-1500;//돌려받을 잔돈계산   
                    alert("잔돈" + return_money + " 원 받으세요~");                    
                    
                    document.writeln("<p>아이스아메리카노가 주문되었습니다.</p><img src='images/iceAmericano.jpg' alt='아이스아메리카노' />");
                }
                
            }else if(total < 1500){
                //합계가 1500이 안 될 경우 커피 주문을 하지 못한다는 메세지가 보여지게 작동
                var message = "합계가 부족합니다. 주문이 취소되었습니다.";
                return alert(message);
            }
        }
        //coffeeMachine(2500);//2500원 일 경우
        //coffeeMachine(500,1500);//1500원 일 경우
        //coffeeMachine(1000,490);//1500원 이하 일 경우