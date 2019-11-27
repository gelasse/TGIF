var statistic = {};

let nombreR = 0;
let nombreD = 0;
let nombreI = 0;
let averageR = 0;
let averageD = 0;
let averageI = 0;
let members = data.results[0].members;

function calculatingNumberOfR() {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "R") {
      nombreR += 1;
    } else {
      nombreR = nombreR;
    }
  }
  console.log(nombreR);
}

calculatingNumberOfR();

const calculatingNumberOfD = () => {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "D") {
      nombreD += 1;
    } else {
      nombreD = nombreD;
    }
  }
  console.log(nombreD);
};

calculatingNumberOfD();

const calculatingNumberOfI = () => {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "I") {
      nombreI += 1;
    } else {
      nombreI = nombreI;
    }
  }
  console.log(nombreI);
};

calculatingNumberOfI();

const calculatingAverageVotesOfR = () => {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "R") {
      /*nombreR += 1;*/
      averageR += members[i].votes_with_party_pct;
    } else {
      /*nombreR = nombreR;*/
      averageR = averageR;
    }
  }
  console.log(nombreR);
  console.log(averageR);
  console.log(averageR / nombreR);
};

calculatingAverageVotesOfR();

const calculatingAverageVotesOfD = () => {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "D") {
      averageD += members[i].votes_with_party_pct;
    } else {
      averageD = averageD;
    }
  }
  console.log(nombreD);
  console.log(averageD);
  console.log(averageD / nombreD);
};

calculatingAverageVotesOfD();

const calculatingAverageVotesOfI = () => {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "I") {
      averageI += members[i].votes_with_party_pct;
    } else {
      averageI = averageI;
    }
  }
  console.log(nombreI);
  console.log(averageI);
  console.log(averageI / nombreI);
};

calculatingAverageVotesOfI();
let tabMin = [];
members.sort(function(a, b) {
  return a.missed_votes_pct - b.missed_votes_pct;
});
for (let i = 0; i < 11; i++) {
  tabMin.push(members[i]);
}

let tabMax = [];
members.sort(function(a, b) {
  return b.missed_votes_pct - a.missed_votes_pct;
});

for (let i = 0; i < 11; i++) {
  tabMax.push(members[i]);
}

document.getElementById("rep_nombre").innerHTML = nombreR;
document.getElementById("rep_pourcentage").innerHTML = averageR / nombreR;
document.getElementById("dem_nombre").innerHTML = nombreD;
document.getElementById("dem_pourcentage").innerHTML = averageD / nombreD;
document.getElementById("in_nombre").innerHTML = nombreI;
document.getElementById("in_pourcentage").innerHTML = averageI / nombreI;

function senatePartyLoyalityLeastLoyal() {
  var tbody = document.getElementById("leastLoyal");

  for (let i of tabMin) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.total_votes;
    td3.innerHTML = i.votes_with_party_pct;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}

function senatePartyLoyalityMostLoyal() {
  var tbody = document.getElementById("mostLoyal");

  for (let i of tabMax) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.total_votes;
    td3.innerHTML = i.votes_with_party_pct;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}

function senateAttendanceLeastEngaged() {
  var tbody = document.getElementById("leastEngaged");

  for (let i of tabMin) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.total_votes;
    td3.innerHTML = i.votes_with_party_pct;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}

function senateAttendanceMostEngaged() {
  var tbody = document.getElementById("mostEngaged");

  for (let i of tabMax) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.missed_votes;
    td3.innerHTML = i.missed_votes_pct;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}

function housePartyLoyalityLeastLoyal() {
  var tbody = document.getElementById("leastLoyal");

  for (let i of tabMin) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.total_votes;
    td3.innerHTML = i.votes_with_party_pct;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}

function housePartyLoyalityMostLoyal() {
  var tbody = document.getElementById("mostLoyal");

  for (let i of tabMax) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.total_votes;
    td3.innerHTML = i.votes_with_party_pct;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}

function houseAttendanceLeastEngaged() {
  var tbody = document.getElementById("leastEngaged");

  for (let i of tabMin) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.missed_votes;
    td3.innerHTML = i.missed_votes_pct;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}

function houseAttendanceMostEngaged() {
  var tbody = document.getElementById("mostEngaged");

  for (let i of tabMax) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.missed_votes;
    td3.innerHTML = i.missed_votes_pct;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}
/* creer une fontion pour chaque table
  senatePartyLoyalityLeastLoyal()
  senatePartyLoyalityMostLoyal()
  senateAttendanceLeastEngaged()
  senateAttendanceMostEngaged()

  housePartyLoyalityLeastLoyal()
  housePartyLoyalityMostLoyal()
  houseAttendanceLeastEngaged()
  houseAttendanceMostEngaged()*/

function tables() {
  if (document.title == "Senate-party-loyality") {
    senatePartyLoyalityLeastLoyal();
    senatePartyLoyalityMostLoyal();
  } else if (document.title == "Senate-house-attendance") {
    senateAttendanceLeastEngaged();
    senateAttendanceMostEngaged();
  } else if (document.title == "House-Party-Loyality") {
    housePartyLoyalityLeastLoyal();
    housePartyLoyalityMostLoyal();
  } else if (document.title == "house-Attendance") {
    houseAttendanceLeastEngaged();
    houseAttendanceMostEngaged();
  }
}
tables();
