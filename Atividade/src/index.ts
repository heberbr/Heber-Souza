//EXERCICIO 1

//     Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:
//     "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const NameTeste :string = process.argv[2]
const birthDate:string = process.argv[3]

function presentation(name: string, birthDate: string) : string {



    enum Meses {
        JANEIRO = "Janeiro",
        FEVEREIRO = "Fevereiro",
        MARCO = "Março",
        ABRIL = "Abril",
        MAIO = "Maio",
        JUNHO = "Junho",
        JULHO = "Julho",
        AGOSTO = "Agosto",
        SETEMBRO = "Setembro",
        OUTUBRO = "Outubro",
        NOVEMBRO = "Novembro",
        DEZEMBRO = "Dezembro",
    }

    const separatedDate: string[] =  birthDate.split("/")  


    type date = {
        day: number,
        month: number|string,
        year: number
    }

    const birth: date = {
        day: Number(separatedDate[0]),
        month: Number(separatedDate[1]),
        year: Number(separatedDate[2]),
    }


    switch (birth.month) {
        case 1:
            birth.month = Meses.JANEIRO
            break
        case 2:
            birth.month = Meses.FEVEREIRO
            break
        case 3:
            birth.month = Meses.MARCO
            break
        case 4:
            birth.month = Meses.ABRIL
            break
        case 5:
            birth.month = Meses.MAIO
            break
        case 6:
            birth.month = Meses.JUNHO
            break
        case 7:
            birth.month = Meses.JULHO
            break
        case 8:
            birth.month = Meses.AGOSTO
            break
        case 9:
            birth.month = Meses.SETEMBRO
            break
        case 10:
            birth.month = Meses.OUTUBRO
            break
        case 11:
            birth.month = Meses.NOVEMBRO
            break
        case 12:
            birth.month = Meses.DEZEMBRO
            break
    }
    return `Olá me chamo ${name}, nasci no dia ${birth.day} do mês de ${birth.month} do ano de ${birth.year}`

}


console.log(presentation(NameTeste,birthDate)) 
 
//função que recebe CPF 

function TestaCPF(strCPF:string): boolean {

    let cpf: string = strCPF
    .replace(".","")
    .replace(".","")
    .replace("-","")

    let Soma:number = 0;
    let Resto:number;

    if (cpf == 
        "00000000000" || 
        "11111111111" || 
        "22222222222" ||
        "33333333333" ||
        "44444444444" ||
        "55555555555" ||
        "66666666666" ||
        "77777777777" ||
        "88888888888" ||
        "99999999999" 
        ) return false;

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}

console.log(TestaCPF(""));



//EXERCICIO 2  
//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

function parameterType(parameter: any) : string {
    return(typeof(parameter))
}


// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. 
// Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. 
// Os gêneros da plataforma se limitam aqueles encontrados no seguinte `ENUM` de gêneros:



enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type film = {
    name: string,
    releaseDate: number
    genre: string
    score?: number
}

function manageFilms(name: string, releaseDate: number, genre: string, score?: number): film {

    const MoovieDetails: film = {
        name: name,
        releaseDate: releaseDate,
        genre: genre,
        score: score
    }

    return MoovieDetails
}
//COM score  
console.table([manageFilms("Jogos Mortais", 1884, "Terror", 8)])

//SEM score 
console.table([manageFilms("Jogos Mortais", 1884, "Terror")]) 

//EXERCICIO 4
// Considerando o array, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 

type employee = {
    nome: string, 
    salário: number, 
    setor: string,
    presencial: boolean
}

enum SECTION {
MARKETING = 'marketing',
VENDAS = 'vendas',
FINANCEIRO  = 'financeiro'
}

