// script.js
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const consoleText = document.getElementById('console-text');
    const hiddenContent = document.querySelector('.hidden-content');

    const validCommands = [
        'dir','help','readbio', 'experience', 'projects', 'collaborations', 'skills', 'education', 'contact', 'cls', 'mail', 'play', 'studies', 'read',
        'play', 'rootsearch', 'emp', 'view', 'dial'
    ];

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            let command = userInput.value.trim().toLowerCase();
            if (validCommands.includes(command)) {
                showContent(command);
            } else {
                consoleText.innerHTML += `<br>Command not recognized. Try again.`;
            }
            userInput.value = ''; // Limpiar el campo de entrada
        }
    });

    function showContent(command) {
        hiddenContent.style.display = 'block';
        document.querySelectorAll('section').forEach(section => {
            if (section.id === command) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
        consoleText.innerHTML += `<br>Showing section: ${command.charAt(0).toUpperCase() + command.slice(1)}`;
    }
});


