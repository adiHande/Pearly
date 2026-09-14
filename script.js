const gameDecks = {
    flowers: {

        easy: [
            "assets/BlueAster.png",
            "assets/BlueHydrangeas.png",
            "assets/OrangeTulip.png",
            "assets/PinkGradientLily.png",
            "assets/PinkLotus.png",
            "assets/PinkTripleFlower.png",
            "assets/PurpleHyacinth.png",
            "assets/PurpleOrchid.png",
            "assets/RedHibiscus.png",
            "assets/YellowSuflower.png"
        ],


        medium: [
            "assets/BlueAster.png",
            "assets/BlueHydrangeas.png",
            "assets/BlueOrchidOnStem.png",
            "assets/OrangeLily.png",
            "assets/OrangeTulip.png",
            "assets/PinkGradientLily.png",
            "assets/PinkLotus.png",
            "assets/PinkTripleFlower.png",
            "assets/PurpleHyacinth.png",
            "assets/PurpleOrchid.png",
            "assets/RedHibiscus.png",
            "assets/White-PinkOrchid.png",
            "assets/WhiteDaisy.png",
            "assets/WhiteLily.png",
            "assets/YellowLily.png",
            "assets/YellowSuflower.png"
        ],


        hard: [
            "assets/BlueAster.png",
            "assets/BlueHydrangeas.png",
            "assets/BlueOrchidOnStem.png",
            "assets/OrangeLily.png",
            "assets/OrangeTulip.png",
            "assets/PinkGradientLily.png",
            "assets/PinkLotus.png",
            "assets/PinkOrchidOnStem.png",
            "assets/PinkPeony.png",
            "assets/PinkTripleFlower.png",
            "assets/PinkTulip.png",
            "assets/PurpleBellflower.png",
            "assets/PurpleHyacinth.png",
            "assets/PurpleOrchid.png",
            "assets/RedHibiscus.png",
            "assets/RedPoppy.png",
            "assets/RedRose.png",
            "assets/VenusFlyTrap.png",
            "assets/White-PinkOrchid.png",
            "assets/WhiteDaisy.png",
            "assets/WhiteLily.png",
            "assets/WhiteLilyOfTheValey.png",
            "assets/YellowLily.png",
            "assets/YellowSuflower.png"
        ],


        expert: [
            "assets/BlueAster.png",
            "assets/BlueHydrangeas.png",
            "assets/BlueOrchidOnStem.png",
            "assets/OrangeLily.png",
            "assets/OrangeTulip.png",
            "assets/PinkGradientLily.png",
            "assets/PinkLotus.png",
            "assets/PinkOrchidOnStem.png",
            "assets/PinkPeony.png",
            "assets/PinkTripleFlower.png",
            "assets/PinkTulip.png",
            "assets/PurpleBellflower.png",
            "assets/PurpleHyacinth.png",
            "assets/PurpleOrchid.png",
            "assets/RedHibiscus.png",
            "assets/RedPoppy.png",
            "assets/RedRose.png",
            "assets/VenusFlyTrap.png",
            "assets/White-PinkOrchid.png",
            "assets/WhiteDaisy.png",
            "assets/WhiteLily.png",
            "assets/WhiteLilyOfTheValey.png",
            "assets/YellowLily.png",
            "assets/YellowSuflower.png",

            "assets/flowers1.png",
            "assets/flowers5.png",
            "assets/flowers12.png",
            "assets/flowers14.png",
            "assets/flowers19.png",
            "assets/flowers20.png",
            "assets/flowers23.png",
            "assets/flowers24.png",
            "assets/flowers31.png",
            "assets/flowers41.png",
            "assets/flowers44.png",
            "assets/flowers45.png",
            "assets/flowers46.png",
            "assets/flowers47.png",
            "assets/flowers48.png",
            "assets/flowers52.png",
            "assets/flowers53.png",
            "assets/flowers56.png",
            "assets/flowers59.png",
            "assets/flowers61.png",
            "assets/flowers62.png",
            "assets/flowers64.png"
        ]
    }
};


// Sound behavior test
const soundTest = {
    matchSoundDelay: 140,
    resultSoundOrder: "after"
};


