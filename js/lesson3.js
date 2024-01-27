//Створити статистику - об'єкт, у якому вказується кількість тегів
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const statistic = {}

// tweets.flatMap(tweet => tweet.tags)
// .forEach(tag => {
//     if (statistic[tag]){
//         statistic[tag] += 1;
//     } else {
//         statistic[tag] = 1;
//     }
// })

// const statistic = tweets.flatMap(tweet => tweet.tags)
// .reduce((acc, tag) => ({...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1}),{})

// console.log(statistic);

// написати функцію яка повертає масив усіх тегів, при цьому не повинно бути
// повторювань і вони мають бути відсотовані в алфавітному порядку

// function getSorted(arr, prop) {
//   return arr.flatMap(tweet => tweet[prop]).filter((tag, index, array) => array.indexOf(tag) === index)
//     .toSorted((elemOne, elemTwo) => elemOne.localeCompare(elemTwo));
// }
// console.log(getSorted(tweets, "tags"));



//   ---------- class task -----------

//3. Напиши класс Notes який управляє коллекцієй нотаток у
//властивості items.
//Нотатка це  об'єкт з властивостями text, priority
//Додай класу статичну властивість Priopity,
//в якій буде зберігатись об'єкт з пріорітетами ("hight", "middle", "low").
//Додай методи addNote(note), removeNote(noteText)
//updatePriority(noteText, newPriority)

class Notes {

  static Priority = {
    HIGHT: "hight",
    MIDDLE: "middle",
    LOW: "low"
  }

  constructor() {
    this.items = []
  } 
  addNote(note) {
    this.items.push(note);
  }
  removeNote(noteText) {
    this.items = this.items.filter(item => item.text !== noteText)
  }
  updatePriority(noteText, newPriority) {
    const note = this.items.find(item => item.text === noteText)
    if (note) {
      note.priority = newPriority;
    } else {
      console.log("Not found")
    }
  }

}

const notes = new Notes();
notes.addNote({
  text: "abracadabra",
  priority: Notes.Priority.LOW
})
notes.addNote({
  text: "bob",
  priority: Notes.Priority.HIGHT
})

notes.removeNote("bob")
notes.updatePriority("abracadabra", Notes.Priority.MIDDLE)
console.log(notes)



