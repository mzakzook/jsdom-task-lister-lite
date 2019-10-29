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
    commentsContainer.appendChild(newComment);

    userInputField.value = '';
    userInputField.focus();

    // window.location.href = 'about.html';

    // commentsContainer.innerHTML += `<p>${userInputField.value}</p>`
  });
}