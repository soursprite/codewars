function Jar() {
    // TODO
    this.apple = 0;
    this.banana = 0;
    this.total = 0;
  }
  
  Jar.prototype.add = function(amount, type) {
    // TODO
    if (!this[type]) {this[type] = 0}
    this[type] = this[type] + amount
    this['total'] = this['total'] + amount
    console.log(this)
  };
  
  Jar.prototype.pourOut = function(amount) {
    // TODO
    let percent = amount / this['total']
    this['apple'] -= this['apple'] * percent
    this['banana'] -= this['banana'] * percent
    this['total'] -= amount
  };
  
  Jar.prototype.getTotalAmount = function() {
    // TODO
    return this['total']
  };
  
  Jar.prototype.getConcentration = function(type) {
    // TODO
    if (!this[type]) {return 0}
    return (this['total'] > 0) ? this[type]/this['total'] : 0
  }