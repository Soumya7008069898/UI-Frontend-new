//variable for service dropdown
const carPrices = {
    selectmodel: 0,
    model1: 17000,
    model2: 15000,
    model3: 20000,
    model4: 25000,
  };

  const modelSelect = document.getElementById("model-select");
  const priceInput = document.getElementById("price-input");
  const submitButton = document.getElementById("submit-button");

  modelSelect.addEventListener("change", () => {
    const selectedModel =
      modelSelect.options[modelSelect.selectedIndex].value;
    const carPrice = carPrices[selectedModel];
    priceInput.value = carPrice;
  });
// validation of form
  function validateSubmit() {
    var name = document.getElementById("name").value; //name getelement
    var email = document.getElementById("email").value; //email getelement
    var phonenumber = document.getElementById("phone").value;
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regName = /\d+$/g;
    var phoneno = /^\i{10}$/;

    if (name == "") {
      alert("Name must be there");
      return false;
    }
    if (name.match(regName)) {
      alert("enter a valid name");
      return false;
    }
    if (email == "") {
      alert("Email field must be filled out");
      return false;
    }
    // Check if the email
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (phonenumber == "") {
      alert("NUMBER must be there");
      return false;
    }
    if (phonenumber.match(phoneno)) {
      alert("enter a valid number");
      return false;
    }
    alert("your service booking is done successfully. We will contact you soon :) ");
    window.location = "../index.html"; // Redirecting to other page.
    return false;
  }

  //cascading dropdown

  var subjectObject = {
    "Asia & Australia": {
      "INDIA": ["Delhi", "Kolkata", "Chennai", "Kerela", "TamilNadu", "Mumbai"],
      "RUSSIA": ["Central Sochi", "Russland", "Center Prem", "Krasnoyarsk"],
      "AUSTRALIA": ["Melbourne", "Perth", "Sydney", "Brisbane"]    
    },
    "Others": {
      "USA": ["Anchorage", "Bend", "Ed Carroll","Okemos","Buffalo","Norwell","Annapolis"],
      "EUROPE": ["London", "Belgium", "Austria", "Roma"],
      "AFRICA": ["Johannesberg", "Kenya", "Cape Town","Lagos"]
    }
  }
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
  //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }