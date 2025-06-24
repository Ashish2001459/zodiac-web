const navbar=document.getElementById('navbar')
const logo=document.createElement('div')
logo.classList.add('logo')
logo.innerHTML=`<span>HOROSCOPE</span>`;
const navlink=document.createElement('div')
navlink.classList.add('navlinks')
const links=[
    {name:'HOROSCOPES',dropdown: true },
    {name:'ARTICLES',dropdown: true },
    {name:'TAROT',dropdown: true },
    {name:'GAMES',dropdown: true },
    {name:'ZODIAC SIGNS',dropdown: true },
    {name:'PSYCHICS',dropdown: true },
    {name:'STORE',dropdown: false}
]
links.forEach(link=>{
    const a=document.createElement('a')
    a.innerHTML=`<a hrf="#">${link.name}${link.dropdown ?' ▾' : ''}</a>`
    navlink.appendChild(a)
});
const navicon=document.createElement('div')
navicon.classList.add('navicon')
     navicon.innerHTML=`<i class="fa-regular fa-message"></i>
    <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-x-twitter"></i>
             <i class="fa-brands fa-youtube"></i>
              <i class="fa-solid fa-magnifying-glass"></i>`;
navbar.appendChild(logo)
navbar.append(navlink)
navbar.appendChild(navicon)
const zodiacSigns = [
    { name: "Aries",img: "img/aries.png", date: "Mar 21 - Apr 19" ,text:"Aries is a cardinal, masculine fire sign. It's ruled by Mars and is associated with the First House of “the self  As a cardinal sign, Aries begins the zodiacal modality and astrological year. It's the original leader Aries masculine nature is forthright with vigor a trait further amplified by its planetary ruler, Mars. Aries is known to be vivacious, enthusiastic, childish, and a bit selfish. Although this sign is impulsive and hotheaded, nobody can deny the quick-thinking and intense call-to-action innate in any Aries. Expressed as the Ram, Aries can be counted on to headbutt its way through anything"},
    { name: "Taurus", img: "img/taurus.png", date: "Apr 20 - May 20" ,text:"Taurus is a fixed, feminine earth sign ruled by Venus and associated with the Second House of money and value. As a fixed sign, Taurus is a natural stabilizer, graced with an earthy presence and stamina.The subdued, yet elegantly feminine, nature of Taurus is sensualized by its planetary ruler, Venus. Taurus is always counted on for great taste and pleasurable pastimes. But the phrase, “stubborn as a bull,” fits this zodiac sign beautifully, as it is represented by the Bull. However, nobody can deny Taurus' ability to weather any storm through thick and thin."},
    { name: "Gemini", img: "img/gemini.png", date: "May 21 - Jun 20" ,text:"Gemini is a mutable, masculine air sign, ruled by Mercury and associated with the Third House of local community, short-distance travel, siblings, and communication.Fickle and flighty, Gemini's mutable nature is restless. Gemini's mutability is directly expressed thanks to its masculine nature. It often comes out as a witty remark, a flippant hand gesture, and an overbooked schedule. As it is ruled by Mercury, Gemini is typically concerned with learning as much as possible from its peers. Gemini's intelligent duality is expressed as the Twins, implying that Gemini's mercurial mind considers all perspectives."},
    { name: "Cancer", img: "img/sign.png", date: "Jun 21 - Jul 22" ,text:"Cancer is a cardinal, feminine water sign ruled by the moon and associated with the Fourth House of Home and Family in all generational forms.Driven by gut-wrenching intuition, Cancer's cardinal capabilities come from its feminine energy. Cancer is the leader who can intuitively act and decide but will also dip and dodge responsibilities as well. Cancer's watery nature is often all in or all out. Ruled by the moon, Cancer's psychic receptivity is incredible. It is motherly, nurturing, and compassionate. It's also usually wrapped up in a moody presence. After all, Cancer isn't known as the Crab for nothing!"},
    { name: "Leo", img: "img/leo.png", date: "Jul 23 - Aug 22" ,text:"Leo is a fixed, masculine fire sign, ruled by the sun and associated with the Fifth House of joy, pleasure, sex, children, and dating. As bright as the sun itself, Leo loves to shine!Leo's natural habitat is the center stage for attention. Bold and audacious, Leo's warmth remains unmoving—thanks to its fixed nature. While stubborn at times, Leo tends to remain enthusiastically engaged. Whether it's Leo's immense joy or dramatic flair, no other sign can match the King or Queen of zodiac. This Lion will always have the loudest roar!"},
    { name: "Virgo", img: "img/virgo.png", date: "Aug 23 - Sep 22" ,text:"Virgo is a mutable, feminine earth sign, ruled by Mercury and associated with the Sixth House of work, health, and daily routines.Much like clay, the earthy mutability of Virgo is consistently adaptable. Virgo is known to be dependable—thanks to Virgo's attention to detail and perfectionist mindset. Although somewhat nervous, thanks to the restless Mercurial influence, Virgo tends to strive for the best outcome at all times. So, Virgo's critical nature is ideal for catching—then perfecting—every flaw. After all, nothing gets by the Virgin. And when lightning strikes, the volcanic nature of Virgo becomes electric!"},
    { name: "Libra", img: "img/libra.png", date: "Sep 23 - Oct 22" ,text:"Libra is a cardinal, masculine air sign ruled by Venus and associated with the Seventh House of commitment, partnerships, and marriage.Represented as the Scales, Libra's cardinal nature comes from its ability to weigh all pros and cons. Although expressed with masculine drive, Libra's air qualities tend to take over. Libra values partnerships above all else, so its leadership capabilities heavily depend on social relations. At times, Libra may come across as codependent or indecisive. If anything, Libra wants to ensure that every decision is reciprocal! Libra is all about keeping it 50/50, in true Scales fashion."},
    { name: "Scorpio", img: "img/scorpio.png", date: "Oct 23 - Nov 21" ,text:"Scorpio is a fixed, feminine water sign that is co-ruled by both Mars and Pluto. It's associated with the Eighth House of joint resources, intimacy, and transformation.Ruled by Mars and Pluto, Scorpio is an intense sign. Its fixed water persona implies a profound, unmoving emotional depth. No other sign can fearlessly explore the underworld like Scorpio. Scorpio's extraordinary fierceness is undeniable. Because of its intensity, Scorpio tends to go through multiple phases of transformation, beginning with the Scorpio and ending with the Phoenix. Look no further for redirection, as Scorpio can be the spark for cabalistic transformation!"},
    { name: "Sagittarius", img: "img/sagittarius.png", date: "Nov 22 - Dec 21" ,text:"Sagittarius is a mutable, masculine fire sign, ruled by Jupiter and associated with the Ninth House of exploration, long-distance travel, philosophy, law, and spirituality.The wildfire nature of Sagittarius is thanks to its mutable fieriness. Sagittarius tends to be an expressive, jolly sign with a booming presence. Larger than life, Sagittarius's planetary ruler, Jupiter, often gifts this sign with excessive tendencies and an abundance of luck. Much like the Centaur, Sagittarius brazenly explores unknown territory. At times, this sign can be a tad much, from opinions on politics to exorbitant vices. But Sagittarius tends to shine as the perfect travel buddy, debate partner, and mischief-maker!"},
    { name: "Capricorn", img: "img/capricorn.png", date: "Dec 22 - Jan 19" ,text:"Capricorn is a cardinal, feminine earth sign, ruled by Saturn and associated with the Tenth House of career, reputation, and goals. Capricorn focuses on building an empire, with its feminine cardinal abilities facilitated through earthy stoicism. Capricorn plays the long game to ensure incredible success.Ruled by Saturn, Capricorn is tasked with the karmic duties of time, lessons, and authority. No other sign can shoulder the weight of the world as Capricorn can. So, it's no surprise that Capricorn is expressed as the Sea-Goat or Goat. Much like a goat clinging to the mountainside, Capricorn will tenaciously persevere."},
    { name: "Aquarius", img: "img/aquarius.png", date: "Jan 20 - Feb 18" ,text:"Aquarius is a fixed, masculine air sign—ruled by Saturn and Uranus. It's associated with the Eleventh House of greater communities, friendships, and dreams. Aquarius is a paradox. Its fixed nature is unmoving, yet its air qualities prefer innovation.Aquarius is a technological sign, preferring both the structure of Saturn and the unconventionality of rebellious Uranus. To amplify Aquarius' quirkiness, it's represented as the Water-Bearer. Surprisingly, Aquarius is highly empathetic, but shielded by a cold front. Aquarius wants to better the collective but is also highly selective with personal relationships. No matter what, Aquarius tends to shine in its individualism."},
    { name: "Pisces", img: "img/pisces.png", date: "Feb 19 - Mar 20" ,text:"Pisces is a mutable, feminine water sign, co-ruled by Jupiter and Neptune. It's associated with the Twelfth House of the subconscious, hidden talents/weaknesses, and self-undoing. Pisces weaves in and out of conscious reality thanks to its mystical mutability.Graced with water attributes, Pisces has this eclectic magic, gifted with psychic receptivity and scarily accurate intuition. Jupiter tends to magnify these qualities, but Neptune also tends to delude them with a dreamy confusion. Represented by two Fish swimming in synchronicity, Pisces is the reminder to consider the known and unknown."},
];
const closebtn=document.querySelector('.close');
const newbox=document.querySelector('.newbox-zodic')
const signDetails = document.querySelector('.zodiac-sign');
const zodiac=document.querySelector('.sign-Details')
const body = document.querySelector('body');
const container = document.querySelector('.zodiac-container');
zodiacSigns.forEach(sign => {
    const signDetails = document.createElement('div');
    signDetails.classList.add('sign-details');
    const zodiacSign = document.createElement('div');
    zodiacSign.classList.add('zodiac-sign');

    const img = document.createElement('img');
    img.src = sign.img;

    const h2 = document.createElement('h2');
    h2.textContent = sign.name;

    const p = document.createElement('p');
    p.textContent = sign.date;
signDetails.appendChild(zodiacSign);
 zodiacSign.appendChild(img)
  signDetails.appendChild(h2);
  signDetails.appendChild(p);
  container.appendChild(signDetails)

 signDetails.addEventListener('click', async() => {
    const existingBOx=document.querySelector('.newbox-zodic')
   if(existingBOx){
    existingBOx.remove();
   }
      const newbox = document.createElement('div');
    newbox.classList.add('newbox-zodic');
   newbox.innerHTML=`<h1>${sign.name || 'name'} ${sign.date || 'date'}</h1> <p>${sign.text || 'text'}</p>`;  
   const closebtn = document.createElement('button');
    closebtn.classList.add('close');
        closebtn.textContent = 'X';
    newbox.style.fontSize='20px'
   if(body.style.backgroundColor ==='black'){
    newbox.style.border='2px solid white';
        newbox.style.color='white';
        newbox.style.boxShadow='0 0 10px 2px rgba(255, 255, 255, 0.8)';
    }
     closebtn.addEventListener('click', () => {
        newbox.remove();
    });
    
    newbox.appendChild(closebtn);
    const moreSection = document.querySelector('.option');
  document.body.insertBefore(newbox, moreSection);

  newbox.scrollIntoView({ behavior: "smooth", block: "center" });

});
});
//     const zodiacSigns= sign.name.toLowerCase()
//     const url = `https://astropredict-daily-horoscopes-lucky-insights.p.rapidapi.com/horoscope?lang=en&zodiac=${zodiacSigns}&type=daily&timezone=UTC`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'e86443b5edmsh0966f4b1b57b893p10e3cfjsnab89b61f0688',
// 		'x-rapidapi-host': 'astropredict-daily-horoscopes-lucky-insights.p.rapidapi.com'
// 	}
// };
// try {
// 	const response = await fetch (url, options)
// 	const result = await response.json();
//     const lang = document.createElement('p');
//     lang.innerText = `Language: ${result.language || "N/A"}`;
//     const zodiac=document.createElement('zodiac');
//     zodiac.innerText=`zodiac : ${result.zodiac || "N/A"}`;
//     const type=document.createElement('type');
//     type.innerText=`type: ${result.type || "N/A"}`;
//     newbox.appendChild(lang)
//     newbox.appendChild(zodiac)
//     newbox.appendChild(type)
// console.log(result);
// } catch (error) {
// 	console.error(error);
//     const errormsg=document.createElement('p')
//     errormsg.textContent="Error fetching data.";
//     newbox.appendChild(errormsg)

