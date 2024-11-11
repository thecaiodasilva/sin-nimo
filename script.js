const words = {
    facil: [
        { word: 'feliz', synonyms: ['alegre', 'contente', 'satisfeito', 'jubiloso', 'radiante', 'animado', 'eufórico', 'sorridente'] },
        { word: 'rápido', synonyms: ['veloz', 'ligeiro', 'ágil', 'pronto', 'apressado', 'rápida', 'acelerado', 'furioso'] },
        { word: 'triste', synonyms: ['melancólico', 'infeliz', 'deprimido', 'desanimado', 'abatido', 'desgostoso', 'choroso', 'desencorajado'] },
        { word: 'bonito', synonyms: ['belo', 'lindo', 'atraente', 'charmoso', 'agradável', 'gracioso', 'formoso', 'deslumbrante'] },
        { word: 'fácil', synonyms: ['simples', 'descomplicado', 'acessível', 'elementar', 'óbvio', 'intuitivo', 'claro', 'tranquilo'] },
        { word: 'felicidade', synonyms: ['alegria', 'contentamento', 'satisfação', 'prazer', 'regozijo', 'júbilo', 'bem-estar', 'euforia'] },
        { word: 'medo', synonyms: ['receio', 'temor', 'pavor', 'fobia', 'angústia', 'terror', 'insegurança', 'ansiedade'] },
        { word: 'grande', synonyms: ['enorme', 'vasto', 'amplo', 'gigante', 'extenso', 'massivo', 'maior', 'imenso'] },
        { word: 'pequeno', synonyms: ['miúdo', 'reduzido', 'exíguo', 'modesto', 'curto', 'estreito', 'diminuto', 'menor'] },
        { word: 'forte', synonyms: ['robusto', 'resistente', 'poderoso', 'vigoroso', 'saudável', 'musculoso', 'intenso', 'enérgico'] }
    ],
    medio: [
        { word: 'obstinado', synonyms: ['teimoso', 'persistente', 'firme', 'resoluto', 'inflexível', 'insistente', 'decidido', 'convicto'] },
        { word: 'gigante', synonyms: ['enorme', 'imenso', 'colossal', 'vasto', 'monstruoso', 'descomunal', 'tremendo', 'grande'] },
        { word: 'gentil', synonyms: ['amável', 'cortês', 'educado', 'delicado', 'cordial', 'atencioso', 'carinhoso', 'prestativo'] },
        { word: 'misterioso', synonyms: ['enigmático', 'oculto', 'secreto', 'obscuro', 'místico', 'arcano', 'inexplicável', 'sigiloso'] },
        { word: 'efêmero', synonyms: ['passageiro', 'temporário', 'transitório', 'fugaz', 'breve', 'momentâneo', 'curto', 'perecível'] },
        { word: 'abundante', synonyms: ['farto', 'copioso', 'exuberante', 'próspero', 'rico', 'prolífero', 'generoso', 'vasto'] },
        { word: 'antiquado', synonyms: ['antigo', 'velho', 'obsoleto', 'ultrapassado', 'arcaico', 'retrógrado', 'vencido', 'desatualizado'] },
        { word: 'rápido', synonyms: ['veloz', 'ligeiro', 'ágil', 'fugaz', 'instantâneo', 'imediato', 'pronto', 'apressado'] },
        { word: 'brilhante', synonyms: ['genial', 'inteligente', 'radiante', 'esplêndido', 'luminoso', 'vibrante', 'lúcido', 'notável'] },
        { word: 'inovador', synonyms: ['criativo', 'revolucionário', 'pioneiro', 'avançado', 'moderno', 'original', 'progressivo', 'diferente'] }
    ],
    dificil: [
        { word: 'sagaz', synonyms: ['perspicaz', 'astuto', 'esperto', 'arguto', 'sutil', 'habilidoso', 'inteligente', 'visionário'] },
        { word: 'inócuo', synonyms: ['inofensivo', 'seguro', 'insípido', 'neutro', 'inoportuno', 'irrelevante', 'suave', 'benigno'] },
        { word: 'loquaz', synonyms: ['falador', 'eloquente', 'tagarela', 'verbal', 'conversador', 'comunicativo', 'falante', 'expressivo'] },
        { word: 'idiossincrático', synonyms: ['peculiar', 'particular', 'único', 'individual', 'exclusivo', 'característico', 'específico', 'especial'] },
        { word: 'elucidar', synonyms: ['esclarecer', 'explicar', 'iluminar', 'interpretar', 'detalhar', 'elaborar', 'esmiuçar', 'explicitar'] },
        { word: 'perfunctório', synonyms: ['superficial', 'leviano', 'desinteressado', 'apático', 'negligente', 'automático', 'descompromissado', 'frio'] },
        { word: 'prolixo', synonyms: ['verboso', 'extenso', 'detalhado', 'minucioso', 'redundante', 'verborragico', 'prolongado', 'excessivo'] },
        { word: 'epitome', synonyms: ['exemplo', 'modelo', 'síntese', 'essência', 'personificação', 'representação', 'padrão', 'imagem'] },
        { word: 'assíduo', synonyms: ['frequente', 'constante', 'contínuo', 'diligente', 'dedicado', 'persistente', 'regular', 'habitual'] },
        { word: 'magnânimo', synonyms: ['generoso', 'nobre', 'bondoso', 'altruísta', 'compassivo', 'benevolente', 'abnegado', 'tolerante'] }
    ]
};

