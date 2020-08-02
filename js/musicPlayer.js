export const musicPlayerInit = () => {
    const audioPlayer = document.querySelector('.audio-player');
    const playbtn = document.querySelector('.play');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const playerNav = document.querySelector('.player-nav');
    const musicName = document.querySelector('.music-name');
    const current = document.querySelector('.current');
    const total = document.querySelector('.total');
    const musicProgress = document.querySelector('.music-progress');

    const playlist = ['Imagine Dragons - Beliver', 'TFK - Move', 'TFK - Oxygen'];
    let trackIndex = 0;

    const addZero = n => n < 10 ? '0' + n : n;

    const loadTrack = () => {
        const isPlayed = audioPlayer.paused;
        const track = playlist[trackIndex];

        musicName.textContent = track;
        audioPlayer.src = `./audio/${track}.mp3`;

        if (isPlayed) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
    };

    const prevTrack = () => {
        if (trackIndex !== 0) {
            trackIndex--;
        } else {
            trackIndex = playlist.length - 1;
        }
        loadTrack();
    };

    const nextTrack = () => {
        if (trackIndex == playlist.length - 1) {
            trackIndex = 0;
        } else {
            trackIndex++;
        }
        loadTrack();
    };

    playerNav.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('play')) {
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }

            const track = playlist[trackIndex];
        }

        if (target.classList.contains('next')) {
            nextTrack();
        }

        if (target.classList.contains('prev')) {
            prevTrack();
        }

    });

    audioPlayer.addEventListener('ended', () => {
        nextTrack();
        audioPlayer.play();
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;
        const progress = (currentTime / duration) * 100;

        musicProgress.value = progress;

        const minutesPassed = Math.floor(currentTime / 60) || '0';
        const secondsPassed = Math.floor(currentTime % 60) || '0';

        const minutesTotal = Math.floor(duration / 60) || '0';
        const secondsTotal = Math.floor(duration % 60) || '0';

        current.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`
        total.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`
    });

    musicProgress.addEventListener('input', () => {
        const duration = audioPlayer.duration;
        const value = musicProgress.value;

        audioPlayer.currentTime = (value * duration) / 100;
    });

};