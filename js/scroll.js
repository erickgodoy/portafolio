$(document).ready(function() {
    $('#btnHome').click(function() { 
        $('html, body').animate({ scrollTop: 0 }, 'slow');    
        return false;
    });
    $('#btnAbout').click(function() { 
        $('html, body').animate({ scrollTop: 670 }, 'slow'); 
        return false;
    });
    $('#btnSkills').click(function() { 
        $('html, body').animate({ scrollTop: 1150 }, 'slow');
        return false;
    });
    $('#btnPortfolio').click(function() { 
        $('html, body').animate({ scrollTop: 1650 }, 'slow');
        return false;
    });
    $('#btnContact').click(function() { 
        $('html, body').animate({ scrollTop: 2350 }, 'slow');
        return false;
    });
});

window.addEventListener('scroll', () => {
    const scrollVertical = window.scrollY;
    if (scrollVertical <= 599) {
        $('#btnHome').addClass('text-white fw-bold');
        $('#btnAbout, #btnSkills, #btnPortfolio, #btnContact').removeClass('text-white fw-bold');
    }
    if (scrollVertical >= 600) {
        $('#btnHome, #btnSkills, #btnPortfolio, #btnContacts').removeClass('text-white fw-bold');
        $('#btnAbout').addClass('text-white fw-bold');
    }
    if (scrollVertical >= 1100) {
        $('#btnHome, #btnAbout, #btnPortfolio, #btnContact').removeClass('text-white fw-bold');
        $('#btnSkills').addClass('text-white fw-bold');
    }

    if (scrollVertical >= 1550) {
        $('#btnHome, #btnAbout, #btnSkills, #btnContact').removeClass('text-white fw-bold');
        $('#btnPortfolio').addClass('text-white fw-bold');
    }

    if (scrollVertical >= 1920) {
        $('#btnHome, #btnAbout, #btnSkills, #btnPortfolio').removeClass('text-white fw-bold');
        $('#btnContact').addClass('text-white fw-bold');
    }
});
