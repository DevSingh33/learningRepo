// const getUser = () => {
//     setTimeout(() => {
//       return { name: 'Max' }
//     }, 2000)
//   }

//returning without async(here setTimeout()) code
// const getUser = () => {
//     return { name: 'Max' }
// }

// const user = getUser() // This doesn't actually fetch the user
// console.log(user.name) // This won't work

//passing callback function
const getUser = cb => {
    setTimeout(() => {
      cb({ name: 'Max' })
    }, 2000)
  }
  
  getUser(user => {
    console.log(user.name) // Prints 'Max' after 2 seconds
  })