const leaflet = window.L;
const mapCanvas = document.querySelector(".map");
const SHOP_CENTER = { lat: 59.968137, lng: 30.316272 };
const MapOptions = {
  MAP_SCALE: 17,
  ICON_WIDTH: 38,
  ICON_HEIGTH: 50,
};

const pinIcon = leaflet.icon({
  iconUrl: "img/pin.svg",
  iconSize: [MapOptions.ICON_WIDTH, MapOptions.ICON_HEIGTH],
  iconAnchor: [MapOptions.ICON_WIDTH / 2, MapOptions.ICON_HEIGTH],
});

const pinMarker = leaflet.marker({
  lat: SHOP_CENTER.lat,
  lng: SHOP_CENTER.lng,
});

const map = leaflet.map(mapCanvas).setView(
  {
    lat: SHOP_CENTER.lat,
    lng: SHOP_CENTER.lng,
  },
  MapOptions.MAP_SCALE
);

leaflet
  .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

pinMarker.setIcon(pinIcon).addTo(map);
