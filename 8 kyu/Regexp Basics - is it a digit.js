String.prototype.digit = function() {
    console.log(this.toString())
    if (this.toString() === undefined) {return false}
    console.log(this.toString().search(/\d/))
    if (this.search(/\d/) < 0) {return false}
    return this.toString()===this.toString()[this.search(/\d/)]
  };