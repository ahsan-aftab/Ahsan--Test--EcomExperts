let url = window.location.href;
if(url.includes('variant')){
    window.location.href = window.location.origin + window.location.pathname;
}

document.addEventListener("DOMContentLoaded", function(){
    let sizeDOMElem =document.querySelector('select[name="options[Size]"]');
    if(sizeDOMElem && sizeDOMElem.options.length > 0){
        sizeDOMElem.options[0].selected = true
        document.querySelectorAll('variant-selects')[0].onVariantChange()
        sizeDOMElem.options[0].innerHTML = sizeDOMElem.options[0].innerHTML.replace('- Unavailable',"");
    } 



    let colorsCheckBox = document.querySelectorAll('input[type=radio][name=Color]');
    if(colorsCheckBox){
        for(let i = 0; i < colorsCheckBox.length; i++){
            colorsCheckBox[i].addEventListener('change', function(e){
                let color = e.target.value;
                let colorDropDownElem = document.querySelectorAll('select[name="options[Color]"]')[0];
                let colorOptionElems = colorDropDownElem.options;
                for(let j = 0; j < colorOptionElems.length; j++){
                    if(colorOptionElems[j].value == color){
                        document.querySelector('select[name="options[Color]"]').options[j].selected = true
                        document.querySelectorAll('variant-selects')[0].onVariantChange()
                    }
                }
            });
        }
    }

}); // End DOMContentLoaded 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button[name=add]').addEventListener('click', function(event) {
        if (document.querySelector('[name=id]').value == '44970625040696') {
          fetch('/cart/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              quantity: 1,
              id: 44970625073464,
            })
          }).then(response => {
            window.res = response;
            console.log(response)
            // handle response
          }).catch(error => {
            // handle error
          });
        }
    });
  });