// Difficulty settings
const difficultySettings = {

    easy: {
        columns: 4,
        pairs: 6,
        cardWidth: 105,
        countdown: 40
    },

    medium: {
        columns: 5,
        pairs: 10,
        cardWidth: 100,
        countdown: 70
    },

    hard: {
        columns: 7,
        pairs: 14,
        cardWidth: 85,
        countdown: 110
    },

    expert: {
        columns: 8,
        pairs: 20,
        cardWidth: 75,
        countdown: 160
    }
};


// Audio
const audioPaths = {

    buttonClick:
        "assets/controller_button_press-CardFlip2.wav",

    optionSelect:
        "assets/controller_button_press-CardFlip2.wav",

    menuPopup:
        "assets/match_xylophone_1-CardFlipAccepted.wav",

    switchPage:
        "assets/synth_warning-Warning1.wav",

    toggleOn:
        "assets/toggle_on.wav",

    toggleOff:
        "assets/toggle_off.wav",

    startGame:
        "assets/music_box_inn.wav",

    flip:
        "assets/item_equip-CardFlip.wav",

    match:
        "assets/coin_collect.wav",

    win:
        "assets/synth_confirmation-WonRound.wav",

    lose:
        "assets/music_box_negative.wav",

    exit:
        "assets/synth_shut_down-Byemaybe.wav"
};


// Screens
const homeScreen =
    document.getElementById(
        "home-screen"
    );

const gameScreen =
    document.getElementById(
        "game-screen"
    );

const endScreen =
    document.getElementById(
        "end-screen"
    );


// Home controls
const difficultySelect =
    document.getElementById(
        "difficulty-select"
    );

const timerModeSelect =
    document.getElementById(
        "timer-mode-select"
    );

const startButton =
    document.getElementById(
        "start-btn"
    );

const scoresButton =
    document.getElementById(
        "scores-btn"
    );


// Game controls
const menuButton =
    document.getElementById(
        "menu-btn"
    );

const board =
    document.getElementById(
        "game-board"
    );

const movesText =
    document.getElementById(
        "moves"
    );

const timerText =
    document.getElementById(
        "timer"
    );

const timerDisplay =
    document.getElementById(
        "timer-display"
    );

const resumeButton =
    document.getElementById(
        "resume-btn"
    );

const pauseButton =
    document.getElementById(
        "pause-btn"
    );

const restartButton =
    document.getElementById(
        "restart-btn"
    );


// Sound controls
const soundToggle =
    document.getElementById(
        "sound-toggle"
    );

const dialogSoundToggle =
    document.getElementById(
        "dialog-sound-toggle"
    );


// Dialogs
const settingsDialog =
    document.getElementById(
        "settings-dialog"
    );

const scoresDialog =
    document.getElementById(
        "scores-dialog"
    );

const resultDialog =
    document.getElementById(
        "result-dialog"
    );


// Result controls
const resultTitle =
    document.getElementById(
        "result-title"
    );

const resultMessage =
    document.getElementById(
        "result-message"
    );

const bestMovesText =
    document.getElementById(
        "best-moves"
    );

const bestTimeText =
    document.getElementById(
        "best-time"
    );

const bestTimeBox =
    document.getElementById(
        "best-time-box"
    );


// Game state
let firstCard = null;
let secondCard = null;

let boardLocked = false;
let gameOver = false;
let paused = false;
let transitioning = false;

let moves = 0;
let matchedPairs = 0;

let seconds = 0;
let remainingSeconds = 0;

let timer;


// Sound state
let resultSound = null;

let resultPopupTimeout = null;
let resultSoundTimeout = null;
let endSoundTimeout = null;


// Flowers only
const currentTheme =
    "flowers";

let currentDifficulty =
    "easy";

let currentTimerMode =
    "stopwatch";


// Saved sound setting
let soundEnabled =
    localStorage.getItem(
        "soundEnabled"
    ) !== "false";


// Home looping sound
const homeLoopSound =
    new Audio(
        audioPaths.startGame
    );

homeLoopSound.loop =
    true;


// Wait helper
function wait(ms){
    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );
}


