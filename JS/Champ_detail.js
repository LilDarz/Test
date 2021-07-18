
var url = window.location.href;
console.log(url);
var idx = url.indexOf("?");
var hash = idx != -1 ? url.substring(idx+4): "";
console.log (hash)
localStorage.setItem("id",hash)


const loadCharacter = async() => {
    try {
    // Add id tướng
     const lastIdJSON = localStorage.getItem('id');
     console.log(lastIdJSON)
     const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion/${lastIdJSON}.json`);
     const data = await res.json();
    //  info basic
     lolCharacters = data.data; 
     console.log(lolCharacters);
     const detail = lolCharacters[`${lastIdJSON}`];
     console.log(detail)
     
     const champName = document.getElementById('name');
     const champTitle = document.getElementById('title')
     const description = document.getElementById('descp');
    //   slide skin
    const sl1 = document.getElementById('pic1');
    const sl2 = document.getElementById('pic2');
    const sl3 = document.getElementById('pic3');
    const sl4 = document.getElementById('pic4');
    const sl5 = document.getElementById('pic5');
    const sl6 = document.getElementById('pic6');
    const sl7 = document.getElementById('pic7');
    sl1.innerHTML=`<a class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${lastIdJSON}_0.jpg" alt=""></a>`
    sl2.innerHTML=`<a class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${lastIdJSON}_1.jpg" alt=""></a>`
    sl3.innerHTML=`<a class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${lastIdJSON}_2.jpg" alt=""></a>`
    sl4.innerHTML=`<a class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${lastIdJSON}_3.jpg" alt=""></a>`
    sl5.innerHTML=`<a class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${lastIdJSON}_4.jpg" alt=""></a>`
    sl6.innerHTML=`<a class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${lastIdJSON}_5.jpg" alt=""></a>`
    sl7.innerHTML=`<a class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${lastIdJSON}_6.jpg" alt=""></a>`
   
        //Slideshow
        var slideIndex;
        // KHai bào hàm hiển thị slide
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex].style.display = "block";
            dots[slideIndex].className += " active";
            //chuyển đến slide tiếp theo
            slideIndex++;
            //nếu đang ở slide cuối cùng thì chuyển về slide đầu
            if (slideIndex > slides.length - 1) {
                slideIndex = 0
            }
            //tự động chuyển đổi slide sau 3s
            setTimeout(showSlides, 3000);
        }
        //mặc định hiển thị slide đầu tiên 
        showSlides(slideIndex = 0);
        


    //  display info    
     champName.innerText = `${lastIdJSON}`;
     champTitle.innerText = detail.title;
     description.innerText = detail.lore;
    //  Lấy info passive
     const champPassName = document.getElementById('nameP')
     const champPassImg = document.getElementById('skillImgP');
     const passiveName = detail.passive.name;
     const passiveImg = detail.passive.image.full;
     const passiveDesp = detail.passive.description;
     champPassName.innerText = passiveName;
     champPassImg.innerHTML = `<span class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/passive/${passiveImg}" alt=""></span>`
     const champPassDisc = document.getElementById('skillDiscriptionP');
     champPassDisc.innerText = passiveDesp   
     //  Lấy info Q
     const champQName = document.getElementById('nameQ')
     const champQImg = document.getElementById('skillImgQ');
     const champQDisc = document.getElementById('skillDiscriptionQ');
     const qName = detail.spells[0].name;
     const qImg = detail.spells[0].image.full;
     const qDisc = detail.spells[0].description;
     champQName.innerText = qName;
     champQImg.innerHTML = `<span class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${qImg}" alt=""></span>`;
     champQDisc.innerText = qDisc;
     
     // Lấy info W
     const champWName = document.getElementById('nameW')
     const champWImg = document.getElementById('skillImgW');
     const champWDisc = document.getElementById('skillDiscriptionW');
     const wName = detail.spells[1].name;
     const wImg = detail.spells[1].image.full;
     const wDisc = detail.spells[1].description;
     champWName.innerText = wName;
     champWImg.innerHTML = `<span class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${wImg}" alt=""></span>`;
     champWDisc.innerText = wDisc;
     
    //   Lấy info E
    const champEName = document.getElementById('nameE')
    const champEImg = document.getElementById('skillImgE');
    const champEDisc = document.getElementById('skillDiscriptionE');
    const eName = detail.spells[2].name;
    const eImg = detail.spells[2].image.full;
    const eDisc = detail.spells[2].description;
    champEName.innerText = eName;
    champEImg.innerHTML = `<span class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${eImg}" alt=""></span>`;
    champEDisc.innerText = eDisc;

    // Lấy info R
    const champRName = document.getElementById('nameR')
    const champRImg = document.getElementById('skillImgR');
    const champRDisc = document.getElementById('skillDiscriptionR');
    const rName = detail.spells[3].name;
    const rImg = detail.spells[3].image.full;
    const rDisc = detail.spells[3].description;
    champRName.innerText = rName;
    champRImg.innerHTML = `<span class="champ__image"><img src="http://ddragon.leagueoflegends.com/cdn/11.14.1/img/spell/${rImg}" alt=""></span>`;
    champRDisc.innerText = rDisc;


    }catch (error) {
        console.log(error)
    }
}
loadCharacter()

