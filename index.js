console.log("connected!!!");
let imgNum = 0;
//User Object
let user = {
  username: "username",
  age: generateAge(),
  description: "some description",
  img: generatePhoto(),
};

function createUserElement() {
  //Creating Divs
  const containerDiv = document.createElement("div");
  const imgElement = document.createElement("img");
  const usernameElement = document.createElement("h3");
  const ageElement = document.createElement("p");
  const descElement = document.createElement("p");
  //Setting Attributes
  containerDiv.setAttribute("class", "user-container");
  usernameElement.setAttribute("class", "username");
  setAttributes(imgElement, { src: generatePhoto(), class: "profile-img" });
  //Setting InnetHTML
  usernameElement.innerHTML = user.username;
  ageElement.innerHTML = generateAge();
  descElement.innerHTML = user.description;

  let childElements = [imgElement, usernameElement, ageElement, descElement];
  appendChildren(containerDiv, childElements);

  return containerDiv;
}

//Generate 100 random users
(function createRandomUsers() {
  for (let i = 1; i <= 100; i++) {
    document.body.appendChild(createUserElement());
  }
})();

function generatePhoto() {
  return `https://picsum.photos/50?random=${imgNum++}`;
}

//generates random number
function generateAge() {
  //returns numbers between 18 and 89 that represent user's age
  return Math.floor(Math.random() * (90 - 18) + 18);
}

//Helper funtion to set multiple attributes to an element
function setAttributes(element, attr) {
  for (let key in attr) {
    element.setAttribute(key, attr[key]);
  }
}
//Append Children helper function
function appendChildren(parent, children) {
  for (let ele of children) {
    parent.appendChild(ele);
  }
  return parent;
}
//Generate random username

//Generate random description