// Shuffle
function shuffle(array){

    for (
        let i =
            array.length - 1;

        i > 0;

        i--
    ){
        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }

    return array;
}


// Play one-shot sound
function playSound(name){

    if (!soundEnabled){
        return null;
    }

    const sound =
        new Audio(
            audioPaths[name]
        );

    sound
        .play()
        .catch(
            () => {}
        );

    return sound;
}


// Win / lose sound
function playResultSound(name){

    if (!soundEnabled){
        return;
    }

    stopResultSound();

    resultSound =
        new Audio(
            audioPaths[name]
        );

    resultSound
        .play()
        .catch(
            () => {}
        );

    resultSound.addEventListener(
        "ended",
        () =>{
            resultSound = null;
        },
        {
            once: true
        }
    );
}


// Stop result sound
function stopResultSound(){

    if (!resultSound){
        return;
    }

    resultSound.pause();

    resultSound.currentTime =
        0;

    resultSound =
        null;
}


// Clear result delays
function clearResultTimers(){

    if (resultPopupTimeout){

        clearTimeout(
            resultPopupTimeout
        );

        resultPopupTimeout =
            null;
    }


    if (resultSoundTimeout){

        clearTimeout(
            resultSoundTimeout
        );

        resultSoundTimeout =
            null;
    }
}


// Stop result feedback
function stopResultFeedback(){

    clearResultTimers();

    stopResultSound();
}


// Start Home loop
function startHomeLoop(){

    if (!soundEnabled){
        return;
    }

    if (
        homeScreen
            .classList
            .contains("hidden")
    ){
        return;
    }

    if (!homeLoopSound.paused){
        return;
    }

    homeLoopSound
        .play()
        .catch(
            () => {}
        );
}


// Stop Home loop
function stopHomeLoop(){

    homeLoopSound.pause();

    homeLoopSound.currentTime =
        0;
}


// Difficulty availability
function updateDifficultyOptions(){

    for (
        const option of
        difficultySelect.options
    ){

        const deck =
            gameDecks[
                currentTheme
            ][
                option.value
            ];

        const needed =
            difficultySettings[
                option.value
            ].pairs;

        option.disabled =
            deck.length <
            needed;
    }


    if (
        difficultySelect
            .selectedOptions[0]
            .disabled
    ){

        const available =
            [
                ...difficultySelect.options
            ].find(
                option =>
                    !option.disabled
            );


        if (available){

            difficultySelect.value =
                available.value;
        }
    }
}


// Story
function setStory(){

    const mode =
        timerModeSelect.value;

    const storyText =
        document.getElementById(
            "story-text"
        );


    if (
        mode ===
        "relaxed"
    ){

        storyText.textContent =
            "Help Pearly match all the pairs at your own pace!";
    }


    else if (
        mode ===
        "countdown"
    ){

        storyText.textContent =
            "Help Pearly match all the pairs before time runs out!";
    }


    else{

        storyText.textContent =
            "Help Pearly match all the pairs as fast as you can!";
    }
}


// Level title
function updateLevelTitle(){

    const levelTitle =
        document.getElementById(
            "level-title"
        );

    if (!levelTitle){
        return;
    }

    const levelNames = {
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        expert: "Expert"
    };

    levelTitle.textContent =
        `${
            levelNames[
                currentDifficulty
            ]
        } Level`;
}


// Relaxed mode UI
function updateModeUI(){

    const relaxed =
        currentTimerMode ===
        "relaxed";


    timerDisplay
        .classList
        .toggle(
            "hidden",
            relaxed
        );


    resumeButton
        .classList
        .toggle(
            "hidden",
            relaxed
        );


    pauseButton
        .classList
        .toggle(
            "hidden",
            relaxed
        );


    bestTimeBox
        .classList
        .toggle(
            "hidden",
            relaxed
        );
}


