// VARIÁVEIS
let nome: string = "Maria";
let idade: number = 25;
let estuda: boolean = true;

// OBJETOS
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 249.99,
    unidades: 10
}

//ARRAY SIMPLES
let dados: string[] = ['Ana', 'João', 'Maria'];
let dados2: Array<String> = ['Ana', 'João', 'Maria'];

//ARRAY MULTIPLOS TIPOS
let infos: (string | number)[] = ['Ana', 'João', 'Maria', 10, 25];

//TUPLAS (deve respeitar os valores na sequencia)
let boleto: [string, number, number] = ['agua conta', 199.9, 199355];

//FUNÇÕES
function addNumber(x: number, y: number): number {
    return x + y;
}

//FUNÇÕES MULTIPLOS TIPOS
function CallToPhone(phone: number | string) {
    return phone;
}

//FUNÇÕES ASINCRONA
async function getDataBase(id: number): Promise<String> {
    return 'Felipe'
}

//INTERFACES (TYPE X INTERFACE)
type robot = {
    id: number;
    name: string;
}

interface robot2 {
    id: number;
    name: string
}

const bot: robot = {
    id: 1,
    name: 'megaman'
}

//CLASSES + DATA MODIFIERS
class Character {
    public name?: string; //? indica que o nome não é obrigatório na criação do objeto
    private stregth: number;
    protected skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill
    }

    public Attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

//SUBCLASS
class Magicia extends Character {
    magicPoints: number;
    constructor( name: string, stregth: number, skill: number, magicPoints: number) { 
        super(name, stregth, skill);

        this.magicPoints = magicPoints;
    }
}

//GENERICS
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 2], [3]);
const stgArray = concatArray<string[]>(['Maria', 'João'], ['Túlio']);

console.log(numArray);
console.log(stgArray);

//DECOREITOS
function ShowName(target: any){
    console.log(target);
}

@ShowName
class Funcionario {}

//DECOREITOS2
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__Version: version})
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api();





