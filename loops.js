console.log("loops.js is linked");

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const printToDOM = (message, divID) => {
    document.getElementById(divID).innerHTML += message;
}

const printRainbow = (arr) => {
    for (i = 0; i < arr.length; i++) {
        const color = arr[i];
        printToDOM(color, 'rainbow');
    }
}

printRainbow(colors);

const instructors = [
    {first: "Zoe", last: "Ames"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];

  const printInstructors = (arr) => {
      for (i = 0; i < arr.length; i++) {
          const person = arr[i];
          const value = `<p> ${person.first} ${person.last} </p>`;
          printToDOM(value, 'people');
      }
  }

printInstructors(instructors);

