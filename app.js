//Import da biblioteca
const readline = require('readline');

//Cria o objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// perguntas iniciais 

//escolha do mes e ano
entradaDeDados.question( 'Gostaria de colocar o tempo em mês ou ano ? ', function(mesAno){

       let resposta = mesAno;

// nome do cliente
 entradaDeDados.question('Digite o nome do cliente: ', function(nome){
  
        let nomeCliente = nome;

// nome do produto 
 entradaDeDados.question('Digite o nome do produto: ', function(produto){

        let nomeProduto = produto;

        console.log('##=============================================================================================');

// valor do produto
 entradaDeDados.question('Digite o valor do produto: ', function(valor){

        let valorProduto = valor;

// taxa de juros
 entradaDeDados.question('Digite a taxa de juros: ', function(taxa){

    let taxaAplicada = taxa;

// o tempo em meses ou ano 
 entradaDeDados.question('Digite o tempo de pagamento: ', function(tempo){ 

    let tempoPagamento = tempo;



        // validações das caixas de entrada
        if (nomeCliente == '' || nomeProduto == '' || taxaAplicada == '' || valorProduto == '' || tempoPagamento == ''){
            console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!');

        }
        else if (isNaN(valorProduto) || isNaN(tempoPagamento) || isNaN(taxaAplicada)){

              console.log('ERRO: os valores devem ser preenchidos somente com numeros');
        }
        else if(!isNaN(nomeCliente) || !isNaN(nomeProduto)){
              console.log('ERRO: os nomes devem ser preenchidos somente com letras');
        }
        else if(!isNaN(nomeCliente) && !isNaN(nomeProduto) && isNaN(valorProduto) && isNaN(tempoPagamento) && isNaN(taxaAplicada)){
              console.log('ERRO: preencha os dados do jeito certo certo !!!');
        }

        //calculos
        else{

              
              switch (resposta) {

                     // calculo de mes 
                     case "mes":
                     case "mês":{

              let percentual = taxaAplicada / 100;

              let fator = (Number(1) + Number(percentual)) ** Number(tempoPagamento);

              let montante = Number(valorProduto) * fator;

              let acrescimo = montante - valorProduto;

              let valorMensal = valorProduto / tempoPagamento;


                   // mensagem de confirmação do mes
              console.log('********************* Viva Moda *************************');

              console.log('');

                  console.log('Muito obrigado por realizar a sua compra conosco Sr(a) ' + nomeCliente);
                  console.log('A compra do produto ' + nomeProduto + ', tem um valor de: ' + valorProduto);
                  console.log('A sua compra será parcelada em ' + tempoPagamento + ' vezes e o Sr(a) pagará: ' + Number(valorMensal).toFixed(2));
                  console.log('O acréscimo realizado ao valor de: ' + valorProduto + ' será de ' + Number(acrescimo).toFixed(2) + ' resultando no valor total de: ' + Number(montante).toFixed(2));

              console.log('');

                  console.log('Muito obrigado por escolher a Viva Moda.');

              console.log('*********************************************************');

              break;
              }

                     // calculo do ano
                     case "ano":{

                     let converterMes = Number(tempoPagamento) * 12;

                     percentual = taxaAplicada / 100;

                     fator = (Number(1) + Number(percentual)) ** Number(converterMes);

                     montante = Number(valorProduto) * fator;

                     acrescimo = Number(montante) - Number(valorProduto);

                     valorMensal = Number(valorProduto) / Number(converterMes);


                     // mensagem de confirmação do ano
                     console.log('********************* Viva Moda *************************');

              console.log('');

                  console.log('Muito obrigado por realizar a sua compra conosco Sr(a) ' + nomeCliente);
                  console.log('A compra do produto ' + nomeProduto + ', tem um valor de: ' + valorProduto);
                  console.log('A sua compra será parcelada em ' + converterMes + ' vezes e o Sr(a) pagará: ' + Number(valorMensal).toFixed(2));
                  console.log('O acréscimo realizado ao valor de: ' + valorProduto + ' será de ' + Number(acrescimo).toFixed(2) + ' resultando no valor total de: ' + Number(montante).toFixed(2));

              console.log('');

                  console.log('Muito obrigado por escolher a Viva Moda.');

              console.log('*********************************************************');

              break;
              }




              }// fechamento do switch

        } // else

        


        }) // tempo em mes ou ano 
      }) // taxa de juros 
    }) // valor do produto 
  }) // nome do produto 
 }) // nome 
}) //mes ou ano 