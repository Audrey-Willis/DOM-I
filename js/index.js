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


let navAnchors = document.querySelectorAll('a')
  navAnchors[0].textContent = siteContent['nav']['nav-item-1'];
  navAnchors[1].textContent = siteContent['nav']['nav-item-2'];
  navAnchors[2].textContent = siteContent['nav']['nav-item-3'];
  navAnchors[3].textContent = siteContent['nav']['nav-item-4'];
  navAnchors[4].textContent = siteContent['nav']['nav-item-5'];
  navAnchors[5].textContent = siteContent['nav']['nav-item-6'];

  navAnchors[0].style.color = 'green';
  navAnchors[1].style.color = 'green';
  navAnchors[2].style.color = 'green';
  navAnchors[3].style.color = 'green';
  navAnchors[4].style.color = 'green';
  navAnchors[5].style.color = 'green';

let headerImg = document.getElementById("cta-img");
  headerImg.src = 'img/header-img.png';

let ctaText = document.querySelector('h1')
  ctaText.textContent = 'Dom is Awesome'

let ctaButton = document.querySelector('button');
  ctaButton.textContent = 'Get Started!'

let topH4 = document.querySelectorAll(".top-content h4");
  topH4[0].textContent = siteContent["main-content"]["features-h4"];
  topH4[1].textContent = siteContent["main-content"]["about-h4"];
    
let topP = document.querySelectorAll(".top-content p");
  topP[0].textContent = siteContent["main-content"]["features-content"];
  topP[1].textContent = siteContent["main-content"]["about-content"];
    
  
let bottomH4 = document.querySelectorAll(".bottom-content h4");
  bottomH4[0].textContent = siteContent["main-content"]['services-h4'];
  bottomH4[1].textContent = siteContent['main-content']['product-h4']
  bottomH4[2].textContent = siteContent['main-content']['vision-h4']

let bottomP = document.querySelectorAll(".bottom-content p");
    bottomP[0].textContent = siteContent['main-content']['services-content']
    bottomP[1].textContent = siteContent['main-content']['product-content']
    bottomP[2].textContent = siteContent['main-content']['vision-content']


let mainImg = document.querySelector(".main-content img");
  mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactH4 = document.querySelector(".contact h4");
  contactH4.textContent = siteContent["contact"]["contact-h4"]; 

let contactP = document.querySelectorAll(".contact p");
  contactP[0].textContent = siteContent["contact"]["address"];
 	contactP[1].textContent = siteContent["contact"]["phone"];
 	contactP[2].textContent = siteContent["contact"]["email"];
   
let foot = document.querySelector("footer");
  foot.textContent = siteContent["footer"]["copyright"];


let blogLink = document.createElement('a')
  blogLink.textContent = 'Blog'
  blogLink.href = '#'
  let nav = document.querySelector('nav')
  nav.appendChild(blogLink)
  blogLink.style.color = 'green';


let navItem = document.createElement("a");
  navItem.textContent = "About Me";
  let aboutMe = document.querySelector("nav");
  aboutMe.prepend(navItem);
  navItem.style.color = "green";






   








