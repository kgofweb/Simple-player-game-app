// DOM elements
const players = document.getElementById('player');
const clubs = document.getElementById('club');
const btnSend = document.querySelector('.btn');
const listPlayers = document.getElementById('list-players');
const searchPlayer = document.getElementById('search');

// Event listener
document.addEventListener('DOMContentLoaded', player);
btnSend.addEventListener('click', addPlayers);

// Players
let pl = [
   {
      playerName: 'L. Messi',
      club: 'FC Barcelona'
   },
   {
      playerName: 'C. Ronaldo',
      club: 'Juventus FC'
   },
   {
      playerName: 'S. Aguero',
      club: 'Man City'
   }
];

function player() {
   if(pl.length === 0) {
      listPlayers.innerHTML = '<p>No players !</p>';
   } else {
      pl.forEach(player => {
         const plList = document.createElement('li');
         plList.classList.add('list-group-item');
         plList.innerHTML = `
            <b>${player.playerName}</b>: ${player.club}
         `;

         listPlayers.appendChild(plList);
      });
   }
}

// Main function
function addPlayers(event) {
   event.preventDefault();

   if(pl.length === 0) {
      listPlayers.innerHTML = '';
   }
   
   // Get value input
   let playName = players.value;
   let playClub = clubs.value;

   // User enter nothing
   if(playName === '') {
      alert('Please complete fields !');
      return listPlayers.innerHTML = '<p>No players !</p>';
   }

   // Init new player
   let newPlayer = {
      playerName: `${playName}`,
      club: `${playClub}`
   }

   // New player
   const newPlayers = document.createElement('li');
   newPlayers.classList.add('list-group-item');
   newPlayers.innerHTML += `
      <b>${playName}</b>: ${playClub}
   `;

   // Add new player in array
   pl.push(newPlayer);

   // Append child
   listPlayers.appendChild(newPlayers);

   // Clear player input
   players.value = '';
   clubs.value = '';
}