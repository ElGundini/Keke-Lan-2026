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
    { name: "MIKE", url: "https://steamcommunity.com/profiles/76561198040004012", avatar: "https://shared.akamai.steamstatic.com/community_assets/images/items/1944060/3c6e22e1856a08f4f1d7ee8dec21d7a28bb56eb2.gif" },
	{ name: "MEUBLE", url: "https://steamcommunity.com/profiles/76561198009173233", avatar: "https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" },
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



// Initialisation
init();
setInterval(updateCountdown, 1000);
updateCountdown();
setInterval(init, 300000);

// --- CONFIGURATION 3D KEKE ---
const container = document.getElementById('logo-3d-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Lumières
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x00ff88, 2); // Lumière néon verte
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

let headModel;
let ringGroup = new THREE.Group();
scene.add(ringGroup);

// Chargement de la tête
const loader = new THREE.GLTFLoader();
loader.load('head.glb', (gltf) => {
    headModel = gltf.scene;
    headModel.scale.set(3, 3, 3);
    scene.add(headModel);
}, undefined, (error) => { console.error("Erreur chargement tête:", error); });

// Création de l'anneau de texte (Effet Saturne)
function createTextRing() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 64;
    
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff88"; // Couleur néon
    ctx.font = "bold 40px Courier New";
    ctx.textAlign = "center";
    
    const text = " KEKE LAN 2026 • ".repeat(4);
    ctx.fillText(text, canvas.width / 2, 45);

    const texture = new THREE.CanvasTexture(canvas);
    const geometry = new THREE.TorusGeometry(3, 0.4, 16, 100);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    const ring = new THREE.Mesh(geometry, material);
    
    ring.rotation.x = Math.PI / 2.5; // Inclinaison type Saturne
    ringGroup.add(ring);
}
createTextRing();

camera.position.z = 7;

// Animation
let clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    let t = clock.getElapsedTime();

    if (headModel) {
        // Effet "Dance" plus prononcé sur une grosse tête
        const bounce = 1 + Math.sin(t * 4) * 0.08; 
        headModel.scale.set(3 * bounce, 3 * bounce, 3 * bounce); // On garde l'échelle à 3
        
        headModel.rotation.y = Math.sin(t * 2) * 0.2; // Oscillation gauche/droite
        headModel.rotation.z = Math.cos(t * 3) * 0.1; // Inclinaison
    }

    // On a supprimé la rotation de l'anneau ici
    
    renderer.render(scene, camera);
}

// Gérer le redimensionnement
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

animate();