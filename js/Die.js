class Die {
  constructor(numOfSides, id, numOfDice, modifier, resultsDisplay) {
    this.numOfSides = numOfSides;
    this.id = document.querySelector(id);
    this.numOfDice = document.querySelector(numOfDice);
    this.modifier = document.querySelector(modifier);
    this.resultsDisplay = document.querySelector(resultsDisplay);
    this.rollResults = [];
    this.rollTotal = 0;
    this.grandTotal = 0;
  }

  /**
   * Generates a random number or array of numbers representing the result of the di(c)e roll(s).
   * @return  [Array]     an array containing the individual results of all of the di(c)e roll(s) performed.
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
   * @return  number     a total of all of the rolls from roll().
   */

  addRolls() {
    this.rollTotal = 0;

    for ( let i = 0; i < this.rollResults.length; i++ ) {
      this.rollTotal += this.rollResults[i];
    }

    return this.rollTotal;
  }

  /**
   * Adds all of the individual results of roll() together for a grand total.
   * @return  number     a grand total of all of the rolls from roll() + the user's modifier.
   */
  addModifier() {
    this.grandTotal = 0;
    let parsedModifier;

    if (this.modifier.value === NaN || !this.modifier.value) {
      this.modifier.value = 0;
    }
    parsedModifier = parseInt(this.modifier.value);
    this.grandTotal = this.rollTotal + parsedModifier;

    return this.grandTotal;
  }

    /**
   * Displays the roll results to the page.
   * @return  nothing
   */
  displayResults() {
    if (this.numOfDice.value == 1) {
      if (this.modifier.value == 0) {
        this.resultsDisplay.innerHTML = `${this.addRolls()}`;
      }
      else if (this.modifier.value > 0) {
        this.resultsDisplay.innerHTML = `${this.addModifier()} <small>(${this.rollTotal}) + ${this.modifier.value}</small>`;
      }
    }
    else if (this.modifier.value == 0) {
      const joinedRolls = this.rollResults.join(' + ');
      this.resultsDisplay.innerHTML = `${this.addRolls()} <small>(${joinedRolls})</small>`;
    }
    else if (this.modifier.value > 0) {
      const joinedRolls = this.rollResults.join(' + ');
      this.resultsDisplay.innerHTML = `${this.addModifier()} <small>(${joinedRolls}) + ${this.modifier.value}</small>`;
    }
  }

    /**
   * 
   * @return  nothing
   */
  listenForRoll() {
    this.id.addEventListener("click", () => {
      if (!this.numOfDice.value) {
        ;
      } 
      else {
        this.roll();
        this.addRolls();
        this.addModifier();
        this.displayResults();
      }
    })
  }

}