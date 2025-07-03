 const check = document.getElementById('check');
    check.addEventListener('change', function() {
        const navMobile = document.querySelector('.nav-mobile');
        if (this.checked) {
            navMobile.style.display = 'block';
        } else {
            navMobile.style.display = 'none';
        }
    });