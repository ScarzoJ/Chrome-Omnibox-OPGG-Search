let page = document.getElementById("buttonDiv");
const presetRegions = ["euw", "na", "lan"];

function handleButtonClick(event) {
  let region = event.target.value;
  chrome.storage.sync.set({ region });
}

function constructOptions(presetRegions) {
  for (let buttonRegion of presetRegions) {
    let button = document.createElement("button");
    button.style.height = '50px';
    button.style.width = '50px';
    button.value = buttonRegion;
    button.textContent = `${buttonRegion}`
    button.addEventListener("click", handleButtonClick);
    page.appendChild(button);
  }
}

constructOptions(presetRegions);