// Show Home
function showHome(){

    clearInterval(
        timer
    );

    stopResultFeedback();


    if (endSoundTimeout){

        clearTimeout(
            endSoundTimeout
        );

        endSoundTimeout =
            null;
    }


    homeScreen
        .classList
        .remove(
            "hidden"
        );

    gameScreen
        .classList
        .add(
            "hidden"
        );

    endScreen
        .classList
        .add(
            "hidden"
        );


    if (
        settingsDialog.open
    ){
        settingsDialog.close();
    }


    if (
        scoresDialog.open
    ){
        scoresDialog.close();
    }


    if (
        resultDialog.open
    ){
        resultDialog.close();
    }


    setStory();

    startHomeLoop();
}


// Show End
function showEndScreen(){

    clearInterval(
        timer
    );

    stopResultFeedback();

    stopHomeLoop();


    homeScreen
        .classList
        .add(
            "hidden"
        );

    gameScreen
        .classList
        .add(
            "hidden"
        );

    endScreen
        .classList
        .remove(
            "hidden"
        );


    if (
        settingsDialog.open
    ){
        settingsDialog.close();
    }


    if (
        scoresDialog.open
    ){
        scoresDialog.close();
    }


    if (
        resultDialog.open
    ){
        resultDialog.close();
    }


    if (
        endSoundTimeout
    ){

        clearTimeout(
            endSoundTimeout
        );
    }


    endSoundTimeout =
        setTimeout(
            () =>{

                playSound(
                    "exit"
                );

                endSoundTimeout =
                    null;
            },
            1000
        );
}


// Start selected game
async function startGame(){

    if (transitioning){
        return;
    }


    currentDifficulty =
        difficultySelect.value;

    currentTimerMode =
        timerModeSelect.value;


    updateLevelTitle();


    const deck =
        gameDecks[
            currentTheme
        ][
            currentDifficulty
        ];


    const needed =
        difficultySettings[
            currentDifficulty
        ].pairs;


    if (
        deck.length <
        needed
    ){

        alert(
            "This deck is not ready yet."
        );

        return;
    }


    transitioning =
        true;


    if (soundEnabled){

        playSound(
            "switchPage"
        );

        await wait(
            160
        );

        playSound(
            "buttonClick"
        );

        await wait(
            180
        );
    }


    stopHomeLoop();


    homeScreen
        .classList
        .add(
            "hidden"
        );

    endScreen
        .classList
        .add(
            "hidden"
        );

    gameScreen
        .classList
        .remove(
            "hidden"
        );


    restartGame();


    transitioning =
        false;
}


// Create board
function createBoard(){

    board.innerHTML =
        "";


    const settings =
        difficultySettings[
            currentDifficulty
        ];


    const deck =
        gameDecks[
            currentTheme
        ][
            currentDifficulty
        ];


    const selected =
        shuffle(
            [...deck]
        ).slice(
            0,
            settings.pairs
        );


    const cards =
        shuffle([
            ...selected,
            ...selected
        ]);


    board.style.setProperty(
        "--columns",
        settings.columns
    );


    board.style.setProperty(
        "--card-width",
        `${
            settings.cardWidth
        }px`
    );


    cards.forEach(
        image =>{

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "card";


            card.dataset.image =
                image;


            card.innerHTML = `
                <div class="card-inner">

                    <div class="card-front">

                        <img
                            src="assets/Leaf1.jpg"
                            alt="leaf"
                        >

                    </div>

                    <div class="card-back">

                        <img
                            src="${image}"
                            alt="matching card"
                        >

                    </div>

                </div>
            `;


            card.addEventListener(
                "click",
                () =>
                    handleCardClick(
                        card
                    )
            );


            board.appendChild(
                card
            );
        }
    );
}


// Flip card
function handleCardClick(card){

    if (
        gameOver ||
        paused ||
        boardLocked ||
        card === firstCard ||
        card
            .classList
            .contains(
                "matched"
            )
    ){
        return;
    }


    card
        .classList
        .add(
            "flipped"
        );


    playSound(
        "flip"
    );


    if (!firstCard){

        firstCard =
            card;

        return;
    }


    secondCard =
        card;


    moves++;


    movesText.textContent =
        moves;


    checkMatch();
}


