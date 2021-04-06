
//Get the media query info
if(window.matchMedia("(min-width: 1440px)").matches){
    
    var background = [
        {
            img1 : "desktop-image-hero-1.jpg", 
            img2 : "desktop-image-hero-2.jpg", 
            img3 : "desktop-image-hero-3.jpg",
        }
    ]
    
}else{
    var background = [
        {
            img1 : "mobile-image-hero-1.jpg", 
            img2 : "mobile-image-hero-2.jpg", 
            img3 : "mobile-image-hero-3.jpg",
        }
    ]
}

//Object with the element info
var info = [
    {
        title: "Discover innovative ways to decorate",
        text: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        background: background[0].img1 , 
    }, 
    {
        title: "We are available all across the globe", 
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        background: background[0].img2, 
    }, 
    {
        title: "Manufactured with the best materials", 
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.", 
        background: background[0].img3,
    }
]



function createHTMLElement(title, text, background){

    const backgroundBody = document.getElementById("hero-background"); 
    backgroundBody.style.backgroundImage = 'url("images/' + background + '")';


    const heroBody = document.getElementById("hero-body")
    heroBody.innerHTML = ""

    //Title
    const titleBody = document.createElement("H2")
    titleBody.setAttribute("class","hero-background-title")
    titleBody.append(title)

    //Text 
    const textBody = document.createElement("P")
    textBody.setAttribute("class", "hero-background-text")
    textBody.append(text)

    //link
    const linkBody = document.createElement("A")
    linkBody.setAttribute("class", "hero-background-link");
    linkBody.innerHTML ='SHOP NOW  <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>'

    heroBody.append(titleBody, textBody, linkBody);
}

var initial = 0;

var changeHero = document.querySelectorAll(".change-hero");

changeHero.forEach(changeHero=>{
    changeHero.addEventListener("click", (e)=>{

        if(e.target.dataset.direction == "left"){
            initial--;
        }else{
            initial++;
        }

        if(initial < 0){
            initial = info.length - 1;
        }else if(initial >= info.length){
            initial = 0;
        }

        createHTMLElement(info[initial].title, info[initial].text, info[initial].background);
    })
})