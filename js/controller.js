updateView();

function deleteTheme(i) {
  model.themes.splice(i, 1);
  updateView();
}

function editTheme(i) {
  model.isEditing = true;
  model.editIndex = i;
  model.originalTheme = JSON.parse(JSON.stringify(model.themes[i]));
  model.sampleData = model.themes[i];
  console.log(model.sampleData);
  updateView();
  document.querySelector(".overlay").classList.remove("hidden");
}

function updateData() {
  let index = model.editIndex;
  console.log("updated data : ", model.sampleData);
  let sampleData = JSON.parse(JSON.stringify(model.sampleData));
  model.themes.splice(index, 1, sampleData);
  model.sampleData = {};
  model.isEditing = false;
  model.editIndex = null;
  updateView();
}

function cancelUpdate() {
  model.isEditing = false;

  model.themes.splice(model.editIndex, 1, model.originalTheme);
  model.sampleData = {};
  updateView();
}

function addData() {
  if (
    !model.sampleData.color ||
    !model.sampleData.backgroundColor ||
    !model.sampleData.markerColor ||
    !model.sampleData.madeBy
  )
    return;
  console.log(model.sampleData);
  let copyTheme = JSON.parse(JSON.stringify(model.sampleData));
  //model.sampleData = {};
  model.themes.unshift(copyTheme);
  updateView();
}

function clearInput() {
  model.sampleData = {};
  updateView();
}

function previewTheme(i) {
  model.currentPage = "preview";
  model.selectedTheme = model.themes[i];
  const { color, backgroundColor, markerColor, madeBy } = model.selectedTheme;
  document.querySelector("#root").innerHTML =
    /*HTML*/
    `
  <div>
    <div style="color:${color}; background-color:${backgroundColor}; height:96vh;" class="main">
      <h1>Preview page</h1>
      <h3 style="color:${markerColor}">Selected Theme : color:${color}, backgroundcolor:${backgroundColor}, markercolor:${markerColor}, Made by: ${madeBy}</h3>
      <h2>What is single-page application (SPA)</h2>
      <p>A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.</p>
      <button class="btn" onclick="homePage()">🏠 Home</button> 
    </div>
  </div>
`;
}

function homePage() {
  model.currentPage = "home";
  //model.selectedTheme = null;
  updateView();
}
