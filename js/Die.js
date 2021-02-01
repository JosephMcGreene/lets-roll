class Die {
  constructor(numOfSides, id, numOfDice, resultsDisplay) {
    this.numOfSides = numOfSides;
    this.id = document.querySelector(id);
    this.numOfDice = document.querySelector(numOfDice);
    this.resultsDisplay = document.querySelector(resultsDisplay);
    this.rollResults = [];
    this.rollTotal = 0;
  }

  /**
   * Generates a random number or array of numbers representing the result of the di(c)e roll.
   * @return  [Array]     an array containing the individual results of all of the di(c)e rolls performed.
   */
  roll() {
    this.rollResults = [];
    for ( let n = 0; n < this.numOfDice.value; n++ ) {
      const dieRoll = Math.floor(Math.random() * Math.floor(this.numOfSides) + 1);
      this.rollResults.push(dieRoll);
    }
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
    return this.rollTotal;
  }

    /**
   * Displays the roll results to the page.
   * @return  nothing
   */
  displayResults() {
    if (this.numOfDice.value == 1) {
      this.resultsDisplay.innerHTML = `${this.addRolls()}`;
    } else {
      const joinedRolls = this.rollResults.join(' + ');
      this.resultsDisplay.innerHTML = `${this.addRolls()} <small>(${joinedRolls})</small>`;
    }
  }

    /**
   * Calls roll(), addRolls(), and displayResults() when <button>Roll</button> is clicked.
   * @return  nothing
   */
  listenForClick() {
    this.id.addEventListener("click", () => {
      this.roll();
      this.addRolls();
      this.displayResults();
    })
  }
}

