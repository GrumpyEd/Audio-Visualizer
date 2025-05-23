// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let centerX, centerY, radius, steps, interval;
// let pointsUp = [];
// let pointsDown = [];
// let running = false;
// let angleExtra = 45;

// function resizeCanvas() {
//     canvas.width = document.body.clientWidth;
//     canvas.height = document.body.clientHeight;
//     centerX = canvas.width / 2;
//     centerY = canvas.height / 2;
//     radius = document.body.clientWidth <= 425 ? 120 : 240; /* distance from middle */
//     steps = document.body.clientWidth <= 425 ? 60 : 150;
//     interval = 120 / steps; /* space between lines (this basically creates more lines the smaller the number) */
//     createPoints();
// }

// resizeCanvas();
// window.addEventListener('resize', resizeCanvas);

// // Create points 
// function createPoints() {
//     pointsUp = [];
//     pointsDown = [];
//     for (let angle = 0; angle < 360; angle += interval) {
//         let distUp = 1.1;
//         let distDown = 0.9;

//         pointsUp.push({
//             angle: angle + angleExtra - 1, /* how slanted the lines are, initial value = 1 */
//             x: centerX + radius * Math.cos((-angle + angleExtra) * Math.PI / 180) * distUp,
//             y: centerY + radius * Math.sin((-angle + angleExtra) * Math.PI / 180) * distUp,
//             dist: distUp
//         });

//         pointsDown.push({
//             angle: angle + angleExtra + 1, /* how slanted the lines are, initial value = 5 */
//             x: centerX + radius * Math.cos((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
//             y: centerY + radius * Math.sin((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
//             dist: distDown
//         });
//     }
// }

// // -------------
// // Audio stuff
// // -------------

// let context;
// let splitter;
// let analyserL;
// let analyserR;
// let bufferLengthL;
// let audioDataArrayL;
// let bufferLengthR;
// let audioDataArrayR;

// const audio = new Audio();

// function createAudioContext() {
//     context = new AudioContext();
//     splitter = context.createChannelSplitter();

//     analyserL = context.createAnalyser();
//     analyserL.fftSize = 8192;

//     analyserR = context.createAnalyser();
//     analyserR.fftSize = 8192;

//     splitter.connect(analyserL, 0, 0);
//     splitter.connect(analyserR, 1, 0);

//     bufferLengthL = analyserL.frequencyBinCount;
//     audioDataArrayL = new Uint8Array(bufferLengthL);

//     bufferLengthR = analyserR.frequencyBinCount;
//     audioDataArrayR = new Uint8Array(bufferLengthR);
// }

// function shufflePlaylist() { // Shuffle the playlist using Fisher-Yates algorithm
//     for (let i = playlist.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
//     }
// }

// const playlist = [
    // "pls/cry.mp3",
    // "pls/beedas.mp3",
    // "pls/0mel.mp3",
    // "pls/1.6.mp3",
    // "pls/64bit.mp3",
    // "pls/aaaaaaaaaa130(bassBoosted).mp3",
    // "pls/aluVirs.mp3",
    // "pls/ambientpart2_132.mp3",
    // "pls/aweed.mp3",
    // "pls/blackHole.mp3",
    // "pls/blue_moon(bassBoostBeyondReasonableDoubt).mp3",
    // "pls/blueMoon(bassBoosted).mp3",
    // "pls/brainrot.mp3",
    // "pls/casper.mp3",
    // "pls/CherryLipstick.mp3",
    // "pls/cyberShock2.mp3",
    // "pls/danulab.mp3",
    // "pls/denzel139.mp3",
    // "pls/dirtyCoke.mp3",
    // "pls/disorder.mp3",
    // "pls/disorder2.mp3",
    // "pls/distortion.mp3",
    // "pls/distortionLessLimiter(moreJuice).mp3",
    // "pls/eerieDotmp3.mp3",
    // "pls/end.mp3",
    // "pls/far_away.mp3",
    // "pls/fella(remake).mp3",
    // "pls/fella.mp3",
    // "pls/fonk.mp3",
    // "pls/fuckLime.mp3",
    // "pls/funkyProgrammersDotPHP.mp3",
    // "pls/gejoties(bassBoosted).mp3",
    // "pls/gejoties101.mp3",
    // "pls/giddy2.mp3",
    // "pls/har har133.mp3",
    // "pls/heartless102.mp3",
    // "pls/heartless102(bassboosted).mp3",
    // "pls/hypnod.mp3",
    // "pls/iAmSoFunnyLol.mp3",
    // "pls/janDis.mp3",
    // "pls/kometa.mp3",
    // "pls/loud.mp3",
    // "pls/LPBankaPilna(BERESFULLBEAT).mp3",
    // "pls/manamammasakaesmupieaudzis130(momSaidThatIAmAGrownUp).mp3",
    // "pls/medival_trap.mp3",
    // "pls/onmemind157(extended).mp3",
    // "pls/Oops106.mp3",
    // "pls/ouch.mp3",
    // "pls/piparins.mp3",
    // "pls/raggy.mp3",
    // "pls/ribas.mp3",
    // "pls/Rougue.mp3",
    // "pls/saw(soundWarning).mp3",
    // "pls/scoopidy.mp3",
    // "pls/shill.mp3",
    // "pls/sigma.mp3",
    // "pls/singularbit(ha11ow33n).mp3",
    // "pls/singularbit.mp3",
    // "pls/siren.mp3",
    // "pls/sleepOnIt.mp3",
    // "pls/sunRise.mp3",
    // "pls/turboPushka(finished)172bpm.mp3",
    // "pls/turboPushka.mp3",
    // "pls/umbral.mp3",
    // "pls/verge(finished).mp3",
    // "pls/verge.mp3",
    // "pls/vidya(bassBoosted).mp3",
    // "pls/vidya(softBassBoost).mp3",
    // "pls/water.mp3",
    // "pls/witchHat.mp3",
    // "pls/wool.mp3",
    // "pls/zagis140.mp3"
