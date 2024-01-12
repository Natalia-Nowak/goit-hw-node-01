const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = () => {
  const response = fs.readFileSync(contactsPath);
  const contacts = JSON.parse(response.toString());
  return contacts;
};

function getContactById(contactId) {
  const response = fs.readFileSync(contactsPath);
  const contacts = JSON.parse(response.toString());

  const filteredContacts = contacts.filter(
    (contact) => contact.id === contactId
  );
  return filteredContacts;
}

function removeContact(contactId) {
  const response = fs.readFileSync(contactsPath);
  const contacts = JSON.parse(response.toString());

  const deleteContact = contacts.filter((contact) => contact.id !== contactId);
  fs.writeFileSync(contactsPath, JSON.stringify(deleteContact));
}

function addContact(name, email, phone) {
  const response = fs.readFileSync(contactsPath);
  const contacts = JSON.parse(response.toString());

  const newContact = {
    id: randomUUID(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  fs.writeFileSync(contactsPath, JSON.stringify(contacts));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
