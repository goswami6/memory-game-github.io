const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: "./image/card1.jpeg", name:"card1"},
    { imgSrc: "./image/card13.jpg", name:"card13"},
    { imgSrc: "./image/card12.jpg", name:"card12"},
    { imgSrc: "./image/card15.jpg", name:"card15"},
    { imgSrc: "./image/card5.jpeg", name:"card5"},
    { imgSrc: "./image/card10.jpg", name:"card10"},
    { imgSrc: "./image/card14.jpg", name:"card14"},
    { imgSrc: "./image/card11.jpg", name:"card11"},
    { imgSrc: "./image/card1.jpeg", name:"card1"},
    { imgSrc: "./image/card13.jpg", name:"card13"},
    { imgSrc: "./image/card12.jpg", name:"card12"},
    { imgSrc: "./image/card15.jpg", name:"card15"},
    { imgSrc: "./image/card5.jpeg", name:"card5"},
    { imgSrc: "./image/card10.jpg", name:"card10"},
    { imgSrc: "./image/card14.jpg", name:"card14"},
    { imgSrc: "./image/card11.jpg", name:"card11"},



                        ]






    const randomize = () => {
        const cardData = getData();
        cardData.sort(() => Math.random() - 0.5);
        return cardData;


    };

    const cardGenerator = () => {
        const cardData = randomize();


        cardData.forEach((item) => {

        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        face.src = item.imgSrc;
        card.setAttribute("name", item.name);


        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
           //console.log(e); 

        
            card.classList.toggle("toggleCard");
            checkCards(e);

        });


        });



 };

 const checkCards = (e) => {
     console.log(e);
     const clickedCard = e.target;
     clickedCard.classList.add("flipped");

     const flippedCards = document.querySelectorAll(".flipped");
     const toggleCard = document.querySelectorAll(".toggleCard");
     
    console.log(flippedCards);
     if(flippedCards.length === 2){
         if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name"))
         {
             console.log("match");
             flippedCards.forEach(card => {
                 card.classList.remove("flipped");
                 card.style.pointerEvents = "none";
             });
         } else{
             console.log("wrong");
             flippedCards.forEach(card => {
                 card.classList.remove("flipped");
                 setTimeout(() => card.classList.remove("toggleCard"), 1000
                 );


             });
             playerLives--;
             playerLivesCount.textContent = playerLives;
             if(playerLives === 0){
                 restart("try again");
             }
         }

     }

    if(toggleCard.length === 16){
        restart("you won");
    }
 };

 const restart = (text) => {
     let cardData = randomize();
     let faces = document.querySelectorAll(".face");
     let cards = document.querySelectorAll(".card");
     section.style.pointerEvents = "none";
     cardData.forEach((item,index) => {
         cards[index].classList.remove("toggleCard");

         setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";

   
         },1000);
     });

     playerLives = 6;
     playerLivesCount.textContent = playerLives;
     setTimeout(() => window.alert(text),100);

 };

cardGenerator();

        

        