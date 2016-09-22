var twins = {
  sport: 'baseball',
  state: 'Minnesota',
  name: 'Twins',
  stadium: 'Target Field',
  stadiumType: 'outdoor',
  mascot: 'TC Bear',
  favoritePlayer: 'Kirby Puckett',
  favoriteMemory: '1991 World Series Parade',
  mascotType: 'awesome',
  gameBestFeature: 'food',
  story: function() {
    console.log('The ' + this.state + ' ' + this.name + ' are my favorite ' + this.sport + ' team. I have been a fan since I was a kid, when I cheered for ' + this.favoritePlayer + ' and got to see the ' + this.favoriteMemory + '. Their mascot is ' + this.mascot + ' and he is ' + this.mascotType + '. Their newish stadium is ' + this.stadium + ', an ' + this.stadiumType + ' stadium, which is a little weird for ' + this.state + '. The best thing about going to ' + this.stadium + ' for a ' + this.name + ' game is the ' + this.gameBestFeature + '.');
  }
};

twins.story();
