const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const COHORT = "2603-FTB-CT-WEB-PT";
const RESOURCE = "/events";

const API = `${BASE}${COHORT}${RESOURCE}`;
console.log("api", API);

let parties = [];

async function getAllParties() {
    try {
         const response = await fetch(API);
    const result = await response.json();
    parties = result.data;
    render();
    } catch (error) 
    {console.error("Error!")
        }
   
}
const obtainOne = async() => {
    try { 
        const response = await fetch(API + "/" + ID);
        const result = await response.json();
        selectedParty = result
    } catch (error) {
        console.error("error!")
    }
}

function cardForParties(parties){
const $card = document.createElement("article");
$card.classList.add("parties");
$card.innerHTML = `
<h2>${parties.name} ${parties.id}</h2>
<h3> ${parties.location} ${parties.date}</h3>
<p> ${parties.description}</p>
`
return $card
}

function partyGroup() {
    const $group = document.createElement("article")
    $group.classList.add("parties");

    const $parties = parties.map(cardForParties)
    $group.replaceChildren(...parties);
    return $group
}





function render() {
    const $app = document.querySelector("#app");
$app.innerHTML = `
<h1 class="site-heading">Party Planner</h1>
<h2 class="sub-heading">Party Details</h2>
<h3>aggregate customized partnerships #56022</h3>
<p>lorem</p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
<cardForParties></cardForParties>
`;

$app.querySelector("cardForParties").replaceWith(cardForParties());
}
async function init(){
    await getAllParties();
}

init ();

console.log("parties", parties)