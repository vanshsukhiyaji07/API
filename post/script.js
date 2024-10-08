// let button = document.getElementById("fetch-btn")
// button.addEventListener("click", ButtonClicked);

// function ButtonClicked() {
//     const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xhr.onprogress = function () {
//         console.log("On progress");
//     };
//     xhr.onload = function () {
//         console.log(this.status);
//         if (this.status == 200 || this.status == 201) {
//             const posts = JSON.parse(this.responseText);
//             console.log(posts);
//             displayPosts(posts);
//         } else {
//             console.log("Page Not found");
//         }
//     };
//     console.log(this.status);
//     xhr.send();
// }

// function displayPosts(posts) {
//     const div = document.getElementById("display-data");
//     posts.forEach((post) => {
//         const p = document.createElement("p");
//         p.classList.add("post");
//         p.innerHTML = `
//             <h4>ID : ${post.id}</h4>
//             <p>TITLE : ${post.title}</p>
//             <p>BODY : ${post.body}</p>
//         `;
//         div.appendChild(p);
//     });
// }

let xhr = new XMLHttpRequest();

const btn = document.getElementById("fetch-btn");
const content = document.getElementById("display-data");

btn.addEventListener("click",() => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
        return response.json();
    }).then((posts) => {
        posts.forEach((post) => {
            const p = document.createElement("p");
            p.classList.add("post");
            p.innerHTML = `
            <h4>ID : ${post.id}</h4>
            <p>TITLE : ${post.title}</p>
            <p>BODY : ${post.body}</p>
        `;
            content.appendChild(p);
        })
    })
})
