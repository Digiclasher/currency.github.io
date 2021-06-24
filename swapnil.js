const taka = document.getElementById('taka');
const dollar = document.getElementById('dollar');
const rupee = document.getElementById('rupee');



taka.addEventListener('input' , function(){
    const tk = parseInt(taka.value);
    dollar.value = 0.012*tk;
    rupee.value = 0.88*tk;
})

dollar.addEventListener('input' , function(){
    const dol = parseInt(dollar.value);
    taka.value = 84.80*dol;
    rupee.value = 74.18*dol;
})


rupee.addEventListener('input' , function(){
    const rup = parseInt(rupee.value);
    dollar.value = 0.013*rup;
    taka.value = 1.14*rup;
})