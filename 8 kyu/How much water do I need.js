function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
    if (clothes > load * 2) {
      return 'Too much clothes'
      } else if ( load > clothes) {
        return 'Not enough clothes'
      } else { return Number((water * Math.pow(1.1,(clothes - load))).toFixed(2))}
  }