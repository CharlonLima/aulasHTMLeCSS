window.onload = function(){
    const form1 = document.querySelector("#valor1");
    const form2 = document.querySelector("#valor2");
    const resulta = document.querySelector("#resultado");

    form2.addEventListener('blur', function(){
        resulta.value = Number(form1.value) + Number(form2.value);

})}