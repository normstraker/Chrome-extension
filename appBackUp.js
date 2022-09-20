// function saveInput() { // onclick in html
//   console.log("Button clicked from onclick");
// }

// let inputBtn = document.getElementById("input-btn");
// const cannot be reassigned
// if possible, use const. If not, use let
let oldLeads = [];
let myLeads = []; // key = myLeads, value = array contents (localStorage)
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
// const tabs = [{ url: "https://.www.linkedin.com/in/per-harald-borgen/" }]; // no longer needed

// Local Storage manipulation \\\\\\\\\\\
// localStorage.clear();
// localStorage.setItem("norm", "www.peanutbutter.com");
// console.log(localStorage.getItem("norm"));
// \\\\\\\\\\\\
// let myLeads = `["www.awesomelead.com"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.epiclead.com");
// console.log(typeof myLeads);
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

// Getting items from Local Storage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  // truthy statement
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// Adding items to Local Storage
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // key-value pair
  render(myLeads);
  // console.log(localStorage.getItem("myLeads"));
});

// Rendering the input emails to the screen
function render(leads) {
  let listItems = "";
  // using innerHTML to parse in the <li> tags
  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" +  myLeads[i] + "</a></li>";
    // using template strings or literals
    listItems += `
      <li>
          <a target="_blank" href="${leads[i]}">${leads[i]}</a>
      </li>
      `;

    // alternative procedure for above you may come across
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
  // console.log(listItems);
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// falsy values;
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// trick to determine whether a value is true or false
// let trueOrFalse = Boolean("");
// console.log(trueOrFalse);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Passing a parameter into a function
// (Parameters are INSIDE the function,
// Arguments are OUTSIDE the function.)

// const welcomeEl = document.getElementById("welcome-el");
// function greetUser(greeting, name, emoji) {
//   welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
// }
// greetUser("Hello", "norm", "😁");

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

// let myCourses = [
//   "Learn CSS Animations",
//   "UI Design Fundamentals",
//   "Intro to Clean Code",
// ];

// function logItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// logItems(myCourses); // passing in myCourses as the argument

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Create a function, add(), that adds two numbers together and returns the sum
// function add(num1, num2){
//     return num1 + num2
// }

// console.log( add(3, 4)   ) // should log 7
// console.log( add(9, 102) ) // should log 111

// \\\\\\\\\\\\\\\

// let arr = [1, 2, 3];

// function getFirst(arr) {
//   return arr;
// }

// console.log(arr[0]);

// \\\\\\\\\\\\\\\

// function getFirst(arr) {
//   return arr[0];
// }

// let firstCard = getFirst([10, 2, 5]);

// console.log(firstCard);

// \\\\\\\\\\\\\\\\\\\\\\\\\\\

// Grab the URL of the current tab!
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

//  // since only one tab should be active and in the current window at once
//  // the return variable should only have one entry
//  let activeTab = tabs[0];
//  let activeTabId = activeTab.id; // or do whatever you need

// \\\\\\\\\\\\\\\\\\\\\\\\\\\

// let data = [
//   {
//     player: "Jane",
//     score: 52,
//   },
//   {
//     player: "Mark",
//     score: 41,
//   },
// ];

// const logScore = document.querySelector("#log-score");

// logScore.addEventListener("click", function () {
//   console.log(data[0].player, data[0].score);
// });

// "Jane", 52

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// function generateSentence(desc, arr) {

//   let sentence = `My ${arr.length} favorite ${desc} are `
//   const lastIndex = arr.length - 1
//   for (let i = 0; i < arr.length; i++){
//     if (i === lastIndex) {
//       sentence += arr[i] + "."
//     } else {
//       sentence += arr[i] + ", "
//     }
//   }

//   return sentence
// }

// const compSentence = generateSentence("instruments", ["saxophone","classical guitar", "violin"])

// console.log(compSentence)

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

// const imgEl = document.querySelector("#container");

// const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

// function render() {
//   let imgItems = "";
//   for (let i = 0; i < imgs.length; i++) {
//     imgItems += `
//         <img class="team-img" alt="company employees" src="${imgs[i]}">
//         `;
//   }
//   imgEl.innerHTML = imgItems;
// }
// render();

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ totalPrice.toFixed(2) }`
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const oldNum = 12345.6789
// console.log(oldNum.toFixed(3)) // 12345.679
// const newNum = (Number("123.456")); // string
// console.log(newNum.toFixed(2)) // 123.46

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

