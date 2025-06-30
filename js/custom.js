$(function () {
  // AOS Initailaztion
  AOS.init();

  ("use strict");
  // Art Section Slider
  var Serviceowl = $(".service-slider");
  if ($(".service-slider").length) {
    $(".service-slider").owlCarousel({
      loop: true,
      autoplay: true,
      center: false,
      margin: 30,
      nav: false,
      dots: false,
      items: 1.2,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        380: {
          items: 1,
        },
        600: {
          items: 2,
        },
        768: {
          items: 1,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

  // blog Section Slider
  var Blogowl = $(".blog-slider");
  if ($(".blog-slider").length) {
    $(".blog-slider").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 30,
      nav: false,
      dots: false,
      items: 3,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        481: {
          items: 1,
        },
        480: {
          items: 2,
        },
        769: {
          items: 2,
        },
        1100: {
          items: 3,
        },
        1368: {
          items: 3,
        },
      },
    });
  }

  // Plan Sldier
  var Planowl = $(".plan-slider");
  if ($(".plan-slider").length) {
    $(".plan-slider").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 30,
      nav: false,
      dots: false,
      items: 3,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        481: {
          items: 1,
        },
        480: {
          items: 2,
        },
        769: {
          items: 2,
        },
        1000: {
          items: 2,
        },
        1368: {
          items: 2,
        },
      },
    });
  }

  // Team Section Slider
  var Teamowl = $(".team-slider");
  if ($(".team-slider").length) {
    $(".team-slider").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 30,
      nav: false,
      dots: false,
      items: 3,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        481: {
          items: 1,
        },
        550: {
          items: 2,
        },
        769: {
          items: 3,
        },
        1000: {
          items: 3,
        },
        1368: {
          items: 4,
        },
      },
    });
  }

  // History Section Slider
  var Historyowl = $(".history-slider");
  if ($(".history-slider").length) {
    $(".history-slider").owlCarousel({
      loop: true,
      center: true,
      autoplay: false,
      margin: 30,
      nav: false,
      dots: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
        320: {
          items: 1,
        },
        481: {
          items: 1.5,
        },
        480: {
          items: 2,
          margin: 20,
        },
        769: {
          items: 2,
        },
        1000: {
          items: 2,
        },
        1368: {
          items: 2,
        },
      },
    });
  }

  // History Section Slider
  var Projectowl = $(".project-slider");
  if ($(".project-slider").length) {
    $(".project-slider").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 30,
      nav: false,
      dots: false,
      items: 2,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        481: {
          items: 1,
        },
        480: {
          items: 2,
        },
        769: {
          items: 2,
        },
        1000: {
          items: 2,
        },
        1368: {
          items: 2,
        },
      },
    });
  }

  // Team Slider button
  $(".owl-next").click(function () {
    Teamowl.trigger("next.owl.carousel");
  });
  $(".owl-prev").click(function () {
    Teamowl.trigger("prev.owl.carousel");
  });

  // Plan Slider button
  $(".owl-next").click(function () {
    Planowl.trigger("next.owl.carousel");
  });
  $(".owl-prev").click(function () {
    Planowl.trigger("prev.owl.carousel");
  });

  // Custom Slider button
  $("#blog-next").click(function () {
    Blogowl.trigger("next.owl.carousel");
  });
  $("#blog-prev").click(function () {
    Blogowl.trigger("prev.owl.carousel");
  });

  // Service Slider button
  $(".owl-next").click(function () {
    Serviceowl.trigger("next.owl.carousel");
  });
  $(".owl-prev").click(function () {
    Serviceowl.trigger("prev.owl.carousel");
  });

  // History Slider button
  $(".owl-next").click(function () {
    Historyowl.trigger("next.owl.carousel");
  });
  $(".owl-prev").click(function () {
    Historyowl.trigger("prev.owl.carousel");
  });

  // Project Slider button
  $("#project-next").click(function () {
    Projectowl.trigger("next.owl.carousel");
  });
  $("#project-prev").click(function () {
    Projectowl.trigger("prev.owl.carousel");
  });

  // Mobile menu
  $(".nav-link").click(function () {
    $(".menu").removeClass("open");
    $(".navbar-collapse").removeClass("menu-on");
    $(".navbar-collapse").removeClass("show");
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // Hamburger menu open & close
  $(".menu").click(function () {
    $(this).toggleClass("open");
  });

  // Sticky header & navigation
  $(window).scroll(function () {
    // Add Stikcy style to header
    if ($(window).scrollTop() >= 50) {
      $("header").addClass("header-sticky");
    } else {
      $("header").removeClass("header-sticky");
    }
  });

  // Sticky header & navigation
  $(window).scroll(function () {
    // Add Stikcy style to header
    if ($(window).scrollTop() >= 50) {
      $("header").addClass("header-sticky");
    } else {
      $("header").removeClass("header-sticky");
    }
    // Scroll Spy for navigation
    var cur_pos = $(this).scrollTop();
    $("section").each(function () {
      var activeSectionTop = $(this).offset().top - $("header").height();
      if (cur_pos >= activeSectionTop - 1) {
        $(".home-nav li").removeClass("active");
        var activeId = $(this).attr("data-id");
        $(".home-nav li a").each(function () {
          if ($(this).attr("data-link") == activeId) {
            $(this).closest("li").addClass("active");
          }
        });
      }
    });
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    //
  });
});
