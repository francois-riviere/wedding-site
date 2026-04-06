(function() {
  /* --- RSVP form --- */
  var form = document.getElementById('rsvp-form');
  var submitBtn = document.getElementById('rsvp-submit');
  var successDiv = document.getElementById('rsvp-success');
  var errorDiv = document.getElementById('rsvp-error');
  var nombreSelect = document.getElementById('field-nombre');
  var container = document.getElementById('accompagnants-container');
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbzn2zA36xpCNXYI3qkYspS2LWvuqewTE2PI6uuWMowmqWJTyabwUJVwjOi9_-6f3NSSpA/exec';

  function buildAccompagnantFields(n) {
    container.innerHTML = '';
    for (var i = 1; i <= n; i++) {
      var fs = document.createElement('fieldset');
      fs.className = 'border border-gray-200 rounded-lg p-4';
      fs.innerHTML =
        '<legend class="font-semibold px-2">Accompagnant ' + i + '</legend>' +
        '<div class="flex flex-col gap-4">' +
          '<div>' +
            '<label class="block mb-1 font-semibold">Nom et pr\u00e9nom <span class="text-red-600">*</span></label>' +
            '<input type="text" class="accomp-nom w-full p-3 border border-gray-300 rounded font-[inherit] text-base" data-index="' + i + '">' +
          '</div>' +
          '<div>' +
            '<label class="block mb-1 font-semibold">Allergies alimentaires</label>' +
            '<input type="text" class="accomp-allergies w-full p-3 border border-gray-300 rounded font-[inherit] text-base" data-index="' + i + '">' +
          '</div>' +
        '</div>';
      container.appendChild(fs);
    }
  }

  nombreSelect.addEventListener('change', function() {
    buildAccompagnantFields(parseInt(this.value));
  });

  function showError(msg) {
    errorDiv.querySelector('h3').textContent = 'Champs manquants';
    errorDiv.querySelector('p').textContent = msg;
    errorDiv.hidden = false;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    errorDiv.hidden = true;

    var nom = document.getElementById('field-nom').value.trim();
    var email = document.getElementById('field-email').value.trim();
    var allergies0 = document.getElementById('field-allergies-0').value.trim();

    if (!nom || !email) {
      showError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    var accompagnants = [];
    var accompNoms = container.querySelectorAll('.accomp-nom');
    var accompAllergies = container.querySelectorAll('.accomp-allergies');
    for (var i = 0; i < accompNoms.length; i++) {
      var aN = accompNoms[i].value.trim();
      if (!aN) {
        showError('Veuillez indiquer le nom de l\'accompagnant ' + (i + 1) + '.');
        return;
      }
      accompagnants.push({ nom: aN, allergies: accompAllergies[i].value.trim() });
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';

    var data = {
      nom: nom,
      email: email,
      allergies: allergies0,
      accompagnants: accompagnants,
      navette: (document.querySelector('input[name="navette"]:checked') || {}).value || 'non'
    };

    fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function() {
      form.hidden = true;
      successDiv.hidden = false;
    })
    .catch(function() {
      errorDiv.querySelector('h3').textContent = 'Une erreur est survenue';
      errorDiv.querySelector('p').innerHTML = 'Votre r\u00e9ponse n\'a pas pu \u00eatre envoy\u00e9e. Veuillez r\u00e9essayer ou nous \u00e9crire directement \u00e0 <a href="mailto:neat.milk2258@fastmail.com">neat.milk2258@fastmail.com</a>';
      errorDiv.hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Envoyer';
    });
  });

})();
