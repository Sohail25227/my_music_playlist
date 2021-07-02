
        const music=document.querySelector('audio');
        const img=document.querySelector('img'); 
        const play =document.getElementById('play');
        const artist =document.getElementById('artist');
        const title =document.getElementById('title');
        const next =document.getElementById('next');
        const prev =document.getElementById('prev');


        const songs =  [
        {
            name:"music-1",
            title:"Naina",
            artist:"Neha Kakkar",

        },
        {
            name:"music-2",
            title:"Bandeya re Bandeya",
            artist:"ARIJIT SINGH",

        },
        {
            name:"music-3",
            title:"Kabhi Yaado Mein",
            artist:"Palak Muchhal",

        },
        {
            name:"music-4",
            title:"Dil Royi Jaye",
            artist:"Arijit Singh",

        }
       ];

        let isplaying=false;
          //for playing functionality
        const playMusic= () =>{
            music.play();
            isplaying=true;
            play.classList.replace("fa-play","fa-pause");
            img.classList.add("anime");
        }

        //for pause functionality
        const pauseMusic= () =>{
            music.pause();
            isplaying=false;
            play.classList.replace("fa-pause","fa-play");
            img.classList.remove("anime");
        }

        play.addEventListener('click',() =>{

            if(isplaying)
            pauseMusic();
            else
            playMusic();

        })

        //changing the music data 
        const loadSong = (songs) =>{
            title.textContent=songs.title;
            artist.textContent=songs.artist;
            music.src="music/"+ songs.name + ".mp3";
            img.src="images/" +songs.name + ".jpg";

        };
        songIndex=1;
        
        const nextSong = () => {
            songIndex=(songIndex+1)%songs.length;  //mode kiya h kyuki lenght k bahar n jaye 3+1 % 4 =0
            loadSong(songs[songIndex]);
            playMusic();

        }
        const prevSong = () => {
            songIndex=(songIndex - 1 + songs.length)%songs.length;  //3-1=2  2+4=6  6%4=2
            loadSong(songs[songIndex]);
            playMusic();

        }

        next.addEventListener('click',nextSong);
        prev.addEventListener('click',prevSong);

