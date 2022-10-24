function titleCase(title, minorWords) {
    if (!title) {return ''}
    if (minorWords) {
    minorWords = minorWords.toLowerCase().split(' ')
    console.log(minorWords)
      }
    console.log('title: '+title)
    let newTitle = title.toLowerCase().split(' ').map(x => {
      if(minorWords && minorWords.includes(x)) {
         return x.toLowerCase()
         }
      else { return (x[0].toUpperCase()+x.substr(1).toLowerCase()) }
         })
    let final = newTitle.join(' ')[0].toUpperCase()+newTitle.join(' ').substr(1)
    return final
  }