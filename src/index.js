document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    handleFormSubmit({ name, email, message });
});


function handleFormSubmit(formData) {
    console.log('Форма зворотного зв’язку надіслана:', formData);
    alert('Дякуємо за ваше повідомлення!');
}



