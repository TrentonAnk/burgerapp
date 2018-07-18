$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newDevour");
  
      var newDevourState = {
        devoured: !newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgerList/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgerList", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".deleteBurger").on("click", function(event) {
      var id = $(this).data("id");
    //   var deleter = $(this).data("deleter")
    //   var deleteBurger = {
    //       name:$("#burger").val().trim()
    //   }

      // Send the DELETE request.
      $.ajax("/api/burgerList/" + id, {
        type: "DELETE",
        // data: deleteBurger
      }).then(
        function() {
          console.log("deleted Burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  