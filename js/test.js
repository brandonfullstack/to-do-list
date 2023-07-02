// function Book() {
  
// }

// function AddressBook() {

// }

// function Contact() {

// }


class Book {
  constructor(cover) {
    this.cover = cover;
  }
  cover;
}

class AddressBook extends Book {
  constructor(hasCalendar) {
    super()
    this.hasCalendar = hasCalendar
  }
  addContact(contact) {
    this.contacts.push(contact)
  }

  getContacts() {
    return this.contacts
  }
  hasCalendar;
  contacts = []
}

class Contact {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  name;
  lastName;
  age;
}

const addressBook = new AddressBook(true)
const NorwoodFam = new Contact({Sean, Laura})
const Sean = new Contact("Sean", "Norwood", 36)
const Laura = new Contact("Laura","Norwood", 34)
addressBook.addContact(Sean)
addressBook.addContact(Laura)

console.log(addressBook.contacts)

let array1 = ["Cookie", "Spaghetti", "Toast"]

let array = [
  {
    name: "Sean",
    lastName: "Norwood",
    kids: [{name: "Sebastian"}, {name: "Toast"}]
  },
  {
    name: "Laura",
    lastName: "Norwood",
  },
  {
    name: "Sebastian",
    lastName: "Norwood"
  }
];


// array.forEach(a => console.log(a.lastName))