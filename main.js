
let userName = prompt('Enter your name');
let userSurname = prompt('Enter your surname');
let userAge = Number(prompt('Enter your age'));



let persInfo = (name, surname, age) => {

  while (isNaN(userAge)) {
    alert('Your value must be number');
    userAge = Number(prompt('Enter your age'));
  }


  while (userName === "" || userName === null) {
    alert('Fields must not be empty');
    userName = prompt('Enter your name');
  }


  while (userSurname === "" || userSurname === null) {
    alert('Fields must not be empty');
    userSurname = prompt('Enter your surname');
  }



  let object = {
    name: userName.trim(),
    surname: userSurname.trim(),
    age: userAge
  };
  return object
};


let data = persInfo(userName, userSurname, userAge);
console.log(data);
