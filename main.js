class Animal {
    constructor(name) {
      this.name = name;
      this.health = 100;
    }
  
    decreaseHealth() {
      this.health -= 10;
    }
  
    checkHealth() {
      return this.health <= 0;
    }
  
    displayStats() {
      document.getElementById('stats').innerHTML = `<p>${this.name} Health: ${this.health}</p>`;
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
      this.happy = 100;
    }
  
    playFetch() {
      this.happy += 10;
    }
  
    displayStats() {
      super.displayStats();
      document.getElementById('stats').innerHTML += `<p>${this.name} Happiness: ${this.happy}</p>`;
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
      this.content = 100;
    }
  
    catNip() {
      this.content += 10;
    }
  
    displayStats() {
      super.displayStats();
      document.getElementById('stats').innerHTML += `<p>${this.name} Contentment: ${this.content}</p>`;
    }
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.energy = 100;
    }
  
    hop() {
      this.energy += 10;
    }
  
    displayStats() {
      super.displayStats();
      document.getElementById('stats').innerHTML += `<p>${this.name} Energy: ${this.energy}</p>`;
    }
  }
  
  let currentPet;
  
  function choosePet(petType) {
    switch (petType) {
      case 'dog':
        currentPet = new Dog('Doggy');
        break;
      case 'cat':
        currentPet = new Cat('Kitty');
        break;
      case 'rabbit':
        currentPet = new Rabbit('Bunny');
        break;
    }
    displayStats();
  }
  
  function feed() {
    if (currentPet) {
      currentPet.decreaseHealth();
      currentPet.displayStats();
    }
    checkGameOver();
  }
  
  function play() {
    if (currentPet instanceof Dog) {
      currentPet.playFetch();
    } else if (currentPet instanceof Cat) {
      currentPet.catNip();
    } else if (currentPet instanceof Rabbit) {
      currentPet.hop();
    }
    currentPet.decreaseHealth();
    currentPet.displayStats();
    checkGameOver();
  }
  
  function sleep() {
    if (currentPet instanceof Rabbit) {
      currentPet.decreaseHealth();
      currentPet.displayStats();
    }
    checkGameOver();
  }
  
  function displayStats() {
    if (currentPet) {
      currentPet.displayStats();
    }
  }
  
  function checkGameOver() {
    if (currentPet && currentPet.checkHealth()) {
      alert(`${currentPet.name} has passed away. Game Over.`);
      location.reload();
    }
  }
  