document.addEventListener('DOMContentLoaded', function() {
    AOS.init();

    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceName = document.getElementById('serviceName').value;
        const email = document.getElementById('email').value;
        const details = document.getElementById('details').value;

        if (serviceName && email && details) {
            const botToken = '7824030452:AAGy5pl241pwe77WnT3QAhpegOKJJgyoxIE'; // Замените на ваш токен
            const chatId = '5701474324'; // Замените на ваш ID чата
            const message = `Новый заказ!\nУслуга: ${serviceName}\nEmail: ${email}\nДетали: ${details}`;

            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            })
            .then(response => {
                if (response.ok) {
                    alert('Спасибо за заказ! Мы свяжемся с вами.');
                    this.reset();
                } else {
                    alert('Произошла ошибка. Попробуйте позже.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка. Попробуйте позже.');
            });
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
});