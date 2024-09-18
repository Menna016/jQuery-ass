//! side Nav
$(document).ready(function() {
    // Click event to open the side nav
    $(".openIcon").click(function() {
        $(".open").css("left", "0"); // Slide in
    });

    // Click event to close the side nav
    $(".close").click(function() {
        $(".open").css("left", "-270px"); // Slide out
    });
});

//! Duration section
$(".Duration h3").click(function(){
    $(this).next().slideToggle();

    $(".Duration div").not($(this).next()).slideUp();
})


//! contact
$(document).ready(function() {
    const maxChars = 100;
    $('#myTextarea').on('input', function() {
        const textLength = $(this).val().length;
        const charsLeft = maxChars - textLength;
        $('#charCount').text(`${charsLeft} Characyer Reamining `);

        // Prevent more than 100 characters
        if (textLength > maxChars) {
            $(this).val($(this).val().substring(0, maxChars));
        }
    });
});

//!25/3/2025
$(document).ready(function() {
    // Set the target date (constant)
    const targetDate = new Date("March 25, 2025 00:00:00");

    const interval = setInterval(function() {
        const now = new Date();
        const remaining = targetDate - now;

        if (remaining <= 0) {
            clearInterval(interval);
            $('#Details').text("Countdown finished!");
            return;
        }

        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }, 1000);
});