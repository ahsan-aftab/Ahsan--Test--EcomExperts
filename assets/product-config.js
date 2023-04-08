document.addEventListener("DOMContentLoaded", function(){

    // color swatch - on selecting new color update hidden drop down color
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

