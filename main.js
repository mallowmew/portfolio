const portfolioItems = document.querySelectorAll('.portfolio-item')

portfolioItems.forEach(item => {
  item.setAttribute('data-state', 'closed')
  item.addEventListener('click', e => {
    portfolioItems.forEach(innerItem => {
      innerItem.setAttribute('data-state', 'closed')
    })
    item.setAttribute('data-state', item.getAttribute('data-state') === 'open' ? 'closed' : 'open')
  })
})

//portfolioItems[0].setAttribute('data-state', 'open')