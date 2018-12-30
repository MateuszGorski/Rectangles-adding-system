(function () {
    'use strict';

    let options = {};

    //Size buttons
    const smallSize = document.getElementById("smallSizeButton");
    smallSize.addEventListener("click", function () {
        options.size = "small-rect";
    });

    const mediumSize = document.getElementById("mediumSizeButton");
    mediumSize.addEventListener("click", function () {
        options.size = "medium-rect";
    });

    const largeSize = document.getElementById("largeSizeButton");
    largeSize.addEventListener("click", function () {
        options.size = "large-rect";
    });

    //Color buttons
    const colorGreen = document.getElementById("colorGreen");
    colorGreen.addEventListener("click", function () {
        options.color = "green";
    });

    const colorPink = document.getElementById("colorPink");
    colorPink.addEventListener("click", function () {
        options.color = "pink";
    });

    const colorYellow = document.getElementById("colorYellow");
    colorYellow.addEventListener("click", function () {
        options.color = "yellow";
    });

    const colorRed = document.getElementById("colorRed");
    colorRed.addEventListener("click", function () {
        options.color = "red";
    });

    const colorBrown = document.getElementById("colorBrown");
    colorBrown.addEventListener("click", function () {
        options.color = "brown";
    });

    const colorBlue = document.getElementById("colorBlue");
    colorBlue.addEventListener("click", function () {
        options.color = "blue";
    });

    //Position buttons
    const startPosition = document.getElementById("startPosition");
    startPosition.addEventListener("click", function () {
        options.position = "start";
    });

    const endPosition = document.getElementById("endPosition");
    endPosition.addEventListener("click", function () {
        options.position = "end";
    });

    const addBtn = document.getElementById("addColorButton");
    addBtn.addEventListener("click", addRectangle);

    function addRectangle() {
        if (options.size && options.color && options.position) {
            const rect = document.createElement("div");
            rect.className = options.size
            rect.style.backgroundColor = options.color;
            const mainContainer = document.getElementById("mainContainer");

            if (options.position === "start") {
                mainContainer.insertBefore(rect, mainContainer.childNodes[0])
            } else {
                mainContainer.appendChild(rect);
            }
            modal.style.display = "none";
            options = {};
            const alreadyAddedDiv = document.getElementById('alreadyAdded');
            alreadyAddedDiv.innerHTML +=
                `
                <button style='background-color:${rect.style.backgroundColor}'>${rect.style.backgroundColor}</button>
            `

        } else {
            alert("Please choose all the fields");
        }
    }

    var modal = document.getElementById('myModal');

    var btn = document.getElementById("add-button");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}());