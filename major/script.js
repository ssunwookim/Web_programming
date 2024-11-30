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



