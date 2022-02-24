window.addEventListener('load', () => {
  let imgs = 22;
  let next_btn = document.querySelector('.Next');
  let prev_btn = document.querySelector('.Prev');
  let Preview = document.querySelector('.container img');
  let count = 0;
  let slide = document.querySelector('.slider');
  let container = document.querySelector('.container');
  let counter = (x) => container.setAttribute('data-index', `${+x+1}/${imgs}`);
  let ul = document.createElement('ul');

  for (let i = 0; i < imgs; i++) {
    let li = document.createElement('li'),
      li_img = document.createElement('img');
      li_img.className = 'm_img';
    li_img.src = `imgs/img${i}.jpg`;
    li.setAttribute('data-i', i);
    li.appendChild(li_img);
    ul.appendChild(li);
  }
  container.appendChild(ul);


  let lis = Array.from(document.querySelectorAll('ul li'));
  lis[count].classList.add('active');
  counter(count);

  function sw() {
    Preview.classList.remove('active');
        slide.style.background = `url(imgs/img${count}.jpg)`
lis.forEach(function(li) {
      li.classList.remove('active')
      if (li.dataset.i == count) {
        li.classList.add('active')
      }
      li.addEventListener('click', function(e) {
        lis.forEach((li) => {
          Preview.classList.remove('active');
          li.classList.remove('active')
          setTimeout(() => Preview.classList.add('active'), 0)
        });
        this.classList.add('active');
        count = this.dataset.i;
        counter(count);
        Preview.src = `imgs/img${count}.jpg`;
        btns();
      });
    });
    setTimeout(() => Preview.classList.add('active'), 0)
  }

  function btns() {
    if (count <= 0) {
      prev_btn.style.display = 'none';
    }
    if (count <= imgs - 1) {
      next_btn.style.display = 'block';
    }
    if (count > 0) {
      prev_btn.style.display = 'block';
    }
    if (count >= imgs - 1) {
      next_btn.style.display = 'none';
    }

  }
  sw();
  prev_btn.style.display = 'none';
  next_btn.addEventListener('click', () => {
    count++;
    sw();
    btns();
    // console.log(count);
    counter(count);
    Preview.src = `imgs/img${count}.jpg`;
    ul.scrollTo({ left: 50 * count, behavior: "smooth" })
  });
  prev_btn.addEventListener('click', () => {
    count--;
    sw();
    btns();
    counter(count);
    Preview.src = `imgs/img${count}.jpg`;
    ul.scrollTo({ left: 50 * count, behavior: "smooth" })
    console.log(count);
  });
});
