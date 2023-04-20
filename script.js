const speakers = [
    {
        name: 'P.T.Usha',
        aboutem: 'President of the IOA',
        bio: 'India greatest athletes, often called the country "queen of track and field". She is the first woman president of the IOA in its 95-year history and the first Olympian appointed as IOA president.',
        id: 'first',
        image: '/Images/P-T-Usha.jpg',
      },
      {
        name: 'Vijay Amritraj',
        aboutem: 'Retired Tennis Player',
        bio: 'Vijay Amritraj is an Indian sports commentator and retired professional tennis player. Vijay Amritraj kept the Indian flag flying high, with his notable performances at the internationaltennis circuit.',
        id: 'second',
        image: '/Images/AMRITRAJ.jpg.png',
      },
      {
        name: 'Prakash Padukone',
        aboutem: 'Retired Badminton Player',
        bio: 'Prakash Padukone is widely regarded as the pioneer of Indian badminton. He was ranked World No. 1 in 1980 – the same year in which he became the first Indian to win the All England Badminton Championship. Prakash Padukone continued the winning streak throughout his career and bagged over 20 international medals before he retired as a player in 1989.',
        id: 'third',
        image: '/Images/badminton-great-prakash-padukone.jpg.png',
      },
      {
        name: 'Sachin Tendulkar',
        aboutem: 'Retired Cricket Player',
        bio: 'Indian professional cricket player, considered by many to be one of the greatest batsmen of all time.In 1998 he was chosen for the Rajiv Gandhi Khel Ratna Award, the highest award given to an Indian athlete, for his outstanding performance in the 1997–98 season.',
        id: 'fourth',
        image: '/Images/1604946178_sachin.jpg.png',
      },
      {
        name: 'Dhanraj Pillay',
        aboutem: 'Retired Hockey Player',
        bio: 'Dhanraj Pillay is a retired Indian field hockey player and former captain of the India national team.',
        id: 'fifth',
        image: '/Images/dhanraj.jpg.png',
      },
      {
        name: 'Deepa Malik',
        aboutem: 'Athlete',
        bio: 'Deepa Malik is an Indian athlete. She started her career at the age of 30. She is the first Indian woman to win a medal in Paralympic Games and won a silver medal at the 2016 Summer Paralympics in shot put. She also won gold in the F-53/54 Javelin event at the para athletic Grand Prix held in Dubai in 2018.',
        id: 'sixth',
        image: '/Images/Deepa Malik.jpeg.png',
      },
  ];
  const featuredSpeakers = document.querySelector('.featured-speakers');
  
  const speakersTop = document.createElement('div');
  speakersTop.classList.add('speakers_top');
  featuredSpeakers.appendChild(speakersTop);
  
  const header = document.createElement('h3');
  header.innerHTML = 'Featured Speakers';
  speakersTop.append(header);
  
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  featuredSpeakers.append(indicator);
  
  const speakerList = document.createElement('div');
  speakerList.classList.add('speaker-list');
  featuredSpeakers.append(speakerList);
  
  let temporary = '';
  
  function loadSpeakers() {
    temporary = '';
    if (window.screen.width < 768) {
      for (let i = 0; i < 2; i += 1) {
        temporary += `<div id="${speakers[i].id}" class="speaker">
                      <div class="photo-bg"><img src="${speakers[i].image}" alt="Image of the speaker"></div>
                      <div class="speaker-details">
                          <h5>${speakers[i].name}</h5>
                          <p class="about-em">${speakers[i].aboutem}</p>
                          <p class="bio" >${speakers[i].bio}</p>
                      </div>
                  </div>`;
      }
  
      speakerList.innerHTML = temporary;
  
      const showMore = document.createElement('div');
      showMore.classList.add('show-container');
      speakerList.appendChild(showMore);
  
      const btnShow = document.createElement('button');
      btnShow.setAttribute('id', 'showMore');
      btnShow.innerHTML = 'More';
      showMore.append(btnShow);
  
      const span = document.createElement('span');
      span.innerHTML = '&#9660;';
      btnShow.appendChild(span);
  
      btnShow.addEventListener('click', () => {
        temporary = '';
        speakers.forEach((speaker) => {
          temporary += `<div id="${speaker.id}" class="speaker">
          <div class="photo-bg"><img src="${speaker.image}" alt="Image of the speaker"></div>
          <div class="speaker-details">
              <h5>${speaker.name}</h5>
              <p class="about-em">${speaker.aboutem}</p>
              <p class="bio" >${speaker.bio}</p>
          </div>
        </div>`;
        });
        speakerList.innerHTML = temporary;
      });
    } else {
      speakers.forEach((speaker) => {
        temporary += `<div id="${speaker.id}" class="speaker">
                      <div class="photo-bg"><img src="${speaker.image}" alt="Image of the speaker"></div>
                      <div class="speaker-details">
                          <h5>${speaker.name}</h5>
                          <p class="about-em">${speaker.aboutem}</p>
                          <p class="bio" >${speaker.bio}</p>
                      </div>
                  </div>`;
      });
      speakerList.innerHTML = temporary;
    }
  }
  
  // button show more
  
  // onloads
  
  window.onload = function () {
    temporary = '';
    loadSpeakers();
  };
  
  window.onresize = function () {
    temporary = '';
    loadSpeakers();
  };
  
  
  
  