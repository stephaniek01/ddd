function findByKey(array, key, value) {
  return array.find(function (obj) {
    // console.log(obj[key], value);

    if (obj[key] === value && value !== '') {
      return obj[key];
    }

    return null;
  });
}

const gridContainer = document.getElementById('grid-container');
const cardTemplate = document.getElementById('card-1');

for (let i = 400; i < data.length; i++) {
  const currentCard = cardTemplate.cloneNode(true);
  const badgeTemplate = currentCard.querySelector('span').cloneNode(true);

  const title = currentCard.querySelector('h5');
  title.innerHTML = data[i].SITE_NAME;

  if (typeof data[i].FEATURE_ID !== undefined) {
    const list = data[i].FEATURE_ID.trim()?.split(',');

    if (typeof list != 'undefined') {
      for (const type of list) {
        console.log({ type });
        var result = findByKey(locations, 'type', type.trim());
        console.log(result?.class);

        currentCard.querySelector('img').setAttribute('src', images[i % 10]);

        currentCard.querySelector('.map-area-code').innerHTML =
          data[i].SITE_CODE;
        currentCard.querySelector('.area-measure').innerHTML = (
          Math.round(data[i].FEATURE_AREA * 100) / 100
        ).toFixed(2);

        const queryString = 'site.html' + '?siteNumber=' + i;

        currentCard
          .querySelector('.park-link')
          .setAttribute('href', queryString);

        const badge = badgeTemplate.cloneNode(true);
        badge.innerHTML = type.trim();

        const allClasses = result?.class.split(' ');

        badge.classList.add(
          'mr-3',
          'text-xs',
          'font-medium',
          'me-2',
          'px-2.5',
          'py-0.5',
          'rounded',
          'border'
        );

        badge.classList.add(allClasses[0], allClasses[1]);

        currentCard.querySelector('.badge-container').appendChild(badge);
      }
    }
  }

  currentCard.setAttribute('id', data[i].ASSET_ID);
  gridContainer.appendChild(currentCard);
}
