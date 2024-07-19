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

function toggleWedding() {
    const weddingDiv = document.getElementById('wedding');
    if (weddingDiv.style.display === 'none' || weddingDiv.style.display === '') {
        weddingDiv.style.display = 'block';
    } else {
        weddingDiv.style.display = 'none';
    }
}

document.getElementById('button1').addEventListener('click', toggleWedding);
document.getElementById('button2').addEventListener('click', toggleWedding);
document.getElementById('button3').addEventListener('click', toggleWedding);