const form = document.getElementById('formContact');
const confirmation = document.getElementById('confirmationMessage');
const btnEnvoyer = document.getElementById('btnEnvoyer');

const workerUrl =
    'https://celticwebcraft-contact.empty-glitter-f8c5.workers.dev/';

form.addEventListener('submit', async function (e) {

    e.preventDefault();
    btnEnvoyer.disabled = true;

    const data = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        turnstileToken: document.querySelector(
            '[name="cf-turnstile-response"]'
        )?.value
    };

    try {

        const response = await fetch(workerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok && result.success) {

            form.reset();
            turnstile.reset();
            confirmation.style.display = 'block';

        } else {

            alert("Une erreur s'est produite. Veuillez réessayer.");
        }

    } catch (error) {

        console.error('Erreur lors de l’envoi :', error);

        alert("Une erreur s'est produite. Veuillez réessayer.");
    }

    finally {
        btnEnvoyer.disabled = false;
    }
});
