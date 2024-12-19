const words = [
    "ordinateur", "internet", "écran", "école", "voiture", "jeu", "musique", "chat", "énergie", "tablette",
    "smartphone", "réseau", "souris", "téléphone", "film", "application", "dessin", "photoshop", "batterie", 
    "moteur", "électricité", "site", "réalité", "hologramme", "jeuxvidéo", "télévision", "robot", "texte", 
    "programme", "console", "vidéo", "document", "réseaux", "vitesse", "projet", "énergie", "capteur", 
    "clavier", "média", "musicien", "instrument", "refrain", "chanson", "score", "création", "histoire", 
    "écrire", "script", "algorithme", "hacker", "réseau", "data", "graphique", "télécharger", "application", 
    "dessin", "chatbot", "transcription", "sauvegarde", "lecture", "recherche", "hébergement", "création", 
    "examen", "partage", "tendance", "réalité", "augmentation", "planète", "atelier", "jeuvidéo", "vlog", 
    "vlogger", "streaming", "société", "bénévolat", "humour", "développement", "progrès", "recherche", 
    "univers", "merveille", "puzzle", "montée", "objectif", "calcul", "maths", "problème", "solutions", 
    "plan", "travail", "vacances", "avenir", "lien", "code", "créatif", "printemps", "éte", "automne", 
    "été", "hiver", "livre", "lecture", "musée", "livraison", "cours", "vidéo", "meme", "selfie", "réseauxsociaux", 
    "monde", "étoiles", "cours", "carrière", "chat", "avion", "voyage", "défi", "café", "gâteau", "saison", 
    "piano", "guitare", "maison", "film", "comédie", "drame", "village", "star", "tournoi", "compétition", 
    "débat", "présentation", "concours", "réflexion", "discussions", "amitié", "équipe", "sports", "vélo", 
    "basketball", "football", "hockey", "gym", "fitness", "sport", "musculation", "ensemble", "génial", 
    "cool", "vitesse", "utiliser", "télé", "saison", "avion", "excursion", "collaboration", "créateur", "campagne", 
    "sécurité", "saison", "météo", "restaurant", "cuisine", "repas", "soupe", "plats", "manger", "vitamine", 
    "exercice", "santé", "personnalité", "respect", "maison", "familiale", "fête", "amusement", "compagnie", 
    "surprise", "conseil", "emploi", "recrutement", "truc", "super", "bonheur", "questionnaire", "commentaire", 
    "reconnaissance", "télévision", "concours", "idée", "invention", "solution", "développement", "divertissement", 
    "film", "cinéma", "musique", "technologie", "science", "réflexion", "imagination", "curiosité", "expérience", 
    "motivation", "évolution", "art", "création", "design", "graphisme", "écrivain", "créateur", "producteur", 
    "ingénieur", "technicien", "passion", "entraide", "code", "défis", "compte", "personnalité", "magazine", 
    "mémoire", "test", "révision", "emploi", "poste", "compétences", "projets", "planification", "compte", 
    "carte", "jeu", "imagination", "exploration", "réalité", "nouvelles", "temps", "données", "projet", "résultat", 
    "collecte", "organisation", "promotion", "apprentissage", "études", "recherche", "circuit", "programmes", 
    "formation", "parrainage", "affichage", "divertissement", "logiciel", "création", "plan", "pays", "ville", 
    "codeur", "problème", "solution", "réseau", "écran", "application", "future", "plan", "imagination", "projet",
    "analyse", "conseils", "développeur", "numérique", "platform", "plug-in", "avancée", "format", "programmer", 
    "téléchargement", "technologique", "créer", "impression", "découverte", "évolution", "fonction", "équipe", 
    "réaction", "solutionner", "innovation", "divertir", "solution", "création", "créativité", "apprendre", 
    "question", "impact", "plan", "espace", "discussion", "théorie", "mathématique", "philosophie", "réflexion", 
    "artiste", "création", "robotique", "plan", "partage", "innovateur", "acteurs", "forum", "démocratie", 
    "entreprise", "performances", "planification", "projection", "transformation", "structure", "réseautage", 
    "rencontres", "occasion", "échanges", "technicien", "futuriste", "réponse", "savoir-faire", "réception", 
    "nouvelle", "prouesse", "avancée", "système", "objectif", "réalisateur", "résolution", "circuit", "méthode", 
    "produit", "résolu", "test", "démonstration", "simulateur", "puzzle", "unité", "hypothèse", "action", 
    "écouter", "ambition", "évolution", "explorer", "position", "amélioration", "analyse", "veille", "création", 
    "progression", "traitement", "graphisme", "créateur", "plateforme", "modification", "communication", 
    "information", "solution", "pratique", "méthode", "transition", "passerelle", "ajustement", "planète", 
    "testeur", "innovations", "réactions", "décision", "objectif", "recherche", "études", "modèle", "feedback", 
    "moteur", "adaptation", "fonction", "nouveau", "réseau", "calcul", "production", "direction", "collaboration"
];


