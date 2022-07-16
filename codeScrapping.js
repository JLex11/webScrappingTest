let offersData = [];

let offersDiv = document.querySelectorAll('.job-element');

offersDiv.forEach((offer) => {
  let pattern = /[(),'"]/;

  let offerUrl = offer.getAttribute('onclick');
  offerUrl = offerUrl.split(pattern);
  offerUrl = offerUrl.filter((link) => link.includes('https')).join('');

  let offerTitle = offer.querySelector('.job-title').innerText;

  let offerLocation = offer.querySelector('.job-location').innerText;
  
  offersData.push({
    title : offerTitle,
    location: offerLocation,
    url: offerUrl
  });
});

console.log(offersData);