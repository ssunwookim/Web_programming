document.addEventListener("DOMContentLoaded", start);
function start(){
    let today = new Date();
    let hours = today.getHours();
            
    if(hours >= 6 && hours < 18) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('#night_day').value = 'Night Mode';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color= 'white';
        document.querySelector('#night_day').value = 'Day Mode';
    }
} 
function balckWhite(){
    document.getElementsByNamee
    if(document.querySelector('#night_day').value === 'Night Mode'){ 
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        document.querySelector('#night_day').value = 'Day Mode';
    } else { 
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        document.querySelector('#night_day').value = 'Night Mode';
    }
}

function toggleContent(contentId) {
    var content = document.getElementById(contentId);

    if (content.dataset.animating === "true") {
        return; 
    }

    if (content.style.height === "0px" || content.style.height === "") {
        
        content.dataset.animating = "true"; 
        content.style.height = "auto"; 
        var scrollHeight = content.scrollHeight; 
        content.style.height = "0px"; 
        content.style.padding = "5px 50px 0px 50px"; // 패딩 조절 " 위 오른쪽 모름 왼쪽 아래" 순서로 
        content.style.overflow = "hidden"; 


        setTimeout(() => {
            content.style.height = scrollHeight + "px";
            content.style.padding = "5px 50px 0px 50px"; // 패딩 조절 " 위 오른쪽 모름 왼쪽 아래" 순서로 
        }, 0);


        setTimeout(() => {
            content.style.overflow = "visible"; 
            content.dataset.animating = "false"; 
        }, 500); 
    } else {
        content.dataset.animating = "true"; 
        content.style.height = "0px";
        content.style.padding = "0px 50px 0px 50px"; // 패딩 조절 " 위 오른쪽 모름 왼쪽 아래" 순서로 
        content.style.overflow = "hidden"; 

        setTimeout(() => {
            content.dataset.animating = "false"; 
        }, 500); 
    }
}

// 페이지 로드 시 초기화
document.querySelectorAll('.content').forEach(content => {
    content.style.height = '0px'; 
    content.style.padding = "0px 50px 0px 50px";
    content.style.overflow = "hidden"; 
    content.dataset.animating = "false";
});


window.addEventListener("scroll", function() {
    var ulul = document.getElementById("ulul");
    var offset = 100;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if ((scrollTop + offset) >= 600) {
        ulul.style.top = 400 + "px";
    }
    else {
        ulul.style.top = (scrollTop + offset) + "px"; 
    }
});