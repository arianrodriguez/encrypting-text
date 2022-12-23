function cambiar_btn_copiado(val){
    if(val==1){
        const btn_copy = document.querySelector('.btn-copiar button');
        btn_copy.innerHTML = 'Copiar';
    }
    else {
        const btn_copy = document.querySelector('.btn-copiar button');
        btn_copy.innerHTML = '¡Copiado!';
    }
}
function encriptar_txt() {
    const input = document.getElementById('ingresar-texto');
    const output = document.querySelector('.txt-desencriptado');
    output.innerHTML = '';

    let arr_input = input.value.split('');
    arr_input.forEach((value, i)=> {
        switch(value){
            case 'a': arr_input[i] = 'ai'; break;
            case 'e': arr_input[i] = 'enter'; break;
            case 'i': arr_input[i] = 'imes'; break;
            case 'o': arr_input[i] = 'ober'; break;
            case 'u': arr_input[i] = 'ufat'; break;
            default: break;
        }
        output.innerHTML += arr_input[i];
    });

    cambiar_btn_copiado(1);
}
function desencriptar_txt() {
    /*
        / /g : llama a reemplazar todas las coincidencias globales dentro del / /

        .replace(/ /g, ' ');
        reemplaza todo lo que esté dentro de los slash por el nuevo valor dentro de ' '
    */ 
    const encriptacion = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    const palabras_clave = ['a', 'e', 'i', 'o', 'u'];

    const input_des = document.querySelector('#ingresar-texto');
    const output_enc = document.querySelector('.txt-desencriptado');

    let s = input_des.value;
    for(let i=0; i<palabras_clave.length; ++i){
        s = s.replace(encriptacion[i], palabras_clave[i]);
    }
    //console.log(input_des.value.replace(/ai/g, 'a'));
    output_enc.innerHTML = s;

    cambiar_btn_copiado(1);
}
function copiar_txt(){
    const content_txt = document.querySelector('.txt-desencriptado').innerText;
    navigator.clipboard.writeText(content_txt);
    
    cambiar_btn_copiado(2);
}


let btn_encriptar = document.querySelector('.btn-encriptar');
let btn_desencriptar = document.querySelector('.btn-desencriptar');
let btn_copiar = document.querySelector('.btn-copiar');

btn_encriptar.onclick = encriptar_txt; 
btn_desencriptar.onclick = desencriptar_txt;
btn_copiar.onclick = copiar_txt;
