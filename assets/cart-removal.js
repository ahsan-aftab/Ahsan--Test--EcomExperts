document.addEventListener('DOMContentLoaded', ()=>{

    let removeButtons = document.querySelectorAll('cart-remove-button a');
    for(let i = 0; i < removeButtons.length; i++ ){
        removeButtons[i].addEventListener('click', function(e){
            let a = e.currentTarget;
            setTimeout(()=>{
                fetch('/cart/update.js', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ updates:{
                    44964875731256: 0}
                    })
                }).then(response => {
                    setTimeout(()=>{
                        window.location.href = '/cart';
                    })
                }).catch(error => {
                    // handle error
                });
            },100);
                
        });
    } 
    
});