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

async function render() {
  await getEvents();
  renderEvents();
}
render();

function renderArtists() {
  if (!state.artists.length) {
    artistList.innerHTML = "<li>No artists.</li>";
    return;
  }

  const eventNames = state.event.map((events) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${artist.name}</h2>
      <img src="${artist.imageUrl}" alt="${artist.name}" />
      <p>${artist.description}</p>
    `;
    return li;
  });

  artistList.replaceChildren(...artistCards);
}