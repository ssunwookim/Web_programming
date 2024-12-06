document.addEventListener("DOMContentLoaded", start);

function start() {
    let today = new Date();
    let hours = today.getHours();

    const body = document.body;
    const button = document.querySelector('#night_day');

    if (hours >= 6 && hours < 18) {
        // Day mode
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        button.value = 'Night Mode';

        // Ensure the body class reflects Day Mode
        body.classList.remove('night-mode');
    } else {
        // Night mode
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        button.value = 'Day Mode';

        // Ensure the body class reflects Night Mode
        body.classList.add('night-mode');
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
document.getElementById("search-input").addEventListener("input", filterContent);
function filterContent() {

    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const divBoxes = document.querySelectorAll(".button-item");

    divBoxes.forEach((box) => {

        const content = box.textContent.toLowerCase();

        if (content.includes(searchTerm)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }

    });

}


function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('active');
}

function closeMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.remove('active');
}

// Show the selected content and hide others
function showContent(contentId) {
    // Remove 'active' class from all tabs and contents
    document.querySelectorAll('.book-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.book-content').forEach(content => content.classList.remove('active'));
    
    // Add 'active' class to the selected tab and content
    document.querySelector(`[onclick="showContent('${contentId}')"]`).classList.add('active');
    document.getElementById(contentId).classList.add('active');
}
// Initialize with the first tab active
document.addEventListener("DOMContentLoaded", () => {
    showContent('joy');
});

// 슬롯머신
document.addEventListener("DOMContentLoaded", () => {
    const majors = [
        "글로벌리더십",
        "경영경제",
        "국제어문",
        "법학",
        "상담심리",
        "커뮤니케이션",
        "공간환경",
        "기계제어"
    ];

    // 요소 가져오기
    const spinBtn = document.getElementById("spin-btn");
    const resultDiv = document.getElementById("result");
    const slots = [
        document.getElementById("slot1"),
        document.getElementById("slot2"),
        document.getElementById("slot3")
    ];

    // 돌리기 버튼 클릭 이벤트
    spinBtn.addEventListener("click", () => {
        resultDiv.textContent = "결과: 돌리는 중...";

        // 애니메이션 효과
        let spinCount = 20; // 슬롯 변화 횟수
        let spinInterval = setInterval(() => {
            slots.forEach(slot => {
                const randomIndex = Math.floor(Math.random() * majors.length);
                slot.textContent = majors[randomIndex];
            });
            spinCount--;
            if (spinCount <= 0) {
                clearInterval(spinInterval);
                showResult();
            }
        }, 100); // 100ms마다 슬롯 업데이트
    });

    // 최종 결과 보여주기
    function showResult() {
        const finalIndex = Math.floor(Math.random() * majors.length);
        const selectedMajor = majors[finalIndex];

        slots.forEach(slot => {
            slot.textContent = selectedMajor;
        });

        resultDiv.textContent = `결과: ${selectedMajor}`;
    }
});
