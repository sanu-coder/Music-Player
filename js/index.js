var music = document.querySelector("audio");
var play = document.getElementById("play");
var image = document.querySelector("img");
var previous = document.getElementById("prev");
var next = document.getElementById("next");
var songname = document.getElementById("song-name");
var artist = document.getElementById("artist-name");
var image = document.querySelector("img");
var index = 0;
var like_song = 0;
var l = document.querySelectorAll(".icons button i")[1];
let isAudioPlay = false;
var current_time = document.querySelector(".time");
var start_time = document.querySelector(".time .forward-time");
var end_time = document.querySelector(".time .backward-time");
let fillbar = document.querySelector(".fill");
var mute = document.querySelector(".repeat-buttons span i");
var download = document.querySelector(".repeat-buttons button a");
var num = Math.random();
var sec = 0;
var min1 = 0;
var sec1 = 0;
var songs = [{
        id: "garmi",
        songName: "Garmi",
        Artist: "Neha kakkar, Badshah",
        like: 0,
    },
    {
        id: "lagdi-lahore-di",
        songName: "Lagdi Lahore Di",
        Artist: "Sachin, Jigar",
        like: 0,
    },
    {
        id: "nazm-nazm",
        songName: "Nazm-Nazm",
        Artist: "Arko Pravo Mukharjee",
        like: 0,
    },
    {
        id: "gaj ka daman",
        songName: "Gaj Ka Daman",
        Artist: "Pranjal Dahiya",
        like: 0,
    },
    {
        id: "chor denge",
        songName: "Chhor Denge",
        Artist: "Parampara Tandon,Sachet-Parampara",
        like: 0,
    }
];

function playAudio() {
    music.play();
    isAudioPlay = true;
    play.classList.replace("fa-play", "fa-pause");
    image.classList.add("rotateAnime");

}

function pauseAudio() {
    music.pause();
    isAudioPlay = false;
    play.classList.replace("fa-pause", "fa-play");
    image.classList.remove("rotateAnime");
}

function buttonclick() {
    if (isAudioPlay) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function load_the_song(songs) {
    songname.textContent = songs.songName;
    artist.textContent = songs.Artist;
    music.src = "Audio files/" + songs.id + ".mp3";
    image.src = "img/" + songs.id + ".jpg";

}

function nextsong() {
    index = (index + 1) % (songs.length);
    load_the_song(songs[index]);
    if (songs[index].like == 1) {
        l.classList.replace("far", "fas");
    } else {
        l.classList.replace("fas", "far");
    }
    fillbar.style.width = 0 + "%";

    pauseAudio();
}

function prevsong() {
    index = (index - 1);
    if (index < 0) {
        index = index + (songs.length);
    }
    load_the_song(songs[index]);
    if (songs[index].like == 1) {
        l.classList.replace("far", "fas");
    } else {
        l.classList.replace("fas", "far");
    }
    fillbar.style.width = 0 + "%";
    pauseAudio();
}

music.addEventListener('timeupdate', function() {
    let position = music.currentTime / music.duration;
    fillbar.style.width = position * 100 + "%";

    convert_time(Math.round(music.currentTime));
})

function convert_time(seconds) {
    let min = Math.floor(seconds / 60);
    sec = seconds % 60;
    min = (min < 10) ? ('0' + min) : min;
    sec = (sec < 10) ? ('0' + sec) : sec;
    start_time.innerHTML = min + " : " + sec;
    sec1 = Math.round(music.duration);
    min1 = Math.floor(sec1 / 60);
    sec1 = Math.floor(sec1 % 60);
    sec1 = (sec1 < 10) ? ('0' + sec1) : sec1;
    min1 = (min1 < 10) ? ('0' + min1) : min1;
    end_time.innerHTML = min1 + " : " + sec1;
    //if audio is ended
    if (music.ended) {
        nextsong();
    }
}

function increase_volume() {
    music.volume += 0.25;
}

function decrease_volume() {
    music.volume -= 0.25;
}

let volume_up = document.querySelector(".voloume-up");
volume_up.addEventListener('click', function() {
    if (music.volume > 0) {
        music.volume = 0;
        mute.classList.replace("fa-volume-up", "fa-volume-mute");
    } else {
        music.volume = 1;
        mute.classList.replace("fa-volume-mute", "fa-volume-up");
    }
})


function like() {
    if (songs[index].like == 0) {
        // like_song = 1;
        songs[index].like = 1;
        l.classList.replace("far", "fas");
    } else {
        songs[index].like = 0;
        l.classList.replace("fas", "far");
    }
}

function re_start() {
    music.currentTime = 0;
    end_time.innerHTML = "00 : 00";
    playAudio();
}

function random_song() {
    num = Math.floor(Math.random() * (songs.length));
    load_the_song(songs[num]);
    playAudio();
}

function download_song() {
    download.href = "Audio files/" + songs[index].id + ".mp3";
}
let c = document.querySelector(".playlist");

function open_p() {
    c.classList.toggle("active");
}
var element = document.querySelector(".main .music-container .playlist");
var get_element1 = document.querySelector(".main .music-container .playlist .one");
var get_element2 = document.querySelector(".main .music-container .playlist .two");
var get_element3 = document.querySelector(".main .music-container .playlist .three");
var get_element4 = document.querySelector(".main .music-container .playlist .four");
var get_element5 = document.querySelector(".main .music-container .playlist .five");

function clicked_button(clicked) {

    switch (clicked) {
        case "1":
            document.querySelector(".main .music-container .playlist .active_song").classList.remove("active_song");
            get_element1.classList.add("active_song");
            element.classList.remove("active");
            index = 0;
            load_the_song(songs[0]);
            playAudio();
            break;
        case "2":
            document.querySelector(".main .music-container .playlist .active_song").classList.remove("active_song");
            get_element2.classList.add("active_song");
            element.classList.remove("active");
            index = 1;
            load_the_song(songs[1]);
            playAudio();
            break;
        case "3":
            document.querySelector(".main .music-container .playlist .active_song").classList.remove("active_song");
            get_element3.classList.add("active_song");
            element.classList.remove("active");
            index = 2;
            load_the_song(songs[2]);
            playAudio();
            break;
        case "4":
            document.querySelector(".main .music-container .playlist .active_song").classList.remove("active_song");
            get_element4.classList.add("active_song");
            element.classList.remove("active");
            index = 3;
            load_the_song(songs[3]);
            playAudio();
            break;
        case "5":
            document.querySelector(".main .music-container .playlist .active_song").classList.remove("active_song");
            get_element5.classList.add("active_song");
            element.classList.remove("active");
            index = 4;
            load_the_song(songs[4]);
            playAudio();
            break;
    }
}