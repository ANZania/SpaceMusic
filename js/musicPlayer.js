export const musicPlayerInit = () => {
    const audioPlayer = document.querySelector('.audio-player');
    const playbtn = document.querySelector('.play');
    //const prev = document.querySelector('.prev');
    //const next = document.querySelector('.next');
    const playerNav = document.querySelector('.player-nav');
    const musicName = document.querySelector('.music-name');
    const current = document.querySelector('.current');
    const total = document.querySelector('.total');
    const musicProgress = document.querySelector('.music-progress');
    const musicVolume = document.querySelector('.music-volume');
    const list = document.querySelector('.list');
    const listFav = document.querySelector('.list-fav');
    const volume = document.querySelector('.volume');
    const maxStar = document.querySelector('.max');
    let song;
    let miniStar;

    const playlist = [
        {name: 'Imagine Dragons - Beliver', duration: "03:24", index: 0, fav: 'img/star-mini.svg'},
        {name: 'Thousand Foot Krutch - Move', duration: "03:28", index: 1, fav: 'img/star-mini.svg'},
        {name: 'Thousand Foot Krutch - Oxygen', duration: "03:51", index: 2, fav: 'img/star-mini.svg'},
        {name: 'grandson - Blood Water', duration: "03:36", index: 3, fav: 'img/star-mini.svg'},
        {name: 'grandson - Identity', duration: "03:36", index: 4, fav: 'img/star-mini.svg'},
        {name: 'grandson - thoughts prayers', duration: "03:45", index: 5, fav: 'img/star-mini.svg'},
        {name: 'Linkin Park - Numb', duration: "03:05", index: 6, fav: 'img/star-mini.svg'},
        {name: 'MORGENSHTERN - Пососи', duration: "02:10", index: 7, fav: 'img/star-mini.svg'},
        {name: 'MORGENSHTERN - Yung Hefner', duration: "02:15", index: 8, fav: 'img/star-mini.svg'},
        {name: 'MORGENSHTERN feat. Витя AK - РАТАТАТА', duration: "01:58", index: 9, fav: 'img/star-mini.svg'},
        {name: 'NEFFEX - Numb', duration: "02:24", index: 10, fav: 'img/star-mini.svg'},
        {name: 'Pyrokinesis - Чёрное солнышко', duration: "03:21", index: 11, fav: 'img/star-mini.svg'},
        {name: 'Pyrokinesis -Корми демонов по рассписанию', duration: "03:59", index: 12, fav: 'img/star-mini.svg'},
        {name: 'The Score - Born For This', duration: "03:54", index: 13, fav: 'img/star-mini.svg'},
        {name: 'The Score - Miracle', duration: "03:26", index: 14, fav: 'img/star-mini.svg'},
        {name: 'The Score - Stronger', duration: "03:10", index: 15, fav: 'img/star-mini.svg'},
        {name: 'Twenty One Pilots - Chlorine', duration: "05:24", index: 16, fav: 'img/star-mini.svg'},
        {name: 'Twenty One Pilots - Heathens', duration: "03:15", index: 17, fav: 'img/star-mini.svg'}
    ];

    let playlistFav = JSON.parse(localStorage.getItem('key'));
    console.log(playlistFav);
    if (playlistFav != null){ 
        playlistFav.forEach( (item) => {
            listFav.insertAdjacentHTML('beforeend', `
                <div class="song">
                    <div class="song-name" value="name">${item.name}</div>
                    <div class="star-and-time">
                        <img src="${item.fav}" alt="" class="fav mini">
                        <p class="music-time total">${item.duration}</p>
                    </div>
                </div>
            `);
        });
    } else {
        playlistFav = [];
    }

    playlist.forEach( i => {
        list.insertAdjacentHTML('beforeend', `
            <div class="song">
                <div class="song-name" value="name">${i.name}</div>
                <div class="star-and-time">
                    <img src="${i.fav}" alt="" class="fav mini">
                    <p class="music-time total">${i.duration}</p>
                </div>
            </div>
        `);
    });
    miniStar = document.querySelectorAll('.mini');

    let trackIndex = 0;


    const addZero = n => n < 10 ? '0' + n : n;

    const addToFav = item => {
        playlistFav.push(item);
        listFav.insertAdjacentHTML('beforeend', `
            <div class="song">
                <div class="song-name" value="name">${item.name}</div>
                <div class="star-and-time">
                    <img src="${item.fav}" alt="" class="fav mini">
                    <p class="music-time total">${item.duration}</p>
                </div>
            </div>
        `);
        localStorage.setItem('key', JSON.stringify(playlistFav));
    };

    //const removeFromFav = item => {
    //    playlistFav.push(item);
    //    listFav.insertAdjacentHTML('beforeend', `
    //        <div class="song">
    //            <div class="song-name" value="name">${item.name}</div>
    //            <div class="star-and-time">
    //                <img src="${item.fav}" alt="" class="fav mini">
    //                <p class="music-time total">${item.duration}</p>
    //            </div>
    //        </div>
    //    `);
    //};

    const loadTrack = () => {
        const isPlayed = audioPlayer.paused;
        const track = playlist[trackIndex];

        musicName.textContent = track.name;
        song.forEach( i => {
            if (i.classList.contains('active')){
                i.classList.remove('active');
            }
        });
        song[trackIndex].classList.add('active');
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
                song[trackIndex].classList.add('active');
                playbtn.src = 'img/pause.svg';
            } else {
                audioPlayer.pause();
                playbtn.src = 'img/play.svg';
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

    musicVolume.value = audioPlayer.volume * 100;

    maxStar.addEventListener('click', () => {
        if (maxStar.classList.contains('w')) {
            maxStar.src = 'img/fav-ico.svg';
            maxStar.classList.remove('w');
            for(let i in miniStar) {
                if (i == trackIndex) {
                    console.log(2);
                    miniStar[i].src = 'img/star-mini.svg';
                    playlist[trackIndex].fav = 'img/star-mini.svg';
                    //removeFromFav(playlist[trackIndex]);
                }
            }
        } else {
            maxStar.src = 'img/star-white.svg';
            maxStar.classList.add('w');
            for(let i in miniStar) {
                if (i == trackIndex) {
                    console.log(1);
                    miniStar[i].src = 'img/star-mimi-white.svg';
                    playlist[trackIndex].fav = 'img/star-mimi-white.svg';
                    addToFav(playlist[trackIndex]);
                }
            }
        }
    });

    song = document.querySelectorAll('.song')

    document.addEventListener('click', event => {
        if (event.target.closest('.song')) {
            song.forEach( i => {
                if (i.classList.contains('active')){
                    i.classList.remove('active');
                }
            });
            event.target.closest('.song').classList.toggle('active');
        }
    });

    document.addEventListener('click', event => {
        if (event.target.closest('.song-name')) {
            playlist.forEach( track => {
                if (track.name == event.target.textContent) {
                    trackIndex = track.index;
                    musicName.textContent = event.target.textContent;
                    const isPlayed = audioPlayer.paused;
                    audioPlayer.src = `./audio/${track.name}.mp3`;
                    if (isPlayed) {
                        audioPlayer.pause();
                    } else {
                        audioPlayer.play();
                    }
                }
            });
           
        }
    });

};