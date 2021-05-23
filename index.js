const btn = document.getElementById('btnList').querySelectorAll('[data-fileter]');
const content = document.getElementById('content').querySelectorAll('[data-category]');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    let file = btn[i].getAttribute('data-fileter');
    let res = document.querySelectorAll('[data-category="' + file + '"]');
    if (file == 'allItems') {
      content.forEach((e) => {
        e.classList.remove('inactive');
      });
    } else {
      content.forEach((e) => {
        e.classList.add('inactive');
      });
      res.forEach((e) => {
        e.classList.remove('inactive');
      });
    }
  });
};
