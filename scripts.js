document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeCheckbox = document.getElementById('theme-toggle');
    const body = document.body;
    const logo = document.getElementById('logo');
    const themeLabel = document.getElementById('theme-label');

    // Função para atualizar o logotipo com base no tema
    const updateLogo = (isDarkTheme) => {
        if (isDarkTheme) {
            logo.src = 'imagens/logo_preto.png';
            themeLabel.textContent = 'Tema Escuro';
        } else {
            logo.src = 'imagens/logo_branco.png';
            themeLabel.textContent = 'Tema Claro';
        }
    };

    // Verifica se há uma preferência de tema armazenada no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme'); // Se o tema armazenado for escuro, aplica o tema escuro
        toggleThemeCheckbox.checked = true; // Marca a caixa de seleção do interruptor de tema
        updateLogo(true); // Atualiza o logotipo para o tema escuro
    } else {
        updateLogo(false); // Atualiza o logotipo para o tema claro
    }

    toggleThemeCheckbox.addEventListener('change', () => {
        if (toggleThemeCheckbox.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            updateLogo(true); // Atualiza o logotipo para o tema escuro
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            updateLogo(false); // Atualiza o logotipo para o tema claro
        }
    });

    // Evento para verificar se as senhas coincidem antes do envio do formulário
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

function toggleAccessibilityMenu() {
    const menu = document.getElementById('accessibility-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
    const body = document.body;
    const logo = document.getElementById('logo');
    const themeLabel = document.getElementById('theme-label');
    const isDarkTheme = body.classList.toggle('dark-theme');
    if (isDarkTheme) {
        logo.src = 'imagens/logo_preto.png';
        themeLabel.textContent = 'Tema Escuro';
    } else {
        logo.src = 'imagens/logo_branco.png';
        themeLabel.textContent = 'Tema Claro';
    }
}

function increaseFontSize() {
    document.body.style.fontSize = 'larger';
}

function decreaseFontSize() {
    document.body.style.fontSize = 'smaller';
}

function resetAccessibility() {
    document.body.style.fontSize = '';
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
    }
    document.getElementById('logo').src = 'imagens/logo_branco.png';
    document.getElementById('theme-label').textContent = 'Tema Claro';
    document.getElementById('theme-toggle').checked = false;
}
function openSupportPopup() {
    const supportPopup = document.getElementById('support-popup');
    supportPopup.style.display = 'block';
}

function closeSupportPopup() {
    const supportPopup = document.getElementById('support-popup');
    supportPopup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeCheckbox = document.getElementById('theme-toggle');
    const supportBtn = document.querySelector('.support-btn');

    // Função para atualizar a cor do botão de suporte com base no tema
    const updateSupportButtonColor = (isDarkTheme) => {
        if (isDarkTheme) {
            supportBtn.style.backgroundColor = '#ffffff'; // Cor branca para tema escuro
            supportBtn.style.color = '#000000'; // Cor preta para tema escuro
        } else {
            supportBtn.style.backgroundColor = '#000000'; // Cor preta para tema claro
            supportBtn.style.color = '#ffffff'; // Cor branca para tema claro
        }
    };

    // Verifica se há uma preferência de tema armazenada no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        updateSupportButtonColor(true); // Atualiza a cor do botão para tema escuro
    } else {
        updateSupportButtonColor(false); // Atualiza a cor do botão para tema claro
    }

    toggleThemeCheckbox.addEventListener('change', () => {
        const isDarkTheme = toggleThemeCheckbox.checked;
        updateSupportButtonColor(isDarkTheme);
    });
});
function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email === "adm@same.com.br" && senha === "12345") {
        // Redirecionar para a página após o login
        window.location.href = "pagina_inicial.html";
        return false; // Evita que o formulário seja enviado
    } else {
        // Exibir mensagem de erro
        document.getElementById("error-msg").textContent = "Login e/ou senha incorretos.";
        return false; // Evita que o formulário seja enviado
    }
}

