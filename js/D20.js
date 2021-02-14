class D20 extends Die {
  constructor(numOfSides, id, numOfDice, modifier, resultsDisplay) {
    super(numOfSides, id, numOfDice, modifier, resultsDisplay);
  }

  displayResults() {
    if (this.numOfDice.value == 1) {
      if (this.rollTotal == 20) {
        this.resultsDisplay.innerHTML = `${this.addRolls()}`; // If a natural 20 is rolled

        $(this.resultsDisplay).hide()
                              .delay(1000)
                              .fadeIn(1);
      }
      else if (this.rollTotal == 1) {
        this.resultsDisplay.innerHTML = `${this.addRolls()}`; // If a natural 1 is rolled

        $(this.resultsDisplay).hide()
                              .delay(300)
                              .fadeIn(1700);
      }
      else if (this.modifier.value == 0) {
        this.resultsDisplay.innerHTML = `${this.addRolls()}`; // If there is a single die rolled with no modifier
        
        $(this.resultsDisplay).hide()
                              .fadeIn(200);
      }
      else if (this.modifier.value > 0) {
        this.resultsDisplay.innerHTML = `${this.addModifier()} <small>(${this.rollTotal}) + ${this.modifier.value}</small>`; // If there is a single die rolled with a modifier

        $(this.resultsDisplay).hide()
                              .fadeIn(200);
      }
    }
    else if (this.modifier.value == 0) {
      const joinedRolls = this.rollResults.join(' + ');
      this.resultsDisplay.innerHTML = `${this.addRolls()} <small>(${joinedRolls})</small>`; // If there is more than one die rolled with no modifier

      $(this.resultsDisplay).hide()
                            .fadeIn(200);
    }
    else if (this.modifier.value > 0) {
      const joinedRolls = this.rollResults.join(' + ');
      this.resultsDisplay.innerHTML = `${this.addModifier()} <small>(${joinedRolls}) + ${this.modifier.value}</small>`; // If there is more than one die rolled with a modifier

      $(this.resultsDisplay).hide()
                            .fadeIn(200);
    }
  }

}