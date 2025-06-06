const form = document.getElementById('formContact');
const confirmation = document.getElementById('confirmationMessage');
const btn = document.getElementById('btnEnvoyer');
const checkbox = document.getElementById('accepteCGU');

checkbox.addEventListener('change', () => {
btn.disabled = !checkbox.checked;
});

form.addEventListener('submit', function (e) {
e.preventDefault();
const data = new FormData(form);

fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
}).then(response => {
    if (response.ok) {
    form.reset();
    checkbox.checked = false;
    btn.disabled = true;
    confirmation.style.display = 'block';
    } else {
    alert("Une erreur s'est produite. Veuillez réessayer.");
    }
});
});
