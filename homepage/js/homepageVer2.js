"use strict";

$(document).ready(function() {
    setTimeout(function () {
        loadUp();
        backgroundColor($(".content"));
        let i = 0;
        for (let item of $(".col-2")){
            i += 500;
            setTimeout(function () {
                columnAppear(item);
            },i)
        }
    },1500)
});


function loadUp() {
    $(".loader").fadeOut();
    for (let item of $(".content")) {
        item.style.opacity = 1;
    };
};

function backgroundColor(element) {
    element.addClass('blue');
}


function columnAppear(item){
        let rainbow = ['red','orange','yellow','green','blue','indigo','violet'];
        item.style.backgroundColor = rainbow[Math.floor(Math.random() * rainbow.length)];
        item.style.opacity = 1;
}

