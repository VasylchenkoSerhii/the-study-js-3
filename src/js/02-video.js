import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeRef = document.querySelector('#vimeo-player');
const keyTime = "videoplayer-current-time";
const player = new Player(iframeRef);

console.log(localStorage.getItem(keyTime))
player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(keyTime, data.seconds);
}, 1000));
player.setCurrentTime(Number(localStorage.getItem(keyTime)));


