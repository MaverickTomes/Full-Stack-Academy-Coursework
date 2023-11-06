console.log("------connected!-------");

const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2309-FTB-ET-WEB-FY";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const state = {
    //teams, [],
    players: [],
    singlePlayer: [],

};
/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

/*const fetchAllTeams= async () => {
    try {
        const response = await fetch(APIURL + "/teams");
        const json = await response.json();
        state.teams = json.data;
    } catch (err) {
        console.error('Uh oh, trouble fetching teams!', err);
    }
    return jason.data.teams
}; not needed but added just for fun.
*/

const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL + "/players");
        const json = await response.json();
        state.teams = json.data;
        console.log(json.data);
        return json.data.players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
        
    
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(APIURL + "/players");
        const json = await response.json();
        state.singlePlayer = json.data;
        console.log(state.singlePlayer);
        return json.data.singlePlayer;
        
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

    
const addPlayerForm = document.querySelector("#new-players");
const addNewPlayer = async (event) => { 
    event.preventDefault();
    try {
     
        const response = await fetch(APIURL + "/players",{
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
              name: addPlayerForm.name.value,
              status: addPlayerForm.status.value,
              breed: addPlayerForm.breed.value, 

            }),
        })
        console.log(await response.json())
        renderAllPlayers();
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

    addPlayerForm.addEventListener("submit", addNewPlayer);

const removePlayer = async (playerId) => {
    try {
        const response = await fetch(APIURL + `/players/${playerId}`, {
            method: "DELETE"
            
        })
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/*
function singlePlayerDetails (playersid) {

    
            //const playerDetails = document.createElement("div");
            //const seeDetails = document.createElement("button");
            //seeDetails.innerText = "See Player Details"
            seeDetails.addEventListener("click", async() =>{
                
            })

};
*/
/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */




const renderAllPlayers = (playerList) => {
    
    try {
        const seeDetailsContainer= document.getElementById("single-player-stats") 
        const playerListContainer = document.getElementById("all-players-container");
        playerListContainer.innerHTML = " "
        playerList.forEach((player) => {
            const playerCards = document.createElement("div");
            const deleteBtn = document.createElement("button");
            const seeDetailsbtn = document.createElement("button");
            seeDetailsbtn.innerText = "See Details"
            deleteBtn.innerText ="Delete"
            seeDetailsbtn.addEventListener("click", async() => {
                if (playerCards.style.display === "div") { 
                    playerCards.style.display = "all-players-containter";
                } else {
                    playerCards.innerHTML = 
                    `<h3>${player.id}</h3>
                     <h3>${player.name}</h3>
                     <h3>${player.status}</h3>
                     `
                    playerCards.appendChild(seeDetailsbtn);
                    playerCards.appendChild(deleteBtn);
                };
            });
            deleteBtn.addEventListener("click", async() => {
                removePlayer(player.id);
            });
                const article = document.createElement("article");
                console.log(player);
                article.innerHTML = 
                `<img src="${player.imageUrl}"/> `

                playerListContainer.appendChild(article);
                playerCards.appendChild(seeDetailsbtn);
                playerCards.appendChild(deleteBtn);
                playerContainer.appendChild(playerCards)

                /*
                playerListContainer.appendChild(article);   
                playerCards.appendChild(deleteBtn);  
                playerListContainer.appendChild(playerCards);  
                seeDetailsContainer.appendChild(playerListContainer); ///----> don't know where to append it to for the otherside?
                playerCards.appendChild(seeDetailsbtn);
                */
                
                
            });    
        
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    
    renderNewPlayerForm();
}

init();

/*
<h3>${player.name}</h3>
<span>${player.breed}</span>
<span>${player.status}</span> */
/*
const renderSinglePlayer = (onePlayer) => {
    const stats = getElementById("single-player-stats");
    stats.innerHTML = " "
    const article2 = document.createElement("article");

    article2.innerHTML = `<h3>${player.id}</h3>
        <h3>${player.name}</h3>
        <span>${player.breed}</span>
        <span>${player.status}</span>
        <img src="${player.imageUrl}"/>
        `;
    stats.appendChild(article2);      
}
    stats.addEventListener("player-details", renderSinglePlayer);
*/