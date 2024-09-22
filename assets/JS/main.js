document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const templateParams = {
            user_name: document.querySelector('#nome').value,
            user_email: document.querySelector('#email').value,
            subject: document.querySelector('#assunto').value,
            message: document.querySelector('#mensagem').value,
            to_email: 'matheusfeitosaalcantara@gmail.com',
        };

        emailjs.send('service_8kvkfz4', 'template_ij33loq', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensagem enviada com sucesso!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
            });
    });

    ScrollReveal().reveal('.principal-title, .principal-img, .about-me', {
        duration: 1000, 
        origin: 'bottom',
        distance: '50px', 
        reset: false,
        easing: 'ease',
    });

    ScrollReveal().reveal('#principal-item1, #principal-item2, #principal-item3, #principal-item4', {
        duration: 1000, 
        origin: 'bottom',
        distance: '50px', 
        reset: false,
        delay: 500,
        interval: 500
    });

alert('Olá')

    ScrollReveal().reveal('#skill-item1, #skill-item2, #skill-item3, #skill-item4, #skill-item5', {
        duration: 1000, 
        origin: 'left',
        distance: '50px', 
        reset: false,
        delay: 500,
        interval: 500,
    });

    ScrollReveal().reveal('#hobbie-item1, #hobbie-item2, #hobbie-item3, #hobbie-item4, #hobbie-item5', {
        duration: 1000, 
        origin: 'right',
        distance: '50px', 
        reset: false,
        delay: 500,
        interval: 500
    });

    ScrollReveal().reveal('#formacao-element2', {
        duration: 1500, 
        origin: 'bottom',
        distance: '50px', 
        reset: true,
    });

    ScrollReveal().reveal('#formacao-element1, #formacao-element3', {
        duration: 3000, 
        origin: 'bottom',
        distance: '50px', 
        reset: false,
    });

    ScrollReveal().reveal('.experiencia-item1', {
        duration: 1500, 
        origin: 'left',
        distance: '50px', 
        reset: false,
    });

    ScrollReveal().reveal('.experiencia-item2', {
        duration: 3000, 
        origin: 'right',
        distance: '50px', 
        reset: false,
    });
});