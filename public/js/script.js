// Function to fetch cards from the server
const fetchCards = () => {
  $.ajax({
    url: "/api/cards",
    type: "GET",
    success: (data) => {
      addCards(data);
    },
    error: (error) => {
      console.error("Error fetching card data:", error);
    },
  });
};

// Function to handle form submission
const submitForm = () => {
  let formData = {
    first_name: $("#first_name").val(),
    last_name: $("#last_name").val(),
    password: $("#password").val(),
    email: $("#email").val(),
  };
  console.log("Form Data Submitted: ", formData);
  // Add functionality here to handle form data, like sending it to a server
};

// Function to dynamically add cards
const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '"></div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p></div></div></div>";
    $(".main-body .container .row:last").append(itemToAppend);
  });
};

// jQuery document ready function
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();
  $("#clickMeButton").click(() => {
    $("#modal1").modal("open");
  });
  $("#formSubmit").click(() => {
    submitForm();
  });
  fetchCards();
  // addCards(cardList);
});
