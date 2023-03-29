 // METODO GET
 async function getUser(){
    var apiUser =  await fetch('https://randomuser.me/api/')
    var dataJson =  await apiUser.json()
    var user = dataJson.results[0]

    var fullName = `${user.name.first} ${user.name.last}`
    var email = user.email
    
    const userInfo = `
    <h2>${user.name.first} ${user.name.last}</h2>
    <img src="${user.picture.large}">
    <p>phone: ${user.phone}</p>
    <p>email: ${user.email}</p>
    `


    document.getElementById("user").innerHTML = userInfo

}