// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// ------- //




//  Questo elemento sarà il contenitore delle carte delle persone
let container = document.getElementById('card-container')

// Definisco un array chiamato people contenente oggettiriguardanti le informazioni sulle persone
let peapole = [
    {
        nome: 'Wayne ',
        cognome: 'Barnett',
        ruolo: 'Founder & CEO',
        foto:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela  ',
        cognome: 'Caroll',
        ruolo: 'Chief Editor',
        foto:'angela-caroll-chief-editor.jpg'  
    },
    {
        nome: 'Walter',
        cognome: 'Gordon',
        ruolo: 'Office Manager',
        foto:'walter-gordon-office-manager.jpg'  
    },
    {
        nome: 'Angela',
        cognome: 'Lopez',
        ruolo: 'Social Media Manager',
        foto:'angela-lopez-social-media-manager.jpg'  
    },
    {
        nome: 'Scott',
        cognome: 'Estrada',
        ruolo: 'Developer',
        foto:'scott-estrada-developer.jpg'  
    },
    {
        nome: 'Barbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        foto:'barbara-ramos-graphic-designer.jpg'  
    }
]

// Inizio ciclo for 
for (let i = 0; i < peapole.length; i++) {
    const people = peapole[i];
    console.log(people.nome);

// Creo una stringa di testo utilizzando il formato template string che lo inserise nell' HTML
    let peopleText = `
    <div class="col-4">            
        <div class="card-people rounded">
       
        <img src="img/${people.foto}" class='img-fluid' alt="">
        <div class="nome">${people.nome}</div>
        <div class="cognome">${people.cognome}</div>
        <div class="ruolo">${people.ruolo}</div>
        </div>
    </div>
    `
    container.innerHTML += peopleText;
}