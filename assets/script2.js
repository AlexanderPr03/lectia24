
// function incalzeste() {
//     console.log('Cuptorul este incalzit');
// }


// let buton = document.querySelector('#change');


// buton.addEventListener('click',incalzeste);


console.log('Instructiune');
// callback


function cerereImagine(linkImagine, callback) {
    setTimeout(function() {
        console.log('');
    }, 5000);

    callback();
}



cerereImagine('img1.png', function() {
    console.log('Imaginea a fost incarcata');
});


//
// getData(function(a) {
//     getMoreData(a, function(b) {
//         getEvenMoreData(b, function(c){

//         }); 
//     });
// });
