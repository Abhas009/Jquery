// Handle keydown event on the document
$(document).keydown(function(event) {
    var k = event.key;
    $("h1").html(k);
});

// Hide the h1 element when any button is clicked
$("button").on("click", function() {
    $("h1").hide();
});

// Toggle the visibility of the h1 element when any button is clicked
$("button").on("click", function() {
    $("h1").toggle();
});

// Animate the opacity of the h1 element when any button is clicked
$("button").on("click", function() {
    $("h1").animate({ opacity: 0.5 });
});

// Slide up, slide down, and animate the opacity of the h1 element when any button is clicked
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({ opacity: 0.4 });
});

// Change the color of the h1 element on mouseover, then revert to original color after 2 seconds
$("h1").on("mouseover", function() {
    var tmp = $("h1").css("color");
    $("h1").css("color", "red");
    onOver(tmp);
});

// Function to revert the color of the h1 element after 2 seconds
function onOver(tmp) {
    setTimeout(() => {
        $("h1").css("color", tmp);
    }, 2000);
}

// AJAX request to load data from data.json and display it in the h1 element
$("button").on("click", function() {
    $.ajax({
        url: "data.json",
        type: "GET",
        success: function(response) {
            $("h1").text(response.message);
        },
        error: function(xhr, status, error) {
            console.error("Error loading data:", error);
        }
    });
});

// Event delegation to handle click event on dynamically added elements
$("body").on("click", "button.dynamic", function() {
    $("h1").toggleClass("highlight");
});

// Form validation to prevent form submission if email is invalid
$("form").submit(function(event) {
    var input = $("input[name='email']").val();
    if (!isValidEmail(input)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
    }
});

// Function to validate email format
function isValidEmail(email) {
    // Your email validation logic here
    return true;
}
