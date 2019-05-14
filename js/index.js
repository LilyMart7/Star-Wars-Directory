window.addEventListener("load", peopleRequest);

window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}

function peopleRequest() {

    let xhr = new XMLHttpRequest();

    let url = `https://swapi.co/api/people`;
    
    xhr.open("GET", url, true);
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



let renderPeople = (people) => {
    console.log(people);

    var peopleElem = document.querySelector("#people");

    for (let i = 0; i < 10; i++) {

        let peopleDiv = document.createElement("tr");
        peopleDiv.className = "people";
        peopleElem.appendChild(peopleDiv);

        let name = document.createElement("td");
        name.className = "name";
        name.innerHTML = `${people.results[i].name}`;
        peopleDiv.appendChild(name);

        let birth_year = document.createElement("td");
        birth_year.className = "birth_year";
        birth_year.innerHTML = `${people.results[i].birth_year}`;
        peopleDiv.appendChild(birth_year);

        let height = document.createElement("td");
        height.className = "height";
        height.innerHTML = `${people.results[i].height}`;
        peopleDiv.appendChild(height);

        let mass = document.createElement("td");
        mass.className = "mass";
        mass.innerHTML = `${people.results[i].mass}`;
        peopleDiv.appendChild(mass);

        let hair_color = document.createElement("td");
        hair_color.className = "hair_color";
        hair_color.innerHTML = `${people.results[i].hair_color}`;
        peopleDiv.appendChild(hair_color);

        let skin_color = document.createElement("td");
        skin_color.className = "skin_color";
        skin_color.innerHTML = `${people.results[i].skin_color}`;
        peopleDiv.appendChild(skin_color);

    }
}