//     // ... more tracks
// ];

// shufflePlaylist();// Shuffle the playlist before starting playback

// let currentTrackIndex = 0; // Track the current playing index

// function loadAudio() {
//     audio.loop = false; // Disable loop to allow switching to the next track
//     audio.autoplay = true;
//     audio.crossOrigin = "anonymous";
//     audio.addEventListener('canplay', handleCanplay);
//     audio.addEventListener('ended', handleEnded); // Listen for the 'ended' event

//     // Load the first track
//     audio.src = playlist[currentTrackIndex];
//     audio.load();
//     running = true;
// }

// function handleCanplay() {
//     const source = context.createMediaElementSource(audio);
//     source.connect(splitter);
//     splitter.connect(context.destination);
// }

// function handleEnded() {
//     // Increment the track index
//     currentTrackIndex++;
    
//     // Check if there are more tracks to play
//     if (currentTrackIndex < playlist.length) {
//         // Load and play the next track
//         audio.src = playlist[currentTrackIndex];
//         audio.load();
//         audio.play();
//     } else {
//         // Optionally, reset to the first track or stop playback
//         console.log("Playlist finished.");
//         currentTrackIndex = 0;
//     }
// }

// function toggleAudio() {
//     if (running === false) {
//         if (!context) {
//             createAudioContext();
//         }
//         loadAudio();
//         document.querySelector('.call-to-action').remove();
//     }

//     if (audio.paused) {
//         audio.play();
//         context.resume();  // Ensure the context is resumed after a user gesture
//     } else {
//         audio.pause();
//     }
// }

// canvas.addEventListener('click', toggleAudio);

// document.body.addEventListener('touchend', function (ev) {
//     if (context) {
//         context.resume();
//     }
// });

// // -------------
// // Canvas stuff
// // -------------

// function drawLine(points) {
//     let origin = points[0];

//     ctx.beginPath();
//     ctx.strokeStyle = 'rgba(15, 84, 213,1)';
//     ctx.lineJoin = 'miter'; /* bevel/round/miter https://www.c-sharpcorner.com/UploadFile/18ddf7/html5-canvas-linejoin-property/ */
//     ctx.moveTo(origin.x, origin.y);

//     for (let i = 0; i < points.length; i++) {
//         ctx.lineTo(points[i].x, points[i].y);
//     }

//     ctx.lineTo(origin.x, origin.y);
//     ctx.stroke();
// }

// function connectPoints(pointsA, pointsB) {
//     for (let i = 0; i < pointsA.length; i++) {
//         ctx.beginPath();
//         ctx.strokeStyle = 'rgba(42, 70, 192,1)';
//         ctx.moveTo(pointsA[i].x, pointsA[i].y);
//         ctx.lineTo(pointsB[i].x, pointsB[i].y);
//         ctx.stroke();
//     }
// }

// function update(dt) {
//     let audioIndex, audioValue;

//     analyserL.getByteFrequencyData(audioDataArrayL);
//     analyserR.getByteFrequencyData(audioDataArrayR);

//     for (let i = 0; i < pointsUp.length; i++) {
//         audioIndex = Math.ceil(pointsUp[i].angle * (bufferLengthL / (4 * Math.PI * radius))) | 0;
//         audioValue = audioDataArrayL[audioIndex] / 155;

//         pointsUp[i].dist = 1.1 + audioValue * 0.8;
//         pointsUp[i].x = centerX + radius * Math.cos(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;
//         pointsUp[i].y = centerY + radius * Math.sin(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;

