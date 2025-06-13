$(document).ready(function () {
  function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  if (isMobile()) {
    // Automatically show the card on mobile
    $(".card").css("top", "-90px");
  } else {
    // Desktop hover effects
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  }

  // Toggle visibility on click
  $(".card").click(function () {
    const currentTop = $(this).css("top");
    if (currentTop === "-90px") {
      $(this).animate({ top: "0" }, "slow");
    } else {
      $(this).animate({ top: "-90px" }, "slow");
    }
  });
});
