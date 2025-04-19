let container = document.getElementById("main2");
const gameData = [
  {
    id: 1,
    Mainname: "Simulation Sphere",
    Subname: ["Roblox Studio"],
    picUrl: "https://aadarsha-bh.github.io/SimulationSphere/Logo2.svg",
    desc: "Simulation Sphere is a game, 3D lab where different topics of physics, chemistry can be studied and verified. It makes you learn and understand the concepts of physics and chemistry in a fun way. It is a game where you can play with different experiments and learn about them.",
    link: "https://www.roblox.com/games/110226723042974/Simulation-Sphere",
  },
];

if (container) {
  for (let i = 0; i < gameData.length; i++) {
    container.innerHTML += `<div class="game-card">
            <img
                src="${gameData[i].picUrl}"
                alt="game${i + 1}"
                width="300px"
            />
            <div class="game-info">
                <h2 style="text-align: justify; margin-left: 5%">
                ${gameData[i].Mainname}
                </h2>
                <br />
                <p style="text-align: justify; margin-left: 5%">${
                  gameData[i].desc
                }</p>
                <br />
                <button class="play-btn" style="text-align: justify; margin-left: 5%" id="btn${
                  gameData[i].id
                }">Play</button>
            </div>
            </div>`;
    const button = document.getElementById(`btn${gameData[i].id}`);
    button.addEventListener("click", function () {
      window.open(gameData[i].link, "_blank");
    });
  }
}