const employeeList: Array<employee>  = 
[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

function employeeFilter(employees: Array<employee>) : Array<employee> {
    return employees.filter((item) => {return item.setor  === SECTION.MARKETING && item.presencial === true})
}


console.table(employeeFilter(employeeList)) 
 
// Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 

type person = 
{
    name: string, 
    email: string, 
    role: "user" | "admin" }

    const listPerson: Array<person> = 
[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 



function adminFilterEmail (list: Array<person>): string[] {

    const filteredEmail: Array<person> = list.filter((person)=>{
        if(person.role === "admin"){return person.email}
    })

    let emails : string[] = []

    for(let i=0; i <= filteredEmail.length-1; i++) {
        emails.push(filteredEmail[i].email) 
    } 

    return emails
}


console.log(adminFilterEmail(listPerson)) 
 
//EXERCICIO 6
// Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente. Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

type clientBalance = {cliente: string, saldoTotal: number, debitos: Array<number>}

const DataBaseClients: Array<clientBalance>  = 
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] }, //nao
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] }, //nao
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] }, //sim
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] }, //sim
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] }, //nao
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] } //nao
]

function ClientsAbleToLoan (lista: Array<clientBalance> ): Array<clientBalance> {

    const UpdatedClientsList: Array<clientBalance> = lista.map((client)=>{
        let debits:number = 0;

        for(let i = 0; i < client.debitos.length; i++) {
            debits += client.debitos[i]; 
        }
         client["saldoTotal"] -= debits; 
         return client

    })

    const ApprovedClientsList : Array<clientBalance> = UpdatedClientsList
    .filter((client)=> {
        return client.saldoTotal < 0
    })

return ApprovedClientsList
}


console.table(ClientsAbleToLoan(DataBaseClients)) 

// EXERCICIO 7

// Aproveitando a função já feita, faça uma nova função que receba o arrayde estoque como parâmetro, use a função ajustaPreco para corrigir os preços e retorne a lista de estoque ordenada pela quantidade de cada produto.

type product = {
    nome: string,
    quantidade: number,
    valorUnitario: any
}

const productsList : Array<product>  =
[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function updateProductList (products: Array<product>): any {

    let newlist : Array<product> = products.map((product)=> {
        const ajustaPreco = (preco :number): string => {
            const valorAjustado: string = preco.toFixed(2).replace('.', ',')
            return "R$ "+valorAjustado
        }

        product["valorUnitario"] = ajustaPreco(product.valorUnitario)
        return product
    })

    let orderedList: Array<product> = newlist.sort((a,b)=>{return b.quantidade-a.quantidade})

    return orderedList 
}

console.table(updateProductList(productsList))





// - Exercício 8

//     Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

//     - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//     - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
//     - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

let dataNascimento:number = Number(process.argv[2].substring(6,10))
let dataEmissaoRG:number = Number(process.argv[3].substring(6,10))

function checaRenovacao(dataNascimento:number, dataEmissaoRG: number) : boolean {

    let anoAtual: number = new Date().getFullYear()
    let idade: number= anoAtual - dataNascimento

    //se true, tenho que renovar.
    let cond1:boolean = idade <= 20 && anoAtual - dataEmissaoRG >= 5 //se true, tenho que renovar.
    let cond2:boolean = (idade > 20 && idade <= 50) && (anoAtual - dataEmissaoRG >= 10)
    let cond3:boolean = idade > 50 && anoAtual - dataEmissaoRG >= 15

    return  cond1 || cond2 || cond3
}

console.log(checaRenovacao(dataNascimento, dataEmissaoRG)) 

//EXERCICIO 9

// Escreva uma função que receba uma palavra (sem letras repetidas) e devolva a quantidade de anagramas que ela possui.

function QuantidadeAnagramas(palavra:string) : number {

    const quantidadeLetras: number = palavra.length
    let result : number = 1

    for (let i = quantidadeLetras; i > 0; i--) {
        result *= i
    }
    return result
}


console.log(QuantidadeAnagramas("Abacate")) 
 11  Modulo-6/lista-typescript/tsconfig.json 
