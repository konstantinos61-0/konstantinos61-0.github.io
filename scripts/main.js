const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/beautiful_spring.jpg") {
    myImage.setAttribute("src", "images/smiley_ironic.png");
  } else {
    myImage.setAttribute("src", "images/beautiful_spring.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Spring is...a season, ${myName}`;
    }
  }
  
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Spring is...a season, ${storedName}`;
  }
  
  myButton.addEventListener("click", () => {
    setUserName();
  });
  
