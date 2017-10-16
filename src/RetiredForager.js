var RetiredForagerBee = function() {
  new ForageBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.forage = 'I am too old, let me play cards instead'
};

RetiredForagerBee.prototype = Object.create(ForageBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}

