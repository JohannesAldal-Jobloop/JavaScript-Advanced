
// setTimeout(() => {
//     console.log("hallo")
// }, 1000);


// window.addEventListener("click", function ()
// {
//     console.log("hello")
// })

// const numbers = [0,1,2,3,4]

// numbers.forEach((num) => 
// {
//     console.log(num)
// })

// const sprengKnappEL = document.getElementById("sprengKnappEL")

// sprengKnappEL.addEventListener("click", function()
// {
//     const paragraf = document.createElement("p")
//     document.body.append(paragraf)
    
//     setTimeout(() => {
//         paragraf.textContent += "BOOOOOOM!"
//     }, 1000);
// })





// function settimoutPromise(duration)
// {
//     const myPromise = new Promise((resolve) => 
//     {
//         setTimeout(resolve, duration)
//     })

//     return myPromise
// }

// resolve promise with the built in Promise.then method
// settimoutPromise(2000).then(() => 
// {
//     console.log("yeet")
// })

//console.log(settimoutPromise(1000))

// const myArray = ["a", "b", "c", "d", "e"]
// document.body.innerHTML = myArray

// Reseolve promise with async-await funksjon
// async function myFunction()
// {
//     // myArray.forEach(async (letter) => 
//     // {
//     //     // myArray.shift()
//     //     // console.log(myArray)
//     //     // await settimoutPromise(1000)
//     //     // document.innerHTML = myArray
//     // })

//     // for (const letter of myArray) {
//     //     myArray.shift()
//     //     console.log(myArray)
//     //     await settimoutPromise(1000)
//     //     document.innerHTML = myArray
//     // }   

//     console.log("Good Morning!")

//     await settimoutPromise(2000)
//     console.log("Good afternoon!")

//     await settimoutPromise(2000)
//     console.log("Good evening!")

//     await settimoutPromise(2000)
//     console.log("Good night!")

// }

//myFunction()


// localStorage.setItem("testitem", "lorem ipsum")

// console.log(localStorage.getItem("testitem"))

// Reseolving the api Promises with then
// fetch("https://jsonplaceholder.typicode.com/users").then((response) => 
// {
//     return response.json()
    
// }).then((data) => 
// {
//     console.log(data)
// })


// resolve the API promise with async func
const urlAPIs = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",

]

const buttonShowUsers = document.getElementById("showUsersEL")
const buttonShowPosts = document.getElementById("showPostsEL")
const containerEL = document.getElementById("containerEL")

buttonShowUsers.addEventListener("click", () => 
{
    getData(0)
})


buttonShowPosts.addEventListener("click", () => 
{
    getData(1)
})

async function getData(APIindex) 
{
    try{
    const response = await fetch(urlAPIs[APIindex])

    // Check if the page of the url exists
    if(response.status === 404)
    {
        display404error()
        return
    }

    // fetch the data
    const data = await response.json()

    if(APIindex === 0) displayUsers(data)
    else if(APIindex === 1) displayPosts(data)
    
    return data
    
    }
    catch (error)
    {
        display404error()
        console.log("something went wrong")
    }
}

//getData(0)

function display404error()
{
    containerEL.innerHTML = ""
    const element = document.createElement("h2")
    element.textContent = "Page not found"
    containerEL.append(element)
}

function displayData(dataArray, dataName)
{
    containerEL.innerHTML = ""
    dataArray.forEach(data => 
    {
        const element = document.createElement("p")

        element.textContent = data.dataName
        
        containerEL.append(element)
    });
}

function displayUsers(dataArray)
{
    containerEL.innerHTML = ""
    dataArray.forEach(data => 
    {
        const element = document.createElement("p")

        element.textContent = data.name
        
        containerEL.append(element)
    });
}

function displayPosts(dataArray)
{
    containerEL.innerHTML = ""
    dataArray.forEach(data => 
    {
        const element = document.createElement("p")

        element.textContent = data.body
        
        containerEL.append(element)
    });
}