// target the element we need to add the function to 
addEventListener("DOMContentLoaded", (e) => { })
//   // it is a form submission, we need to prevent default
//   e.preventDefault();
// });



const newForm = document.querySelector('#create-task-form');
let delBtn;
let toDoli;

function delLi() {
  toDoli.remove();
}

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  toDoli = document.createElement('li');
  toDoli.textContent = e.target['new-task-description'].value;
  delBtn = document.createElement('button');
  delBtn.textContent = 'x';
  document.querySelector('#tasks').append(toDoli,delBtn); 
  delBtn.onclick = "delLi()";
})










// const likeBtn = document.querySelector('#heart');
// likeBtn.addEventListener('click',function like (e) {
//     let likeLi = document.createElement('li');
//     likeLi.textContent = `${counter.textContent} has been like 1 time`;
//     document.querySelector('#likes').append(likeLi); 
// }) 


// document.querySelector('#comment-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   let pComments = [];
//   pComments.push(e.target.comment.value);
//   pComments.forEach(elem => {
//       let commentP = document.createElement('p')
//       commentP.textContent = elem;
//       document.querySelector('#list').append(commentP); 
      
//   })
// })
