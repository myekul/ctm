// fetch('https://go.ctm.gg/event/ctm-october-2024/')
//   .then(response => response.text())
//   .then(html => {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, 'text/html');

//       // Example: Find all links on the page
//       const links = doc.querySelectorAll('a');
//       links.forEach(link => console.log(link.href));
//   })
//   .catch(err => console.error('Error fetching page:', err));
const names = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliet",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa"
];
document.getElementById('generateZip').addEventListener('click', () => {
  const zip = new JSZip();
  names.forEach((name, index) => {
    index++
    if (index < 9) {
      index = '0' + index
    }
    const fileContent = name;
    zip.file(`fc-twitchname${index}.txt`, fileContent);
  });
  zip.generateAsync({ type: 'blob' })
    .then(function (content) {
      saveAs(content, 'fc-twitch.zip'); 
    });
});
document.getElementById('seedInput').addEventListener('input', function () {
  document.querySelector('.seed').textContent = this.value;
});
document.getElementById('countryInput').addEventListener('input', function () {
  document.querySelector('.country').textContent = this.value;
});
document.getElementById('pbInput').addEventListener('input', function () {
  document.querySelector('.pb').textContent = this.value;
});
document.getElementById('starsInput').addEventListener('input', function () {
  document.querySelector('.stars').textContent = this.value;
});
document.getElementById('nameInput').addEventListener('input', function () {
  document.querySelector('.name').textContent = this.value;
});
document.getElementById('saveAsPNG').addEventListener('click', function () {
  html2canvas(document.getElementById('capture')).then(function (canvas) {
    var link = document.createElement('a');
    link.download = 'scoreboard.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});