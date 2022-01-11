let imgsSrc = [];
let img = '../imgs/img';
let imgs = 12;
for (let i = 0; i <= imgs; i++) {
  imgsSrc.push(img + i + '.jpg');
}
// console.log(imgsSrc.length);
let next_btn = document.querySelector('.Next');
let prev_btn = document.querySelector('.Prev');
let Preview = document.querySelector('.container img');
let count = 0;
let slide = document.querySelector('.slider');
let container = document.querySelector('.container');
let counter = container.setAttribute('data-index', `${count +1}/${imgsSrc.length}`);



prev_btn.style.display = 'none';

Preview.src = imgsSrc[0];
next_btn.addEventListener('click', () => {
  count++;
  if (count > 0) {
    prev_btn.style.display = 'block';
  }
  if (count >= imgsSrc.length - 1) {
    next_btn.style.display = 'none';
  }

  // console.log(count);
  counter = container.setAttribute('data-index', `${count +1}/${imgsSrc.length}`);
  Preview.src = imgsSrc[count];
  slide.style.background = `url(${imgsSrc[count]})`
});
prev_btn.addEventListener('click', () => {
  count--;
  if (count <= 0) {
    prev_btn.style.display = 'none';
  }
  if (count <= imgsSrc.length - 1) {
    next_btn.style.display = 'block';
  }

  counter = container.setAttribute('data-index', `${count +1}/${imgsSrc.length}`);
  Preview.src = imgsSrc[count];
  slide.style.background = `url(${imgsSrc[count]})`
  console.log(count);

});