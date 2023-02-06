// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// Wayne Barnett		Founder & CEO			wayne-barnett-founder-ceo.jpg
// Angela Caroll		Chief Editor			angela-caroll-chief-editor.jpg
// Walter Gordon		Office Manager			walter-gordon-office-manager.jpg
// Angela Lopez		Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada		Developer				scott-estrada-developer.jpg
// Barbara Ramos		Graphic Designer		barbara-ramos-graphic-designer.jpg

const containerCardsEl = document.getElementById("container-cards");
// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    picture: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    picture: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    picture: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    picture: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.jpg",
  },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// console.log(teamMembers);
for (oggetto of teamMembers) {
  for (attributo in oggetto) {
    console.log(attributo + " : " + oggetto[attributo]);
    // containerCardsEl.innerHTML = attributo + " : " + oggetto[attributo];
  }
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

for (teamMember of teamMembers) {
  containerCardsEl.innerHTML += `
    <div class="card col-4" style="width: 18rem">
    <img
    src="./img/${teamMember.picture}"
    class="card-img-top"
    alt="..."
    />
    <div class="card-body">
    <h5 class="card-title">${teamMember.name}</h5>
    <p class="card-text">${teamMember.role}</p>
    </div>
    </div>`;
  //   console.log(teamMember);
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
