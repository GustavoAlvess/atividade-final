let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];
  
  // Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.
  let itensDuplicados = inventarioAlpha.pop()
  console.log(`Elementos duplicados: ${itensDuplicados}\n`);
  
  //Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.  
  let itensRemovido = inventarioBeta.pop()
  console.log(`Item removido do inventário Beta: ${itensRemovido}\n`);
  
  //Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
  
  inventarioAlpha.push(['Óculos de raio-x', 'Júpiter' , 11600], ['Relógio adaptável', 'Terra' , 9600], ['tapete voador', 'Lua' , 11300])
  console.log(`Item adicionado ao inventário Alpha: ${inventarioAlpha}\n`);
  
  
  
  //Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
  
  inventarioBeta.push(['capacete de oxigênio', 'Kepler' , 8600], ['Colar controlador ', 'Kepler' , 3600])
  console.log(`Item adicionado ao inventário Beta: ${inventarioBeta}\n`);
  
  
  //Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.
  
  inventarioAlpha.unshift(['capacete de oxigênio', 'Kepler' , 8600])
  console.log(`Item ao topo do inventário Alpha: ${inventarioAlpha}\n`)
  
  
  //Um item da Beta deve ser promovido para o início da lista para estudo prioritário.
  
  inventarioBeta.unshift(['Óculos de raio-x', 'Júpiter' , 11600])
  console.log(`Item ao topo do inventário Beta: ${inventarioBeta}\n`)
  
  //Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
  
  inventarioAlpha.shift()
  console.log(`Inventário Alpha atualizado: ${inventarioAlpha}\n`)
  
  
  //O primeiro item da Beta pertence a um museu e deve ser removido.
  
  inventarioBeta.shift()
  console.log(`Inventário Beta atualizado: ${inventarioBeta}\n`)

//Verifique se a “Relíquia de Zordon” está presente no inventário Beta.
 nomesItens = inventarioBeta.map((item) => item[0])
let reliquiaExiste1 = nomesItens.includes("Relíquia de Zordon")
 if (reliquiaExiste1) {
  console.log("Sim, Relíquia de Zordon está presente no inventário Beta\n");
  
} else {
  console.log("Não, Relíquia de Zordon está não presente no inventário Beta\n");
  
}

//Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha.
 nomesItens = inventarioAlpha.map((item) => item[0])
let reliquiaExiste = nomesItens.includes("Nanofibra Luminosa")
if (reliquiaExiste) {
  console.log("Sim, Nanofibra Luminosa está presente no inventário Alpha\n");
  
} else {
  console.log("Não, Nanofibra Luminosa está não presente no inventário Alpha\n");
  
}

//Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.

console.log(`Inventário Alpha atualizado: ${inventarioAlpha.join(" - ")}\n`)


//Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.

let itemRemovido10 = inventarioBeta.splice(0,10).join(' , ')
console.log("10 primeiros itens do inventário Beta:\n" , itemRemovido10 );



//Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.

let itemRemovido5 = inventarioBeta.splice(0,5)
let novaLista = [itemRemovido5]
console.log("\n5 primeiros itens do inventário Beta para inspeção:\n" , itemRemovido5);

//Separe os 10 últimos itens do inventário Alpha para estudo temporal.

let itemRemovido10Final = inventarioAlpha.splice(-10)
console.log("\n10 últimos itens do inventário Beta para estudo temporal:\n" , itemRemovido10Final);


//O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.

inventarioAlpha.splice(4,1,["Sapato saltitante" , "Vênus", 6250])
console.log("\n5° item do inventário Alpha versão moderna:\n" ,inventarioAlpha);


//Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
console.log(`\nTamanho do inventário beta: ${inventarioBeta.length} itens\n`);
 let itensMeio = inventarioAlpha.splice(5,2)
 console.log("Itens do meio removidos:", itensMeio , "\nInventátio beta atualizado:" , inventarioBeta);
 


//Unifique os inventários Alpha e Beta em uma única estrutura.

let inventarioAlphaBeta = inventarioAlpha.concat(inventarioBeta)
console.log(" Inventário Alpha-Beta:" , inventarioAlphaBeta);


//Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.

let cincoPrimeirosAlpha = inventarioAlpha.splice(0,5)
let cincoPrimeirosBeta = inventarioBeta.splice(0,5)
console.log("\nVitrine nova com 5 primeiros itens de cada inventário: \n" , cincoPrimeirosAlpha.concat(cincoPrimeirosBeta));


//Crie uma versão com os nomes de todos os itens da Beta em letras maiúsculas.

let nomesMaiusculoBeta = inventarioBeta.map((item) => [item[0].toUpperCase(), item[1], item[2]]);
console.log("Inventário Beta com nomes maiúsculos" , nomesMaiusculoBeta);


//Converta os valores de todos os itens da Alpha para uma moeda interestelar (multiplicação).
let moeda = 5
let valoresAlpha = inventarioAlpha.map((item) => [item[0], item[1], item[2]*moeda]);
console.log("Inventário Beta com nomes maiúsculos" , valoresAlpha);

//Filtre da Beta apenas os itens que custam mais de 7000 créditos.


//Filtre da Alpha todos os itens originários da Terra para despacho diplomático.


//Reorganize os itens da Beta do menor para o maior valor.


//Reorganize a lista da Alpha em ordem alfabética dos nomes dos artefatos.


//Inverta a ordem de todos os itens da Beta para visualização reversa.


//Inverta a ordem dos 15 primeiros itens da Alpha como simulação de viagem no tempo.


//Crie uma prévia com os nomes e planetas dos 10 itens mais valiosos da Alpha.


//Extraia os itens da Beta que foram coletados em luas (ex: Lua, Europa, Titã…).


//Identifique e mova para o final da Alpha todos os itens com valor abaixo de 4000.


//Conte quantos itens do inventário Beta vieram de planetas do sistema solar interno.



