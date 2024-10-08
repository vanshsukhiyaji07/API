// var button = document.getElementById("fetch-btn")

// button.addEventListener("click", buttonClickHandler)

// function buttonClickHandler() {
//     const xhr = new XMLHttpRequest(); 

//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

//     xhr.onprogress = function () {
//         console.log("On progress");
//     }

//     xhr.onload = function () {
//         console.log(this.status);
//         if (this.status == 200 || this.status == 201) {
//             const users = JSON.parse(this.responseText); 
//             console.log(users);
//             displayUser(users);
//         } else {
//             console.log("Not found");
//         }
//     }

//     xhr.send();
//     console.log("END of req");
// }

// function displayUser(users) {
//     // users = object (List Array)
//     const userList = document.getElementById("list");
//     userList.innerHTML = "";

//     users.forEach((user) => {
//         let userDiv = document.createElement("div");
//         userDiv.classList.add("user-card");

//         userDiv.innerHTML = ` 

//             <h3>${user.name}</h3>
//             <p>${user.username}</p>
//             <p>${user.email}</p>
//             `;
//         userList.appendChild(userDiv);
//     });

// }

let xhr = new XMLHttpRequest();

const btn = document.getElementById("fetch-btn");
const content = document.getElementById("display-data");

btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        return response.json()
    }).then((users) => {
        const userList = document.getElementById("display-data");
        userList.innerHTML = "";
        users.forEach((user) => {
            let userDiv = document.createElement("div");
            userDiv.innerHTML = `
                        <h3>${user.name}</h3>
                        <p>Username: ${user.username}</p>
                        <p>Email: ${user.email}</p>
                        <p>ID: ${user.id}</p>
                        <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <p>Phone: ${user.phone}</p>
                        `;
            userList.appendChild(userDiv);
        });
    })
})
