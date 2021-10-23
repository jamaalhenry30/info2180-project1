/* Add your JavaScript to this file */
window.onload=function(){
    let containers = document.querySelectorAll(".container")
    for(var i=0; i <containers.length;i++){
        containers[i].id = "num" + i;
    };

    let cont1 = document.getElementById("num0");
    let h1 = cont1.querySelector("H1");
    let ul = cont1.querySelector("UL");
    let nav1 = cont1.querySelector("nav");
    nav1.className = "flexbox-container";
    h1.id = "finger";
    ul.id = "foot"
    //h1.id = "head";
    let listings = cont1.getElementsByTagName("li");

    for(var i=0;i<listings.length;i++){
        listings[i].id = "list"+i;
    };

    let hero = document.getElementById("num1");
    hero.className = "hero";
    let healthy = hero.querySelector('IMG');
    healthy.className = "healthy";

    let cont2 = document.getElementById("num2");
    let h2 = cont2.querySelector('h2');
    let h3 = cont2.querySelectorAll('h3');
    for(var i=0;i<h3.length;i++){
        h3[i].className = "h3";
    };
    h2.className="learn";
    let cardpics = cont2.querySelectorAll("IMG");
    for(var i=0;i<cardpics.length;i++){
        cardpics[i].id = "cardpic"
    };

    let num4 = document.getElementById("num4");
    let num4h2 = num4.querySelector('h2');
    num4h2.className = "num4h2";
    let num4h3 = num4.querySelectorAll('h3');
    for(var i=0; i<num4h3.length;i++){
        num4h3[i].className="num4h3";

    };
    let links = num4.querySelectorAll('a');
    for(var i=0; i<links.length;i++){
        links[i].className="plinks";

    };
    let articles = num4.querySelectorAll("article");
    for(var i=0; i<articles.length;i++){
        articles[i].id="art"+i;
        articles[i].className = "art";

    };
    let imgs = num4.querySelectorAll('img');
    for(var i=0; i<imgs.length;i++){
        imgs[i].id="img"+i;
        imgs[i].className = "artpic";

    };
    let num5 = document.querySelector('num5');
    
    let form = document.querySelector("form");
    form.id = "form";

    let buttons = document.querySelectorAll(".btn")
    for(var i=0; i<buttons.length;i++){
        buttons[i].id = "btn"+i;
    }

    let footer = document.querySelector('footer');
    footer.className="footer";

    let message = document.getElementsByClassName("message")[0];
    let email = document.getElementById("email");


    form.addEventListener('submit',(e) => {
        if(email.value===''||email.value==null){
            e.preventDefault();
            message.innerHTML = "Please enter a valid email address";
        }else{
            e.preventDefault();
            message.innerHTML="Thank you! Your emaill address "+ email.value +" has been added to our mailing list!";
        }


        })

}