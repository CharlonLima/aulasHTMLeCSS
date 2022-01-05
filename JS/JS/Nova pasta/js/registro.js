window.onload = function(){

//regitros 
let registros = [
    {
     'nome': 'Marcelo',
     'email': 'marcelo@gmail.com'
    },

    {
     'nome': 'Suelem',
     'email': 'suelem@gmail.com'
    },

    {
    
     'nome': 'Raphael',
     'email': 'raphael@gmail.com'
      },
      {    
        'nome': 'Gertrudes',
        'email': 'gertrudes@gmail.com'
      },
]

// mapeando os inputs "nome" e "email"

const nome = document.querySelector("#txtNome");
const email= document.querySelector("#txtEmail");
const controle = document.querySelectorAll('.controle');

// carregar o nome
    let idx = 0;
    nome.value =  registros[idx].nome;
    email.value = registros[idx].email;

    controle.forEach( botao => {
        
        botao.addEventListener('click',function(){


            switch(botao.value){
                case '<':
                   idx--;
                   console.log(idx);
                   nome.value =  registros[idx].nome;
                   email.value = registros[idx].email;  
                break;

                case '>':
                    idx++;
                    nome.value =  registros[idx].nome;
                    email.value = registros[idx].email;    
                break;

                case 'Limpar':
                    nome.value = '';
                    email.value = '';
                     idx++;          
                break;

                case 'Novo':
                    registros.push({
                     'nome': nome.value,
                     'email': email.value, 
                 });  
                break;

            }

            //console.log(idx++);
            // if( botao.value == '>' ) {
            //     idx++;
            //     nome.value =  registros[idx].nome;
            //     email.value = registros[idx].email;     
            //     console.log(idx);           
            // }
            // if ( botao.value == '<'){
            //     idx--;
            //     nome.value =  registros[idx].nome;
            //     email.value = registros[idx].email;  
            //     console.log(idx);    
            // }
            // if( botao.value == 'Limpar'){
            //     nome.value = '';
            //     email.value = '';
            //     idx++;
            //     //console.log('cliquei no btn limpar');
            //     console.log(idx);
            // }
            // if ( botao.value == 'Novo'){
            //     registros.push({
            //         'nome': nome.value,
            //         'email': email.value, 
            //     });
                
            //     console.log(idx);
            // }
        })

    } )
}