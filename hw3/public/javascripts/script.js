
//java script linked to index.html file 
	
        $(document).ready(function(){
            $("form").submit(function(event){
                event.preventDefault(); // Prevent the default form submission

                // Check if the Notes contain the word "vegan"
                if ($("#instructions").val().toLowerCase().includes("vegan")) {
                    alert("Warning: Cheesecakes contain dairy!");
                } else {
                    // Replace the form section with a thank you message and order details
                    var orderDetails = "Thank you! Your order has been placed\n" +
                                       "Quantity: " + $("#quantity").val() + "\n" +
                                       "Topping: " + $("input[name='topping']:checked").val() + "\n" +
                                       "Notes: " + $("#instructions").val();
                    $("form").replaceWith("<p>" + orderDetails + "</p>");
                }
            });
	    
	  /*  $("#months").click(function(event) {
		$(.dropbtn).text() = $(this).text()";
	    }); */
		
        });

