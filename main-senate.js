var members = [];
const url = "https://api.propublica.org/congress/v1/113/senate/members.json";
fetch(url, {
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "8nEXIV8d6osHNmpUT5CJ5XjNaHoi7q3mJuVCzdWq"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
    members = data.results[0].members;
    console.log(members);
    createDropdown();
    tableOfAllMembers();
  });

var table = document.getElementById("senate-data");

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

function checkboxesFilter() {
  var array = [];
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  console.log(checkboxes);

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }
  console.log(array);
  return array;
}

let eltSection = document.getElementById("state");
function createDropdown() {
  for (i of members) {
    let eltOption = document.createElement("option");
    eltOption.setAttribute("value", i.state);
    eltOption.innerHTML = i.state;
    eltSection.appendChild(eltOption);
  }
}
function getSelectedValue() {
  var result = eltSection.options[eltSection.selectedIndex].value;
  console.log(result);
  return result;
}
function tableOfAllMembers() {
  var checkboxesValue = checkboxesFilter();
  console.log(checkboxesValue);
  let checkStateValue = getSelectedValue();
  table.innerHTML = "";

  for (let i of members) {
    if (
      (checkboxesValue.includes(i.party) && checkStateValue == i.state) ||
      (checkboxesValue.includes(i.party) && checkStateValue == "all")
    ) {
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

      //console.log(td1);

      tr.appendChild;
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      table.appendChild(tr);
    }
  }
}

let eltparty = document.getElementsByClassName("party");
for (let i = 0; i < eltparty.length; i++) {
  eltparty[i].addEventListener("click", function() {
    console.log(eltparty[i].value);
    tableOfAllMembers();
  });
}
eltSection.addEventListener("click", tableOfAllMembers);
