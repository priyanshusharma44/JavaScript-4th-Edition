const head = document.querySelector('h1');
function inputMsg(){
    let name = prompt('Enter Name of student');
    head.textContent = 'Hi '+name +'! How are you?'; 
};
inputMsg();