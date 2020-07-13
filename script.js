$( document ).ready(function() {

$(".changeColorBtn1").click(function() {
    if ($(".divone").hasClass("divonenew")) {
        $(".divone").removeClass("divonenew");
    }
    else {
        $(".divone").addClass("divonenew");
    }
})

$(".changeColorBtn2").click(function() {
    if ($(".divtwo").hasClass("divtwonew")) {
        $(".divtwo").removeClass("divtwonew");
    }
    else {
        $(".divtwo").addClass("divtwonew");
    }

})

$(".changeColorBtn3").click(function() {
    if ($(".divthree").hasClass("divthreenew")) {
        $(".divthree").removeClass("divthreenew");
    }
    else {
        $(".divthree").addClass("divthreenew");
    }

})

$(".changeALL").click(function() {
    if ($(".divone").hasClass("divonenew")) {
        $(".divone").removeClass("divonenew");
    }
    else {
        $(".divone").addClass("divonenew");
    }

    if ($(".divtwo").hasClass("divtwonew")) {
        $(".divtwo").removeClass("divtwonew");
}
    else {
        $(".divtwo").addClass("divtwonew");
}

    if ($(".divthree").hasClass("divthreenew")) {
        $(".divthree").removeClass("divthreenew");
}
    else {
        $(".divthree").addClass("divthreenew");
}

})

$(".hideBox1").click(function() {
    $(".divone").toggle();
})

$(".hideBox2").click(function() {
    $(".divtwo").toggle();
})

$(".hideBox3").click(function() {
    $(".divthree").toggle();
})

$(".hideALL").click(function() {
    $(".divone").hide();
    $(".divtwo").hide();
    $(".divthree").hide();
})

$(".resetcolors").click(function() {
    $(".divone").removeClass("divonenew");
    $(".divtwo").removeClass("divtwonew");
    $(".divthree").removeClass("divthreenew");
})

$(".showall").click(function() {
    $(".divone").show();
    $(".divtwo").show();
    $(".divthree").show();
})




// // $(".changeColorBtn2").click(Function() {
//     console.log("click is working");
// }

// $(".changeColorBtn3").click(Function() {
//     console.log("click is working");
// }

// $(".changeALL").click(Function() {
//     console.log("click is working");
// }

})

