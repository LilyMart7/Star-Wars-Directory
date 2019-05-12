window.addEventListener("load", peopleRequest);

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

function peopleRequest() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/people", true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            renderPeople(JSON.parse(xhr.responseText));
        }
    }
};




function renderPeople(people) {
    console.log(people);

    var peopleElem = document.querySelector("#people");

    for (let i = 0; i < 10; i++) {

        let peopleDiv = document.createElement("div");
        peopleDiv.className = "people";

        let name = document.createElement("div");
        name.className = "name";
        name.innerHTML = `${people.results[i].name}`;

        let birth_year = document.createElement("div");
        birth_year.className = "birth_year";
        birth_year.innerHTML = `${people.results[i].birth_year}`;

        let homeworld = document.createElement("div");
        homeworld.className = "homeworld";
        homeworld.innerHTML = `${people.results[i].homeworld}`;

        let spaceships = document.createElement("div");
        spaceships.className = "spaceships";
        spaceships.innerHTML = `${people.results[i].spaceships}`;

        let species = document.createElement("div");
        species.className = "species";
        species.innerHTML = `${people.results[i].species}`;


        peopleElem.appendChild(peopleDiv);
        peopleDiv.appendChild(name);
        peopleDiv.appendChild(birth_year);
        peopleDiv.appendChild(homeworld);
        peopleDiv.appendChild(spaceships);
        peopleDiv.appendChild(species);

    }
}
