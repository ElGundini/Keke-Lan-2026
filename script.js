console.log("SCRIPT CHARGÉ !");
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
    { name: "Trackmania", steamId: "2225070", date: "2026-05-24T13:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2225070/7f7b095f71d8e3b54612927c0bb4b9f0713eac21/header.jpg?t=1769529679", day: "DIM" }
];

const team = [
    { name: "ADRIEN", url: "https://steamcommunity.com/id/Lgundi/", avatar: "https://avatars.akamai.steamstatic.com/d05e528552bb7946e4c761f9a287aa493ae50a75_full.jpg" },
    { name: "ALEXANDRE", url: "https://steamcommunity.com/profiles/76561198210322315", avatar: "https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" },
	{ name: "GUILLAUME", url: "https://steamcommunity.com/profiles/76561198016191174", avatar: "https://shared.akamai.steamstatic.com/community_assets/images/items/2833130/b2e2b15042121581ca7afbde136debe4a88ac4a4.gif" },
	{ name: "JOACHIM", url: "https://steamcommunity.com/id/belougalamasse", avatar: "https://shared.akamai.steamstatic.com/community_assets/images/items/1504020/397b0a7e2d1355bca92d3e803270f7947ba973aa.gif" },
    { name: "KEVIN", url: "https://steamcommunity.com/profiles/76561197987155094", avatar: "https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"},
	{ name: "LUCAS", url: "https://steamcommunity.com/profiles/76561198823351876", avatar: "https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" },
	{ name: "MEUBLE", url: "https://steamcommunity.com/profiles/76561198009173233", avatar: "https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" },
	{ name: "MIKE", url: "https://steamcommunity.com/profiles/76561198040004012", avatar: "https://shared.akamai.steamstatic.com/community_assets/images/items/1944060/3c6e22e1856a08f4f1d7ee8dec21d7a28bb56eb2.gif" },
    { name: "PATRICK", url: "https://steamcommunity.com/profiles/76561198239636418", avatar: "https://avatars.akamai.steamstatic.com/1718ce1abb48f406ab56648883dd799df9329140_full.jpg" },
    { name: "YASSINE", url: "https://steamcommunity.com/profiles/76561197994430925", avatar: "https://avatars.akamai.steamstatic.com/dd035a86e2e0e88cf120715c5a8bc23809a7b74b_full.jpg" }
];

let currentGame = null;

function init() {
    const now = new Date();
    const list = document.getElementById('game-list');
    if(list) list.innerHTML = '';

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
        if(list) list.appendChild(card);
    });

    const profileList = document.getElementById('profile-list');
    if(profileList) {
        profileList.innerHTML = '';
        team.forEach(user => {
            const card = document.createElement('a');
            card.href = user.url;
            card.target = "_blank";
            card.className = "profile-card";
            card.innerHTML = `
                <img src="${user.avatar}" class="profile-img" alt="${user.name}">
                <span class="profile-name">${user.name}</span>
                <span class="profile-id">[ VOIR PROFIL ]</span>
            `;
            profileList.appendChild(card);
        });
    }
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
        statusLabel.innerText = "> PROCHAIN JEU";
    }
}



setInterval(updateCountdown, 1000);
updateCountdown();
setInterval(init, 300000);

// --- 2. CONFIGURATION THREE.JS (TÊTE 3D) ---
const container = document.getElementById('logo-3d-container');
let headModel;
let scene, camera, renderer, clock;

if (container) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    clock = new THREE.Clock();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00ff88, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Chargement de la tête
    const loader = new THREE.GLTFLoader();
	const loadingText = document.getElementById('loader-3d'); // On récupère le texte
    loader.load('./head.glb', (gltf) => {
        headModel = gltf.scene;
        
        // Centrage automatique du modèle
        const box = new THREE.Box3().setFromObject(headModel);
        const center = box.getCenter(new THREE.Vector3());
        headModel.position.x += (headModel.position.x - center.x);
        headModel.position.y += (headModel.position.y - center.y) -4;
        headModel.position.z += (headModel.position.z - center.z);

        headModel.scale.set(6, 6, 6); // Grosse taille
        scene.add(headModel);// MASQUER LE TEXTE ICI
    if (loadingText) {
        loadingText.style.display = 'none';
    }
    
    console.log("Tête 3D chargée !");
}, 
// Optionnel : Afficher la progression en %
(xhr) => {
    if (loadingText) {
        const percent = Math.round((xhr.loaded / xhr.total) * 100);
        loadingText.innerText = `[ CHARGEMENT DE LA KEKE HEAD: ${percent}% ]`;
    }
}, 
(error) => {
    console.error("Erreur :", error);
    if (loadingText) loadingText.innerText = "[ ERREUR DE CHARGEMENT ]";
});

    camera.position.z = 10; // Recul pour que la grosse tête rentre dans le cadre
}
// --- 4. BOUCLE D'ANIMATION (3D) ---
function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (headModel) {
        // Effet Dance : Zoom/Dezoom léger
        const bounce = 1 + Math.sin(t * 4) * 0.05; 
        headModel.scale.set(6 * bounce, 6 * bounce, 6 * bounce);
        
        // Rotations pour donner vie
        headModel.rotation.y = Math.sin(t * 2) * 0.2; // Oscillation gauche/droite
        headModel.rotation.z = Math.cos(t * 3) * 0.1; // Inclinaison
    }

    renderer.render(scene, camera);
}

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    if (container && camera && renderer) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
});


// Lancement
init();
animate()

function toggleGuide() {
    const guide = document.getElementById('install-guide');
    const trigger = document.querySelector('.guide-trigger');
    
    if (guide.style.display === 'block') {
        guide.style.display = 'none';
        trigger.innerText = "[ + ] PROTOCOLE";
    } else {
        guide.style.display = 'block';
        trigger.innerText = "[ - ] FERMER";
    }
}