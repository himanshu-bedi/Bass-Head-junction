console.log("Welcome to BASS HEAD JUNCTION");
let  progress;

let idx=0;
let playbutton=document.getElementById("PLAY");
let progressbar=document.getElementById("progressbar");
let songnamebottom=document.getElementById("songnamebottom");
let timestamp=document.getElementById("timestamp");
let curr=0;
let songs=[
    
    {song:"I like it" ,songpath:"songs/1.mp3" ,coverpath :"covers/1.jpg"},
    {song:"Tughe bhula diya" ,songpath:"songs/2.mp3" ,coverpath :"covers/2.jpg"},
    {song:"Shoorver III" ,songpath:"songs/3.mp3" ,coverpath :"covers/3.jpg"},
    {song:"De dana dan" ,songpath:"songs/4.mp3" ,coverpath :"covers/4.jpg"},
    {song:"Night Changes" ,songpath:"songs/5.mp3" ,coverpath :"covers/5.jpg"},
    {song:"Go Down deh" ,songpath:"songs/6.mp3" ,coverpath :"covers/6.jpg"},
    {song:"Pal-Female" ,songpath:"songs/7.mp3" ,coverpath :"covers/7.jpg"},
    {song:"Katra Katra" ,songpath:"songs/8.mp3" ,coverpath :"covers/8.jpg"},
    {song:"Aukaat " ,songpath:"songs/9.mp3" ,coverpath :"covers/9.jpg"},
    {song:"Excuses" ,songpath:"songs/10.mp3" ,coverpath :"covers/10.jpg"},
]

let songItem=Array.from(document.getElementsByClassName("songItem"));

let audio=new Audio('songs/1.mp3');
let gif=document.getElementById("gif");


playbutton.addEventListener('click',()=>{
    console.log("clicked");
    if(audio.paused||audio.currentTime<=0)
    {
        audio.play();
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audio.pause();
        playbutton.classList.remove('fa-circle-pause');
        playbutton.classList.add('fa-circle-play');
        gif.style.opacity=0;
        
    }
})

audio.addEventListener('timeupdate',()=>{
 
   progress=parseInt((audio.currentTime/audio.duration)*100);

   progressbar.value=progress;
//    curr++;
//    timestamp.innerHTML=curr;
  
})

let vall=document.getElementById("speed"); 
let num=1;

document.getElementById("increase").addEventListener("click",()=>{
    if(audio.playbackRate==1)
    audio.playbackRate=1.25;
    else if(audio.playbackRate==1.25)
    audio.playbackRate=1.50;

    vall.innerHTML=audio.playbackRate+" x";
})
document.getElementById("decrease").addEventListener("click",()=>{
    if(audio.playbackRate==1.5)
    audio.playbackRate=1.25;
   else if(audio.playbackRate==1.25)
    audio.playbackRate=1;
    vall.innerHTML=audio.playbackRate+" x";
})


progressbar.addEventListener('change',()=>{
    audio.currentTime=progressbar.value*audio.duration/100;
})


songItem.forEach((song,i)=>{
   song.getElementsByTagName("img")[0].src=songs[i].coverpath;
   song.getElementsByClassName("songName")[0].innerHTML=songs[i].song;

})


const makeverysongplay =()=>{
    Array.from(document.getElementsByClassName("songItem")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

songItem.forEach((song)=>{
   
    song.addEventListener('click',(e)=>{
        //makeverysongplay();
        idx=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause")
        audio.src=`songs/${idx+1}.mp3`;
        audio.currentTime=0;
        audio.play();
        playbutton.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        songnamebottom.innerHTML=songs[idx].song;
        gif.style.opacity=1;

    })
})


document.getElementById("previous").addEventListener("click",()=>{
    if(idx<=0)
    idx=9;
    else
    idx=idx-1;

    console.log(idx);

        audio.src=`songs/${idx+1}.mp3`;
        audio.currentTime=0;
        audio.play();
        playbutton.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        songnamebottom.innerHTML=songs[idx].song;
        gif.style.opacity=1;
})


document.getElementById("forward").addEventListener("click",()=>{
    if(idx>=9)
    idx=0;
    else
    idx=idx+1;

    console.log(idx);

        audio.src=`songs/${idx+1}.mp3`;
        audio.currentTime=0;
        audio.play();
        playbutton.classList.add("fa-circle-pause")
        playbutton.classList.remove("fa-circle-play")
        songnamebottom.innerHTML=songs[idx].song;
        gif.style.opacity=1;
})
