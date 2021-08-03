const search = document.querySelector("#search");
const matchList = document.querySelector("#match-list");

// THE LOGICS -------------------------------------------
// Search states.json and filter it
const searchStates = async (searchText) => {
  const res = await fetch("states.json");
  const states = await res.json();

  //Get matches to current text input
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  // if text is deleted, then clear out results
  if (searchText.length === 0) matches = [];

  outputHtml(matches);
};

// Show results in HTML
const outputHtml = (matches) => {
  console.log(matches)
};


// THE OUTPUT -------------------------------------------
search.addEventListener("input", () => searchStates(search.value));
