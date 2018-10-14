
$(document).ready(function() {
    $("body").removeClass("fade-out");
    // $(document).on("click", "#submit", insertInquiries, sendEmail);

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



    // sendEmail (name, email, message) {
    //     fetch('/send', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         name: name,
    //         email: email,
    //         message: message
    //       })
    //     })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log('here is the response: ', res);
    //     })
    //     .catch((err) => {
    //       console.error('here is the error: ', err);
    //     })
    //    }
 
});