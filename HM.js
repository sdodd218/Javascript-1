let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! Did you know, Photoshop is a lifesaver?";
  }
  document.getElementById("demo").innerHTML = text;