// }


const button = document.querySelector('.handlclick');
button.addEventListener('click',() =>{ 
    if(body.style.backgroundColor==='white'){ 
    body.style.backgroundColor = 'black'; 
    button.textContent='🌙'
 body.style.color='white';
 } 
 else{ 
    body.style.backgroundColor='white';
     body.style.color = 'black' ; 
     button.textContent = '🌞'; 
 }
});
const more= document.querySelector('.option');
more.innerHTML='<h1>More Horoscope For You</h1>';
//ceate a container
const moreoption=document.createElement('div')
moreoption.classList.add('option-detail')
const horoscope=[
 {icon:'clear_day',text:'DAILY HOROSCOPE'},
 {icon:'star',text:'2025 HOROSCOPE'},
 {icon:'favorite',text:'LOVE'},
 {icon:'cards_star',text:'TAROT'},
 {icon:'business_center',text:'CAREER'},
 {icon:'money',text:'MONEY'},
 {icon:'medical_services',text:'HEALTH'},
 {icon:'eco',text:'CHIENSE'},
 {icon:'savings',text:'NUMEROLOGY'},
 {icon:'all_inclusive',text:'FREE PSYCHIC'},
 {icon:'psychology_alt',text:'PREMIUM READINGS'},
]
horoscope.forEach(item=>{
    const option=document.createElement('div')
    option.classList.add('options-horo')
    option.innerHTML=`<a href="#" class="horo-btn"><span class="material-symbols-outlined">${item.icon}</span>${item.text}</a>`;
    more.appendChild(moreoption)
   moreoption.appendChild(option)
});
//left-img
const horimg=document.querySelector('.horo-tip')
const imgcontent=document.createElement('div')
imgcontent.classList.add('img-content');
const left=document.createElement('img');
left.src="img/LOVETA-left.png";
left.alt="ads-img";
//content div
const con=document.createElement('div')
con.classList.add('content-outer');
const content=document.createElement('div');
content.classList.add('content-container');
const img=document.createElement('img')
img.src='img/Screenshot_19-6-2025_85727_.jpeg ';
img.alt='Weekly Horoscopes June 16 - June 22, 2025';
const text=document.createElement('div')
text.classList.add('content-text')
text.innerHTML=`<h3>TODAY'S TIPS</h3>
<h2>Weekly Horoscopes June 16 - June 22, 2025</h2>
<p>This Week is reality Check and reset served with a side of divine discomport</p>`;
con.appendChild(img);
con.appendChild(text);
con.appendChild(content)
horimg.appendChild(imgcontent)
imgcontent.appendChild(left)
imgcontent.appendChild(con)
//main section 
const main=document.getElementById('main')
const section=document.createElement('div')
section.classList.add('main-section')
section.innerHTML=`<h1>Daily Planetary Overview</h1><h3>PLANETARY INDEX: 3/5</h3><p>JUN 19, 2025 - Expressing big feelings might be more challenging than usual when the moon in Aries sextiles Pluto retrograde in Aquarius. Read full overview<a href="#">Read full overview <i class="fa fa-arrow-right"></i></a></p>`;
main.appendChild(section);

