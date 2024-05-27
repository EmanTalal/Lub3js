// let button = document.getElementById('button')[0];

// let light = document.getElementsByClassName('traffic-light')[0];

// for (let i = 0; i < light.length; i++) {
//     light[i].addEventListener('click', function() {
//             let channel = buttons[i].getAttribute('id');

//         )
//     };

// document.addEventListener('click', () => {
//     const stopButton = document.getElementById('stopButton');
//     const slowButton = document.getElementById('slowButton');
//     const goButton = document.getElementById('goButton');

//     const stopLight = document.getElementById('stopLight');
//     const slowLight = document.getElementById('slowLight');
//     const goLight = document.getElementById('goLight');

//     stopButton.addEventListener('click', () => {
//         stopLight.classList.add('active');
//         slowLight.classList.remove('active');
//         goLight.classList.remove('active');
//     });

//     slowButton.addEventListener('click', () => {
//         stopLight.classList.remove('active');
//         slowLight.classList.add('active');
//         goLight.classList.remove('active');
//     });

//     goButton.addEventListener('click', () => {
//         stopLight.classList.remove('active');
//         slowLight.classList.remove('active');
//         goLight.classList.add('active');
//     });
// });

let btn1 = document.getElementsByClassName("button")[0];

let light = document.getElementsByClassName('bulb')[0];

btn1.addEventListener('click', function() {
    light.style.background = 'red';
})

let light2 = document.getElementsByClassName('bulb')[1];
let btn2 = document.getElementsByClassName("button")[1];


btn2.addEventListener('click', function() {
    light2.style.background = 'yellow';
})
let btn3 = document.getElementsByClassName("button")[2];
let light3 = document.getElementsByClassName('bulb')[2];

btn3.addEventListener('click', function() {
    light3.style.background = 'green';
})