var portfolioItems = document.querySelectorAll( '.portfolio-item' )

portfolioItems.forEach( function( item ) {
    item.setAttribute( 'data-state', 'closed' )
    item.addEventListener( 'click', function() {
        portfolioItems.forEach( function( innerItem ) {
            innerItem.setAttribute( 'data-state', 'closed' )
        })
        item.setAttribute( 'data-state', item.getAttribute( 'data-state') === 'open' ? 'closed' : 'open' )
    })
    console.log( item )
})

portfolioItems[0].setAttribute( 'data-state', 'open' )