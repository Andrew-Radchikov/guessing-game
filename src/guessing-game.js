class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        if((this.max-this.min) % 2 == 0){
            return this.min+(this.max-this.min)/2;
        }
        else{
            return this.min+(this.max-this.min+1)/2;
        }
    }

    lower() {
        if((this.max-this.min) % 2 == 0){
            this.max=this.min+(this.max-this.min)/2;
        }
        else{
        this.max=this.min+(this.max-this.min+1)/2;
        }
    }

    greater() {
        if((this.max-this.min) % 2 == 0){
            this.min=this.min+(this.max-this.min)/2;
        }
        else{
            this.min=this.min+(this.max-this.min+1)/2;
        }   
    }
}

module.exports = GuessingGame;
