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
function balckWhite() {
    const body = document.querySelector('body');
    const button = document.querySelector('#night_day');
    const spinButton = document.querySelector('#spin-btn');
    const resultText = document.querySelector('#result');

    if (button.value === 'Night Mode') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        button.value = 'Day Mode';

        // Add night-mode class for dynamic styling
        body.classList.add('night-mode');

        // Update button and result text styles for night mode
        spinButton.style.backgroundColor = 'white'; // White button background
        spinButton.style.color = 'black'; // Black text on the button
        resultText.style.color = 'white'; // White result text
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        button.value = 'Night Mode';

        // Remove night-mode class for day styling
        body.classList.remove('night-mode');

        // Update button and result text styles for day mode
        spinButton.style.backgroundColor = '#333'; // Default button background
        spinButton.style.color = 'white'; // Default text color
        resultText.style.color = 'black'; // Default result text color
    }
}

function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('active');
}

function closeMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('active');
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
