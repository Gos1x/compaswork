const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
const licenceDiv = document.querySelector('.licence'); // Получаем элемент с классом 'licence'
const politicsDiv = document.querySelector('.politics'); // Получаем элемент с классом 'politics'
const informationDiv = document.querySelector('.information'); // Получаем элемент с классом 'information'
let imageIndex = 0;

function show(index) {
  images[imageIndex].classList.remove('active');
  images[index].classList.add('active');
  imageIndex = index;

  // Скрываем или показываем элементы в зависимости от индекса слайда
  if (imageIndex === 0) { // Если находимся на первом слайде
    licenceDiv.style.display = 'none'; // Скрываем 'licence'
    politicsDiv.style.display = 'flex'; // Показываем 'politics'
    informationDiv.style.display = 'flex'; // Показываем 'information'
  } else if (imageIndex === 1) { // Если находимся на втором слайде
    licenceDiv.style.display = 'flex'; // Показываем 'licence'
    politicsDiv.style.display = 'none'; // Скрываем 'politics'
    informationDiv.style.display = 'flex'; // Показываем 'information'
  } else { // Для всех остальных слайдов
    licenceDiv.style.display = 'flex'; // Показываем 'licence'
    politicsDiv.style.display = 'flex'; // Показываем 'politics'
    informationDiv.style.display = 'none'; // Скрываем 'information'
  }
}

controlls.forEach((e) => {
  e.addEventListener('click', (event) => {
    let index = imageIndex;
    if (event.target.classList.contains('prev')) {
      index = imageIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
    } else if (event.target.classList.contains('next')) {
      index = imageIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
    }
    show(index);
  });
});

show(imageIndex); // Показываем начальный слайд
