document.getElementById('document-type').addEventListener('change', function() {
    var additionalFields = document.getElementById('additional-fields');
    additionalFields.innerHTML = ''; // Clear previous fields

    switch (this.value) {
        case 'DFTTA':
            additionalFields.innerHTML = '<div class="form-group"><label for="dftta-field">DFTTA Field *</label><input type="text" id="dftta-field" required></div>';
            break;
        case 'ImmiCard':
            additionalFields.innerHTML = '<div class="form-group"><label for="immicard-field">ImmiCard Field *</label><input type="text" id="immicard-field" required></div>';
            break;
        case 'Passport':
            additionalFields.innerHTML = '<div class="form-group"><label for="passport-field">Passport Field *</label><input type="text" id="passport-field" required></div>';
            break;
        case 'PLO56':
            additionalFields.innerHTML = '<div class="form-group"><label for="plo56-field">PLO56 Field *</label><input type="text" id="plo56-field" required></div>';
            break;
        case 'Titre de Voyage':
            additionalFields.innerHTML = '<div class="form-group"><label for="titre-field">Titre de Voyage Field *</label><input type="text" id="titre-field" required></div>';
            break;
        default:
            break;
    }
});

function clearForm() {
    document.getElementById('visa-form').reset();
    document.getElementById('additional-fields').innerHTML = '';
}
