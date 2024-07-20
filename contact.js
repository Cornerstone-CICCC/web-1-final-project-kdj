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

document.querySelectorAll('input[name="contact_method"]').forEach(input => {
    input.addEventListener('change', updateContactTimeLegend);
});

document.addEventListener('DOMContentLoaded', function() {
    const contactMethodRadios = document.querySelectorAll('input[name="contactMethod"]');
    const timeCallQuestion = document.getElementById('timeCallQuestion');
    const groupCall = document.querySelector('.groupCall');
    const callInput = document.getElementById('callInput');
    const whatsappInput = document.getElementById('whatsappInput');
    const smsInput = document.getElementById('smsInput');
    const emailInput = document.getElementById('emailInput');

    const updateTimeCallQuestion = () => {
        const selectedMethod = document.querySelector('input[name="contactMethod"]:checked');
        callInput.style.display = 'none';
        whatsappInput.style.display = 'none';
        smsInput.style.display = 'none';
        emailInput.style.display = 'none';
        groupCall.style.display = 'none';
        timeCallQuestion.style.display = 'none';

        if (selectedMethod) {
            switch (selectedMethod.value) {
                case 'call':
                    timeCallQuestion.textContent = 'When do you want us to call?';
                    groupCall.style.display = 'block';
                    timeCallQuestion.style.display = 'block';
                    callInput.style.display = 'block';
                    break;
                case 'whatsapp':
                    timeCallQuestion.textContent = 'When do you want us to WhatsApp?';
                    groupCall.style.display = 'block';
                    timeCallQuestion.style.display = 'block';
                    whatsappInput.style.display = 'block';
                    break;
                case 'sms':
                    timeCallQuestion.textContent = 'When do you want us to send an SMS?';
                    groupCall.style.display = 'block';
                    timeCallQuestion.style.display = 'block';
                    smsInput.style.display = 'block';
                    break;
                case 'email':
                    timeCallQuestion.textContent = 'When do you want us to send an Email?';
                    groupCall.style.display = 'block';
                    timeCallQuestion.style.display = 'block';
                    emailInput.style.display = 'block';
                    break;
            }
        }
    };

    contactMethodRadios.forEach(radio => {
        radio.addEventListener('change', updateTimeCallQuestion);
    });

    updateTimeCallQuestion();
});

document.addEventListener('DOMContentLoaded', function() {
    const contactMethodRadios = document.querySelectorAll('input[name="contactMethod"]');
    const callInput = document.getElementById('callInput');
    const whatsappInput = document.getElementById('whatsappInput');
    const smsInput = document.getElementById('smsInput');
    const emailInput = document.getElementById('emailInput');

    contactMethodRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            callInput.classList.remove('show-input');
            whatsappInput.classList.remove('show-input');
            smsInput.classList.remove('show-input');
            emailInput.classList.remove('show-input');
            
            switch (this.value) {
                case 'call':
                    callInput.classList.add('show-input');
                    break;
                case 'whatsapp':
                    whatsappInput.classList.add('show-input');
                    break;
                case 'sms':
                    smsInput.classList.add('show-input');
                    break;
                case 'email':
                    emailInput.classList.add('show-input');
                    break;
            }
        });
    });
});

document.getElementById('whatsappNumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 3) {
        value = value.substring(0, 3) + '-' + value.substring(3);
    }
    if (value.length > 8) {
        value = value.substring(0, 8) + '-' + value.substring(8);
    }
    e.target.value = value;
});

document.getElementById('phoneNumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 3) {
        value = value.substring(0, 3) + '-' + value.substring(3);
    }
    if (value.length > 8) {
        value = value.substring(0, 8) + '-' + value.substring(8);
    }
    e.target.value = value;
});

document.getElementById('smsNumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 3) {
        value = value.substring(0, 3) + '-' + value.substring(3);
    }
    if (value.length > 8) {
        value = value.substring(0, 8) + '-' + value.substring(8);
    }
    e.target.value = value;
});

function initSearchBox() {
    var input = document.getElementById('locationInput');
    var searchBox = new google.maps.places.SearchBox(input);

    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }

            console.log("Place found:", place.name);
        });
    });
}

google.maps.event.addDomListener(window, 'load', initSearchBox);

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const bridalFormContainer = document.querySelector('.bridalFormContainer');
    const partyFormContainer = document.querySelector('.partyFormContainer');
    const thanksFormContainer= document.querySelector('.thanksFormContainer')
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const selectedEventType = document.querySelector('.eventButton.selected');
        if (selectedEventType) {
            switch (selectedEventType.id) {
                case 'button1': 
                    bridalFormContainer.style.display = 'block';
                    break;
                case 'button2': 
                    partyFormContainer.style.display = 'block';
                    break;
                case 'button3':
                    break;
            }
            contactForm.parentElement.style.display = 'none';
        }
    });
const bridalForm = bridalFormContainer.querySelector('form');
    if (bridalForm) {
        bridalForm.addEventListener('submit', function(event) {
            event.preventDefault();
            thanksFormContainer.style.display = 'block';
            bridalForm.parentElement.style.display = 'none';
        });
    }

    const partyForm = partyFormContainer.querySelector('form');
    if (partyForm) {
        partyForm.addEventListener('submit', function(event) {
            event.preventDefault();
            thanksFormContainer.style.display = 'block';
            partyForm.parentElement.style.display = 'none';
        });
    }
});

function updateThankYouMessage() {
    var name = document.getElementById('name').value;
    document.getElementById('userName').textContent = name;
}
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    updateThankYouMessage();
});
function updatecallMessage() {
    var number = document.getElementById('phoneNumber').value;
    document.getElementById('userNumber').textContent = number;
}
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    updatecallMessage();
});
