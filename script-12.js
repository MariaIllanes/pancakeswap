// const sun = document.getElementById("icon-sun");

// sun.addEventListener("change", function(){
//     if ()
// }) 


const bgToggle = document.getElementById("switch");

    bgToggle.addEventListener("change", function() {
        const body = document.body;

        if (bgToggle.checked) {
            body.style.backgroundColor = "darkblue";
        } else {
            body.style.backgroundColor = "ligtblue";
        }
    });