const humberger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.hidden-menu');
const navLink = document.querySelectorAll('.nav-link');

function openMenu() {
  humberger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  humberger.classList.remove('active');
  navMenu.classList.remove('active');
}

humberger.addEventListener('click', openMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

const speakers = [
  {
    id: 1,
    image: './Images/speaker_01.png',
    name: 'Teka G/yesus',
    organization: 'Trade and Industry Minister',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 2,
    image: './Images/speaker_02.png',
    name: 'Tekeste Girma',
    organization: 'CEO Ethiopian Comodity Exchange',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 3,
    image: './Images/speaker_03.png',
    name: 'Jeff Bezos',
    organization: 'Manager, Redstone Comodity',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 4,
    image: './Images/speaker_04.png',
    name: 'Marta Alemu',
    organization: 'CEO, Jorka Events',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 5,
    image: './Images/speaker_05.png',
    name: 'Tirsit Tsegaye',
    organization: 'CEO, Redstone Comodity',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 6,
    image: './Images/speaker_06.png',
    name: 'Abel Lema',
    organization: 'CEO, Agriculture Ministry',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

const activity = document.querySelector('.activity-container');

const createActivities = () => {
  speakers.forEach((item, index) => {
    const speakerContainer = document.createElement('div');
    speakerContainer.classList.add('speaker-container');
    activity.appendChild(speakerContainer);

    if (index >= 2) {
      speakerContainer.classList.add('hide');
    }

    const speakerImage = document.createElement('img');
    speakerImage.src = `${item.image}`;
    speakerImage.alt = `Image of ${item.name}`;
    speakerImage.className = 'speaker-image';
    speakerContainer.appendChild(speakerImage);

    const speakerInfos = document.createElement('div');
    speakerInfos.className = 'speaker-infos';
    speakerContainer.appendChild(speakerInfos);

    const speakerName = document.createElement('h3');
    speakerName.className = 'speaker-name';
    speakerName.textContent = `${item.name}`;
    speakerInfos.appendChild(speakerName);

    const speakerOrganization = document.createElement('h4');
    speakerOrganization.className = 'speaker-organization';
    speakerOrganization.textContent = `${item.organization}`;
    speakerInfos.appendChild(speakerOrganization);

    const bar = document.createElement('hr');
    bar.className = 'bar';
    speakerInfos.appendChild(bar);

    const speakerBackground = document.createElement('p');
    speakerBackground.className = 'speaker-background';
    speakerBackground.textContent = `${item.background}`;
    speakerInfos.appendChild(speakerBackground);
  });

  const seeMore = document.createElement('button');
  seeMore.classList.add('see-more-wrap');
  seeMore.innerText = 'MORE ';
  activity.appendChild(seeMore);

  const arrowImg = document.createElement('img');
  arrowImg.classList.add('arrow-img');
  arrowImg.setAttribute('src', './Images/arrow_down.png');
  arrowImg.setAttribute('alt', 'arrow icon');
  arrowImg.setAttribute('width', '15');
  arrowImg.setAttribute('height', '10');
  seeMore.appendChild(arrowImg);
};

createActivities();

const hideCard = document.querySelectorAll('.hide');
const seeMorebtn = document.querySelector('.see-more-wrap');

seeMorebtn.addEventListener('click', () => {
  hideCard.forEach((element) => {
    element.classList.toggle('show');

    if (element.classList.contains('show')) {
      seeMorebtn.innerText = 'LESS ';
    } else {
      seeMorebtn.innerText = 'MORE';
    }
  });
});
