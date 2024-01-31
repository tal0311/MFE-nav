import { storageService } from "./async-storage.service.js";
// import { httpService } from './http.service.js'
import { utilService } from "./util.service.js";

import contacts from "./../data/contact.json";
const STORAGE_KEY = "contact_DB";

export const contactService = {
  getById,
  save,
  remove,
  getEmptyContact,
};
window.contactService = contactService;

function getById(itemId) {
  return storageService.get(STORAGE_KEY, itemId);
  // return httpService.get(`item/${itemId}`)
}

async function remove(itemId) {
  await storageService.remove(STORAGE_KEY, itemId);
  // return httpService.delete(`item/${itemId}`)
}
async function save(item) {
  var savedItem;
  if (item._id) {
    savedItem = await storageService.put(STORAGE_KEY, item);
    // savedItem = await httpService.put(`item/${item._id}`, item)
  } else {
    // Later, owner is set by the backend
    savedItem = await storageService.post(STORAGE_KEY, item);
    // savedItem = await httpService.contact('item', item)
  }
  return savedItem;
}

function getEmptyContact() {
  return {
    _id: "",
    phoneNumber: "",
    note: "",
    imgUrl: `https://xsgames.co/randomusers/assets/avatars/${getGender()}/${getNumber}.jpg`,
    location: {
      name:"",
      lat: "",
      lng: "",
    },
    emailAddress: "",
    importantDates: [
      {
        date: "2022-01-01",
        event: "Birthday",
      },
      {
        date: "2022-07-04",
        event: "Anniversary",
      },
    ],
  };
}

function getGender() {
  return Math.random() > 0.5 ? "male" : "female";
}

function getNumber() {
  return Math.floor(Math.random() * 60);
}

// TEST DATA
(async () => {
  utilService.saveToStorage(STORAGE_KEY, contacts);
})();
