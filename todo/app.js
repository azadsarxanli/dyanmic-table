let days = 7;
let workCount = 0;

const workInput = document.querySelector("#workInput");
const workForm = document.querySelector("#workForm");
const workBtn = document.querySelector("#workButton");

let tableTr = document.querySelector("table tbody tr");
const tableBody = document.querySelector("table tbody");
workForm.addEventListener("submit", (e) => {
  const tableTd = document.querySelectorAll("table tbody tr td.hello");
  let animationActive = document.querySelector(".alert-message");

  e.preventDefault();

  if (workInput.value === "" || workInput.value === null) {
    animationActive.classList.add("active");
    setTimeout(() => {
      animationActive.classList.remove("active");
    }, 1500);
  } else {
    let weeklyWork = document.querySelector("#weekly-hour");
    weeklyWork.innerHTML = +weeklyWork.innerHTML + +workInput.value;
    console.log(typeof +workInput.value);
    tableTd.forEach(function (el) {
      console.log(el.textContent);
    });

    if (workCount < days) {
      tableTr.innerHTML += `<td class="hello">${workInput.value} saat</td>`;
      workCount++;
    }
    if (workCount === days) {
      workCount = 0;
      let newRow = document.createElement("tr");
      tableTr = newRow;
      tableBody.appendChild(newRow);
    }
    animationActive.classList.remove("active");

    workInput.value = "";
  }
});
