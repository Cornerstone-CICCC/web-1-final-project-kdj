function toggleSelect(button) {
    document.querySelectorAll('.eventButton').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#date", {
        dateFormat: "d-m-Y",
        placeholder: "Select date",
        allowInput: true
    });
});