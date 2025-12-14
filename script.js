function drawOmikuji() {
  const omikuji = [
    "大吉 🌸 最高の一年になります！",
    "中吉 😊 良い流れが続きます",
    "小吉 🙂 コツコツが大事",
    "吉 😌 穏やかな一年",
    "末吉 😐 後半に運気上昇",
    "凶 😅 無理せず慎重に"
  ];

  const result = omikuji[Math.floor(Math.random() * omikuji.length)];
  document.getElementById("result").textContent = result;
}


