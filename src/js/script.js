window.addEventListener('DOMContentLoaded', () => {
  // burger

  const burgerBtn = document.querySelector('.header__burger-btn')
  const menu = document.querySelector('.header__nav')
  const overlay = document.querySelector('.overlay')
  const body = document.querySelector('body');
  const logo = document.querySelector('.header__logo')

  burgerBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('is-open')) {
      burgerBtn.classList.remove('is-open')
      menu.classList.remove('is-open')
      overlay.classList.remove('is-open')
      logo.classList.remove('is-close')
      body.classList.remove('no-scroll')
    } else {
      burgerBtn.classList.add('is-open')
      menu.classList.add('is-open')
      overlay.classList.add('is-open')
      logo.classList.add('is-close')
      body.classList.add('no-scroll')
    }
  })

  // overlay

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      burgerBtn.classList.remove('is-open')
      menu.classList.remove('is-open')
      overlay.classList.remove('is-open')
      modal.classList.remove('is-open')
      body.classList.remove('no-scroll')
    }
  })

  // modal 

  const openBtn = document.querySelector('.hero__info-button');
  const closeBtn = document.querySelector('.modal__button-close img');
  const modal = document.querySelector('.modal');

  openBtn.addEventListener('click', (e) => {
    if (modal.classList.contains('is-open')) {
      modal.classList.remove('is-open')
      overlay.classList.remove('is-open')
      body.classList.remove('no-scroll')
    } else {
      modal.classList.add('is-open')
      overlay.classList.add('is-open')
      body.classList.add('no-scroll')
      
    }
  })

  closeBtn.addEventListener('click', (e) => {
    console.log(e.target)
    if (modal.classList.contains('is-open')) {
      modal.classList.remove('is-open')
      overlay.classList.remove('is-open')
      body.classList.remove('no-scroll')
    } else {
      modal.classList.add('is-open')
      overlay.classList.add('is-open')
      body.classList.add('no-scroll')
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  })
  
  const closeModal = () => {
    modal.classList.remove('is-open')
    overlay.classList.remove('is-open')
    body.classList.remove('no-scroll')
  }
})
