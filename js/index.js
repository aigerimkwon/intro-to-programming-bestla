
// jump links support 


var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);


//copyright


const today = new Date ();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Developed by Aigerim Kwon, &copy ${thisYear}`;
footer.appendChild(copyright);


// skills 


let skills = ['JavaScript', 'HTML', 'CSS', 'PHP'];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i ++) {
 let skill = document.createElement('li');  
 skill.innerText = skills[i];
 skillsList.appendChild(skill);
}



// leave a message


const messageForm = document.getElementsByName("leave_message");
messageForm.item(0).addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        console.log(name, email, message);

        const messageSection = document.getElementById('messages');
        
        const messageList = messageSection.querySelector('ul');
        const newMessage = document.createElement('li'); 
        newMessage.innerHTML = `<a href="mailto: ${email}"> ${name}</a> wrote: <span>${message}</span>`;

        const removeButton = document.createElement('button');
        removeButton.innerText = "remove";
        removeButton.type = "button";
        removeButton.addEventListener('click', (e) => {
            const entry = removeButton.parentNode;
            entry.remove();
        });

        newMessage.appendChild(removeButton); 
        messageList.appendChild(newMessage);
         
        

        messageForm.item(0).reset();
    });



// old XML


// var githubRequest = new XMLHttpRequest();
//githubRequest.open ('GET', "https://api.github.com/users/aigerimkwon/repos");
//githubRequest.send();
//githubRequest.addEventListener('load', function() {
//var repositories = JSON.parse(this.responseText);
//console.log(repositories);



//fetch api github repos



fetch (`https://api.github.com/users/aigerimkwon/repos`)
.then(response => response.json()) 
.then (function (data) {
    const repositories = data;
    console.log(repositories);


const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');

for (let i = 0; i < repositories.length; i ++) {
    let project = document.createElement('li');  
    project.innerHTML = `<a href = "${repositories[i].html_url}">${repositories[i].name}</a>`;
    projectList.appendChild(project);
   }
})



// hamburger for mobile navbar


const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}))




