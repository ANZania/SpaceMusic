export const musicPlayerInit = () => {
    const audioPlayer = document.querySelector('.audio-player');
    //const playbtn = document.querySelector('.play');
    //const prev = document.querySelector('.prev');
    //const next = document.querySelector('.next');
    const playerNav = document.querySelector('.player-nav');
    const musicName = document.querySelector('.music-name');
    const current = document.querySelector('.current');
    const total = document.querySelector('.total');
    const musicProgress = document.querySelector('.music-progress');
    const musicVolume = document.querySelector('.music-volume');
    const list = document.querySelector('.list');
    const volume = document.querySelector('.volume');
    

    const playlist = [
    {name: 'Imagine Dragons - Beliver', duration: "03:24"}, 
    {name: 'TFK - Move', duration: "03:28"}, 
    {name: 'TFK - Oxygen', duration: "03:51"}, 
    {name: 'grandson - Blood Water', duration: "03:36"}, 
    {name: 'grandson - Identity', duration: "03:36"}, 
    {name: 'grandson - thoughts prayers', duration: "03:45"}, 
    {name: 'Linkin Park - Numb', duration: "03:05"}, 
    {name: 'MORGENSHTERN - Пососи', duration: "02:10"}, 
    {name: 'MORGENSHTERN - Yung Hefner', duration: "02:15"}, 
    {name: 'MORGENSHTERN feat. Витя AK - РАТАТАТА', duration: "01:58"},
    {name: 'NEFFEX - Numb', duration: "02:24"}, 
    {name: 'Pyrokinesis - Чёрное солнышко', duration: "03:21"}, 
    {name: 'Pyrokinesis -Корми демонов по рассписанию', duration: "03:59"}, 
    {name: 'The Score - Born For This', duration: "03:54"}, 
    {name: 'The Score - Miracle', duration: "03:26"}, 
    {name: 'The Score - Stronger', duration: "03:10"}, 
    {name: 'Twenty One Pilots - Chlorine', duration: "05:24"}, 
    {name: 'Twenty One Pilots - Heathens', duration: "03:15"}];
    let trackIndex = 0;

    const addZero = n => n < 10 ? '0' + n : n;

    const loadTrack = () => {
        const isPlayed = audioPlayer.paused;
        const track = playlist[trackIndex];

        musicName.textContent = track.name;
        audioPlayer.src = `./audio/${track.name}.mp3`;

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

    musicVolume.addEventListener('input', () => {
        audioPlayer.volume = musicVolume.value / 100;
    });

    //volume.addEventListener('mouseover', () => {
    //    console.log(1);
    //    musicVolume.classList.add('animate__fadeInLeft');
    //    musicVolume.style.optical = '1';
    //});

    //volume.addEventListener('mouseout', () => {
    //    console.log(2);
    //    musicVolume.classList.remove('animate__fadeInLeft');
    //    musicVolume.class.add('animate__fadeOutRight');
    //    musicVolume.style.optical = '0';
    //});

    musicVolume.value = audioPlayer.volume * 100;

    playlist.forEach((i) => {
        list.insertAdjacentHTML('beforeend', `
            <div class="song">
                <div class="song-name">${i.name}</div>
                <div class="star-and-time">
                    <img src="img/star-mini.svg" alt="" class="fav">
                    <p class="music-time total">${i.duration}</p>
                </div>
            </div>
        `);
    });

};