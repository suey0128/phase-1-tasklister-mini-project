// target the element we need to add the function to 
addEventListener("DOMContentLoaded", (e) => { 

})



const newForm = document.querySelector('#create-task-form');


newForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDoli = document.createElement('li');
  const liSpan = document.createElement('span');
  const delBtn = document.createElement('button');

  toDoli.textContent = e.target['new-task-description'].value;
  delBtn.textContent = 'x';

  liSpan.append(delBtn);
  toDoli.append(liSpan); 
  document.querySelector('#tasks').append(toDoli); 
})


document.querySelector('#tasks').addEventListener('click', e => {
  // console.log(
  //   'e.target:', e.target,
  //   'e.target.parentNode.parentNode:', e.target.parentNode.parentNode
  // )
  e.target.parentNode.parentNode.remove();
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
