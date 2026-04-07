(function() {

  /* =========================================================
     i18n — translations
     ========================================================= */
  var T = {
    fr: {
      hero_names: 'Yunyoung & Fran\u00e7ois',
      footer_names: 'Yunyoung & Fran\u00e7ois',
      hero_date: '\u2014 Samedi 17 octobre 2026, 10h \u2014',
      invite_heading: 'Nous sommes heureux de vous convier \u00e0 notre mariage, entour\u00e9s de nos familles.',
      invite_body: 'La journ\u00e9e d\u00e9butera avec une c\u00e9r\u00e9monie autour d\u2019un brunch cor\u00e9en.<br>Pour ceux qui le souhaitent, nous nous retrouverons le soir dans un restaurant cor\u00e9en.',
      when_label: 'Quand',
      when_date: 'Samedi 17 octobre 2026',
      when_time: 'Accueil \u00e0 10h, brunch jusqu\u2019\u00e0 13h',
      where_label: 'O\u00f9',
      where_venue: 'Namsan Hannam Wedding Garden',
      where_address: '323, Sowol-ro, Yongsan-gu, Seoul',
      dress_heading: 'Tenue',
      dress_body: 'Tenue formelle souhait\u00e9e pour la c\u00e9r\u00e9monie et la s\u00e9ance photo.',
      evening_heading: 'Programme du soir',
      evening_body: 'Les d\u00e9tails du programme seront communiqu\u00e9s quelques jours avant la c\u00e9r\u00e9monie.',
      transport_heading: 'Comment s\u2019y rendre',
      transport_recommend: '<em>Nous vous recommandons de privil\u00e9gier les transports en commun.</em>',
      transport_metro: '<strong>En m\u00e9tro\u00a0:</strong> Ligne 6, station Hangangjin. Une navette sera disponible \u00e0 partir de 9h45, toutes les 10 minutes, en fonction de la demande. Retour \u00e0 partir de 13h. Merci de nous indiquer vos besoins dans le formulaire ci-dessous.',
      transport_bus: '<strong>En bus\u00a0:</strong> 402, 405 \u00e0 l\u2019arr\u00eat Hyatt Hotel, puis 5 minutes \u00e0 pied.',
      transport_car: '<strong>En voiture\u00a0:</strong> 4 parkings payants aux alentours.',
      map_alt: 'Plan d\u2019acc\u00e8s. Namsan Hannam Wedding Garden',
      parking_alt: 'Parkings et transports. Namsan Hannam Wedding Garden',
      rsvp_heading: 'CONFIRMEZ VOTRE VENUE',
      rsvp_you: 'Vous',
      rsvp_name: 'Nom et pr\u00e9nom <span class="text-red-600">*</span>',
      rsvp_email: 'Email <span class="text-red-600">*</span>',
      rsvp_allergies: 'Allergies alimentaires',
      rsvp_guests_label: 'Nombre d\u2019accompagnants',
      rsvp_guests_0: '0, je viens seul(e)',
      rsvp_shuttle: 'Souhaitez-vous prendre la navette \u00e0 partir de la station de m\u00e9tro Hangangjin\u00a0?',
      rsvp_yes: 'Oui',
      rsvp_no: 'Non',
      rsvp_send: 'Envoyer',
      rsvp_sending: 'Envoi en cours\u2026',
      rsvp_success_title: 'Merci\u00a0!',
      rsvp_success_body: 'Votre r\u00e9ponse a bien \u00e9t\u00e9 enregistr\u00e9e.',
      rsvp_error_title: 'Une erreur est survenue',
      rsvp_error_body: 'Votre r\u00e9ponse n\u2019a pas pu \u00eatre envoy\u00e9e. Veuillez r\u00e9essayer ou nous \u00e9crire directement \u00e0 <a href="mailto:neat.milk2258@fastmail.com" class="underline">neat.milk2258@fastmail.com</a>',
      rsvp_timeout: 'Le serveur ne r\u00e9pond pas. Veuillez r\u00e9essayer.',
      rsvp_missing: 'Champs manquants',
      rsvp_fill_required: 'Veuillez remplir tous les champs obligatoires.',
      rsvp_fill_accomp: 'Veuillez indiquer le nom de l\u2019accompagnant ',
      accomp_legend: 'Accompagnant ',
      accomp_name: 'Nom et pr\u00e9nom <span class="text-red-600">*</span>',
      accomp_allergies: 'Allergies alimentaires'
    },
    en: {
      hero_names: 'Yunyoung & Fran\u00e7ois',
      footer_names: 'Yunyoung & Fran\u00e7ois',
      hero_date: '\u2014 Saturday, October 17, 2026, 10am \u2014',
      invite_heading: 'We are delighted to invite you to our wedding, surrounded by our families.',
      invite_body: 'The day will begin with a ceremony over a Korean brunch.<br>For those who wish, we will meet again in the evening at a Korean restaurant.',
      when_label: 'When',
      when_date: 'Saturday, October 17, 2026',
      when_time: 'Welcome at 10am, brunch until 1pm',
      where_label: 'Where',
      where_venue: 'Namsan Hannam Wedding Garden',
      where_address: '323, Sowol-ro, Yongsan-gu, Seoul',
      dress_heading: 'Dress code',
      dress_body: 'Formal attire requested for the ceremony and photo session.',
      evening_heading: 'Evening programme',
      evening_body: 'Details will be shared a few days before the ceremony.',
      transport_heading: 'Getting there',
      transport_recommend: '<em>We recommend using public transport.</em>',
      transport_metro: '<strong>By metro:</strong> Line 6, Hangangjin Station. A shuttle will run from 9:45am, every 10 minutes, based on demand. Return from 1pm. Please let us know your needs in the form below.',
      transport_bus: '<strong>By bus:</strong> 402, 405 at Hyatt Hotel stop, then a 5-minute walk.',
      transport_car: '<strong>By car:</strong> 4 paid parking lots nearby.',
      map_alt: 'Directions. Namsan Hannam Wedding Garden',
      parking_alt: 'Parking & transport. Namsan Hannam Wedding Garden',
      rsvp_heading: 'CONFIRM YOUR ATTENDANCE',
      rsvp_you: 'You',
      rsvp_name: 'Full name <span class="text-red-600">*</span>',
      rsvp_email: 'Email <span class="text-red-600">*</span>',
      rsvp_allergies: 'Food allergies',
      rsvp_guests_label: 'Number of guests',
      rsvp_guests_0: '0, I\u2019m coming alone',
      rsvp_shuttle: 'Would you like to take the shuttle from Hangangjin metro station?',
      rsvp_yes: 'Yes',
      rsvp_no: 'No',
      rsvp_send: 'Send',
      rsvp_sending: 'Sending\u2026',
      rsvp_success_title: 'Thank you!',
      rsvp_success_body: 'Your response has been recorded.',
      rsvp_error_title: 'An error occurred',
      rsvp_error_body: 'Your response could not be sent. Please try again or contact us at <a href="mailto:neat.milk2258@fastmail.com" class="underline">neat.milk2258@fastmail.com</a>',
      rsvp_timeout: 'The server is not responding. Please try again.',
      rsvp_missing: 'Missing fields',
      rsvp_fill_required: 'Please fill in all required fields.',
      rsvp_fill_accomp: 'Please enter the name of guest ',
      accomp_legend: 'Guest ',
      accomp_name: 'Full name <span class="text-red-600">*</span>',
      accomp_allergies: 'Food allergies'
    },
    ko: {
      hero_names: '\uc724\uc601 & \ud504\ub791\uc218\uc544',
      footer_names: '\uc724\uc601 & \ud504\ub791\uc218\uc544',
      hero_date: '\u2014 2026\ub144 10\uc6d4 17\uc77c \ud1a0\uc694\uc77c, \uc624\uc804 10\uc2dc \u2014',
      invite_heading: '\uac00\uc871\uacfc \ud568\uaed8\ud558\ub294 \uc800\ud76c\uc758 \uacb0\ud63c\uc2dd\uc5d0 \uc18c\uc911\ud55c \ubd84\ub4e4\uacfc \ud568\uaed8 \ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.<br>\uadc0\ud55c \uac78\uc74c \ud558\uc2dc\uc5b4 \uc790\ub9ac\ub97c \ube5b\ub0b4\uc8fc\uc138\uc694.',
      invite_body: '\uc784\ub099\uc1a1, \uc2ec\uc601\uc625\uc758 \uc7a5\ub140 \uc784\uc724\uc601<br>______, ______\uc758 \uc7a5\ub0a8 \ud504\ub791\uc218\uc640 \ub9ac\ube44\uc5d0\ub974',
      when_label: '언제',
      when_date: '2026\ub144 10\uc6d4 17\uc77c \ud1a0\uc694\uc77c',
      when_time: '\uc624\uc804 10\uc2dc \uc785\uc7a5 - \uc624\ud6c4 1\uc2dc\uae4c\uc9c0',
      where_label: '어디서',
      where_venue: '\ub0a8\uc0b0 \ud55c\ub0a8 \uc6e8\ub529\uac00\ub4e0',
      where_address: '\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uc6a9\uc0b0\uad6c \uc18c\uc6d4\ub85c 323',
      dress_heading: '복장',
      dress_body: '사진 촬영을 위해 단정한 복장 착용 부탁드립니다.',
      evening_heading: '저녁 일정',
      evening_body: '자세한 내용은 행사 며칠 전에 안내드리겠습니다.',
      transport_heading: '\uc624\uc2dc\ub294 \uae38',
      transport_recommend: '\ub300\uc911\uad50\ud1b5 \uc774\uc6a9\uc744 \uad8c\uc7a5\ub4dc\ub9bd\ub2c8\ub2e4.',
      transport_metro: '<strong>\uc9c0\ud558\ucca0\u00a0:</strong> 6\ud638\uc120, \ud55c\uac15\uc9c4\uc5ed. \uc624\uc804 9\uc2dc 45\ubd84\ubd80\ud130 10\ubd84 \uac04\uaca9\uc73c\ub85c \uc154\ud2c0\ubc84\uc2a4\uac00 \uc6b4\ud589\ub429\ub2c8\ub2e4. \uc624\ud6c4 1\uc2dc\ubd80\ud130 \ubcf5\uadc0 \uc6b4\ud589\ud569\ub2c8\ub2e4. \uc544\ub798 \uc124\ubb38\uc9c0\uc5d0\uc11c \uc154\ud2c0\ubc84\uc2a4 \uc774\uc6a9 \uc5ec\ubd80\ub97c \uc54c\ub824\uc8fc\uc138\uc694.',
      transport_bus: '<strong>\ubc84\uc2a4\u00a0:</strong> 402, 405\ubc88 \ud558\uc58c\ud2b8 \ud638\ud154 \uc815\ub958\uc7a5 \ud558\ucc28 \ud6c4 \ub3c4\ubcf4 5\ubd84.',
      transport_car: '<strong>\uc790\uac00\uc6a9\u00a0:</strong> \uc8fc\ubcc0\uc5d0 \uc720\ub8cc \uc8fc\ucc28\uc7a5 4\uacf3\uc774 \uc788\uc2b5\ub2c8\ub2e4.',
      map_alt: '\uc624\uc2dc\ub294 \uae38. \ub0a8\uc0b0 \ud55c\ub0a8 \uc6e8\ub529\uac00\ub4e0',
      parking_alt: '\uc8fc\ucc28 \ubc0f \uad50\ud1b5. \ub0a8\uc0b0 \ud55c\ub0a8 \uc6e8\ub529\uac00\ub4e0',
      rsvp_heading: '\ucc38\uc11d \uc5ec\ubd80\ub97c \uc54c\ub824\uc8fc\uc138\uc694',
      rsvp_you: '\ubcf8\uc778 \uc815\ubcf4',
      rsvp_name: '\uc131\ud568 <span class="text-red-600">*</span>',
      rsvp_email: '\uc774\uba54\uc77c <span class="text-red-600">*</span>',
      rsvp_allergies: '\uc74c\uc2dd \uc54c\ub808\ub974\uae30',
      rsvp_guests_label: '\ub3d9\ubc18\uc778 \uc218',
      rsvp_guests_0: '0, \ud63c\uc790 \ucc38\uc11d\ud569\ub2c8\ub2e4',
      rsvp_shuttle: '\ud55c\uac15\uc9c4\uc5ed\uc5d0\uc11c \ucd9c\ubc1c\ud558\ub294 \uc154\ud2c0\ubc84\uc2a4\ub97c \uc774\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?',
      rsvp_yes: '\uc608',
      rsvp_no: '\uc544\ub2c8\uc694',
      rsvp_send: '\ubcf4\ub0b4\uae30',
      rsvp_sending: '\ubcf4\ub0b4\ub294 \uc911\u2026',
      rsvp_success_title: '\uac10\uc0ac\ud569\ub2c8\ub2e4!',
      rsvp_success_body: '\uc751\ub2f5\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
      rsvp_error_title: '\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4',
      rsvp_error_body: '\uc751\ub2f5\uc744 \ubcf4\ub0b4\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc\uac70\ub098 <a href="mailto:neat.milk2258@fastmail.com" class="underline">neat.milk2258@fastmail.com</a>\uc73c\ub85c \uc9c1\uc811 \uc5f0\ub77d\ud574 \uc8fc\uc138\uc694.',
      rsvp_timeout: '\uc11c\ubc84\uac00 \uc751\ub2f5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.',
      rsvp_missing: '\ud544\uc218 \ud56d\ubaa9 \ub204\ub77d',
      rsvp_fill_required: '\ud544\uc218 \ud56d\ubaa9\uc744 \ubaa8\ub450 \uc785\ub825\ud574 \uc8fc\uc138\uc694.',
      rsvp_fill_accomp: '\ub3d9\ubc18\uc778 ',
      accomp_legend: '\ub3d9\ubc18\uc778 ',
      accomp_name: '\uc131\ud568 <span class="text-red-600">*</span>',
      accomp_allergies: '\uc74c\uc2dd \uc54c\ub808\ub974\uae30'
    }
  };

  var currentLang = 'en';

  function t(key) { return (T[currentLang] || T.en)[key] || (T.en[key] || ''); }

  function applyLang(lang) {
    currentLang = lang;
    var langMap = { fr: 'fr-FR', ko: 'ko', en: 'en' };
    document.documentElement.lang = langMap[lang] || 'en';

    /* text / html nodes */
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (!val) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    /* alt attributes */
    document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-alt');
      var val = t(key);
      if (val) el.alt = val;
    });

    /* flag buttons active state */
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.style.opacity = isActive ? '1' : '0.5';
      btn.style.borderColor = isActive ? '#000' : 'transparent';
    });

    /* rebuild accompagnant fields if any */
    var n = parseInt(nombreSelect.value);
    if (n > 0) buildAccompagnantFields(n);
  }

  /* detect browser language, default english */
  function detectLang() {
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.indexOf('ko') === 0) return 'ko';
    if (nav.indexOf('fr') === 0) return 'fr';
    return 'en';
  }

  /* flag click handlers */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  /* =========================================================
     RSVP form
     ========================================================= */
  var form = document.getElementById('rsvp-form');
  var submitBtn = document.getElementById('rsvp-submit');
  var successDiv = document.getElementById('rsvp-success');
  var errorDiv = document.getElementById('rsvp-error');
  var nombreSelect = document.getElementById('field-nombre');
  var container = document.getElementById('accompagnants-container');
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbzC8j1-gMHkzP58XWM5h5J6rqc3k0_MesFNpJb066GpCWBAR82DPjchJ3ArX9g-CmHiXQ/exec';

  function buildAccompagnantFields(n) {
    container.innerHTML = '';
    for (var i = 1; i <= n; i++) {
      var fs = document.createElement('fieldset');
      fs.className = 'border border-gray-200 rounded-lg p-4';
      fs.innerHTML =
        '<legend class="font-medium px-2">' + t('accomp_legend') + i + '</legend>' +
        '<div class="flex flex-col gap-4">' +
          '<div>' +
            '<label class="block mb-1 font-medium">' + t('accomp_name') + '</label>' +
            '<input type="text" class="accomp-nom w-full p-3 border border-gray-300 rounded font-[inherit] text-base" data-index="' + i + '">' +
          '</div>' +
          '<div>' +
            '<label class="block mb-1 font-medium">' + t('accomp_allergies') + '</label>' +
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
    errorDiv.querySelector('h3').textContent = t('rsvp_missing');
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
      showError(t('rsvp_fill_required'));
      return;
    }

    var accompagnants = [];
    var accompNoms = container.querySelectorAll('.accomp-nom');
    var accompAllergies = container.querySelectorAll('.accomp-allergies');
    for (var i = 0; i < accompNoms.length; i++) {
      var aN = accompNoms[i].value.trim();
      if (!aN) {
        var suffix = currentLang === 'ko' ? '\uc758 \uc131\ud568\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.' : '.';
        showError(t('rsvp_fill_accomp') + (i + 1) + suffix);
        return;
      }
      accompagnants.push({ nom: aN, allergies: accompAllergies[i].value.trim() });
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t('rsvp_sending');

    var data = {
      nom: nom,
      email: email,
      allergies: allergies0,
      accompagnants: accompagnants,
      navette: (document.querySelector('input[name="navette"]:checked') || {}).value || 'non'
    };

    var controller = new AbortController();
    var timeoutId = setTimeout(function() { controller.abort(); }, 10000);

    fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: controller.signal
    })
    .then(function(response) {
      clearTimeout(timeoutId);
      /* no-cors gives opaque response (type "opaque", status 0).
         If we got here without an AbortError the network call succeeded,
         which is the best signal available with no-cors. */
      form.hidden = true;
      successDiv.hidden = false;
    })
    .catch(function(err) {
      clearTimeout(timeoutId);
      errorDiv.querySelector('h3').textContent = t('rsvp_error_title');
      if (err.name === 'AbortError') {
        errorDiv.querySelector('p').textContent = t('rsvp_timeout');
      } else {
        errorDiv.querySelector('p').innerHTML = t('rsvp_error_body');
      }
      errorDiv.hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = t('rsvp_send');
    });
  });

  /* =========================================================
     Init — apply detected language
     ========================================================= */
  applyLang(detectLang());

})();
