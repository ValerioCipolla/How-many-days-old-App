const calculateBtn = document.getElementById("calculate-btn");
let clearBtn;

function calculatBtnHandler() {
  const userPickedDateValue = document.querySelector("input").value;
  let dob = new Date(userPickedDateValue);
  let difference = Date.now() - dob.getTime();
  let daysOld = parseInt(difference / 1000 / 60 / 60 / 24);
  let resultDiv = document.createElement("div");
  resultDiv.className = "result";
  if (isNaN(daysOld) || daysOld <= 0) {
  resultDiv.innerHTML = `
  <h2>Error!</h2>
  <p>Please enter a valid <span class="blue-text">D.O.B.</span></p>
  <button type="button" id="clear-btn">Try again</button>
  `;
  } else {
    resultDiv.innerHTML = `
  <h2>Congratulations!</h2>
  <p>You are <span class="blue-text">${daysOld}</span> days old!</p>
  <button type="button" id="clear-btn">Clear</button>
  `;
  }
  document.body.append(resultDiv);
  calculateBtn.disabled = true;
  clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearBtnHandler);
}

function clearBtnHandler() {
  let resultDiv = document.querySelector(".result");
  resultDiv.remove()
  document.querySelector("input").value = "";
  calculateBtn.disabled = false;
}

calculateBtn.addEventListener("click", calculatBtnHandler);
