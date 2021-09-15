const container = document.querySelector('.mobile-header-nav-links');
const icon = document.querySelector('.menu');
const times = document.querySelector('.close');

function open() {
  container.style.display = 'flex';
}

function close() {
  container.style.display = 'none';
}

icon.addEventListener('click', open);
times.addEventListener('click', close);


// Dynamic Speakers

const featured = document.querySelector('.featured-speakers');

const speakers = [
  {
    id : 0,
    featuredImage:'images/checkers.jpg',
    mainImage:'images/emilia-clarke.jpg',
    topic:'Emilia Clarke',
    occupation:'English Actress',
    description:"Emilia Isobel Euphemia Rose Clarke is an English actress. She studied at the Drama Centre London, appearing in a number of stage productions. Her television debut was a guest appearance in the BBC One medical soap opera Doctors in 2009.",
  },
  {
    id:1,
    featuredImage:'images/checkers.jpg',
    mainImage:'images/kit-harrington.jpg',
    topic:'Kit Harrington',
    occupation:'English Actor',
    description:"Christopher Catesby 'Kit' Harington is an English actor. He studied at the Royal Central School of Speech & Drama and made his professional acting debut with the lead role of Albert Narracott in the critically acclaimed West End play War Horse at the National Theatre.",
  },
  {
    id:2,
    featuredImage:'images/checkers.jpg',
    mainImage:'images/maisie-wlliams.jpg',
    topic:'Maisie Williams',
    occupation:'English Actress',
    description:"Margaret Constance 'Maisie' Williams is an English actress who made her acting debut in 2011 as Arya Stark, a lead character in the HBO epic medieval fantasy drama series Game of Thrones.",
  },
  {
    id:3,
    featuredImage:'images/checkers.jpg',
    mainImage:'images/sophie-turner.jpg',
    topic:'Sophie Jonas',
    occupation:'English Actress',
    description:"Sophie Belinda Jonas is an English actress. She made her acting debut as Sansa Stark on the HBO epic fantasy television series Game of Thrones, for which she received a Primetime Emmy Award nomination for the Outstanding Supporting Actress in a Drama Series in 2019",
  },
  {
    id:4,
    featuredImage:'images/checkers.jpg',
    mainImage:'images/lena-headey.jpg',
    topic:'Lena Headey',
    occupation:'English Actress',
    description:"Lena Kathren Headey is an English actress. She gained international recognition and acclaim for her portrayal of Cersei Lannister on the HBO epic fantasy drama series Game of Thrones, for which she received five Primetime Emmy Award nominations and a Golden Globe Award nomination.",
  },
  {
    id:5,
    featuredImage:'images/checkers.jpg',
    mainImage:'images/peter-dinklage.jpg',
    topic:'Peter Dinklage',
    occupation:'English Actress',
    description:"Peter Hayden Dinklage is an American actor and producer. He received acclaim for portraying Tyrion Lannister on the HBO television series Game of Thrones, for which he won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series a record four times",
  },
];

const singleSpeakerCode = (speaker) => {

return  `
 <div class="">
  <li class="speakers-display">
  <img src="${speaker.featuredImage}" alt="checkers" class="checkers">
  <img src="${speaker.mainImage}" alt="${speaker.topic}" class="featured-image">
  <h3${speaker.topic}</h3>
  <p class="p-colour">${speaker.occupation}</p>
  <p class="p-spacing">${speaker.description}</p>
  </li>
  </div>`;
};

const list = document.querySelector('.speakers');
list.innerHTML = speakers.map(speaker => singleSpeakerCode(speaker)).join('');

//  Show More for Mobile

// const mobileSpeakers = document.querySelector('.speakers')

// function viewMore(mobile) {

// }