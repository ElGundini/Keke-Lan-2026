const games = [
    { name: "LAST TRAIN OUTTA' WORMTOWN", steamId: "2318480", date: "2026-05-22T20:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2318480/header.jpg?t=1752864862", day: "VEN" },
    { name: "LOCKDOWN Protocol", steamId: "2780980", date: "2026-05-22T22:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2780980/header.jpg?t=1763485356", day: "VEN" },
    { name: "Counter-Strike 2", steamId: "730", date: "2026-05-23T00:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861", day: "SAM" },	
    { name: "Lethal League", steamId: "261180", date: "2026-05-23T13:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/261180/header.jpg?t=1667229581", day: "SAM" },	
    { name: "Marvel Rivals", steamId: "2767030", date: "2026-05-23T14:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/975bfe11c5b6843c866587138aec911964b60c85/header.jpg?t=1778133944", day: "SAM" },	
    { name: "Mini Royale", steamId: "1657090", date: "2026-05-23T16:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1657090/header.jpg?t=1748336130", day: "SAM" },	
    { name: "Wreckfest", steamId: "228380", date: "2026-05-23T21:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/228380/header.jpg?t=1742490584", day: "SAM" },
    { name: "Witch It", steamId: "559650", date: "2026-05-23T23:00:00", img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/559650/header.jpg", day: "SAM" },
    { name: "Age of Mythology", steamId: "1934680", date: "2026-05-24T10:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934680/header.jpg?t=1777489006", day: "DIM" },
    { name: "Trackmania", steamId: "2225070", date: "2026-05-23T13:13:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2225070/7f7b095f71d8e3b54612927c0bb4b9f0713eac21/header.jpg?t=1769529679", day: "SAM" }
];

let currentGame = null;

function init() {
    const now = new Date();
    const list = document.getElementById('game-list');
    list.innerHTML = '';

    currentGame = games.find(g => {
        const gameDate = new Date(g.date);
        return gameDate > now || (now - gameDate) < 3600000; 
    }) || games[0];

    document.getElementById('main-title').innerText = currentGame.name;
    document.getElementById('main-img').src = currentGame.img;
    document.getElementById('main-steam').href = `steam://run/${currentGame.steamId}`;

    games.forEach(game => {
        const gameDate = new Date(game.date);
        const isPassed = gameDate < now && game !== currentGame;

        const card = document.createElement('div');
        card.className = `game-card ${isPassed ? 'passed' : ''}`;
        
        card.innerHTML = `
            <img src="${game.img}">
            <div class="game-card-info">
                <div class="game-meta">${game.day} // ${gameDate.getHours()}H${gameDate.getMinutes().toString().padStart(2, '0')}</div>
                <div class="game-title">${game.name}</div>
            </div>
        `;
        list.appendChild(card);
    });
}

function updateCountdown() {
    if (!currentGame) return;
    const now = new Date();
    const targetDate = new Date(currentGame.date);
    const diff = targetDate - now;
    const timerElement = document.getElementById('timer');
    const statusLabel = document.getElementById('status-label');

    if (diff <= 0) {
        timerElement.innerText = "EN COURS";
        timerElement.style.color = "var(--accent)";
        statusLabel.innerText = "> EN COURS";
    } else {
        const h = Math.floor(diff / 36e5).toString().padStart(2, '0');
        const m = Math.floor((diff % 36e5) / 6e4).toString().padStart(2, '0');
        const s = Math.floor((diff % 6e4) / 1000).toString().padStart(2, '0');
        timerElement.innerText = `${h}:${m}:${s}`;
        timerElement.style.color = "white";
        statusLabel.innerText = "> ça arrive fort";
    }
}

// Initialisation au chargement
init();
// Mise à jour du timer chaque seconde
setInterval(updateCountdown, 1000);
updateCountdown();
// Rafraîchissement de la liste toutes les 5 minutes
setInterval(init, 300000);

const team = [
    { name: "ADRIEN", url: "https://steamcommunity.com/id/Lgundi/", avatar: "https://avatars.akamai.steamstatic.com/d05e528552bb7946e4c761f9a287aa493ae50a75_full.jpg" },
    { name: "KEVIN", url: "https://steamcommunity.com/profiles/76561197987155094" },
    { name: "MIKE", url: "https://steamcommunity.com/profiles/76561198040004012" },
    { name: "GUILLAUME", url: "https://steamcommunity.com/profiles/76561198016191174" },
    { name: "PATRICK", url: "https://steamcommunity.com/profiles/76561198239636418" },
    { name: "YASSINE", url: "https://steamcommunity.com/profiles/76561197994430925" },
    { name: "LUCAS", url: "https://steamcommunity.com/profiles/76561198823351876" },
    { name: "MEUBLE", url: "https://steamcommunity.com/profiles/76561198009173233" },
    { name: "JOACHIM", url: "https://steamcommunity.com/id/belougalamasse" },
    { name: "ALEXANDRE", url: "https://steamcommunity.com/profiles/76561198239636418" }
];

// Ajoute cette partie à l'intérieur de ta fonction init() existante
const profileList = document.getElementById('profile-list');
profileList.innerHTML = '';
team.forEach(user => {
    const card = document.createElement('a');
    card.href = user.url;
    card.target = "_blank";
    card.className = "profile-card";
    
    // On ajoute la balise img ici
    card.innerHTML = `
        <img src="${user.avatar}" class="profile-img" alt="${user.name}">
        <span class="profile-name">${user.name}</span>
        <span class="profile-id">[ VOIR PROFIL ]</span>
    `;
    profileList.appendChild(card);
});