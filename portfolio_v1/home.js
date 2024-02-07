var images=[
    'images/being_cover.jpg',
    'images/CosmicR_cover.jpg',
    'images/moai_cover.png',
    'images/fungiCity_cover.png',
]

var randomImage=document.getElementById('randomImage');

function randomImg(){
    console.log("Randomize images");
    var randomIndex=Math.floor(Math.random()*(images.length));
    randomImage.src=images[randomIndex];
}

setInterval(randomImg,2000);