let currentLevel = 'facil';
let currentWordIndex = 0;
let correctSynonyms = 0;
let completedWords = 0;
let currentScore = 0;
let timer = 180;  // Tempo total do jogo em segundos
let interval;

// Função para iniciar o jogo
function startGame() {
    // Ocultar título e botão de iniciar, mostrar conteúdo do jogo
    document.querySelector('h1').style.display = 'none';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    // Resetar variáveis e exibir pontuação
    currentScore = 0;
    correctSynonyms = 0;
    completedWords = 0;
    document.getElementById('score').innerText = `Pontuação: ${currentScore}`;

    // Iniciar temporizador contínuo
    startTimer();

    // Carregar a primeira palavra
    loadNewWord();
}

// Função para iniciar o temporizador
function startTimer() {
    document.getElementById('timer').innerText = `Tempo restante: ${timer}s`;

    interval = setInterval(() => {
        timer--;
        document.getElementById('timer').innerText = `Tempo restante: ${timer}s`;

        // Finalizar jogo quando o tempo acabar
        if (timer <= 0) {
            clearInterval(interval);
            endGame();
        }
    }, 1000);
}

// Função para carregar uma nova palavra
function loadNewWord() {
    const levelWords = words[currentLevel];
    currentWordIndex = Math.floor(Math.random() * levelWords.length);
    document.getElementById('word').innerText = levelWords[currentWordIndex].word;
    correctSynonyms = 0;
}

// Função para verificar o sinônimo
function submitSynonym() {
    const synonym = document.getElementById('synonym-input').value.toLowerCase();
    const currentWord = words[currentLevel][currentWordIndex];
    
    if (currentWord.synonyms.includes(synonym)) {
        correctSynonyms += 1;
        currentScore += 10;
        document.getElementById('feedback').innerText = `Correto! (${correctSynonyms}/3)`;
        document.getElementById('score').innerText = `Pontuação: ${currentScore}`;
        document.getElementById('synonym-input').value = '';

        if (correctSynonyms >= 3) {
            completedWords += 1;

            // Avançar para o próximo nível após 3 palavras completadas
            if (completedWords % 3 === 0) {
                if (currentLevel === 'facil') currentLevel = 'medio';
                else if (currentLevel === 'medio') currentLevel = 'dificil';
            }

            loadNewWord();
        }
    } else {
        document.getElementById('feedback').innerText = 'Tente novamente!';
    }
}

// Função para finalizar o jogo
function endGame() {
    alert(`Jogo finalizado! Sua pontuação final foi: ${currentScore}`);
    
    // Resetar elementos e valores
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-button').style.display = 'block';
    document.querySelector('h1').style.display = 'block';
    clearInterval(interval);
    timer = 60;  // Resetar o tempo para um novo jogo
    currentScore = 0;
}
