document.addEventListener('DOMContentLoaded', loadBots);

function addBot() {
    const botNameInput = document.getElementById('bot-name');
    const inviteLinkInput = document.getElementById('invite-link');
    const botName = botNameInput.value.trim();
    const inviteLink = inviteLinkInput.value.trim();

    if (botName && inviteLink) {
        const bot = { name: botName, link: inviteLink };
        saveBot(bot);
        displayBots();
        botNameInput.value = '';
        inviteLinkInput.value = '';
    } else {
        alert('Por favor, preencha o nome do bot e o link de convite.');
    }
}

function saveBot(bot) {
    let bots = localStorage.getItem('bots');
    bots = bots ? JSON.parse(bots) : [];
    bots.push(bot);
    localStorage.setItem('bots', JSON.stringify(bots));
}

function loadBots() {
    displayBots();
}

function displayBots() {
    const botGrid = document.querySelector('.bot-grid');
    const noBotsMessage = document.getElementById('no-bots');
    botGrid.innerHTML = ''; // Limpa a lista atual

    let bots = localStorage.getItem('bots');
    bots = bots ? JSON.parse(bots) : [];

    if (bots.length > 0) {
        noBotsMessage.style.display = 'none';
        bots.forEach(bot => {
            const botCard = document.createElement('div');
            botCard.classList.add('bot-card');
            botCard.innerHTML = `
                <h3>${bot.name}</h3>
                <a href="${bot.link}" target="_blank">Convidar</a>
            `;
            botGrid.appendChild(botCard);
        });
    } else {
        noBotsMessage.style.display = 'block';
    }
}