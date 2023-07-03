// function Book() {
  
// }

// function AddressBook() {

// }

// function Contact() {

// }

class Book {
  constructor(cover: string) {
    this.cover = cover;
  }
  cover: string;
}

class AddressBook extends Book {
  constructor(hasCalendar: boolean, coverType: string) {
    super(coverType)
    this.hasCalendar = hasCalendar
  }
  addContact(contact: Contact) {
    this.contacts.push(contact)
  }

  getContacts() {
    return this.contacts
  }
  hasCalendar: boolean;
  contacts: Contact[] = []
}

class Contact {
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  name: string;
  lastName: string;
  age: number;
  isCool: boolean = false;
}

const addressBook = new AddressBook(true, "hardcover")

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