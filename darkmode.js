const darkbtn = document.getElementById('darkmode');
darkbtn.addEventListener('click', darkmodefunction);

function darkmodefunction(){
    const darkBody = document.body;
    darkBody.classList.toggle("dark-mode");
}