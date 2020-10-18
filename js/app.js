document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const formSubmit = document.querySelector("#new-item-form");
    formSubmit.addEventListener("submit", handleFormSubmit);
  
    addDeleteButton();
    const deleteButton = document.querySelector(".delete-all-button");
    deleteButton.addEventListener("click", handleDeleteClick);
  
  });
  
  const handleFormSubmit = function (event) {
    event.preventDefault();
    console.dir(event.target.name);
  
    const newPlayer = document.createElement("li");
    newPlayer.textContent = `${event.target.name.value}`;
    newPlayer.classList.add("new-name");
  
    const newValue = document.createElement("li");
    newValue.textContent = `${event.target.value.value}`;
    newValue.classList.add("new-value");
  
    const newPosition = document.createElement("li");
    newPosition.textContent = `${event.target.position.value}`;
    newPosition.classList.add("new-position");
  
    const newPlayerName = document.createElement("li");
    newPlayerName.classList.add("new-player");
  
    const list = document.querySelector("#player-list");
    list.appendChild(newPlayerName);
  
    list.appendChild(newPlayer);
    list.appendChild(newValue);
    list.appendChild(newPosition);
  
    document.getElementById("new-item-form").reset();
  };
  
  const addDeleteButton = function () {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete All";
    deleteButton.classList.add("delete-all-button")
    
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(deleteButton);
  };
  
  const handleDeleteClick = function () {
    // console.log("made it here");
    const ulElement = document.getElementById("player-list");
    ulElement.innerHTML = '';
  }