let ageInput = document.getElementById('age');
let daysInput = document.getElementById('days');
function calculateDays() {
    let age = parseInt(ageInput.value);
    let days = age * 365;
    if (!isNaN(days)) {
        daysInput.value = days;
    } else {
        daysInput.value = ''; 
    }
}
ageInput.addEventListener('input', calculateDays);