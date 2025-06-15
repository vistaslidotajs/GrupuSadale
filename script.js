function generateGroups() {
  const namesTextArea = document.getElementById("names");
  const groupSizeInput = document.getElementById("groupSize");
  const outputDiv = document.getElementById("results");

  const rawNames = namesTextArea.value;
  const groupSizeStr = groupSizeInput.value;
  const groupSize = parseInt(groupSizeStr);

  if (rawNames === "" || isNaN(groupSize) || groupSize <= 0) {
      alert("Lūdzu, ievadi audzēkņu vārdus un pareizu grupas izmēru!");
      return;
  }

  let nameLines = rawNames.split("\n");
  let studentNames = [];

  for (let i = 0; i < nameLines.length; i++) {
      const name = nameLines[i].trim();
      if (name !== "") {
          studentNames.push(name);
      }
  }

  let shuffledNames = shuffle(studentNames);

  let groups = [];
  for (let i = 0; i < shuffledNames.length; i += groupSize) {
      let end = i + groupSize;
      let group = shuffledNames.slice(i, end);
      groups.push(group);
  }

  outputDiv.innerHTML = "";

  for (let i = 0; i < groups.length; i++) {
      let groupDiv = document.createElement("div");
      groupDiv.className = "group";

      let groupHTML = "<h3>Grupa " + (i + 1) + "</h3><ul>";
      for (let j = 0; j < groups[i].length; j++) {
          groupHTML += "<li>" + groups[i][j] + "</li>";
      }
      groupHTML += "</ul>";

      groupDiv.innerHTML = groupHTML;
      outputDiv.appendChild(groupDiv);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}