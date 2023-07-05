// CALLBACK
function cerereImagine(linkImagine, callback) {
    setTimeout(function() {
        console.log('');
    }, 5000);

    callback();
}

cerereImagine('img1.png', function() {
    console.log('Imaginea a fost incarcata');
});



iaUtilizatori();

// PROMISIUNILE
let promisiune = new Promise(function(functieResolved) {
    // executam o bucata de cod asincronizat
    let datePrimiteDeLaRequest = {
        name:'Ion',
        varsta:25
    };

    // daca promisiunea este indeplinita, apelam functia Resolved cu datele
    // primite de la requestul nostru
    functieResolved(datePrimiteDeLaRequest);

    // daca promisiunea nu este indeplinita, apelam functie Reject, care va contine
    // eroare din cauza careia promisiunea nu a fost rezolvata
    // functieReject(eroare);
});

promisiune.then(/* Functia pe care o trimitem atunci cand promisiune mea este indeplinita*/)
    .catch(/* Functia pe care o apelam cand promisiunea nu este indeplinita */);




promisiune.then(/*Luam cutitul*/)
    .then(/* Cu cutitul obtinut taiem carnea */)
    .then(/*Carnea taiata din actiunea precedenta o punem la cuptor*/)
    .then(/* Mancam carnea*/)
    .catch(/* In caz de eșec la unul din pași, verificam eroarea*/);




promisiune.then((dataFromA) => console.log(dataFromA))
    .then((dataFromB) => console.log(dataFromB))
    .then((dataFromC) => console.log(dataFromC))
    .then((dataFromD) => console.log(dataFromD))
    .then((dataFromE) => console.log(dataFromE))
    .then((dataFromF) => console.log(dataFromF)); 




// let promisiune2 = new Promise((resolve, reject) => {
//     let conditie = false;

//     if (conditie == true) {
//         resolve('Promisiunea a fost indeplinita');
//     }
//     else {
//         reject();
//     }
// });


// promisiune2.then((mesaj) => console.log(mesaj))
//            .catch(console.log('Eroare'))




// async function functieAsincronizata() {
//     let dataFromA = await getDataFromA();

//     let dataFromB = await getDataFromB(dataFromA);

//     let dataFromC = await getDataFromC(dataFromB);

//     let DataFromD = await getDataFromD(dataFromC);

//     let dataFromE = await getDataFromE(dataFromD);

//     let DataFromF = await getDataFromF(dataFromE);

// }

// async function mancare() {
//     let cutit =         await iaCutit();
//     let carneTaiata =   await taiemCarnea(cutit);
//     let carneCuptor =   await pregatimCarnea(carneTaiata);
//     let mancam =        await mancam(carneCuptor);
// }

promisiune.then(/*Luam cutitul*/)
    .then(/* Cu cutitul obtinut taiem carnea */)
    .then(/*Carnea taiata din actiunea precedenta o punem la cuptor*/)
    .then(/* Mancam carnea*/)
    .catch(/* In caz de eșec la unul din pași, verificam eroarea*/);





fetch('https://jsonplaceholder.typicode.com/users')
    .then((raspuns) => raspuns.json())
    .then((date) => console.log(date));

async function iaUtilizatori() {
    let raspuns = await fetch('https://jsonplaceholder.typicode.com/users');
    let date = await raspuns.json();
    console.log(date);
}


