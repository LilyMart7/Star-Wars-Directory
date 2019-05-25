//============================================== Get info from SWAPI ========================================

function renderPeople(people) {
    //console.log(people);

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

//=================================== Get info from SWAPI with promises ========================================
function reRender(people) {

    let arrOftd = document.querySelectorAll("td");
    //console.log(arrOftd);
    let cntr = 0;

    for (let i = 0; i < people.results.length; i++) {
        arrOftd[cntr++].innerHTML = people.results[i].name;
        arrOftd[cntr++].innerHTML = people.results[i].birth_year;
        arrOftd[cntr++].innerHTML = people.results[i].height;
        arrOftd[cntr++].innerHTML = people.results[i].mass;
        arrOftd[cntr++].innerHTML = people.results[i].hair_color;
        arrOftd[cntr++].innerHTML = people.results[i].skin_color;
    }
}

fetch("https://swapi.co/api/people/?page=1")
    .then((people) => {
        return people.json();
    })

    .then((people) => {
        renderPeople(people);
        console.log(people);
    })

    .then(() => {
        let page1 = document.querySelector(".onePage");
        page1.addEventListener("click", function () {
            fetch("https://swapi.co/api/people/?page=1")
                .then((people) => {
                    return people.json();
                })
                .then((people) => {
                    reRender(people);
                })
        })
    })

    .then(() => {
        let page2 = document.querySelector(".twoPage");
        page2.addEventListener("click", function () {
            fetch("https://swapi.co/api/people/?page=2")
                .then((people) => {
                    return people.json();
                })
                .then((people) => {
                    reRender(people);
                })
        })
    })

    .then(() => {
        let page3 = document.querySelector(".threePage");
        page3.addEventListener("click", function () {
            fetch("https://swapi.co/api/people/?page=3")
                .then((people) => {
                    return people.json();
                })
                .then((people) => {
                    reRender(people);
                })
        })
    })

    .then(() => {
        let page4 = document.querySelector(".fourPage");
        page4.addEventListener("click", function () {
            fetch("https://swapi.co/api/people/?page=4")
                .then((people) => {
                    return people.json();
                })
                .then((people) => {
                    reRender(people);
                })
        })
    })

    .then(() => {
        let page5 = document.querySelector(".fivePage");
        page5.addEventListener("click", function () {
            fetch("https://swapi.co/api/people/?page=5")
                .then((people) => {
                    return people.json();
                })
                .then((people) => {
                    reRender(people);
                })
        })
    })

    .then(() => {
        let page6 = document.querySelector(".sixPage");
        page6.addEventListener("click", function () {
            fetch("https://swapi.co/api/people/?page=6")
                .then((people) => {
                    return people.json();
                })
                .then((people) => {
                    reRender(people);
                })
        })
    })

    .then(() => {
        let page7 = document.querySelector(".sevenPage");
        page7.addEventListener("click", function () {
            fetch("https://swapi.co/api/people/?page=7")
                .then((people) => {
                    return people.json();
                })
                .then((people) => {
                    reRender(people);
                })
        })
    })

    .then(() => {
        let page8 = document.querySelector(".eightPage");
        page8.addEventListener("click", function () {
            fetch("https://swapi.co/api/people/?page=8")
                .then((people) => {
                    return people.json();
                })
                .then((people) => {
                    reRender(people);
                })
        })
    })


//============================================== VALIDATION form ========================================


const loginAdmin = "admin";
const passwordAdmin = "admin777";

let mainElement = document.querySelector(".mainDisplay");

let getData = document.querySelector(".load");

getData.addEventListener("click", data);

function data(){
//console.log("works");

let login = document.querySelector(".username").value;
let password = document.querySelector(".password").value;

//console.log(`login ${login} password ${password}`);

validation(login, password);
}

var error = document.querySelector(".error");
error.style.display = "none";


function validation (login, password){

if(login === loginAdmin && password === passwordAdmin){
    console.log("it's true");
 
    localStorage.setItem("login", login);
    localStorage.setItem("role", "admin");

    if(localStorage.getItem("role") === "admin"){
        mainElement.setAttribute("class", "d-block");
        var error = document.querySelector(".error");
       error.style.display = "none";
    }

}
else{
    console.log("it's false"); 
    var error = document.querySelector(".error");
    error.style.display = "block";

}

}

let signOut = document.querySelector(".out");

signOut.addEventListener("click", checkRole);

function checkRole(){
  localStorage.removeItem("login");
  localStorage.removeItem("role");

  if(localStorage.getItem("role") != "admin"){
    mainElement.setAttribute("class", "d-none");
  }
}

//===================================== Woooohoooooo ==============================================================