//card container
const cardy=document.querySelector('.card')
const carday=document.createElement('div')
carday.classList.add('card-day')
//
const cardimg = document.createElement('img');
cardimg.src = "img/tarot-card.jpg";
cardimg.alt = "Tarot Card";
carday.innerHTML=`<h2>Card Of the Day</h2><a href=#>The Lover</a><p>The Lovers card represents a major choice that you'll soon have to make. But don't be fooled: That choice isn't always about romantic love. Truthfully, it's a choice regarding...</p><a href="#">Read More</a>`;
//
const todaycard=document.createElement('div')
todaycard.classList.add('card-container')
todaycard.innerHTML=`<h1>Today Reading</h1><p>Choose Your Card</p>`;

const cards=document.createElement('div')
cards.classList.add('card-bundle')
const lovecard=document.createElement('div')
lovecard.classList.add('love-cards')
lovecard.innerHTML='<h1>LOVE</h1>'

const Moodcard=document.createElement('div')
Moodcard.classList.add('mood-cards')
Moodcard.innerHTML='<h1>MOOD</h1>'

const careercard=document.createElement('div')
careercard.classList.add('career-cards')
careercard.innerHTML='<h1>CAREER</h1>'
cardy.appendChild(carday)
carday.prepend(cardimg)
cardy.appendChild(todaycard)
todaycard.appendChild(cards)
cards.appendChild(lovecard)
cards.appendChild(Moodcard)
cards.appendChild(careercard)
//quotes section
const quotes=document.getElementById('quote-section')
const quote=document.createElement('div')
quote.classList.add('daily-quote')
quote.innerHTML=`<h1>Quotes Of the Day</h1><p>Change of life today. Don't gamble on the future...<a href="#">Read full quote<i class="fa fa-arrow-right"></i></a></p>`;
quotes.appendChild(quote);

