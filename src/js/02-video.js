import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
const LOCAL_KEY = 'videoplayer-current-time'


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    localStorage.setItem(LOCAL_KEY, e.seconds)
};

setCurrentTime();

function setCurrentTime() {
    const savedTime = localStorage.getItem(LOCAL_KEY);
    if (savedTime) {
        player.setCurrentTime(savedTime)
    }
};


