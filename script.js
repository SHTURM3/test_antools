const cards = document.querySelectorAll('.card');
const likes = document.querySelectorAll('.card__like');

// Слайдер
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    cssMode: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mouseweel: true,
    keyboard: true,
  });

// Анимация наведения курсора на карточки
function cardHover(item){
  const bg = item.querySelector('.card__bg');
  const btn = item.querySelector('.card__visit');

  item.classList.add('card_active');
  btn.classList.add('orange-btn');
  bg.style.cssText = `visibility: visible;`;
}

function cardReset(item){
  const bg = item.querySelector('.card__bg');
  const btn = item.querySelector('.card__visit');

  item.classList.remove('card_active');
  btn.classList.remove('orange-btn');
  bg.style.cssText = ``;
}

// Активация кнопки лайка при нажатии
function cardLike(item){
  item.classList.toggle('card__like_active');
}

// Слушатели событий
cards.forEach((card) => {
  card.addEventListener('mouseover', () => cardHover(card));
})

cards.forEach((card) => {
  card.addEventListener('mouseout', () => cardReset(card));
})

likes.forEach((like) => {
  like.addEventListener('click', () => cardLike(like));
})





