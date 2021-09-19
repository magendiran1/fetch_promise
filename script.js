fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {


        const final = data.filter((Polupalation) => Polupalation.population > 20, 00, 00, 000).map((final) => final.name)

        console.log(final)

    }).catch(err => console.log(" Something went wrong please check your Api"))



let count = 10

function promise() {

    return new Promise((res, rej) => {
        res(count)

    })


}

promise().then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log(count--) }, 1000))
    .then(setTimeout(() => { console.log("Happy Independence Day ") }, 1000))






// let count = 10;
// setTimeout(() => {


//     const heading = document.querySelector('h1');
//     heading.innerText = count--

//         setTimeout(() => {
//             const heading = document.querySelector('h1');
//             heading.innerText = count--
//                 setTimeout(() => {
//                     const heading = document.querySelector('h1');
//                     heading.innerText = count--
//                         setTimeout(() => {
//                             const heading = document.querySelector('h1');
//                             heading.innerText = count--
//                                 setTimeout(() => {
//                                     const heading = document.querySelector('h1');
//                                     heading.innerText = count--
//                                         setTimeout(() => {
//                                             const heading = document.querySelector('h1');
//                                             heading.innerText = count--
//                                                 setTimeout(() => {
//                                                     const heading = document.querySelector('h1');
//                                                     heading.innerText = count--
//                                                         setTimeout(() => {
//                                                             const heading = document.querySelector('h1');
//                                                             heading.innerText = count--
//                                                                 setTimeout(() => {
//                                                                     const heading = document.querySelector('h1');
//                                                                     heading.innerText = count--
//                                                                         setTimeout(() => {
//                                                                             const heading = document.querySelector('h1');
//                                                                             heading.innerText = count--
//                                                                                 setTimeout(() => {
//                                                                                     const heading = document.querySelector('h1');
//                                                                                     heading.innerText = "Happy Independence Day "

//                                                                                 }, 1000)
//                                                                         }, 1000)
//                                                                 }, 1000)
//                                                         }, 1000)
//                                                 }, 1000)
//                                         }, 1000)
//                                 }, 1000)
//                         }, 1000)
//                 }, 1000)
//         }, 1000)
// }, 1000)