document.addEventListener('DOMContentLoaded', function(event) {
  addComments();
});


function addComments() {
  const commentForm = document.getElementById('create-task-form');

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // const submittedForm = event.target
    // const inputField = submittedForm.getElementById('new-comment')

    const userInputField = event.target.querySelector('#new-task-description');

    const commentsContainer = document.querySelector('#tasks');
    const newComment = document.createElement('li');
    newComment.textContent = userInputField.value;
    // newComment.appendChild(button)
    commentsContainer.appendChild(newComment);

    const button = document.createElement('button');
    button.textContent = 'X';
    button.style.marginLeft = "50px";
    newComment.appendChild(button);
    

    button.addEventListener('click', function(event){
      event.target.parentElement.remove()
    })


    userInputField.value = '';
    userInputField.focus();

    // window.location.href = 'about.html';

    // commentsContainer.innerHTML += `<p>${userInputField.value}</p>`
  });
}

