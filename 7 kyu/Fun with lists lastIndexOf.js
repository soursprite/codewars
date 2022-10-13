function lastIndexOf(head, value) {
    let ind = 0
    let save
    if (!head) {return -1}
    while (head) {
      if (head.data === value) {save = ind}
      else if(!head.next) {break}
      head = head.next
      ind++
    }
    return save
  }