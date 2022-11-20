const userText=prompt('Введите текст');
const userTextField=document.querySelector('#testTextField');
userTextField.textContent=userText;
console.log('Текст ссылки изменен на', userText);

document.querySelector('#testTextField').addEventListener('click', 
(event) => {
    console.log('Ничего не происходит');
    event.preventDefault();
});