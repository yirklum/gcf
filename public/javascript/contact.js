
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
            phoneNumber: $("#phone-number").val().trim(),
            services: $("input[name=services]:checked").val(),
            description: $("#description").val(),
            date: $("#date").val()
        };

        $.post("/api/inquiries", newInquiry);
            $("#title").val("");
            $("#first-name").val("");
            $("#last-name").val("");
            $("#email").val("");
            $("#phone-number").val("");
            $("input[name=services]:checked").val("");
            $("#description").val("");
            $("#date").val("");

            console.log(newInquiry);
    }

 
});