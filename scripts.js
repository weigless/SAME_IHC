document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeCheckbox = document.getElementById('toggle-theme');
    const themeLabel = document.getElementById('theme-label');
    const logo = document.getElementById('logo');

    // Function to update the logo based on the theme
    const updateLogo = (isDarkTheme) => {
        if (isDarkTheme) {
            logo.src = 'imagens/logo_preto.png';
            themeLabel.textContent = 'Tema Escuro';
        } else {
            logo.src = 'imagens/logo_branco.png';
            themeLabel.textContent = 'Tema Claro';
        }
    };

    // Load theme preference from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggleThemeCheckbox.checked = true;
        updateLogo(true);
    } else {
        updateLogo(false);
    }

    toggleThemeCheckbox.addEventListener('change', () => {
        if (toggleThemeCheckbox.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            updateLogo(true);
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            updateLogo(false);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar-senha');

    form.addEventListener('submit', (event) => {
        if (senhaInput.value !== confirmarSenhaInput.value) {
            event.preventDefault(); // Impede o envio do formulário se as senhas forem diferentes
            alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
        }
    });
});

