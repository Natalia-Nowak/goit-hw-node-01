const contactsDb = require("./contacts.js");

const contactsAdd = contactsDb.addContact(
  "Amanda",
  "amanda@gmail.com",
  "90890890"
);

const contacts = contactsDb.listContacts();
console.log(contacts);
