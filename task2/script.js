const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
})


const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой ОК или Закрыть')
})


const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
    alert('Собрат функции alert(), отображает диалоговое окно с запросом на ввод текста')
})