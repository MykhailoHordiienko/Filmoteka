// const films = [
//     { id: "913290", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
//     { id: "49046", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
//     { id: "541134", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
//     { id: "83659", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
//     { id: "203085", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
//     { id: "619730", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
//     { id: "436270", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
//     { id: "1032950", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
//     { id: "157061", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
// ];

// const refs = {
//     watchedBtn:document.querySelector('.watched-btn'),
//     queueBtn:document.querySelector('.queue-btn'),
    

//     gokBtn:document.querySelector('.gok'),
//     }
    import {createlibraryGallery}  from './gallery.js';
    export const filmsTemps = { 
        filmArray:[],
        filmId:0,
        FilmById:null,
        deletePosition: - 1, 
        deletePositionQ:- 1, 
        LOCAL_STORAGE_KEY:'films',
        LOCAL_STORAGE_KEY_QUEUE: 'queue',
        watchedBtn:document.querySelector('.watched-btn'),
        queueBtn:document.querySelector('.queue-btn'),
        WATCHED:[],
        QUEUE:[],
        adwBtn:null,
         atqBtn:null,
         arrayFilms:[],
         arrayF:[],
         resultSearch:-1,
         saveFilm: null, 
         saveFilm1: null,
         tekstT:'',
         teksTq:'',
        resetFilms(){
            this.init();
            this.filmArray = [];
        },
        setFilms(arrayA) {
            this.resetFilms();
            this.filmArray = arrayA;
        },
        setFilmId(id){
            this.filmId=Number(id);
        },
        setDw(pos){
            this.deletePosition=pos;
        },
        setDq(pos){
            this.deletePositionQ=pos;
        },
        searchFilm(){
           this.FilmById=this.filmArray.find(movi=>movi.id===this.filmId)
        },
       
        renameBtnW(){
           this.teksT = this.adwBtn.innerText;
            (this.teksT === 'ADD TO WATCHED') ? this.addFilm(this.FilmById,this.LOCAL_STORAGE_KEY, this.adwBtn,'WATCHED') : this.removeFilm(this.deletePosition, this.LOCAL_STORAGE_KEY, this.adwBtn, 'WATCHED');
        },
        renameBtnQ(){
            this.teksTq = this.atqBtn.innerText;
            (this.teksTq === 'ADD TO QUEUE') ? this.addFilm(this.FilmById,this.LOCAL_STORAGE_KEY_QUEUE, this.atqBtn,'QUEUE') : this.removeFilm(this.deletePositionQ, this.LOCAL_STORAGE_KEY_QUEUE, this.atqBtn, 'QUEUE');
        },
        addlisten(){ 
           this.adwBtn=document.querySelector('.modal-watched');
           this.atqBtn=document.querySelector('.modal-queue'); 
           this.adwBtn.addEventListener('click', this.renameBtnW.bind(this));
            this.atqBtn.addEventListener('click', this.renameBtnQ.bind(this))
            },
            removlisten(){ 
            this.adwBtn.removeEventListener('click', this.renameBtnW.bind(this));
            this.atqBtn.removeEventListener('click', this.renameBtnQ.bind(this));    
            },
        addFilm(object, locstorkey, refsBtn, tekst) {
            // --- Додавання фільму до localStorage
            try {
                this.arrayF=[];
                this.arrayF = JSON.parse(localStorage.getItem(locstorkey));
                this.arrayF.push(object)
                localStorage.setItem (locstorkey, JSON.stringify(this.arrayF));  
                console.log('фільм додано')
                refsBtn.innerText = 'REMOVE TO ' + tekst;
            } catch (error) {
                console.log(error);            
            }
            },
             removeFilm(deleteP, locstorkey, refsBtn, tekst) {
            // --- Видалення фільму з localStorage
            try {
                this.arrayF=[];
                this.arrayF = JSON.parse(localStorage.getItem(locstorkey));
                this.arrayF.splice(deleteP, 1)
                localStorage.setItem (locstorkey, JSON.stringify(this.arrayF));
                console.log('фільм видалено')
                refsBtn.innerText = 'ADD TO ' + tekst;   
            } catch (error) {
                console.log(error);            
            }
            },
            statusBtn (){
                this.searchFilm()
                this.addlisten()
                this.setDw(this.checkВutton(this.FilmById, this.LOCAL_STORAGE_KEY, this.adwBtn,'WATCHED'));
                this.setDq(this.checkВutton(this.FilmById,this.LOCAL_STORAGE_KEY_QUEUE, this.atqBtn,'QUEUE'));

            },
            checkВutton(object, locstorkey, refsBtn, tekst) {
                this.arrayFilms = []
                try {
                    this.arrayFilms = JSON.parse(localStorage.getItem(locstorkey)); 
                } catch (error) {
                    console.log(error);            
                }
                if (!this.arrayFilms.length){
                    // --- Список фільмів збережених у памяті пустий кнопка add to watch"
                    refsBtn.innerText = 'ADD TO ' + tekst;
                    return 0;
                } 
                else
                {
                 this.resultSearch = this.arrayFilms.findIndex(option => option.id === object.id)
                    console.log(this.resultSearch);
                 if (this.resultSearch > - 1){
                        // --- Фільм знаходиться в збережених у памяті кнопка remove під номером - ", resultSearch
                        refsBtn.innerText = 'REMOVE TO ' + tekst;
                    return this.resultSearch;
                    } else
                    {
                        // --- Фільма немає в збережених у памяті кнопка add to watch
                        refsBtn.innerText = 'ADD TO ' + tekst;
                    return - 1;
                    }
                }
            },
            
   massivout(locstorkey){
        try {
            return JSON.parse(localStorage.getItem(locstorkey));
        
        } catch (error) {
            console.log(error);            
    }},

            init(){
                try{
                    this.saveFilm = localStorage.getItem(this.LOCAL_STORAGE_KEY);
                    if (!this.saveFilm) {
                        localStorage.setItem (this.LOCAL_STORAGE_KEY, JSON.stringify([])); 
                    };
                    this.saveFilm1 = localStorage.getItem(this.LOCAL_STORAGE_KEY_QUEUE);
                    console.log(this.saveFilm1);
                    if (!this.saveFilm1) { 
                        localStorage.setItem (this.LOCAL_STORAGE_KEY_QUEUE, JSON.stringify([])); 
                    };
                } catch (error) {
                        console.log(error);            
                    }
            },

                        inWatched(){createlibraryGallery(massiv(LOCAL_STORAGE_KEY))},
                        inQueue(){createlibraryGallery(this.QUEUE=massiv(LOCAL_STORAGE_KEY_QUEUE))},

            initL(){
                this.watchedBtn.addEventListener('click', this.inWatched.bind(this)); 
                this.queueBtn.addEventListener('click', this.inQueue.bind(this));

            },

    }
    
    

    
    // let b = 0;

   

        // function checkВutton(object, locstorkey, refsBtn, tekst) {
        //     let arrayFilms = []
        //     try {
        //         arrayFilms = JSON.parse(localStorage.getItem(locstorkey)); 
        //     } catch (error) {
        //         console.log(error);            
        //     }
        //     if (!arrayFilms.length){
        //         // --- Список фільмів збережених у памяті пустий кнопка add to watch"
        //         refsBtn.innerText = 'ADD TO ' + tekst;
        //         return 0;
        //     } 
        //     else
        //     {
        //     const resultSearch = arrayFilms.findIndex(option => option.id === object.id)
        //         if (resultSearch > - 1){
        //             // --- Фільм знаходиться в збережених у памяті кнопка remove під номером - ", resultSearch
        //             refsBtn.innerText = 'REMOVE TO ' + tekst;
        //         return resultSearch;
        //         } else
        //         {
        //             // --- Фільма немає в збережених у памяті кнопка add to watch
        //             refsBtn.innerText = 'ADD TO ' + tekst;
        //         return - 1;
        //         }
        //     }
        // }

  

    // refs.adwBtn.addEventListener('click', () => {
    //     const teksT = refs.adwBtn.innerText;
    //     console.log(teksT);
    //     (teksT === 'ADD TO WATCHED') ? addFilm(films[b], LOCAL_STORAGE_KEY, refs.adwBtn,'WATCHED') : removeFilm(deletePosition, LOCAL_STORAGE_KEY, refs.adwBtn, 'WATCHED');
    // })
        
    //     function massiv(locstorkey){
    //     try {
    //         return JSON.parse(localStorage.getItem(locstorkey));
        
    //     } catch (error) {
    //         console.log(error);            
    // }}
    // refs.watchedBtn.addEventListener('click', () => {
    //     massiv(LOCAL_STORAGE_KEY)
    //     // console.log(massiv(LOCAL_STORAGE_KEY)); 
    // })

    // function massiv(locstorkey){
    //     try {
    //         return JSON.parse(localStorage.getItem(locstorkey));
        
    //     } catch (error) {
    //         console.log(error);            
    // }}
    // refs.queueBtn.addEventListener('click', () => {
    //     massiv(LOCAL_STORAGE_KEY_QUEUE)
    //     // console.log(massiv(LOCAL_STORAGE_KEY_QUEUE))
    // })

    // refs.atqBtn.addEventListener('click', () => {
    //     const teksT = refs.atqBtn.innerText;
    //     console.log(teksT);
    //     (teksT === 'ADD TO QUEUE') ? addFilm(films[b],LOCAL_STORAGE_KEY_QUEUE, refs.atqBtn,'QUEUE') : removeFilm(deletePositionQ, LOCAL_STORAGE_KEY_QUEUE, refs.atqBtn, 'QUEUE');
    //     })




 
