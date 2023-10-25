function home(){
  //메인이미지와 미리보기상품 게시판 배너이미지는 보여지게 한다
  document.getElementById("mainImage").style.display = "block"; 
 document.getElementById("sectionWrap").style.display = "block"; 
 //contents div의 높이는 원래데로 해준다
 document.getElementById("contents").style.height = "auto";     
    
  //mypage와 guestPage는 숨긴다
  document.getElementById("mypage").style.display = "none";         
  document.getElementById("guestPage").style.display = "none";         
}

function memberLogin_show(){//alert("ok1");//회원로그인 입력상자들보여지는 함수
    document.getElementById("memberLogin").style.zIndex ="30"; 
    document.getElementById("guestLogin").style.zIndex ="20"; 
    
}
function guestLogin_show(){//alert("ok2");//비회원로그인 입력상자들보여지는 함수
    document.getElementById("memberLogin").style.zIndex ="20"; 
    document.getElementById("guestLogin").style.zIndex ="30";    
}   

function show(){//show함수를 작동시킬때 숨겨놓은 로그인영역을 보이게 한다
       if(log.firstChild.nodeValue=="로그아웃"){
           //로그인하고 난후 로그아웃으로 바뀌어 있는 경우    로그아웃클릭하면
           alert("로그아웃 되었습니다!");
            //메인이미지와 미리보기상품 게시판 배너이미지는 보여지게 한다
            document.getElementById("mainImage").style.display = "block"; 
            document.getElementById("sectionWrap").style.display = "block"; 
           //mypage는 숨긴다
           document.getElementById("mypage").style.display = "none";     
            //contents div의 높이는 원래데로 해준다
            document.getElementById("contents").style.height = "auto";    
            let login = "로그인";
            let log = document.getElementById("log");   
             log.firstChild.nodeValue="로그인";//로그아웃 클릭하면 로그인으로 바꾼다
       }else if(log.firstChild.nodeValue=="로그인"){
           //로그인하지 않았을경우
           document.getElementById("loginWrap").style.display = "block"; 
       }
       
             
   }
    function login(){
        let logout = "로그아웃";
        let log = document.getElementById("log");
                
        //alert("로그인함수 작동");
        const member1_id = "robot";//member1 회원의 아이디
        var member1_pw = 1234;     //member1 회원의 비밀번호
        
        var userid = document.getElementById("userId").value;
        var userpw = document.getElementById("userPw").value;  
        
        if(  (userid == member1_id) && (userpw == member1_pw) ){
            //아이디정보와 비밀번호정보가 모두 회원의 로그인정보와 일치할경우
            log.firstChild.nodeValue="로그아웃";
            
            //로그인화면은 숨김처리한다
            document.getElementById("loginWrap").style.display = "none"; 
            
            //메인이미지와 미리보기상품 게시판 배너이미지는 숨김처리한다
            document.getElementById("mainImage").style.display = "none"; 
            document.getElementById("sectionWrap").style.display = "none"; 

            //contents div의 높이를 크게 해준다
            document.getElementById("contents").style.height = "800px";             
            document.getElementById("contents").style.backgroundColor = "white";             
            
            //로그인되면  mypage가 보여지게 한다
            document.getElementById("mypage").style.display = "block";  
            document.getElementById("mypage").style.border = "10px solid red";  

            
            
            
        }else if( (userid == member1_id) && (userpw != member1_pw)){
				//아이디정보는 일치하지만 비밀번호정보가 다를경우
				alert("비밀번호가 일치하지 않습니다"); 
		}else if( userid != member1_id ){
				//입력한 아이디에 해당하는 회원이 없는경우 
				//비밀번호정보의 일치여부를 떠나서 회원아이디정보가 다르면
				//우선적으로 회원에 해당하는 아이디를 입력해야 한다
				alert("입력한 아이디에 해당하는 회원이 존재하지 않습니다");      
		}else{
				//위에서 사용한 조건에 해당하지 않는 경우에 실행
				alert("아이디또는 비밀번호가 일치하지 않습니다");
		}        
    }   
   
/*비회원 로그인*/
 function guestLogin(){alert("okkkkkkk");
        //let logout = "로그아웃";
        //let log = document.getElementById("log");
                
        //alert("로그인함수 작동");
        const guest_orderNumber = "no1";//비회원 주문번호
        var guest_orderPass = 1111;     //비회원 주문비밀번호
        
        var orderNumber = document.getElementById("orderNumber").value;
        var orderPass = document.getElementById("orderPass").value;  
        
        if(  (orderNumber == guest_orderNumber) && (orderPass == guest_orderPass) ){
            //비회원주문번호와 주문비밀번호가 모두 일치할경우
            
            //로그인화면은 숨김처리한다
            document.getElementById("loginWrap").style.display = "none"; 
            
            //메인이미지와 미리보기상품 게시판 배너이미지는 숨김처리한다
            document.getElementById("mainImage").style.display = "none"; 
            document.getElementById("sectionWrap").style.display = "none"; 

            //contents div의 높이를 크게 해준다
            document.getElementById("contents").style.height = "800px";             
            document.getElementById("contents").style.backgroundColor = "white";             
            
            //비회원주문번호와 주문비밀번호를 통해 로그인하면  guestPage가 보여지게 한다
            document.getElementById("guestPage").style.display = "block";  
            document.getElementById("guestPage").style.border = "10px solid red";  
            
        }else if( (orderNumber == guest_orderNumber) && (orderPass != guest_orderPass)){
				//비회원주문번호는 일치하지만 주문비밀번호가 다를경우
				alert("주문비밀번호가 일치하지 않습니다"); 
		}else if( orderNumber != guest_orderNumber ){
				//입력한 비회원주문번호에 해당하는 주문이 없는경우 
				alert("입력한 비회원주문번호에 해당하는 주문이 존재하지 않습니다");      
		}else{
				//위에서 사용한 조건에 해당하지 않는 경우에 실행
				alert("비회원주문번호 또는 주문비밀번호가 일치하지 않습니다");
		}        
    }   

