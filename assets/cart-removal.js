// on cart remove item click handler check and send remove fancy jacket 
document.addEventListener('DOMContentLoaded', ()=>{
    let removeButtons = document.querySelectorAll('cart-remove-button a');
    for(let i = 0; i < removeButtons.length; i++ ){
        removeButtons[i].addEventListener('click', function(e){
            debugger;
            let a = e.currentTarget;
            if (document.querySelector('[name=id]').value == '44970625073464') {
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
            } 
        });
    } 
    
});