 "use strict";

$("document").ready(() => {
  $(".loading").fadeOut(2000, () => {
    $("body").css("overflow", "auto");
  });
});


// nav 

$(".side-nav i").click(() => {
  let left = $(".side-nav-inner").innerWidth();
  if ($(".side-nav").css("left") === "0px") {
    $(".side-nav").css("left", -left);
  } else {
    $(".side-nav").css("left", 0); // !<=====
  }
});

$(".side-nav").css("left", -$(".side-nav-inner").innerWidth());

$("#theme").click(() => {
  let mode = $("body").attr("data-bs-theme");
  if (mode === "dark") {
    $("body").attr("data-bs-theme", "light");
    $("#theme span").text("theme: Light");
  } else {
    $("body").attr("data-bs-theme", "dark");
    $("#theme span").text("theme: Dark");
  }
});


// scroll part 

$(".icon-top").click(() => {
  $("html, body").animate({ scrollTop: 0 }, 0);
});

let detailsOffsetTop = $("#details").offset().top;
let iconOffsetTop = $(".icon-top").offset().top;

$("html, body").mouseover(() => {
  if (iconOffsetTop < detailsOffsetTop) {
    //!790 <=============================
    $(".icon-top").hide(300);
  } else {
    $(".icon-top").show(300);
  }
});



// details part 

$(".singer").click((e) => {
  let nextElement = $(e.currentTarget).next();
  $(e.currentTarget).next().slideToggle(300);
  $(".singer").next().not(nextElement).slideUp(300);
  $(".singer i").text(300);
});

let firstElement = $(".singer").nextAll().eq(0);
$(".singer").nextAll().not(firstElement).slideUp(0);



// duration part 

let countDownDate = new Date("Dec 31 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDeff = countDownDate - dateNow;
  let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);

  $("#duration .days p").text(days);
  $("#duration .hours p").text(hours);
  $("#duration .minutes p").text(minutes);
  $("#duration .seconds p").text(seconds);
}, 1000);



// contact part 

let maxLength = 100;
$("textarea").keyup((e) => {
  let length = $(e.currentTarget).val().length;
  let amountLeft = maxLength - length;
  $("#contact form p span").text(`${amountLeft} `);
});

// end 