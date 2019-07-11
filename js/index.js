const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBtns = document.querySelectorAll('nav a');

navBtns[0].textContent = siteContent.nav['nav-item-1'];
navBtns[1].textContent = siteContent.nav['nav-item-2'];
navBtns[2].textContent = siteContent.nav['nav-item-3'];
navBtns[3].textContent = siteContent.nav['nav-item-4'];
navBtns[4].textContent = siteContent.nav['nav-item-5'];
navBtns[5].textContent = siteContent.nav['nav-item-6'];

const green = document.querySelectorAll('a');
green.forEach(item => item.style.color = 'green');


const heading = document.querySelector('h1');
heading.textContent = siteContent.cta['h1'];

const headingBtn = document.querySelector('.cta button');
headingBtn.textContent = siteContent.cta['button'];

const codeImg = document.querySelector('#cta-img');
codeImg.src = siteContent.cta['img-src'];

const midImg = document.querySelector('#middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

const contentTitle = document.querySelectorAll('h4');
const contentP = document.querySelectorAll('p');

contentTitle[0].textContent = siteContent['main-content']['features-h4'];
contentTitle[1].textContent = siteContent['main-content']['about-h4'];
contentTitle[2].textContent = siteContent['main-content']['services-h4'];
contentTitle[3].textContent = siteContent['main-content']['product-h4'];
contentTitle[4].textContent = siteContent['main-content']['vision-h4'];
contentTitle[5].textContent = siteContent.contact['contact-h4'];


contentP[0].textContent = siteContent['main-content']['features-content'];
contentP[1].textContent = siteContent['main-content']['about-content'];
contentP[2].textContent = siteContent['main-content']['services-content'];
contentP[3].textContent = siteContent['main-content']['product-content'];
contentP[4].textContent = siteContent['main-content']['vision-content'];
contentP[5].textContent = siteContent.contact['address'];
contentP[6].textContent = siteContent.contact['phone'];
contentP[7].textContent = siteContent.contact['email'];
contentP[8].textContent = siteContent.footer['copyright'];