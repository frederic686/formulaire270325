document.getElementById("form").addEventListener('submit', function (event) {

  event.preventDefault();

  const firstname = document.getElementById("firstname").value.trim();
  const address = document.getElementById("address").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const result = document.getElementById("result")



  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?\d{9,12}$/;
  logement();
  date();
  personne();
  service();
  price();
  const errors = []
  if (firstname.length < 2 || firstname.length > 50) {
    errors.push("Le prénom et invalide entree entre 2 a 50");
  }
  if (address.length < 10) {
    errors.push("adresse avec moins de 10 caractere");
  }
  if (!emailRegex.test(email)) {
    errors.push("format email invalide");
  }

  if (!phoneRegex.test(phone)) {
    errors.push("format telephone invalide");
  }

  if (errors.length > 0) {
    result.innerHTML = errors.join("<br>");
    result.style.color = "red";
  } else {
    result.innerHTML = "Formulaire envoyé avec succès! <br>" + phone;
    result.style.color = "green";
  }

});

function logement() {
  const typelogement = document.getElementById("typeLogement").value;
  const choixlog = document.getElementById("choixlog");
  if (typelogement === "maison") {
    choixlog.innerHTML = "piscine/jardin";
  } else if (typelogement === "appartement") {
    choixlog.innerHTML = "balcon / ascenseur";
  } else {
    choixlog.innerHTML = "rien";
  }
  document.getElementById("typeLogement").addEventListener("change", logement);
}

function date() {
  const datearrive = document.getElementById("datearrive").value;
  const datedepart = document.getElementById("datedepart").value;

  const datearrivecorige = new Date(datearrive);
  const datedepartcorige = new Date(datedepart);

  const jourArrive = datearrivecorige.getDate().toString().padStart(2, '0');
  const moisArrive = (datearrivecorige.getMonth() + 1).toString().padStart(2, '0');
  const anneeArrive = datearrivecorige.getFullYear();

  const jourDepart = datedepartcorige.getDate().toString().padStart(2, '0');
  const moisDepart = (datedepartcorige.getMonth() + 1).toString().padStart(2, '0');
  const anneeDepart = datedepartcorige.getFullYear();

  const date = document.getElementById("date");
  const date1 = document.getElementById("date1");

  date.innerHTML = "date d'arrivé " + jourArrive + "/" + moisArrive + "/" + anneeArrive;
  date1.innerHTML = "date depart " + jourDepart + "/" + moisDepart + "/" + anneeDepart;
}


function personne() {
  const personne = document.getElementById("personne").value;
  const nbrpers = document.getElementById("nbrpers");

  nbrpers.innerHTML = "nombre de personne " + personne


}

function service() {
  const chauffeur = document.getElementById("chauffeur").checked;
  const petitdej = document.getElementById("petitdej").checked;
  const guide = document.getElementById("guide").checked;
  const voiture = document.getElementById("voiture");
  const matin = document.getElementById("matin");
  const aide = document.getElementById("aide");

  if (chauffeur) {
    voiture.innerHTML = "ok pour le chauffeur";
  } else {
    voiture.innerHTML = "";
  }
  if (petitdej) {
    matin.innerHTML = "le petit déjeuner sera servi à 10h";
  } else {
    matin.innerHTML = "";
  }
  if (guide) {
    aide.innerHTML = "voir le guide sur place";
  } else {
    aide.innerHTML = "";
  }
}

function price() {
  const datearrive = document.getElementById("datearrive").value;
  const datedepart = document.getElementById("datedepart").value;
  const prix = document.getElementById("prix")
  const datearrivecorige = new Date(datearrive);
  const datedepartcorige = new Date(datedepart);

  const differenceEnMilliseconds = datedepartcorige - datearrivecorige;
  const differenceEnSecondes = differenceEnMilliseconds / 1000;
  const differenceEnMinutes = differenceEnSecondes / 60;
  const differenceEnHeures = differenceEnMinutes / 60;
  const differenceEnJours = differenceEnHeures / 24;

  prix.innerHTML = differenceEnJours * 20 + " euros pour " + differenceEnJours + " nuit pour une personne";


}


/*

function toggleDiet() {
    const dietSection = document.getElementById("diet-section");
    const breakfast = document.getElementById("breakfast").checked;
    const lunch = document.querySelector("input[name='lunch']").checked;
    const dinner = document.querySelector("input[name='dinner']").checked;
  
    // Si au moins un est coché, on affiche les régimes
    if (breakfast || lunch || dinner) {
      dietSection.style.display = "block";
    } else {
      dietSection.style.display = "none";
    }
  }

  document.getElementById("breakfast").addEventListener("change", toggleDiet);
document.querySelector("input[name='lunch']").addEventListener("change", toggleDiet);
document.querySelector("input[name='dinner']").addEventListener("change", toggleDiet);
*/