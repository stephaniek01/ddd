console.log(data[i]);

const badgeTemplate = document.querySelector('span').cloneNode(true);

document.querySelector('h1').innerHTML = data[i].SITE_NAME;

document.querySelector('.map-area-code').innerHTML = data[i].SITE_CODE;
document.querySelector('.area-measure').innerHTML = (
  Math.round(data[i].FEATURE_AREA * 100) / 100
).toFixed(2);

document.querySelector('#park-img').setAttribute('src', images_HD[i % 10]);

if (typeof data[i].FEATURE_ID !== undefined) {
  const list = data[i].FEATURE_ID.trim()?.split(',');
  console.log(list);
  if (typeof list != 'undefined') {
    for (const type of list) {
      console.log({ type });
      var result = findByKey(locations, 'type', type.trim());
      console.log(result?.class);

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
        'border',
        'ml-0'
      );

      badge.classList.add(allClasses[0], allClasses[1]);
      document.querySelector('.badge-container').appendChild(badge);
    }
  }
}
