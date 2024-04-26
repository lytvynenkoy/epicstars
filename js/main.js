document.addEventListener("DOMContentLoaded", function (event) {

    let form = document.getElementById("form-button");
    let successMessage = document.getElementById("successMessage");
    let formStart = document.querySelector('.form-wrapper');
    let formStartTitle = document.querySelector('.modal-title-wrapper');

    form.addEventListener("click", function (event) {
        event.preventDefault();

        let isValid = true;
        let nameInput = document.getElementById('nameInput');
        let phoneInput = document.getElementById('yourPhone');
        let phoneInputWrapper = document.querySelector('.tel-wrapper');

        // Видалення попередніх повідомлень про помилки
        document.querySelectorAll('.error-message').forEach(e => e.remove());

        var letters = /^[A-Za-z]+$/;

        // Валідація імені
        if (nameInput.value.length < 3 || !nameInput.value.match(letters)) {
            nameInput.classList.add('error');
            isValid = false;
            console.log("bad validate name");
        }

        // Валідація телефона
        if (phoneInput.value.length < 12) {
            phoneInputWrapper.classList.add('error')
            isValid = false;
            console.log("bad validate phone");
        }

        if (isValid) {
            nameInput.classList.remove('error');
            phoneInputWrapper.classList.remove('error')
            successMessage.style.display = "flex";
            formStart.style.display = "none";
            formStartTitle.style.display = "none";
        } else {
            document.getElementById('successMessage').style.display = 'none';
        }
    });

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = message;
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
})