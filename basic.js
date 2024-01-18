const urlParams = new URLSearchParams(window.location.search);
const siteName = urlParams.get('siteName');
const i = urlParams.get('siteNumber');

const mapViewBtn = document.querySelector('#map-view');
const overviewBtn = document.querySelector('#overview');

const queryString1 = 'site.html' + '?siteNumber=' + i;
const queryString2 = 'site_map.html' + '?siteNumber=' + i;

overviewBtn.setAttribute('href', queryString1);
mapViewBtn.setAttribute('href', queryString2);
