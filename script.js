let $ = document

let headerBoxImage = $.getElementById('images')



let photoArray = ['image/IMG-20241011-WA0003.png','image/Jowhareh_galleries_3_poster_5d45a136-39a6-4a20-b998-7f1d0c58d6e3.jpeg', 'image/Jowhareh_galleries_3_poster_6d8b3b52-91d7-4ead-9baa-695123493b95.jpeg', 'image/Jowhareh_galleries_3_poster_9481d4df-bf61-4bb1-87e7-bee2388eb9e8.jpeg', 'image/Jowhareh_galleries_3_poster_851544d1-0b82-4eb5-b24e-91742d4915b0.jpeg', 'image/Jowhareh_galleries_3_poster_a70ddbd6-ca00-43f0-9d7d-4de9a452f802.jpeg','image/Jowhareh_galleries_3_poster_d2a9ae98-46b9-4ff7-bdfd-14356cdb4103.jpeg']



setInterval(function(){
    nextPhot()
},3000)

let indexValue = 0


function nextPhot(){
    indexValue++
    if(indexValue > photoArray.length-1){
        indexValue = 0
    }
    headerBoxImage.style.backgroundImage = 'url('+photoArray[indexValue]+')';
    headerBoxImage.style.transition = 'all 1.5s ease'
}

console.log(headerBoxImage)