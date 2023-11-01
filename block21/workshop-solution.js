console.log("connected!")
const COHORT = "2309-FTB-ET-WEB-FT";
const API ="https://fsa-crud-2aa9294fe819.herokuapp.com/api/"+
COHORT;

const state = {
  events: []
}
const partyList = document.getElementById("party-list")

async function getEvents() {
  try {
    const response = await fetch(API + "/events");
    const json = await response.json();
    state.events = json.data;
    render();

  } catch (error) {
    console.error(error)
  }
}

function render () {
    const events = state.events.map((event) => {
      const article = document.createElement("article");
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "X"
      deleteBtn.addEventListener("click", async() => {

      })
      article.innerHTML = `
      <h3>${event.name}</h3>
      <address>${event.location}</address>`
      article.append(deleteBtn);
      try {
        const response = await fetch(API + `/events/${event.id}`,
        method: "DELETE");
        console.log("deleted!");
        getEvents();
        
      } catch (error) {
        console.error(error)
      }
      return article;
    });
    partyList.replaceChildren(...events);
}

getEvents();



