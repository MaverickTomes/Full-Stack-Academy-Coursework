window.prompt = "Welcome To The Party Planning Website"

const state = {
  eventName: [],
};

const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${2309-FTB-ET-WEB-FT}/events`;

async function getEvents() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.eventName = json.data;
  } catch (error) {
    console.error(error);
  }
}

const events = document.querySelector("#events");

const addEventsForm = document.querySelector("#events");
addEventsForm.addEventListener("submit", events);