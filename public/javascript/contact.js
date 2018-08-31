$(document).ready(function() {
    $(document).on("click", "#submit", insertInquiries);

    function insertInquiries(event) {
        event.preventDefault();
        // Capture user inputs and store them in newInquiry object
        var newInquiry = {
            title: $("#title").val(),
            firstName: $("#first-name").val().trim(),
            lastName: $("#last-name").val().trim(),
            email: $("#email").val().trim(),
            services: $("input:checkbox[name=services]:checked").val(),
            description: $("#description").val(),
            date: $("#date").val()
        };

        $.post("/api/inquiries", newInquiry);
            $("#title").val("");
            $("#first-name").val("");
            $("#last-name").val("");
            $("#email").val("");
            $("input:checkbox[name=services]:checked").val("");
            $("#description").val("");
            $("#date").val("");

            console.log(newInquiry);
    }
});



// $("#submit").on("click", function(event) {
//     // prevent form from trying to submit/refresh page
//     event.preventDefault();

//     // Capture user inputs and store them in newInquiry object
//     var newInquiry = {

//         title: $("#title").val(),
//         firstName: $("#first-name").val().trim(),
//         lastName: $("#last-name").val().trim(),
//         email: $("#email").val().trim(),
//         services: $("input:checkbox[name=services]:checked").val(),
//         description: $("#description").val(),
//         date: $("#date").val()
//     };

//     console.log(newInquiry);

//     // Send AJAX POST-request with jQuery
//     $.post("/api/inquiries", newInquiry)
//         .then(function(data) {
//             console.log(data);
//         });
// });