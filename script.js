const btn_encryp = document.querySelector('.btn-encrypting');
const btn_desencryp = document.querySelector('.btn-desencrypting');
const btn_copy = document.querySelector('.btn-copy');

const letters = ['a', 'e', 'i', 'o', 'u'];

function change_btn_copy(value) {
    if(value==1){ //el texto ya fue copiado
        btn_copy.textContent = '¡Copiado!';
    } else {
        btn_copy.textContent = 'Copiar';
    }
}

function encrypting_text() {
    const keys = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    const input = document.querySelector('#input').value;
    const output = document.querySelector('.output');
    const input_val = input.split('');
    let aux;
    change_btn_copy(2);
    if(input_val.length > 0) { //saber si es necesario desactivar la imagen de sin texto
        output.textContent = input_val.reduce((acc,item)=>{

            if(letters.some((v, i)=>{
                aux = i;
                return v==item
            })) {
                acc+=keys[aux];
            } else acc+=item;
    
            return acc;
        },'');

    } else {
        output.innerHTML = `
            <div class="sin-texto-img">
                <img src="images/sin-texto.png" alt="No se encontró texto para encriptar">
            </div>
        `
    }
    
}
function decrypting_text() {
    const keys = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    const input = document.querySelector('#input').value;
    const output = document.querySelector('.output');
    const input_val = input.split('');

    change_btn_copy(2);

    if(input_val.length > 0){
        let s=input;
        for(let i=0; i<letters.length; ++i){
            s=s.replace(keys[i], letters[i]);
        }
        output.textContent = s;

    } else {
        output.innerHTML = `
            <div class="sin-texto-img">
                <img src="images/sin-texto.png" alt="No se encontró texto para encriptar">
            </div>
        `
    }
    
}
function copy_text() {
    const text = document.querySelector('.output').textContent;
    navigator.clipboard.writeText(text);
    change_btn_copy(1);
}

btn_encryp.addEventListener('click', encrypting_text);
btn_desencryp.addEventListener('click', decrypting_text);
btn_copy.addEventListener('click', copy_text);

document.querySelector('#input').addEventListener('keyup', ()=>{
    encrypting_text();
})
