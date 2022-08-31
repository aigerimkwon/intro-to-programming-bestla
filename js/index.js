const today = new Date ();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Aigerim Kwon, ${thisYear}`;
footer.appendChild(copyright);


let skills = ['JavaScript', 'HTML', 'C++', 'PHP'];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i ++) {
 let skill = document.createElement('li');  
 skill.innerText = skills[i];
 skillsList.appendChild(skill);
}


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



var githubRequest = new XMLHttpRequest();
githubRequest.open ('GET', "https://api.github.com/users/aigerimkwon/repos");
githubRequest.send();
githubRequest.addEventListener('load', function() {
var repositories = JSON.parse(this.responseText);
console.log(repositories);


const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');

for (let i = 0; i < repositories.length; i ++) {
    let project = document.createElement('li');  
    project.innerHTML = `<a href = "${repositories[i].html_url}">${repositories[i].name}</a>`;
    projectList.appendChild(project);
   }
}
)

//Display Repositories in List

   // Start below the line of code you just wrote
    //Using "DOM Selection", select the #projects section by id and store it in a variable named projectSection
    //Using "DOM Selection", query the projectSection (instead of the entire document) to find the <ul> element and store it in a variable named projectList
   
    //Create a for loop to iterate over your repositories Array, starting at index 0
    //Inside the loop, create a new list item (li) element and store it in a variable named project
    //hint: createElement method
    //On the next line, set the inner text of your project variable to the current Array element's name property
    //hint: access the Array element using bracket notation
    //On the next line, append the project element to the projectList element
    //hint: appendChild method
    //Save and refresh your browser
    //You should see your list of repositories beneath the "Projects" heading


