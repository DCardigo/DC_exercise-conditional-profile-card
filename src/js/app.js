import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  if (variables.name === null) variables.name = "Name, ";
  if (variables.lastname === null) variables.lastname = "Lastname";
  if (variables.role === null) variables.role = "Role";
  if (variables.city === null) variables.city = "City";
  if (variables.country === null) variables.country = "Country";

  if (variables.twitter === null) variables.twitter = "4geeksacademy";
  if (variables.github === "alesanchezr") variables.github = "4geeksacademy";
  if (variables.instagram === null) variables.instagram = "4geeksacademy";
  if (variables.linkedin === null)
    variables.linkedin = "school/4geeksacademyes/mycompany/";

  // reset the website body with the new html output class="photo"
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" id="urlInput" />
          <h1> ${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter}" ><i id="twitter" class="fab fa-twitter" ></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i id="github" class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin}"><i id="linkedin" class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i id="instagram" class="fab fa-instagram"></i></a></li>
          </ul> 
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
  // --- Modificación de los iconos (Click)---
  document.getElementById("twitter").addEventListener("click", click);
  function click() {
    const icono = document.getElementById("twitter");
    icono.className = "fa-brands fa-square-twitter";
  }
  document.getElementById("github").addEventListener("click", click1);
  function click1() {
    const icono = document.getElementById("github");
    icono.className = "fa-brands fa-square-github";
  }
  document.getElementById("linkedin").addEventListener("click", click2);
  function click2() {
    const icono = document.getElementById("linkedin");
    icono.className = "fa-brands fa-linkedin-in";
  }
  document.getElementById("instagram").addEventListener("click", click3);
  function click3() {
    const icono = document.getElementById("instagram");
    icono.className = "fa-brands fa-square-instagram";
  }

  // --- Modificación del background---
  function cambiarColorFondo(event) {
    const color = event.target.value;
    document.body.style.backgroundColor = color;
  }

  document
    .getElementById("colorPicker")
    .addEventListener("change", cambiarColorFondo);
};
