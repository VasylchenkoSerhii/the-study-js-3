import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeRef = document.querySelector('#vimeo-player');
const keyTime = "videoplayer-current-time";
const player = new Player(iframeRef);

player.setCurrentTime(localStorage.getItem(keyTime));

player.on('timeupdate', throttle(function (e) {
    localStorage.setItem(keyTime, e.seconds);
}, 1000));