//         audioIndex = Math.ceil(pointsDown[i].angle * (bufferLengthR / (2 * Math.PI * radius))) | 0;
//         audioValue = audioDataArrayR[audioIndex] / 255;

//         pointsDown[i].dist = 0.9 + audioValue * 0.2;
//         pointsDown[i].x = centerX + radius * Math.cos(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
//         pointsDown[i].y = centerY + radius * Math.sin(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
//     }
// }

// function draw(dt) {
//     requestAnimationFrame(draw);

//     if (running) {
//         update(dt);
//     }

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     drawLine(pointsUp);
//     drawLine(pointsDown);
//     connectPoints(pointsUp, pointsDown);
// }

// draw();

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let centerX, centerY, radius, steps, interval;
let pointsUp = [];
let pointsDown = [];
let running = false;
let angleExtra = 45;
let isPlaying = false; // Track if the audio is playing
let source; // Store the audio source node

function resizeCanvas() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    radius = document.body.clientWidth <= 425 ? 120 : 240;
    steps = document.body.clientWidth <= 425 ? 60 : 150;
    interval = 120 / steps;
    createPoints();
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createPoints() {
    pointsUp = [];
    pointsDown = [];
    for (let angle = 0; angle < 360; angle += interval) {
        let distUp = 1.1;
        let distDown = 0.9;

        pointsUp.push({
            angle: angle + angleExtra - 1,
            x: centerX + radius * Math.cos((-angle + angleExtra) * Math.PI / 180) * distUp,
            y: centerY + radius * Math.sin((-angle + angleExtra) * Math.PI / 180) * distUp,
            dist: distUp
        });

        pointsDown.push({
            angle: angle + angleExtra + 1,
            x: centerX + radius * Math.cos((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
            y: centerY + radius * Math.sin((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
            dist: distDown
        });
    }
}

let context;
let splitter;
let analyserL;
let analyserR;
let bufferLengthL;
let audioDataArrayL;
let bufferLengthR;
let audioDataArrayR;

const audio = new Audio();

function createAudioContext() {
    context = new AudioContext();
    splitter = context.createChannelSplitter();

    analyserL = context.createAnalyser();
    analyserL.fftSize = 8192;

    analyserR = context.createAnalyser();
    analyserR.fftSize = 8192;

    splitter.connect(analyserL, 0, 0);
    splitter.connect(analyserR, 1, 0);

    bufferLengthL = analyserL.frequencyBinCount;
    audioDataArrayL = new Uint8Array(bufferLengthL);

    bufferLengthR = analyserR.frequencyBinCount;
    audioDataArrayR = new Uint8Array(bufferLengthR);
}

function shufflePlaylist() {
    for (let i = playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [playlist[i], playlist[j]] = [playlist[j], playlist[i]];
    }
}

const playlist = [
    "pls/cry.mp3",
    "pls/beedas.mp3",
    "pls/0mel.mp3",
    "pls/1.6.mp3",
    "pls/64bit.mp3",
    "pls/aaaaaaaaaa130(bassBoosted).mp3",
    "pls/aluVirs.mp3",
    "pls/ambientpart2_132.mp3",
    "pls/aweed.mp3",
    "pls/blackHole.mp3",
    "pls/blue_moon(bassBoostBeyondReasonableDoubt).mp3",
    "pls/blueMoon(bassBoosted).mp3",
    "pls/brainrot.mp3",
    "pls/casper.mp3",
    "pls/CherryLipstick.mp3",
    "pls/cyberShock2.mp3",
    "pls/danulab.mp3",
    "pls/denzel139.mp3",
    "pls/dirtyCoke.mp3",
    "pls/disorder.mp3",
    "pls/disorder2.mp3",
    "pls/distortion.mp3",
    "pls/distortionLessLimiter(moreJuice).mp3",
    "pls/eerieDotmp3.mp3",
    "pls/end.mp3",
    "pls/far_away.mp3",
    "pls/fella(remake).mp3",
    "pls/fella.mp3",
    "pls/fonk.mp3",
    "pls/fuckLime.mp3",
    "pls/funkyProgrammersDotPHP.mp3",
    "pls/gejoties(bassBoosted).mp3",
    "pls/gejoties101.mp3",
    "pls/giddy2.mp3",
    "pls/har har133.mp3",
    "pls/heartless102.mp3",
    "pls/heartless102(bassboosted).mp3",
    "pls/hypnod.mp3",
    "pls/iAmSoFunnyLol.mp3",
    "pls/janDis.mp3",
    "pls/kometa.mp3",
    "pls/loud.mp3",
    "pls/LPBankaPilna(BERESFULLBEAT).mp3",
    "pls/manamammasakaesmupieaudzis130(momSaidThatIAmAGrownUp).mp3",
    "pls/medival_trap.mp3",
    "pls/onmemind157(extended).mp3",
    "pls/Oops106.mp3",
    "pls/ouch.mp3",
    "pls/piparins.mp3",
    "pls/raggy.mp3",
    "pls/ribas.mp3",
    "pls/Rougue.mp3",
    "pls/saw(soundWarning).mp3",
    "pls/scoopidy.mp3",
    "pls/shill.mp3",
    "pls/sigma.mp3",
    "pls/singularbit(ha11ow33n).mp3",
    "pls/singularbit.mp3",
    "pls/siren.mp3",
    "pls/sleepOnIt.mp3",
    "pls/sunRise.mp3",
    "pls/turboPushka(finished)172bpm.mp3",
    "pls/turboPushka.mp3",
    "pls/umbral.mp3",
    "pls/verge(finished).mp3",
    "pls/verge.mp3",
    "pls/vidya(bassBoosted).mp3",
    "pls/vidya(softBassBoost).mp3",
    "pls/water.mp3",
    "pls/witchHat.mp3",
    "pls/wool.mp3",
    "pls/zagis140.mp3"
];

shufflePlaylist();

let currentTrackIndex = 0;

function loadAudio() {
    audio.loop = false;
    audio.autoplay = true;
    audio.crossOrigin = "anonymous";
    audio.addEventListener('ended', handleEnded);

    audio.src = playlist[currentTrackIndex];
    audio.load();
    running = true;

    if (!context) {
        createAudioContext();
    }

    if (!source) {
        source = context.createMediaElementSource(audio);
        source.connect(splitter);
        splitter.connect(context.destination);
    }
}

audio.onplaying = function () {
    isPlaying = true;
};

audio.onpause = function () {
    isPlaying = false;
};

function handleEnded() {
    playNextTrack();
}

async function playNextTrack() {
    // Pause first to prevent conflict
    audio.pause();
    isPlaying = false;

    // Move to the next track
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0; // Restart the playlist or stop here
    }

    audio.src = playlist[currentTrackIndex];
    audio.load();

    try {
        await audio.play();
    } catch (error) {
        console.log("Error in playNextTrack:", error);
    }
}

async function playAudio() {
    if (audio.paused && !isPlaying) {
        try {
            await audio.play();
        } catch (error) {
            console.log("Error in playAudio:", error);
        }
    }
}

function pauseAudio() {
    if (!audio.paused && isPlaying) {
        audio.pause();
    }
}

function toggleAudio() {
    if (!context) {
        createAudioContext();
    }

    if (!running) {
        loadAudio();
        document.querySelector('.call-to-action').remove();
    }

    if (audio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
}

canvas.addEventListener('click', function() {
    if (isPlaying) {
        playNextTrack();
    } else {
        toggleAudio();
    }
});

document.body.addEventListener('touchend', function (ev) {
    if (context) {
        context.resume();
    }
});

function drawLine(points) {
    let origin = points[0];

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(15, 84, 213,1)';
    ctx.lineJoin = 'miter';
    ctx.moveTo(origin.x, origin.y);

    for (let i = 0; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.lineTo(origin.x, origin.y);
    ctx.stroke();
}

function connectPoints(pointsA, pointsB) {
    for (let i = 0; i < pointsA.length; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(42, 70, 192,1)';
        ctx.moveTo(pointsA[i].x, pointsA[i].y);
        ctx.lineTo(pointsB[i].x, pointsB[i].y);
        ctx.stroke();
    }
}

function update(dt) {
    let audioIndex, audioValue;

    analyserL.getByteFrequencyData(audioDataArrayL);
    analyserR.getByteFrequencyData(audioDataArrayR);

    for (let i = 0; i < pointsUp.length; i++) {
        audioIndex = Math.ceil(pointsUp[i].angle * (bufferLengthL / (4 * Math.PI * radius))) | 0;
        audioValue = audioDataArrayL[audioIndex] / 155;

        pointsUp[i].dist = 1.1 + audioValue * 0.8;
        pointsUp[i].x = centerX + radius * Math.cos(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;
        pointsUp[i].y = centerY + radius * Math.sin(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;

        audioIndex = Math.ceil(pointsDown[i].angle * (bufferLengthR / (2 * Math.PI * radius))) | 0;
        audioValue = audioDataArrayR[audioIndex] / 255;

        pointsDown[i].dist = 0.9 + audioValue * 0.2;
        pointsDown[i].x = centerX + radius * Math.cos(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
        pointsDown[i].y = centerY + radius * Math.sin(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
    }
}

function draw(dt) {
    requestAnimationFrame(draw);

    if (running) {
        update(dt);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawLine(pointsUp);
    drawLine(pointsDown);
    connectPoints(pointsUp, pointsDown);
}

draw();
