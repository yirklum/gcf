
$(document).ready(function() {
    $("body").removeClass("fade-out");
    
    $("#submit").click(function() {
        $("#confirmation").css("display", "inline-block");
        $(".contact-form").css("display", "none");
    });

    // function submitInquiry(event) {
    //     // event.preventDefault();
        
        
        

    //     $.post("/api/inquiries", newInquiry);
    //         $("#title").val("");
    //         $("#first-name").val("");
    //         $("#last-name").val("");
    //         $("#email").val("");
    //         $("#phone-number").val("");
    //         $("input[name=services]:checked").val("");
    //         $("#description").val("");
    //         $("#date").val("");

    //         console.log(newInquiry);
    // }



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