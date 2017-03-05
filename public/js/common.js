$(".icon-custom-menu").on("click", function() {
    $('.overlay').toggle();
    if ($(this).hasClass("is-closed")) {
        $(this).removeClass("is-closed").addClass("is-open");
        $('#wrapper').addClass('toggled');
    } else {
        $(this).removeClass("is-open").addClass("is-closed");
        $('#wrapper').removeClass('toggled');
    }
});
