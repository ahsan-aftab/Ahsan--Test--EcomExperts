// reset to default option
let url = window.location.href;
if(url.includes('variant')){
    window.location.href = window.location.origin + window.location.pathname;
}