// Match check
function checkMatch(){

    if (
        firstCard.dataset.image ===
        secondCard.dataset.image
    ){

        firstCard
            .classList
            .add(
                "matched"
            );

        secondCard
            .classList
            .add(
                "matched"
            );


        matchedPairs++;


        if (
            soundTest
                .matchSoundDelay ===
            0
        ){

            playSound(
                "match"
            );
        }


        else{

            setTimeout(
                () =>{

                    playSound(
                        "match"
                    );
                },
                soundTest
                    .matchSoundDelay
            );
        }


        resetTurn();


        if (
            matchedPairs ===
            difficultySettings[
                currentDifficulty
            ].pairs
        ){

            setTimeout(
                () =>
                    finishGame(
                        true
                    ),
                300
            );
        }


        return;
    }


    boardLocked =
        true;


    setTimeout(
        () =>{

            firstCard
                .classList
                .remove(
                    "flipped"
                );

            secondCard
                .classList
                .remove(
                    "flipped"
                );


            resetTurn();
        },
        800
    );
}


// Reset selected cards
function resetTurn(){

    firstCard =
        null;

    secondCard =
        null;

    boardLocked =
        false;
}


// Timer
function runTimer(){

    clearInterval(
        timer
    );


    if (
        currentTimerMode ===
        "relaxed"
    ){
        return;
    }


    timer =
        setInterval(
            () =>{

                if (paused){
                    return;
                }


                if (
                    currentTimerMode ===
                    "stopwatch"
                ){

                    seconds++;


                    timerText.textContent =
                        `${seconds}s`;
                }


                else{

                    remainingSeconds--;

                    seconds++;


                    timerText.textContent =
                        `${remainingSeconds}s`;


                    if (
                        remainingSeconds <=
                        0
                    ){

                        remainingSeconds =
                            0;


                        timerText.textContent =
                            "0s";


                        finishGame(
                            false
                        );
                    }
                }

            },
            1000
        );
}


// Restart
function restartGame(){

    clearInterval(
        timer
    );

    stopResultFeedback();


    if (
        resultDialog.open
    ){
        resultDialog.close();
    }


    firstCard =
        null;

    secondCard =
        null;

    boardLocked =
        false;

    gameOver =
        false;

    paused =
        false;

    moves =
        0;

    matchedPairs =
        0;

    seconds =
        0;


    movesText.textContent =
        "0";


    resumeButton.textContent =
        "Play / Resume";


    if (
        currentTimerMode ===
        "countdown"
    ){

        remainingSeconds =
            difficultySettings[
                currentDifficulty
            ].countdown;


        timerText.textContent =
            `${remainingSeconds}s`;
    }


    else{

        remainingSeconds =
            0;

        timerText.textContent =
            "0s";
    }


    updateModeUI();

    updateLevelTitle();

    createBoard();

    runTimer();
}


// Pause
function pauseGame(){

    if (
        gameOver ||
        paused ||
        currentTimerMode ===
        "relaxed"
    ){
        return;
    }


    paused =
        true;

    boardLocked =
        true;


    resumeButton.textContent =
        "Resume";
}


// Resume
function resumeGame(){

    if (
        gameOver ||
        !paused ||
        currentTimerMode ===
        "relaxed"
    ){
        return;
    }


    paused =
        false;

    boardLocked =
        false;


    resumeButton.textContent =
        "Play / Resume";
}


// Score key
function getScoreKey(
    difficulty
){

    return `memoryMatch:${difficulty}`;
}


// Get scores
function getBestScores(
    difficulty
){

    const saved =
        localStorage.getItem(
            getScoreKey(
                difficulty
            )
        );


    return saved
        ? JSON.parse(
            saved
        )
        : {};
}


// Update scores
function updateBestScores(){

    const scores =
        getBestScores(
            currentDifficulty
        );


    if (
        !scores.bestMoves ||
        moves <
        scores.bestMoves
    ){

        scores.bestMoves =
            moves;
    }


    if (
        currentTimerMode !==
        "relaxed"
    ){

        if (
            !scores.bestTime ||
            seconds <
            scores.bestTime
        ){

            scores.bestTime =
                seconds;
        }
    }


    localStorage.setItem(
        getScoreKey(
            currentDifficulty
        ),

        JSON.stringify(
            scores
        )
    );


    return scores;
}


