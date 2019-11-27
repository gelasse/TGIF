var table = document.getElementById("senate-data");
var members = data.results[0].members;
console.log(members);
console.log(table);

for (let i of members) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");

  td1.innerHTML = i.first_name + " " + i.last_name;
  td2.innerHTML = i.party;
  td3.innerHTML = i.state;
  td4.innerHTML = i.seniority;
  td5.innerHTML = i.votes_with_party_pct;

  console.log(td1);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);

  table.appendChild(tr);
}

/*var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");
var td4 = document.createElement("td");
var td5 = document.createElement("td");


td1.innerHTML = members[0].first_name + " " + members[0].last_name;
td2.innerHTML = members[0].party;
td3.innerHTML = members[0].state;
td4.innerHTML = members[0].seniority;
td5.innerHTML = members[0].percentage;


console.log(td1);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);

table.appendChild(tr);

*/

let tabeR = [];
let tabeD = [];
let tabeI = [];
const eltR = document.getElementById("republicans");
const eltD = document.getElementById("democrats");
const eltI = document.getElementById("independants");

function getRepublicans() {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "R") {
      tabeR.push(members[i]);
    } else {
      tabeR = tabeR;
    }
  }
}

function getDemocrats() {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "D") {
      tabeD.push(members[i]);
    } else {
      tabeD = tabeD;
    }
  }
}

function getIndependants() {
  for (let i = 0; i < members.length; i++) {
    if (members[i].party == "I") {
      tabeI.push(members[i]);
    } else {
      tabeI = tabeI;
    }
  }
}

getRepublicans();
getDemocrats();
getIndependants();
console.log(tabeR.length);

eltR.addEventListener("click", function() {
  table.innerHTML = "";
  for (let i of tabeR) {
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td5 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.party;
    td3.innerHTML = i.state;
    td4.innerHTML = i.seniority;
    td5.innerHTML = i.votes_with_party_pct;

    console.log(td1);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
  }
});

eltD.addEventListener("click", function() {
  table.innerHTML = "";
  for (let i of tabeD) {
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td5 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.party;
    td3.innerHTML = i.state;
    td4.innerHTML = i.seniority;
    td5.innerHTML = i.votes_with_party_pct;

    console.log(td1);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
  }
});

eltI.addEventListener("click", function() {
  table.innerHTML = "";
  for (let i of tabeI) {
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td5 = document.createElement("td");

    td1.innerHTML = i.first_name + " " + i.last_name;
    td2.innerHTML = i.party;
    td3.innerHTML = i.state;
    td4.innerHTML = i.seniority;
    td5.innerHTML = i.votes_with_party_pct;

    console.log(td1);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
  }
});

console.log(tabeI.length);
