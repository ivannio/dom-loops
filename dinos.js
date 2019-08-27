console.log('dinos.js is linked');

const dinosaurs = [
    {
      dinoType: 't-rex',
      name: 'wrex',
      emoji: '🦖'
    },
    {
      dinoType: 'stegosaurus',
      name: 'steve',
      emoji: '🐉'
    },
    {
      dinoType: 'velociraptor',
      name: 'Ted',
      emoji: '🦕'
    }
  ];

  const printToDOM = (message, divID) => {
    document.getElementById(divID).innerHTML += message;
}

const dinoPrinter = (dinoArr) => {
    for (i = 0; i < dinoArr.length; i++) {
        const dino = dinoArr[i];
        const stringToPrint = `
        <div class="dino-card">
        <h3>${dino.dinoType}</h3>
        <p>${dino.name}</p>
        <h1>${dino.emoji}</h1>
        </div>
        `
        printToDOM(stringToPrint, 'dino-div');
    }
}

dinoPrinter(dinosaurs);