//reading & rating section
const profile = document.getElementById('profile-container');
profile.innerHTML='<h1>Free Reading</h1>'
const profiles = [
  {
    name: "ShaniaAnise'",
    title: "Need to Know Now? Accurate Results",
    image: "img/OIP (6).jfif",
    price: 2.99,
    reviews: 901,
    initialRating: 0
  },
  {
    name: "Lydia Garnett",
    title: "Answers on Love & Relationships - From Spirit",
    image: "img/OIP (4).jfif",
    price: 4.25,
    reviews: 9,
    initialRating: 0
  }
];

profiles.forEach(profileData => {
  const pf = document.createElement('div');
  pf.classList.add('profile');

  const profilecard = document.createElement('div');
  profilecard.classList.add('profile-card');
  profilecard.innerHTML = `
    <img src="${profileData.image}" class="profile-img" alt="Profile">
    <h2>${profileData.name}</h2>
    <p>${profileData.title}</p>
  `;

  pf.appendChild(profilecard);

  // Create rating section
  const rate = document.createElement('div');
  rate.classList.add('rating-section');

  let currentRating = 0;
  const stars = [];

  const ratingValue = document.createElement('p');
  ratingValue.classList.add('rating-value');
  ratingValue.textContent = 'You rated: 0';

rate.appendChild(ratingValue)

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.classList.add('rating');
    star.innerHTML = '&#9733;';
    star.dataset.value = i;

    // Hover
    star.addEventListener('mouseover', () => highlightStars(i));
    star.addEventListener('mouseout', () => highlightStars(currentRating));

    star.addEventListener('click', () => {
      currentRating = i;
      ratingValue.textContent = `You rated: ${currentRating}`;
      highlightStars(currentRating);
    });

    stars.push(star);
    rate.appendChild(star);
  }

  // Add the whole rating section
  profilecard.appendChild(rate);
  profile.appendChild(pf); 
  function highlightStars(rating) {
    stars.forEach((star, index) => {
      star.classList.toggle('selected', index < rating);
    });
  }
});
const footer = document.getElementById('footer-section');

const finfo = [
  { name: 'About', link: '#' },
  { name: 'Team', link: '#' },
  { name: 'Free Newsletter', link: '#' },
  { name: 'Advertise', link: '#' },
  { name: 'Terms', link: '#' },
  { name: 'Privacy', link: '#' },
  { name: 'Do Not Sell My Info', link: '#' },
  { name: 'Contact', link: '#' },
  { name: 'Site Map', link: '#' },
  { name: 'Horoscope du jour', link: '#' }
];
const linksContainer = document.createElement('div');
linksContainer.classList.add('footer-info');

finfo.forEach(item => {
  const link = document.createElement('a');
  link.classList.add('footer-link');
  link.href = item.link;
  link.textContent = item.name;
  linksContainer.appendChild(link);
});
const copyright = document.createElement('p');
copyright.classList.add('footer-copy');
copyright.innerHTML = '&copy; Copyright 2025 - Horoscope.com, Inc. - All rights reserved';

const fbtn = document.createElement('div');
fbtn.classList.add('footer-btn');
fbtn.innerHTML = '<button>Keep</button>';
footer.appendChild(linksContainer);
linksContainer.appendChild(copyright);
footer.appendChild(fbtn);
