// on cart remove item click handler check and send remove fancy jacket 
document.addEventListener('DOMContentLoaded', ()=>{
    let removeButtons = document.querySelectorAll('cart-remove-button a');
    for(let i = 0; i < removeButtons.length; i++ ){
        removeButtons[i].addEventListener('mousedown', function(e){
            let a = e.currentTarget;
            if (a.href.includes('id=44970625073464')) {
                e.preventDefault();

                fetch('/cart/update.js', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ updates:{
                    44964875731256: 0,
                    44970625073464:0}
                    })
                }).then(response => {
                    setTimeout(()=>{
                        window.location.href = '/cart';
                    })
                }).catch(error => {
                    // handle error
                });
            } 
        });
    } 
    
});