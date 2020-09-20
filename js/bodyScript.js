// resize body

var container=document.querySelector('.container');
container.style.height=window.innerHeight+"px";

window.addEventListener('resize',function(){
    container.style.height=window.innerHeight+"px";
})


// lifer body

var oldOffset=0;
var newOffset=0;
window.addEventListener('scroll',function(){
    oldOffset=newOffset;
    newOffset=window.pageYOffset;

    if(newOffset>oldOffset){
        document.querySelector('#lifter').style.visibility='visible';
    }else if(oldOffset>newOffset && newOffset===0){
        document.querySelector('#lifter').style.visibility='hidden';
    }
});


//scrool body
setTimeout(function() {

    var progress = document.getElementById('progress-bar');
    var totalHeight = document.body.scrollHeight - window.innerHeight;

    window.addEventListener('scroll', function() {
        var progressHeight = (window.pageYOffset / totalHeight) * 280;

        progress.style.height = `${progressHeight}%`;
    });

}, 0);

// slider

$(document).ready(function(){
    var imageItems = $('.slider li').length;
    var imgPos=1;
    for(i = 1; i <= imageItems; i++){
        $('.pagination').append('<li><span class="fas fa-circle"></span></li>');
    }
    // slide show event
    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'color' : '#CD6E2E'});
    // slider button
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    setInterval(function(){
        nextSlider();
    },4000)
    // 
    
    function pagination(){
        var paginationPos= $(this).index() + 1;

        $('.slider li ').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn();

        $('.pagination li').css({'color' : '#858585'});
        $(this).css({'color' : '#CD6E2E'});
    }

    function nextSlider(){
        if(imgPos >= imageItems){
            imgPos=1;
        }else{
            imgPos++;
        }

        $('.pagination li').css({'color' : '#858585'});
        $('.pagination li:nth-child(' + imgPos + ')').css({'color' : '#CD6E2E'});


        $('.slider li ').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }

    function prevSlider(){
        if(imgPos <= 1){
            imgPos= imageItems;
        }else{
            imgPos--;
        }

        $('.pagination li').css({'color' : '#858585'});
        $('.pagination li:nth-child(' + imgPos + ')').css({'color' : '#CD6E2E'});


        $('.slider li ').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }
});


// grid estate

var estates = [
    {
      src: '../img/slider/1.jpg',
      title: 'خانه ویلایی ',
      price: '1000$',
    },
    {
      src: '../img/slider/2.jpg',
      title: 'خانه کلنگی ',
      price: '2000$',
    },
    {
      src: '../img/slider/3.jpg',
      title: 'خانه آپارتمانی ',
      price: '3000$',
    },
    {
      src: '../img/slider/4.jpg',
      title: 'خانه نقلی ',
      price: '4000$',
    },
    {
      src: '../img/slider/5.jpg',
      title: 'خانه ویلایی ',
      price: '5000$',
    },
    {
      src: '../img/slider/6.jpg',
      title: 'خانه ویلایی ',
      price: '6000$',
    },
  ];
  
var lists=document.querySelector('.lists');
var searchInput=document.querySelector('#search');
var button=document.querySelector('#search-btn');
var searchResult = [];
  
for (const i in estates) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    var h2Tag = document.createElement('h2');
    var pTag = document.createElement('p');
  
    img.setAttribute('src', estates[i].src);
    h2Tag.innerHTML = estates[i].title;
    pTag.innerHTML = estates[i].price;
  
    div.appendChild(img);
    div.appendChild(h2Tag);
    div.appendChild(pTag);
    lists.appendChild(div);
  
    pTag.classList.add('p-tag');
    img.classList.add('img-tag');
}
  
function search(array, word){
    for (const i in array) {
      if (array[i].title.includes(word)) {
        searchResult.push(array[i]);
      }
    }
    return searchResult;
};
button.addEventListener('click', function () {
    searchResult = [];
    lists.innerHTML = '';
    search(estates, searchInput.value);
    for (const i in searchResult) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        var h2Tag = document.createElement('h2');
        var pTag = document.createElement('p');
    
        img.setAttribute('src', searchResult[i].src);
        h2Tag.innerHTML = searchResult[i].title;
        pTag.innerHTML = searchResult[i].price;
    
        div.appendChild(img);
        div.appendChild(h2Tag);
        div.appendChild(pTag);
        lists.appendChild(div);
    
        pTag.classList.add('p-tag');
        img.classList.add('img-tag');
    }
});














