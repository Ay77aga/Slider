window.addEventListener('load', () => {
  let imgsSrc = [];
  let img = '../imgs/img';
  let imgs = 7;
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
  let ul = document.createElement('ul');

  for (let i = 0; i <= imgs; i++) {
    let li = document.createElement('li');
    li.setAttribute('data-i', i);
    li.textContent = i + 1;
    ul.appendChild(li);
  }
  container.appendChild(ul);


  let lis = Array.from(document.querySelectorAll('ul li'));
  lis[count].classList.add('active');

  function sw() {
    lis.forEach(function(li) {
      li.classList.remove('active')
      if (li.dataset.i == count) {
        li.classList.add('active')
      }
      li.addEventListener('click', function(e) {
        console.log(this.textContent);
        lis.forEach((li) => {
          li.classList.remove('active')
        });
        this.classList.add('active');
        count = this.textContent - 1;
        Preview.src = imgsSrc[count];
        btns();
      });
    });
  }

  function btns() {
    if (count <= 0) {
      prev_btn.style.display = 'none';
    }
    if (count <= imgsSrc.length - 1) {
      next_btn.style.display = 'block';
    }
    if (count > 0) {
      prev_btn.style.display = 'block';
    }
    if (count >= imgsSrc.length - 1) {
      next_btn.style.display = 'none';
    }

  }
  sw();
  prev_btn.style.display = 'none';
  Preview.src = imgsSrc[0];
  next_btn.addEventListener('click', () => {
    count++;
    sw();
    btns();
    // console.log(count);
    counter = container.setAttribute('data-index', `${count +1}/${imgsSrc.length}`);
    Preview.src = imgsSrc[count];
  });
  prev_btn.addEventListener('click', () => {
    count--;
    sw();
    btns();
    counter = container.setAttribute('data-index', `${count +1}/${imgsSrc.length}`);
    Preview.src = imgsSrc[count];
    slide.style.background = `url(${imgsSrc[count]})`
    console.log(count);
  });
});