let currentWordIndex = -1;
let score = 0;
let time = 10;
let timer;
let gameTimer;
let totalGameTime = 5 * 60; // 5 minutes en secondes
let gameStarted = false;

// Sélection des éléments
const wordDisplay = document.getElementById("word");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");

const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const skipButton = document.getElementById("skip");
const endButton = document.getElementById("end");

// Fonction pour démarrer le jeu
function startGame() {
    if (gameStarted) return;
    gameStarted = true;

    score = 0;
    scoreDisplay.textContent = score;

    currentWordIndex = -1;
    time = 10;
    timeDisplay.textContent = time;

    nextWord();

    // Timer principal pour les 5 minutes
    gameTimer = setTimeout(() => {
        endGame();
    }, totalGameTime * 1000);
}

// Fonction pour afficher le mot suivant
function nextWord() {
    if (currentWordIndex < words.length - 1) {
        currentWordIndex++;
    } else {
        currentWordIndex = 0; // Repartir au début
    }
    wordDisplay.textContent = words[currentWordIndex];
    resetTimer();
}

// Fonction pour ignorer le mot
function skipWord() {
    nextWord();
}

// Fonction pour incrémenter le score et passer au mot suivant
function nextWithScore() {
    score += 10;
    scoreDisplay.textContent = score;
    nextWord();
}

// Fonction pour gérer le temps de chaque mot
function resetTimer() {
    clearInterval(timer);
    time = 10;
    timeDisplay.textContent = time;

    timer = setInterval(() => {
        time--;
        timeDisplay.textContent = time;
        if (time <= 0) {
            nextWord();
        }
    }, 1000);
}

// Fonction pour afficher le score final
function afficherScoreFinal() {
    clearInterval(timer);  // Si un timer est en cours, on l'arrête
    clearTimeout(gameTimer); // Arrête le timer principal
    // Enregistre le score final dans le localStorage
    localStorage.setItem("scoreFinal", score);
    // Redirige vers la page score_final.html
    window.location.href = "score_final.html"; // Redirige vers la page du score final
}


// Fonction pour terminer le jeu
function endGame() {
    clearInterval(timer);
    clearTimeout(gameTimer);
    localStorage.setItem("scoreFinal", score); // Stocke le score dans le localStorage
    window.location.href = "score_final.html"; // Redirige vers la page de score
    resetGame();
}


// Réinitialiser le jeu
function resetGame() {
    wordDisplay.textContent = "Ready... ?";
    timeDisplay.textContent = "0";
    scoreDisplay.textContent = "0";
    gameStarted = false;
}


// Gestion des événements
startButton.addEventListener("click", startGame);
skipButton.addEventListener("click", skipWord);
nextButton.addEventListener("click", nextWithScore);
endButton.addEventListener("click", endGame);
