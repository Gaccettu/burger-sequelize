$(function() {
    $(".devour").on("click", function(event) {
        event.preventDefault();
        console.log("clicked")
      var id = $(this).data("id");
      
      // Send the PUT request.
      $.ajax({
        url: "/api/burgers/" + id,
        type: "PUT",
        data: {devoured: true}
      }).then(
        function() {
          console.log("devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $("#text-enter-button").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#enter_text").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});