function updateView() {
  let theme = model.themes;
  let html = "";

  if (model.currentPage == "home") {
    for (let i = 0; i < theme.length; i++) {
      html +=
        /*HTML*/
        `
  <div class="container">
    <div class="box1">
    <div>color:${theme[i].color}, backgroundcolor:${theme[i].backgroundColor}, markercolor:${theme[i].markerColor}, Made by: ${theme[i].madeBy} </div>
    <div>
    <button class="btn" onclick="previewTheme(${i})">Preview</button>
      <button class="btn"   onclick="editTheme(${i})">Edit</button>
      <button class="btn"   onclick="deleteTheme(${i})">Delete</button>
    </div>

    </div>
    <div class="box2" style="color:${theme[i].color}; background-color:${theme[i].backgroundColor} "><span style="color:${theme[i].markerColor}">HighlightText</span>&nbsp; SampleText</div>
  </div>
`;
    }

    document.querySelector("#root").innerHTML =
      /*HTML*/
      `
      <div class="main">
    <div class="inputData">
  <input onchange="model.sampleData.color=this.value" type="text" placeholder="Text color" value="${
    model.sampleData.color ?? ""
  }"/>
  <input onchange="model.sampleData.backgroundColor=this.value" type="text" placeholder="Background color" value="${
    model.sampleData.backgroundColor ?? ""
  }"/>
  <input onchange="model.sampleData.markerColor=this.value" type="text" placeholder="Marker color" value="${
    model.sampleData.markerColor ?? ""
  }"/>
  <input onchange="model.sampleData.madeBy=this.value" type="text" placeholder="Made by" value="${
    model.sampleData.madeBy ?? ""
  }"/>
  ${
    model.isEditing
      ? `<button class="btn"  onclick="updateData()">Update</button> 
      <button class="btn"   onclick="cancelUpdate()">Cancel</button>`
      : `<button class="btn"   onclick="addData()">Add</button>
      <button class="btn"   onclick="clearInput()">Clear</button>
      `
  }
  </div>
  <div class="overlay hidden">Hello</div>
  ${html}
  </div>
  `;
  } else {
    previewTheme(model.themes.indexOf(model.selectedTheme));
  }
}
