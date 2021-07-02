
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
            title:"Bandeya",
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



        // progress js work
        let progress=document.getElementById('progress');
        let total_duration=document.getElementById('duration');
        let current_time=document.getElementById('current_time');

        music.addEventListener("timeupdate",(event) => {

            const { currentTime,duration } = event.srcElement;   //inbuilt h yh data degga

            let progress_time=(currentTime/duration)*100;
            progress.style.width=`${progress_time}%`;


            // duration update
            let min_duration=Math.floor(duration/60);
            let sec_duration=Math.floor(duration%60);          //maths.floor decimal hatane k luye

             let tot_duration=`${min_duration}:${sec_duration}`;
             if(duration)                             ///if lgaya taaki jbtk duration pata kre tbtk kcuh n aaye
             total_duration.textContent = `${tot_duration}`;


              //current time update
             let min_current_time=Math.floor(currentTime/60);
             let sec_current_time=Math.floor(currentTime%60);          //maths.floor decimal hatane k luye
             if(sec_current_time< 10)
             {
                sec_current_time=`0${sec_current_time}`
             }
              let tot_current_time=`${min_current_time}:${sec_current_time}`;
                                        ///if lgaya taaki jbtk duration pata kre tbtk kcuh n aaye
              current_time.textContent = `${tot_current_time}`;

        });

        const progress_div=document.getElementById('progress_div');
        //   progress on click

        progress_div.addEventListener('click',(event) =>{
            const{duration}=music;
            let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;

            music.currentTime=move_progress;
        
        })

        music.addEventListener('ended',nextSong);

        next.addEventListener('click',nextSong);
        prev.addEventListener('click',prevSong);

