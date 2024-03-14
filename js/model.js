let model = {
  themes: [
    {
      color: "darkblue",
      backgroundColor: "lavender",
      markerColor: "darkred",
      madeBy: "Thor",
    },
    {
      color: "brown",
      backgroundColor: "burlywood",
      markerColor: "darkorange",
      madeBy: "Jas",
    },
    {
      color: "green",
      backgroundColor: "powderblue",
      markerColor: "darkorange",
      madeBy: "Simi",
    },
    {
      color: "honeydew",
      backgroundColor: "gray",
      markerColor: "yellow",
      madeBy: "Sam",
    },
    {
      color: "palevioletred",
      backgroundColor: "white",
      markerColor: "hotpink",
      madeBy: "Tom",
    },
  ],
  deleted: [],
  isAdding: false,
  isEditing: false,
  editIndex: "",
  sampleData: {
    color: "",
    backgroundColor: "",
    markerColor: "",
    madeBy: "",
  },
  originalTheme: "",
  currentPage: "home",
  selectedTheme: null,
};
