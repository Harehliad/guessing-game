let minporog;
let maxporog;
let resultat; 
class GuessingGame {
    
    constructor(min, max, result) {
        this.minporog  = min;
        this.maxporog  = max;

        
    }

    setRange(min, max) {
         minporog = min;
         maxporog = max;
    }

    guess() {
        resultat = maxporog - Math.floor((maxporog-minporog)/2);
        return resultat;
    }

    lower() {
        maxporog = resultat;
    }

    greater() {
        minporog = resultat;
    }
}

module.exports = GuessingGame;