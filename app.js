// function saveInput() { // onclick in html
//   console.log("Button clicked from onclick");
// }

// let inputBtn = document.getElementById("input-btn");
// const cannot be reassigned
// if possible, use const. If not, use let
let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  // using innerHTML to parse in the <li> tags
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" +  myLeads[i] + "</a></li>";
    // using template strings or literals
    listItems += `
      <li>
          <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
      </li>
      `;

    // alternative procedure for above you may come across
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
  console.log(listItems);
}

/* <li>
  <a href="" target="_blank"></a>
</li>; */
