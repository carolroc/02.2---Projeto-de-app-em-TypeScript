// Import stylesheets
import './style.css';
import { Person } from './person';

//Definição das variaveis
let title: string = '02.2 - Projeto de app em TypeScript';
let primeiroNome: string = 'Ana';
let segundoNome: string = 'Rocha';
let terceiroNome: string = 'Silva';

//Instancia da classe person
let dados = new Person();
let nomeCompleto = dados.getFullName(primeiroNome, segundoNome, terceiroNome);
let idade = dados.getBithdayYear(20);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<p id='nomeCompleto'>${nomeCompleto}</p>
<p id='idade'>${idade}</p>`;
