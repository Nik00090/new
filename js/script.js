function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = `Текущая дата и время: ${now.toLocaleString()}`;
}

// Обновляем дату и время каждую секунду
setInterval(updateDateTime, 1000);

// Вызываем функцию для отображения начальной даты и времени
updateDateTime();






//////////////

// JavaScript для скрытия человечка после заданного времени после 1 секунды человек супермен выходит снизу 
setTimeout(function() {
    var human = document.querySelector('.human');
    human.style.animation = 'slideOut 1s ease-in-out forwards';

    
},); 

