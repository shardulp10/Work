document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const recoveryModal = document.getElementById('recovery-modal');
    const closeModal = document.querySelector('.modal .close');
    const recoveryForm = document.getElementById('recovery-form');
    const recoveryMessage = document.getElementById('recovery-message');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the form from submitting

        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (email.trim() === '' || password.trim() === '') {
            errorMessage.textContent = 'Both fields are required.';
            return;
        }

        errorMessage.textContent = '';

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (result.success) {
                window.location.href = '/dashboard'; // Redirect on successful login
            } else {
                errorMessage.textContent = result.message;
            }
        } catch (error) {
            errorMessage.textContent = 'An error occurred.';
        }
    });

    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault();
        recoveryModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        recoveryModal.style.display = 'none';
    });

    recoveryForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('recovery-email').value;

        if (email.trim() === '') {
            recoveryMessage.textContent = 'Email is required.';
            return;
        }

        recoveryMessage.textContent = '';

        try {
            const response = await fetch('/recover-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const result = await response.json();

            recoveryMessage.textContent = result.message;
        } catch (error) {
            recoveryMessage.textContent = 'An error occurred.';
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === recoveryModal) {
            recoveryModal.style.display = 'none';
        }
    });
});
