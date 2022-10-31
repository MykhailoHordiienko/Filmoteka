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

const refs = {
    watchedBtn:document.querySelector('.watched'),
    queueBtn:document.querySelector('.queue'),
    adwBtn:document.querySelector('.adw'),
    atqBtn:document.querySelector('.atq'),

    gokBtn:document.querySelector('.gok'),
    }
    
    const LOCAL_STORAGE_KEY = 'films';
    const LOCAL_STORAGE_KEY_QUEUE='queue';
    let deletePosition = - 1; 
    let deletePositionQ = - 1; 
    let b = 0;


    try{
        const saveFilm = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!saveFilm) {
            localStorage.setItem (LOCAL_STORAGE_KEY, JSON.stringify([])); 
        };
        const saveFilm1 = localStorage.getItem(LOCAL_STORAGE_KEY_QUEUE);
        if (!saveFilm1) { 
            localStorage.setItem (LOCAL_STORAGE_KEY_QUEUE, JSON.stringify([])); 
        };
    } catch (error) {
            console.log(error);            
        }

        function checkВutton(object, locstorkey, refsBtn, tekst) {
            let arrayFilms = []
            try {
                arrayFilms = JSON.parse(localStorage.getItem(locstorkey)); 
            } catch (error) {
                console.log(error);            
            }
            if (!arrayFilms.length){
                console.log("Список фільмів збережених у памяті пустий кнопка add to watch");
                refsBtn.innerText = 'ADD TO ' + tekst;
                return 0;
            } 
            else
            {
            const resultSearch = arrayFilms.findIndex(option => option.id === object.id)
                if (resultSearch > - 1){
                    console.log("Фільм знаходиться в збережених у памяті кнопка remove під номером - ", resultSearch);
                    refsBtn.innerText = 'REMOVE TO ' + tekst;
                return resultSearch;
                } else
                {
                    console.log("Фільма немає в збережених у памяті кнопка add to watch");
                    refsBtn.innerText = 'ADD TO ' + tekst;
                return - 1;
                }
            }
        }

    function addFilm(object, locstorkey, refsBtn, tekst) {
        try {
            const arrayF = JSON.parse(localStorage.getItem(locstorkey));
            arrayF.push(object)
            localStorage.setItem (locstorkey, JSON.stringify(arrayF));  
            console.log('фільм додано')
            refsBtn.innerText = 'REMOVE TO ' + tekst;
        } catch (error) {
            console.log(error);            
        }
        }
    function removeFilm(deleteP, locstorkey, refsBtn, tekst) {
        try {
            const arrayF = JSON.parse(localStorage.getItem(locstorkey));
            arrayF.splice(deleteP, 1)
            localStorage.setItem (locstorkey, JSON.stringify(arrayF));
            console.log('фільм видалено')
            refsBtn.innerText = 'ADD TO ' + tekst;   
        } catch (error) {
            console.log(error);            
        }
        }

    refs.adwBtn.addEventListener('click', () => {
        const teksT = refs.adwBtn.innerText;
        console.log(teksT);
        (teksT === 'ADD TO WATCHED') ? addFilm(films[b],LOCAL_STORAGE_KEY, refs.adwBtn,'WATCHED') : removeFilm(deletePosition, LOCAL_STORAGE_KEY, refs.adwBtn, 'WATCHED');
    })
        
        function massiv(locstorkey){
        try {
            return JSON.parse(localStorage.getItem(locstorkey));
        
        } catch (error) {
            console.log(error);            
    }}
    refs.watchedBtn.addEventListener('click', () => {
        massiv(LOCAL_STORAGE_KEY)
        // console.log(massiv(LOCAL_STORAGE_KEY)); 
    })

    function massiv(locstorkey){
        try {
            return JSON.parse(localStorage.getItem(locstorkey));
        
        } catch (error) {
            console.log(error);            
    }}
    refs.queueBtn.addEventListener('click', () => {
        massiv(LOCAL_STORAGE_KEY_QUEUE)
        // console.log(massiv(LOCAL_STORAGE_KEY_QUEUE))
    })

    refs.atqBtn.addEventListener('click', () => {
        const teksT = refs.atqBtn.innerText;
        console.log(teksT);
        (teksT === 'ADD TO QUEUE') ? addFilm(films[b],LOCAL_STORAGE_KEY_QUEUE, refs.atqBtn,'QUEUE') : removeFilm(deletePositionQ, LOCAL_STORAGE_KEY_QUEUE, refs.atqBtn, 'QUEUE');
        })







    refs.gokBtn.addEventListener('click', () => {
        b = Math.floor(Math.random() * 7);
        console.log('Рандомний фільм', films[b]);
        deletePosition = checkВutton(films[b], LOCAL_STORAGE_KEY, refs.adwBtn,'WATCHED');
        deletePositionQ = checkВutton(films[b], LOCAL_STORAGE_KEY_QUEUE, refs.atqBtn,'QUEUE');
        
    })


