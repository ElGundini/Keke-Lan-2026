console.log("SCRIPT CHARGÉ !");
const games = [
    { name: "LAST TRAIN OUTTA' WORMTOWN", steamId: "2318480", date: "2026-05-22T20:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2318480/header.jpg?t=1752864862", day: "VEN", buyUrl: "https://store.steampowered.com/app/2318480/Last_Train_Outta_Wormtown/" },
    { name: "LOCKDOWN Protocol", steamId: "2780980", date: "2026-05-22T22:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2780980/header.jpg?t=1763485356", day: "VEN", buyUrl: "https://elgundini.github.io/Keke-Lan-2026/#trois" },
    { name: "Counter-Strike 2", steamId: "730", date: "2026-05-23T00:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861", day: "SAM", buyUrl: "https://store.steampowered.com/app/730/CounterStrike_2/" },	
    { name: "Lethal League", steamId: "261180", date: "2026-05-23T13:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/261180/header.jpg?t=1667229581", day: "SAM", buyUrl: "" }, // Pas besoin de télécharger	
    { name: "Marvel Rivals", steamId: "2767030", date: "2026-05-23T14:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/975bfe11c5b6843c866587138aec911964b60c85/header.jpg?t=1778133944", day: "SAM", buyUrl: "https://store.steampowered.com/app/2767030/Marvel_Rivals/" },	
    { name: "Mini Royale", steamId: "1657090", date: "2026-05-23T16:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1657090/header.jpg?t=1748336130", day: "SAM", buyUrl: "https://store.steampowered.com/app/1657090/Mini_Royale/" },	
    { name: "Wreckfest", steamId: "228380", date: "2026-05-23T21:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/228380/header.jpg?t=1742490584", day: "SAM", buyUrl: "https://www.xbox.com/en-US/games/store/wreckfest/9NG06CSMM97P" },
    { name: "Witch It", steamId: "559650", date: "2026-05-23T23:00:00", img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/559650/header.jpg", day: "SAM", buyUrl: "https://store.steampowered.com/app/559650/Witch_It/" },
    { name: "Age of Mythology", steamId: "1934680", date: "2026-05-24T10:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1934680/header.jpg?t=1777489006", day: "DIM", buyUrl: "https://www.xbox.com/en-US/games/age-of-mythology-retold" },
    { name: "Trackmania", steamId: "2225070", date: "2026-05-24T13:00:00", img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/11020/header.jpg?t=1548090419", day: "DIM", buyUrl: "https://store.steampowered.com/app/11020/TrackMania_Nations_Forever/" }
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
        
        // Condition pour afficher ou non le bouton "Obtenir"
        const buyButtonHTML = game.buyUrl 
            ? `<a href="${game.buyUrl}" target="_blank" class="game-get-btn">OBTENIR</a>`
            : `<span class="game-get-btn no-download">PAS BESOIN</span>`;
        
        card.innerHTML = `
            <div class="game-card-media">
                <img src="${game.img}">
                ${buyButtonHTML}
            </div>
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
// --- LOGIQUE DE LA MODALE PERSONNALISÉE ---

function openPopup(message, showConfirm = false, onConfirm = null) {
    const popup = document.getElementById('custom-popup');
    const msgElem = document.getElementById('popup-message');
    const actionsElem = document.getElementById('popup-actions');

    msgElem.innerText = message;
    actionsElem.innerHTML = ''; // Reset des boutons

    if (showConfirm) {
        // Bouton "OUI / ABOULE"
        const okBtn = document.createElement('button');
        okBtn.className = 'sub-btn';
        okBtn.style.background = 'var(--accent)';
        okBtn.style.color = 'var(--bg)';
        okBtn.innerText = "OUI, J'ACHÈTE !";
        okBtn.onclick = () => {
            if (onConfirm) onConfirm();
        };
        
        // Bouton "NON / ANNULER"
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'sub-btn';
        cancelBtn.innerText = "ANNULER";
        cancelBtn.onclick = closePopup;

        actionsElem.appendChild(cancelBtn);
        actionsElem.appendChild(okBtn);
    } else {
        // Simple bouton Fermer
        const closeBtn = document.createElement('button');
        closeBtn.className = 'sub-btn';
        closeBtn.innerText = "COMPRIS";
        closeBtn.onclick = closePopup;
        actionsElem.appendChild(closeBtn);
    }

    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('custom-popup').style.display = 'none';
}

// --- NOUVELLE FONCTION ACHAT ---
function buyTshirt() {
    const text1 = "Tu veux vraiment acheter cette MERDE ?...";
    
    openPopup(text1, true, () => {
        // Ce code s'exécute si on clique sur OUI
        const text2 = "OK OK... Envoi moi les infos de ta carte bancaire par message sur steam (https://steamcommunity.com/id/Lgundi/), j'apporterai ton t-shirt à la LAN, tkt.";
        openPopup(text2, false);
    });
}
// --- 5. LOGIQUE PARTY MODE (VERSION PLUIE RAPIDE) ---
let partyInterval = null;
const partyAudio = new Audio('music/EverybodyFalls.mp3');
partyAudio.loop = true;

const partyBtn = document.getElementById('party-trigger');

if (partyBtn) {
    partyBtn.addEventListener('click', () => {
        const isActive = document.body.classList.toggle('party-active');
        partyBtn.classList.toggle('active');

        if (isActive) {
            partyAudio.play();
            
            partyInterval = setInterval(() => {
                // On lance deux rafales (gauche et droite) qui tombent du haut
                const defaults = {
                    spread: 360,
                    ticks: 50,       // Durée de vie plus courte pour plus de nervosité
                    gravity: 2.5,    // Gravité augmentée pour une chute rapide
                    decay: 0.94,
                    startVelocity: 30,
                    colors: ['#00ff88', '#ff00ff', '#00ffff', '#ffff00', '#ff0000']
                };

                // Rafale 1
                confetti({
                    ...defaults,
                    particleCount: 40,
                    origin: { x: Math.random(), y: -0.1 } // x aléatoire, y au-dessus de l'écran
                });
            }, 100); // Intervalle très court (0.1s) pour un flux continu
        } else {
            partyAudio.pause();
            partyAudio.currentTime = 0;
            clearInterval(partyInterval);
        }
    });
}
// --- 6. SECRET MODE : PAT SUPREMACY (AVEC NETTOYAGE ET DANCE) ---
const patTroll = document.getElementById('pat-troll');

if (patTroll) {
    patTroll.addEventListener('click', () => {
        // A. ARRÊTER LE PARTY MODE S'IL EST EN COURS
        document.body.classList.remove('party-active');
        if (partyBtn) partyBtn.classList.remove('active');
        
        if (typeof partyAudio !== 'undefined') {
            partyAudio.pause();
            partyAudio.currentTime = 0;
        }
        
        if (typeof partyInterval !== 'undefined') {
            clearInterval(partyInterval);
        }

        // B. LANCER LE SACRE DE PAT
        const crownAudio = new Audio('music/moz.mp3');
        crownAudio.currentTime = 68; 
        crownAudio.play();

        // Masquer le GLB
        const canvas = document.querySelector('canvas');
        if (canvas) canvas.style.display = 'none'; 

        // Remplacer les textes
        const statusHeader = document.querySelector('.status-header');
        if (statusHeader) statusHeader.innerText = "SEUL ET UNIQUE VAINQUEUR DE LA LAN CUP";

        const mainTitle = document.querySelector('h1');
        if (mainTitle) {
            mainTitle.innerText = "PAT LE GOOOOAAAAT";
            mainTitle.style.color = "#FFD700";
        }

        // Remplacer les images et les faire DANCER
        document.querySelectorAll('img').forEach(img => {
            img.src = 'images/lancupwinner.png';
            img.classList.add('dancing-image'); // Ajout d'une classe pour l'animation
        });

        // C. TEMPÊTE D'OR
        setInterval(() => {
            confetti({
                particleCount: 35,
                spread: 160,
                origin: { y: -0.2, x: Math.random() },
                colors: ['#FFD700', '#FFFACD', '#DAA520'],
                gravity: 1.1,
                scalar: 3,
                ticks: 250
            });
        }, 50);

        // Désactiver le bouton Party Mode pour de bon
        if (partyBtn) {
            partyBtn.style.pointerEvents = 'none';
            partyBtn.style.opacity = '0.5';
        }

        document.title = "🏆 PAT LE GOAT - UNIQUE VAINQUEUR 🏆";

    }, { once: true });
}

// Ajoute ceci dans ton script ou ton CSS pour l'animation de danse et pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        from { transform: scale(1); opacity: 0.8; }
        to { transform: scale(1.1); opacity: 1; }
    }

    /* Animation pour faire danser les images */
    @keyframes dance {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(-5deg); }
        50% { transform: translateY(0) rotate(0deg); }
        75% { transform: translateY(-10px) rotate(5deg); }
    }

    /* Classe CSS à appliquer aux images pour qu'elles dansent */
    .dancing-image {
        animation: dance 0.6s infinite ease-in-out; /* Danse frénétique */
    }
`;
document.head.appendChild(style);

function toggleRepoGuide() {
    const guide = document.getElementById('repo-install-guide');
    const trigger = document.querySelectorAll('.wreckfest-section .guide-trigger')[1]; // Cible le 2ème bouton guide
    
    if (guide.style.display === 'block') {
        guide.style.display = 'none';
        trigger.innerText = "[ + ] INSTALLATION";
    } else {
        guide.style.display = 'block';
        trigger.innerText = "[ - ] FERMER";
    }
}
function toggleLockdownGuide() {
    const guide = document.getElementById('lockdown-install-guide');
    // On cible le bouton cliqué dans la section Lockdown Protocol
    const trigger = document.querySelector('#lockdown-install-guide').previousElementSibling.querySelector('.guide-trigger');
    
    if (guide.style.display === 'block') {
        guide.style.display = 'none';
        trigger.innerText = "[ + ] INSTALLATION";
    } else {
        guide.style.display = 'block';
        trigger.innerText = "[ - ] FERMER";
    }
}