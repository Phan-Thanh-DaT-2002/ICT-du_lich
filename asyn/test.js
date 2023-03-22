// let happy = (Message) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Message === ' yes') {
//         resolve(' dong y') 
//       }
//       else if (Message === 'no') {
//         resolve(new Error('k dong y'))
//       }
//     }, 5000)
// //   })
// // }
// // happy(' yes').then(result => { console.log(result); })
// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => { reject(new Error('loi ne')) }, 2000)
//   })
//   let result = await promise;
//   alert(result);
// }
// f();


let p = new Promise
  .finally(() => {
    console.log('hi');
  })
  .catch(err => console.log('error: ' + err))
