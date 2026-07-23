/*=========================================
            HERO SWIPER
=========================================*/

const heroSwiper = new Swiper(".heroSwiper",{

    loop:true,

    speed:800,

    spaceBetween:0,

    autoplay:{

        delay:3500,

        disableOnInteraction:false,

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

});


/*=========================================
            HAMBURGER MENU
=========================================*/

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});


/*=========================================
        CLOSE MENU WHEN CLICK
=========================================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});


/*=========================================
            STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(15,17,23,.95)";

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(15,17,23,.75)";

        header.style.boxShadow="none";

    }

});


/*=========================================
            BACK TO TOP
=========================================*/

const topButton=document.createElement("div");

topButton.className="back-to-top";

topButton.innerHTML='<i class="bi bi-arrow-up"></i>';

document.body.appendChild(topButton);


window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }

    else{

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
        BUTTON HOVER EFFECT
=========================================*/

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


/*=========================================
            IMAGE LOADING
=========================================*/

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("load",()=>{

        img.style.opacity="1";

    });

});


/*=========================================
            PARALLAX HERO
=========================================*/

window.addEventListener("mousemove",(e)=>{

    const hero=document.querySelector(".hero");

    if(!hero) return;

    const x=e.clientX/60;

    const y=e.clientY/60;

    hero.style.backgroundPosition=`${x}px ${y}px`;

});


/*=========================================
            SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

".game-card,.promo-card,.category-card,.payment-item,.step-card,.advantage-card,.stat-box,.testimonial-card"

);


function reveal(){

    revealElements.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const visible=window.innerHeight-100;

        if(top<visible){

            item.style.opacity="1";

            item.style.transform="translateY(0px)";

        }

    });

}

reveal();

window.addEventListener("scroll",reveal);


/*=========================================
            INITIAL STYLE
=========================================*/

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".6s";

});


/*=========================================
            END PART 1
=========================================*/
/*=========================================
            LIVE SEARCH GAME
=========================================*/

const searchInput = document.querySelector(".search-box input");
const gameCards = document.querySelectorAll(".game-card");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const keyword = this.value.toLowerCase();

        gameCards.forEach(card=>{

            const title = card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(keyword)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}


/*=========================================
            FAVORITE GAME
=========================================*/

gameCards.forEach(card=>{

    const fav = document.createElement("div");

    fav.className="favorite";

    fav.innerHTML='<i class="bi bi-heart"></i>';

    card.appendChild(fav);

    fav.addEventListener("click",(e)=>{

        e.stopPropagation();

        const icon = fav.querySelector("i");

        if(icon.classList.contains("bi-heart")){

            icon.classList.remove("bi-heart");

            icon.classList.add("bi-heart-fill");

            icon.style.color="#ff3d6e";

        }else{

            icon.classList.remove("bi-heart-fill");

            icon.classList.add("bi-heart");

            icon.style.color="#fff";

        }

    });

});


/*=========================================
            COUNTER
=========================================*/

const counters=document.querySelectorAll(".stat-box h2");

function runCounter(){

    counters.forEach(counter=>{

        const target=parseInt(counter.innerText.replace(/\D/g,""));

        let value=0;

        const speed=Math.ceil(target/100);

        const timer=setInterval(()=>{

            value+=speed;

            if(value>=target){

                value=target;

                clearInterval(timer);

            }

            if(counter.innerText.includes("%")){

                counter.innerText=value+"%";

            }

            else if(counter.innerText.includes("+")){

                counter.innerText=value+"+";

            }

            else{

                counter.innerText=value;

            }

        },20);

    });

}

let counterPlayed=false;

window.addEventListener("scroll",()=>{

    const stats=document.querySelector(".stats");

    if(!stats) return;

    const top=stats.getBoundingClientRect().top;

    if(top<window.innerHeight-120 && !counterPlayed){

        runCounter();

        counterPlayed=true;

    }

});


/*=========================================
            FAQ ACCORDION
=========================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const answer=item.querySelector("p");

    answer.style.display="none";

    item.addEventListener("click",()=>{

        if(answer.style.display==="block"){

            answer.style.display="none";

        }else{

            answer.style.display="block";

        }

    });

});


/*=========================================
            RIPPLE BUTTON
=========================================*/

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        ripple.className="ripple";

        const rect=btn.getBoundingClientRect();

        ripple.style.left=e.clientX-rect.left+"px";

        ripple.style.top=e.clientY-rect.top+"px";

        btn.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});


/*=========================================
            TOAST NOTIFICATION
=========================================*/

function showToast(text){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerText=text;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },400);

    },2500);

}


document.querySelectorAll(".game-info button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        const game=btn.parentElement.querySelector("h3").innerText;

        showToast(game+" dipilih.");

    });

});


/*=========================================
            END PART 2
=========================================*/
/*=========================================
            DARK MODE
=========================================*/

/*const themeButton = document.createElement("button");

themeButton.className = "theme-button";

themeButton.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';

document.body.appendChild(themeButton);

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    themeButton.innerHTML='<i class="bi bi-sun-fill"></i>';

}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

        themeButton.innerHTML='<i class="bi bi-sun-fill"></i>';

    }else{

        localStorage.setItem("theme","dark");

        themeButton.innerHTML='<i class="bi bi-moon-stars-fill"></i>';

    }

});*/


/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const percent=(scrollTop/height)*100;

    progress.style.width=percent+"%";

});


/*=========================================
            LOADING SCREEN
=========================================*/

window.addEventListener("load",()=>{

    const loader=document.createElement("div");

    loader.className="loader";

    loader.innerHTML="<h2>GameTop</h2>";

    document.body.appendChild(loader);

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.remove();

        },600);

    },700);

});


/*=========================================
            LAZY IMAGE
=========================================*/

const lazyImages=document.querySelectorAll("img");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="scale(1)";

        }

    });

});

lazyImages.forEach(img=>{

    img.style.opacity="0";

    img.style.transform="scale(.95)";

    img.style.transition=".5s";

    observer.observe(img);

});


/*=========================================
        FOOTER YEAR
=========================================*/

const copy=document.querySelector(".copyright");

if(copy){

    copy.innerHTML="© "+new Date().getFullYear()+" GameTop. All Rights Reserved.";

}


/*=========================================
        ACTIVE MENU
=========================================*/

const sections=document.querySelectorAll("section");

const menuLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(sec=>{

        const top=sec.offsetTop-120;

        const height=sec.offsetHeight;

        if(pageYOffset>=top){

            current=sec.getAttribute("class");

        }

    });

    menuLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});


/*=========================================
        KEYBOARD SHORTCUT
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});


/*=========================================
        END APP.JS
=========================================*/

console.log("GameTop Loaded Successfully");