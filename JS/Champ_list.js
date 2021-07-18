const characterList = document.getElementById('champion__list');
// const searchbar = document.getElementById('inputChampName');
let lolCharacters = [];
// console.log(searchbar);




const loadCharacter = async() => {
   try {
    const res = await fetch("http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json");
    const data = await res.json();
    console.log(data.data)
    lolCharacters = data.data; 
    console.log(lolCharacters)
    var templateHtml =`` 
    for (i in lolCharacters) {
        let b = lolCharacters[i].id;
            templateHtml +=
            `<a class="champ" id="${b}" href="./Champ_detail.html?id=${b}" onlick="" >
                <span class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/champion/${b}.png" alt=""></span>
                <span class="champ__name">${b}</span>
            </a>`
            
        }
    document.getElementById("champion__list").innerHTML = templateHtml;
   } catch (error) {
       console.log(error)
   }
};

loadCharacter();

   
// function search() {
//     var input, filter, li, a, txtValue;
//     input = document.getElementById('inputChampName');
//     filter = input.nodeValue.toUpperCase();
//     li = ul.getElementbyTagName('li');

//     for (let i in ul) {
//         a = li[i].getElementbyTagName('span')[0];
//         txtValue = a.innerHTML;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = " ";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

