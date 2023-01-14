const pigInsideLengths = [];
function setInsidePaths() {
  let insidePaths = Array.from(document.querySelectorAll('g:not(.pig-inside) path'));
  insidePaths.forEach((path) => {
    const totLen = path.getTotalLength();
    path.style.strokeDasharray = `0 ${totLen + 2}`;
    path.style.strokeDashoffset = '1px';
  });
  insidePaths = Array.from(document.querySelectorAll('g.pig-inside path'));
  insidePaths.forEach((path) => {
    const totLen = path.getTotalLength();
    path.style.strokeDasharray = `${totLen + 2} ${totLen + 2}`;
    path.style.strokeDashoffset = '1px';
    pigInsideLengths.push(totLen + 2.2);
  });
}

const pig = document.querySelector('.pig')
function animate() {
  setInsidePaths();
  anime({
    targets: '.pig + g path',
    strokeDashoffset: [{
      value: (_, i) => `${pigInsideLengths[i]}px`,
      duration: 500,
      easing: 'easeOutQuad',
      delay: (_, i) => 1000 + i * 15
    },
                       {
                         value: 0,
                         duration: 500,
                         easing: 'easeOutQuad',
                         delay: (_, i) => 8700 + i * 15
                       }
                      ]
  });
  anime({
    targets: '.pig',
    strokeDashoffset: {
      value: [0, -319],
      duration: 1000,
      easing: 'easeOutQuad',
      delay: 1000
    },
    complete: () => {
      pig.style.strokeDasharray = '0 320';
      pig.style.strokeDashoffset = '1px';
    }
  });
  anime({
    targets: '.calculator + g path',
    strokeDasharray: {
      value: (el) => `${el.getTotalLength() + 1} ${el.getTotalLength() + 2}`,
      duration: 500,
      easing: 'easeOutQuad',
      delay: (_, i) => 1400 + i * 15
    },
    strokeDashoffset: {
      value: (el) => `${-el.getTotalLength() - 1}px`,
      duration: 500,
      easing: 'easeOutQuad',
      delay: (_, i) => 4900 + i * 15
    }
  });
  anime({
    targets: '.calculator',
    strokeDasharray: {
      value: ['0 252', '252 252'],
      easing: 'easeOutQuad',
      duration: 1000,
      delay: 1300
    },
    strokeDashoffset: {
      value: [0, -252],
      easing: 'easeOutQuad',
      duration: 1000,
      delay: 5300
    }
  });
  anime({
    targets: '.wallet',
    strokeDasharray: {
      value: ['0 240', '240 240'],
      easing: 'easeOutQuad',
      duration: 1000,
      delay: 5600
    },
    strokeDashoffset: {
      value: [0, -240],
      easing: 'easeOutQuad',
      duration: 1000,
      delay: 9600
    }
  });
  anime({
    targets: '.wallet + g path',
    strokeDasharray: {
      value: (el) => `${el.getTotalLength() + 1} ${el.getTotalLength() + 2}`,
      duration: 500,
      easing: 'easeOutQuad',
      delay: (_, i) => 5700 + i * 15
    },
    strokeDashoffset: {
      value: (el) => `${-el.getTotalLength() - 1}px`,
      duration: 500,
      easing: 'easeOutQuad',
      delay: (_, i) => 9200 + i * 15
    }
  });
  setTimeout(() => {
    anime({
      targets: '.pig',
      strokeDasharray: {
        value: ['0 318', '319 319'],
        easing: 'easeOutQuad',
        duration: 1000,
        delay: 900
      }
    });
  }, 9000);
}

function schedule() {
  animate();
  setTimeout(schedule, 12900);
}
schedule();