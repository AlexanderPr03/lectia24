// import script1,script2,script3

let buton=document.querySelector('#button');
let cerc=document.querySelector('.circle');


buton.addEventListener('click',()=>{
    cerc.classList.toggle('visible');
});

class Car {
    constructor(nume_par,motor_par,automat_par) {
        this.nume = nume_par;
        this.motor = motor_par;
        this.automat = automat_par;
    }
}  


class Person {
    constructor(nume_par,varsta_par) {
        this.nume = nume_par;
        this.varsta = varsta_par;
    }
}

class Student extends Person {
    constructor(nume_par,varsta_par,nota_par) {
        super(nume_par,varsta_par);
        this.nota = nota_par;

    }
}


let student1 = new Student('Ion',25,9.5);
console.log(student1['nume']);


let cars = [];
let modele = ['Toyota','Skoda','Mercedes','BMW','Tesla'];
let motoare = [1,2,3,4,5,6,7,8,9,10];
let automate = [true,false];

for (let model of modele) {
    for (let motor of motoare) {
        for (let cutie of automate) {
            let car = new Car(model,motor,cutie);
            cars.push(car);
        }
    }
}

console.log(cars);

// let numere = [1,2,3];
let numere = {
    0:'dwadaw',
    1:'dwadwadaw',
    2:'addwadwadwa'
};

console.log(numere);

// let car1 = {
//     nume:'Skoda',
//     motor:2,
//     automat:false,
// }

// let car2 = {
//     nume:'Toyota',
//     motor:3,
//     automat:true,
// }

// let car3 = {
//     nume:'Toyota',
//     motor:3,
//     automat:true,
// }




5 === '5'; //false
5 == '5'; //true

5 !== '5'; // true
5 != '5'; //false

// >, <, >=, <=

// if (condition == 1) {
//     console.log('dawdawda');
// } else if (condition == 2) {
//     console.log('adwadwdawdadw');
// } else if (condition == 3 && condition2 == 1) {

// } else {

// }


// switch (condition) {
//     case 1:
//         console.log('dwadawdwa');
//         break;
//     case 2:
//         console.log('dwadawaaw');
//         break;
//     default:
//         alert('variabila gresita');
//         break;
// }


// for (let i=0; i<=100; i++) {
//     console.log(i);   
// }
// for (let element of array) {

// }
// for (let property in object) {

// }


console.log(Math.random());

let i =0;
while((i = Math.random())<=0.5) {
    console.log(i);
}


// do {

// } while

document.querySelector();