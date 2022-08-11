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