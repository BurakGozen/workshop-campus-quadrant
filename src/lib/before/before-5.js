const randomNumber = Math.floor(Math.random() * 100);

const savedNumber = localStorage.getItem("myRandomNumber");

!savedNumber && localStorage.setItem("myRandomNumber", randomNumber);
