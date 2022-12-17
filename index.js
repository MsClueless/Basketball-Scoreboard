
let homeScoreOne = document.getElementById("homeScore-1")
let homeScoreTwo = document.getElementById("homeScore-2");
let homeScoreThree = document.getElementById("homeScore-3");
let saveHome = 0;

let guestScoreOne = document.getElementById("guestScore-1");
let guestScoreTwo = document.getElementById("guestScore-2");
let guestScoreThree = document.getElementById("guestScore-3");
let saveGuest = 0;
let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");


function addHomeOne() {
    saveHome += 1;
    homeScoreEl.textContent = saveHome
}

function addHomeTwo() {
    saveHome += 2;
    homeScoreEl.textContent = saveHome
}


function addHomeThree() {
    saveHome += 3
    homeScoreEl.textContent = saveHome
}

function addGuestOne() {
    saveGuest += 1
    guestScoreEl.textContent = saveGuest
}

function addGuestTwo() {
    saveGuest += 2
    guestScoreEl.textContent = saveGuest
}

function addGuestThree() {
    saveGuest += 3
    guestScoreEl.textContent = saveGuest
}
