const darkModeKnob = document.getElementById("darkModeKnob");
let darkModeEnabled = false;

darkModeKnob.addEventListener("click", () => {
  darkModeEnabled = !darkModeEnabled;
  toggleDarkMode();
});

function toggleDarkMode() {
  if (darkModeEnabled) {
    document.body.classList.add("dark-mode-on");
    document.documentElement.style.setProperty("--bg-color", "#333");
    document.documentElement.style.setProperty("--text-color", "#fff");
  } else {
    document.body.classList.remove("dark-mode-on");
    document.documentElement.style.setProperty("--bg-color", "#f3f3f3");
    document.documentElement.style.setProperty("--text-color", "#333");
  }
}

document.addEventListener("mousemove", (e) => {
  const cursors = document.querySelectorAll(".cursor");
  const delay = 50; // Adjust the delay as needed
  cursors.forEach((cursor, index) => {
    setTimeout(() => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      cursor.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, delay * index);
  });
});

document.getElementById("changeColorBtn").addEventListener("click", () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