// Best scores popup
function showBestScores(){

    [
        "easy",
        "medium",
        "hard",
        "expert"
    ].forEach(
        level =>{

            const scores =
                getBestScores(
                    level
                );


            document
                .getElementById(
                    `${level}-best-moves`
                )
                .textContent =
                    scores.bestMoves ??
                    "--";


            document
                .getElementById(
                    `${level}-best-time`
                )
                .textContent =
                    scores.bestTime
                        ? `${scores.bestTime}s`
                        : "--";
        }
    );


    scoresDialog
        .showModal();
}


// Open Result popup
function openResultPopup(){

    if (
        !resultDialog.open
    ){

        resultDialog
            .showModal();
    }


    playSound(
        "menuPopup"
    );
}


// Finish game
function finishGame(won){

    if (gameOver){
        return;
    }


    gameOver =
        true;

    boardLocked =
        true;


    clearInterval(
        timer
    );

    stopResultFeedback();


    bestTimeBox
        .classList
        .toggle(
            "hidden",
            currentTimerMode ===
            "relaxed"
        );


    if (won){

        const scores =
            updateBestScores();


        resultTitle.textContent =
            "You won!";


        if (
            currentTimerMode ===
            "relaxed"
        ){

            resultMessage.textContent =
                `You matched every pair in ${moves} moves!`;


            bestTimeText.textContent =
                "--";
        }


        else{

            resultMessage.textContent =
                `You matched every pair in ${moves} moves and ${seconds} seconds!`;


            bestTimeText.textContent =
                scores.bestTime
                    ? `${scores.bestTime}s`
                    : "--";
        }


        bestMovesText.textContent =
            scores.bestMoves ??
            "--";
    }


    else{

        resultTitle.textContent =
            "Time's up!";


        resultMessage.textContent =
            `You matched ${matchedPairs} of ${difficultySettings[currentDifficulty].pairs} pairs.`;


        const scores =
            getBestScores(
                currentDifficulty
            );


        bestTimeBox
            .classList
            .remove(
                "hidden"
            );


        bestMovesText.textContent =
            scores.bestMoves ??
            "--";


        bestTimeText.textContent =
            scores.bestTime
                ? `${scores.bestTime}s`
                : "--";
    }


    const resultSoundName =
        won
            ? "win"
            : "lose";


    if (
        soundTest
            .resultSoundOrder ===
        "before"
    ){

        playResultSound(
            resultSoundName
        );


        if (soundEnabled){

            resultPopupTimeout =
                setTimeout(
                    () =>{

                        openResultPopup();

                        resultPopupTimeout =
                            null;
                    },
                    1000
                );
        }


        else{

            openResultPopup();
        }


        return;
    }


    openResultPopup();


    if (soundEnabled){

        resultSoundTimeout =
            setTimeout(
                () =>{

                    playResultSound(
                        resultSoundName
                    );

                    resultSoundTimeout =
                        null;
                },
                180
            );
    }
}


// Sync toggles
function syncAudioToggles(){

    soundToggle.checked =
        soundEnabled;

    dialogSoundToggle.checked =
        soundEnabled;
}


// Save sound
function saveAudioSettings(){

    localStorage.setItem(
        "soundEnabled",
        soundEnabled
    );


    syncAudioToggles();
}


// Toggle sound
function handleSoundToggle(
    toggle
){

    const turningOn =
        toggle.checked;


    if (turningOn){

        soundEnabled =
            true;


        saveAudioSettings();


        playSound(
            "toggleOn"
        );


        if (
            !homeScreen
                .classList
                .contains(
                    "hidden"
                )
        ){

            startHomeLoop();
        }
    }


    else{

        playSound(
            "toggleOff"
        );


        soundEnabled =
            false;


        saveAudioSettings();


        stopHomeLoop();

        stopResultSound();

        clearResultTimers();
    }
}


// Difficulty dropdown clicked
difficultySelect.addEventListener(
    "pointerdown",
    () =>{

        playSound(
            "buttonClick"
        );
    }
);


// Difficulty selected
difficultySelect.addEventListener(
    "change",
    () =>{

        playSound(
            "buttonClick"
        );
    }
);


