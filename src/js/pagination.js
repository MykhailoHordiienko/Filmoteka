const ulTag = document.querySelector("ul");
let totalPages = 20;
function element(totalPages, page) {
	let liTag = '';
	let activeLi;
	let beforePages = page - 1;
	let afterPages = page + 1;
	if (page > 1) { //якщо значення сторінки більше 1, тоді додає новий li попередня сторінка
		liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1})"><span><i class="fas fa-angles-left"></i></span></li>`;
	}
	if (page > 2) { //якщо значення сторінки більше 2, додає новий тег li
		liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
		if (page > 3) {//якщо значення сторінки більше 3, додає новий тег li з (...)
			liTag += `<li class="dots"><span>...</span></li>`;
		}
	}

	//скільки сторінок або li показано перед поточним li
	if (page == totalPages) { //якщо значення сторінки дорівнює totalpages, віднімаю -2 до значення beforepages
		beforePages = beforePages - 2;
	} else if(page == totalPages - 1){//якщо значення сторінки дорівнює totalpages - 1, віднімаю -1 до значення beforepages
		beforePages = beforePages - 1;
	}

	//скільки сторінок або li показано після поточного li
	if (page == 1) {//якщо значення сторінки дорівнює 1, додаю +2 до значення afterPages
		afterPages = afterPages + 2;
	} else if(page == 2){//якщо значення сторінки дорівнює 2, додаю +1 до значення afterPages
		afterPages = afterPages + 1;
	}

	for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
		if (pageLength > totalPages) {
			continue;
		}
		if (pageLength == 0) {//якщо pageLength дорівнює 0, тоді додає +1 
			pageLength = pageLength + 1;
		}
		if (page == pageLength){ //якщо значення сторінки дорівнює довжині сторінки, тоді призначає активний рядок у змінній activeLi

			activeLi = "active";
		} else {
			activeLi = "";
		}
		liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
		
	}

	if (page < totalPages - 1) { //якщо значення сторінки менше за totalpages на -1, тоді показується остання li або остання сторінка
		
		if (page < totalPages - 2) {//якщо значення сторінки менше за totalpages на -2, додає новий тег li з (...) перед останньою сторінкою
			liTag += `<li class="dots"><span>...</span></li>`;
		}
		liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
	}
	if (page < totalPages){ //якщо значення сторінки менше значення totalPages, тоді додає новий li наступна сторінка
		liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1})"><span><i class="fas fa-angles-right"></i></span></li>`;
	}
	ulTag.innerHTML = liTag;
}
element(totalPages, 5);//виклик вищезгаданої функції з передачею значень