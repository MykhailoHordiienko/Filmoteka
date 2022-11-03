refsHed={
    home:document.querySelector('#home'),
    searchBox:document.querySelector('#search'),
    buttonBox:document.querySelector('#buttons-box'),
    homeL:document.querySelector('#homeL'),
    libraryL:document.querySelector('#libraryL'),
}

refsHed.homeL.addEventListener('click', openHome);
refsHed.libraryL.addEventListener('click', openlibrary);

function openHome(event){
    console.log("object");
    event.preventDefault();
}
function openlibrary(event){
    event.preventDefault();
    console.log("object2");
}