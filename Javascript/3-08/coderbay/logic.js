// Initialize Firebase
    var config = {
      apiKey: "AIzaSyBr9gGwZaGpZswzPJrZS7ddrWZoig7PkaU",
      authDomain: "test-project-b6adc.firebaseapp.com",
      databaseURL: "https://test-project-b6adc.firebaseio.com",
      storageBucket: "test-project-b6adc.appspot.com",
      messagingSenderId: "66480656978"
    };

    firebase.initializeApp(config);

// Create a variable to reference the database
    var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {
  console.log(snapshot.val);
    // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the initial variables for highBidder equal to the stored values.
    highBidder = snapshot.val().highBidder;
    highPrice = parseInt(snapshot.val().highPrice);

    console.log(snapshot.val());
    // Change the HTML to reflect the initial value
    var highBid = $("#highest-bidder").html(highBidder);

    // Print the initial data to the console.
    console.log(highBidder);


  }

  // Keep the initial variables for highBidder equal to the initial values
  else {

    // Change the HTML to reflect the initial value
    highBidder = initialBidder;
    $("#highest-bidder").html(highBidder);
    console.log(highBidder);


    // Print the initial data to the console.


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  name = ("#bidder-name").val().trim();
  price = ("#bidder-price").val().trim();

  database.ref().set({
    name: name,
    price: price
  });

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase



    // Log the new High Price


    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
