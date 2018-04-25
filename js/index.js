const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

//Nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let nav = document.getElementsByTagName("nav")[0];
//console.log(nav);
let tags1 = nav.getElementsByTagName("a")[0];
tags1.innerHTML = siteContent["nav"]["nav-item-1"];
//console.log(tags1);
let tags2 = nav.getElementsByTagName("a")[1];
tags2.innerHTML = siteContent["nav"]["nav-item-2"];
//console.log(tags2);
let tags3 = nav.getElementsByTagName("a")[2];
tags3.innerHTML = siteContent["nav"]["nav-item-4"];
//console.log(tags3);
let tags4 = nav.getElementsByTagName("a")[3];
tags4.innerHTML = siteContent["nav"]["nav-item-4"];
//console.log(tags4);
let tags5 = nav.getElementsByTagName("a")[4];
tags5.innerHTML = siteContent["nav"]["nav-item-5"];
//console.log(tags5);

// let navImg = document.getElementById("logo-img");
// navImg.setAttribute('src', siteContent["nav"]["img-src"]);
console.log(logo);

//CTA
let cta = document.getElementsByClassName("cta")[0];
console.log(cta);
let ctaText = cta.getElementsByClassName("cta-text")[0];
console.log(ctaText);
//h1
let h1 = ctaText.getElementsByTagName("h1")[0];
h1.innerHTML =  siteContent["cta"]["h1"];
console.log(h1);
//button
let button = ctaText.getElementsByTagName("button")[0];
button.innerHTML = siteContent["cta"]["button"];
console.log(button);
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content
let mainContent = document.getElementsByClassName("main-content")[0];
console.log(mainContent);
let topContent = mainContent.getElementsByClassName("top-content")[0];
console.log(topContent);

//features
let textContent = topContent.getElementsByClassName("text-content")[0];
console.log(textContent, "hello");
let h4Features = textContent.children[0];
h4Features.innerHTML = siteContent["main-content"]["features-h4"];
console.log("here it is!!!");
console.log(siteContent["main-content"]["features-h4"]);
console.log(h4Features);
let h4Content = textContent.children[1];
h4Content.innerHTML = siteContent["main-content"]["features-content"];
console.log(h4Content);

//about
let textContent1 = topContent.getElementsByClassName("text-content")[1];
console.log(textContent1);
let h4About = textContent1.children[0];
h4About.innerHTML = siteContent["main-content"]["about-h4"];
console.log(h4About);
let h4Content2 = textContent1.children[1];
h4Content2.innerHTML = siteContent["main-content"]["about-content"];
console.log(h4Content2);

//image
let textImg = document.getElementById("middle-img");
textImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// //features
// let textContent = topContent.getElementsByClassName("text-content")[0];
// console.log(textContent);
// let h4Features = textContent.children[0];
// h4Features.innerHTML = siteContent["main-content"]["features-h4"];
// console.log(h4Features);
// let h4Content = textContent.children[1];
// h4Content.innerHTML = siteContent["main-content"]["features-content"];
// console.log(h4Content);

// Bottom
let bottomContent = mainContent.getElementsByClassName("bottom-content")[0];
let textContent2 = bottomContent.getElementsByClassName("text-content")[0];
console.log(textContent2);

let h4Services = textContent2.children[0];
h4Services.innerHTML = siteContent["main-content"]["services-h4"];
console.log(h4Services);

let contentServices = textContent2.children[1];
contentServices.innerHTML = siteContent["main-content"]["services-content"];
console.log(contentServices);

let textContent3 = bottomContent.getElementsByClassName("text-content")[1];
console.log(textContent3);

let h4Product = textContent3.children[0];
h4Product.innerHTML = siteContent["main-content"]["product-h4"];
console.log(h4Product);

let contentProduct = textContent3.children[1];
contentProduct.innerHTML = siteContent["main-content"]["product-content"];
console.log(contentProduct);

let textContent4 = bottomContent.getElementsByClassName("text-content")[2];
console.log(textContent3);

let h4Vision = textContent4.children[0];
h4Vision.innerHTML = siteContent["main-content"]["vision-h4"];
console.log(h4Vision);

let contentVision = textContent4.children[1];
contentVision.innerHTML = siteContent["main-content"]["vision-content"];
console.log(contentVision);