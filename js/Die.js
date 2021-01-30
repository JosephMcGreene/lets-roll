class Die {
  constructor(numOfSides, id, numOfDice) {
    this.numOfSides = numOfSides;
    this.id = document.querySelector(id);
    this.numOfDice = document.querySelector(numOfDice);
    this.rollResults = [];
    this.rollTotal = 0;
  }

  /**
   * Generates a random number or arrya of numbers representing the result of the die roll.
   * @return  [Array]     an array containing the individual results of all of the die rolls performed.
   */
  roll() {
    this.rollResults = [];
    for ( let n = 0; n < this.numOfDice.value; n++ ) {
      const dieRoll = Math.floor(Math.random() * Math.floor(this.numOfSides) + 1);
      this.rollResults.push(dieRoll);
    }
    console.log(this.rollResults);
    return this.rollResults;
  }

  /**
   * Adds all of the individual results of roll() together for a grand total.
   * @return  number     a grand total of all of the rolls from roll().
   */

  addRolls() {
    this.rollTotal = 0;
    for ( let i = 0; i < this.rollResults.length; i++ ) {
      this.rollTotal += this.rollResults[i];
    }
    console.log(this.rollTotal);
    return this.rollTotal;
  }

    /**
   * Listens for the user to press <button>roll</button>.
   * @return  nothing
   */
  listenForClick() {
    this.id.addEventListener("click", () => {
      this.roll();
      this.addRolls();
    })
  }
}

