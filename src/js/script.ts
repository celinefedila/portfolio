/*window.addEventListener('load', updateCoordinates);
window.addEventListener('resize', updateCoordinates);

function updateCoordinates() {
  const image = document.getElementById('responsive-image') as HTMLImageElement;
  const zone1 = document.getElementById('zone1') as HTMLAreaElement;
  const zone2 = document.getElementById('zone2') as HTMLAreaElement;

  const scaleFactor = image.offsetWidth / image.naturalWidth;

  const originalCoordinatesZone1 = [34, 44, 270, 350];
  const originalCoordinatesZone2 = [400, 200, 50];

  const [x1, y1, x2, y2] = originalCoordinatesZone1.map(coord => coord * scaleFactor);
  zone1.coords = `${x1},${y1},${x2},${y2}`;

  const [cx, cy, r] = originalCoordinatesZone2.map(coord => coord * scaleFactor);
  zone2.coords = `${cx},${cy},${r}`;
}
*/