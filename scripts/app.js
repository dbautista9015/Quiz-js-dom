let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");

let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");

changeColorBtn.addEventListener("click", function(e){

    if (Number.isNaN(boxNumber.value) || Number(boxNumber.value) % 1 != 0 || Number(boxNumber.value) < 0 || Number(boxNumber.value) > 8 || boxNumber.value == "") {
        alert("You have entered an invalid input or have not entered a value, enter a box number from 1 to 8")
    }

    else if (changeColor.value.toLowerCase() != "red" && changeColor.value.toLowerCase() != "blue" && changeColor.value.toLowerCase() != "purple" && changeColor.value.toLowerCase() != "brown" && changeColor.value.toLowerCase() != "yellow") {
        alert("You have not entered the correct color or have not entered a value, choose either Red, Blue, Purple, Brown or Yellow");
    }

    else {
        let parsedBoxNumber = parseInt(boxNumber.value, 10);
        
        switch (parsedBoxNumber) {
            case 1:
                document.getElementById("box1").style.backgroundColor = changeColor.value.toLowerCase();
                break;
            case 2:
                document.getElementById("box2").style.backgroundColor = changeColor.value.toLowerCase();
                break;
            case 3:
                document.getElementById("box3").style.backgroundColor = changeColor.value.toLowerCase();
                break;
            case 4:
                document.getElementById("box4").style.backgroundColor = changeColor.value.toLowerCase();
                break;
            case 5:
                document.getElementById("box5").style.backgroundColor = changeColor.value.toLowerCase();
                break;
            case 6:
                document.getElementById("box6").style.backgroundColor = changeColor.value.toLowerCase();
                break;
            case 7:
                document.getElementById("box7").style.backgroundColor = changeColor.value.toLowerCase();
                break;
            case 8:
                document.getElementById("box8").style.backgroundColor = changeColor.value.toLowerCase();
                break;
                        
        }
        
    }

    
});

resetBtn.addEventListener("click", function(e) {
    const boxArray = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8'];

    for (const box of boxArray) {
        document.getElementById(box).style.backgroundColor = "";
    }
});