// Timer dropdown clicked
timerModeSelect.addEventListener(
    "pointerdown",
    () =>{

        playSound(
            "buttonClick"
        );
    }
);


// Timer selected
timerModeSelect.addEventListener(
    "change",
    () =>{

        playSound(
            "buttonClick"
        );

        setStory();
    }
);


// Start Game
startButton.addEventListener(
    "click",
    startGame
);


// Best Scores
scoresButton.addEventListener(
    "click",
    () =>{

        playSound(
            "buttonClick"
        );

        showBestScores();
    }
);


// Close Best Scores
document
    .getElementById(
        "close-scores-btn"
    )
    .addEventListener(
        "click",
        () =>{

            playSound(
                "buttonClick"
            );

            scoresDialog.close();
        }
    );


// Home Sound toggle
soundToggle.addEventListener(
    "change",
    () =>{

        handleSoundToggle(
            soundToggle
        );
    }
);


// Pause
pauseButton.addEventListener(
    "click",
    () =>{

        playSound(
            "buttonClick"
        );

        pauseGame();
    }
);


// Resume
resumeButton.addEventListener(
    "click",
    () =>{

        playSound(
            "buttonClick"
        );

        resumeGame();
    }
);


// Restart
restartButton.addEventListener(
    "click",
    () =>{

        playSound(
            "buttonClick"
        );

        restartGame();
    }
);


// Game Menu popup
menuButton.addEventListener(
    "click",
    () =>{

        playSound(
            "buttonClick"
        );


        if (
            currentTimerMode !==
            "relaxed"
        ){

            pauseGame();
        }


        settingsDialog
            .showModal();


        playSound(
            "menuPopup"
        );
    }
);


// Close Game Menu
document
    .getElementById(
        "close-settings-btn"
    )
    .addEventListener(
        "click",
        () =>{

            playSound(
                "buttonClick"
            );


            settingsDialog.close();


            if (
                currentTimerMode !==
                "relaxed"
            ){

                resumeGame();
            }
        }
    );


// Home from Game Menu
document
    .getElementById(
        "home-btn"
    )
    .addEventListener(
        "click",
        () =>{

            playSound(
                "buttonClick"
            );


            showHome();
        }
    );


// Exit Game
document
    .getElementById(
        "exit-btn"
    )
    .addEventListener(
        "click",
        async () =>{

            if (
                transitioning
            ){
                return;
            }


            transitioning =
                true;


            if (
                soundEnabled
            ){

                playSound(
                    "buttonClick"
                );


                await wait(
                    160
                );


                playSound(
                    "switchPage"
                );


                await wait(
                    180
                );
            }


            showEndScreen();


            transitioning =
                false;
        }
    );


// Game Menu Sound toggle
dialogSoundToggle.addEventListener(
    "change",
    () =>{

        handleSoundToggle(
            dialogSoundToggle
        );
    }
);


// End page Back Home
document
    .getElementById(
        "end-home-btn"
    )
    .addEventListener(
        "click",
        () =>{

            playSound(
                "buttonClick"
            );


            showHome();
        }
    );


// Result Home
document
    .getElementById(
        "result-home-btn"
    )
    .addEventListener(
        "click",
        () =>{

            stopResultFeedback();


            playSound(
                "buttonClick"
            );


            showHome();
        }
    );


// Play Again
document
    .getElementById(
        "play-again-btn"
    )
    .addEventListener(
        "click",
        () =>{

            stopResultFeedback();


            playSound(
                "buttonClick"
            );


            resultDialog.close();


            restartGame();
        }
    );


// Autoplay fallback
document.addEventListener(
    "pointerdown",
    () =>{

        if (
            !homeScreen
                .classList
                .contains(
                    "hidden"
                )
        ){

            startHomeLoop();
        }
    }
);


document.addEventListener(
    "keydown",
    () =>{

        if (
            !homeScreen
                .classList
                .contains(
                    "hidden"
                )
        ){

            startHomeLoop();
        }
    }
);


// Initial setup
updateDifficultyOptions();

setStory();

syncAudioToggles();

startHomeLoop();