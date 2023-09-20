//Spiegazione generica di TypeScript:
//TypeScript è un linguaggio di programmazione open-source che estende JavaScript aggiungendo un sistema di tipi statici. Questo significa che TypeScript consente di dichiarare i tipi delle variabili, delle funzioni e degli oggetti nel codice. Questo può aiutare a rilevare errori in fase di sviluppo e migliorare la manutenibilità del codice. Viene infine compilato in JavaScript per essere eseguito nei browser.

let myVar: number;
myVar = 32;

let myVar2: string;
myVar2 = "Giovanni";

let myVar3: boolean;
myVar3 = true;
//sto dichiarando tre variabili diverse, ognuna con un tipo specifico, e assegnando loro dei valori.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Il compilatore TypeScript:
//Il compilatore TypeScript è necessario per aggiungere tipi statici al JavaScript, migliorando la manutenibilità del codice e rilevando errori in fase di sviluppo. Ecco come si usa:
//1. Installazione di TypeScript: Installa TypeScript globalmente (nel terminale) con il comando "npm install typescript -g".
//2. Creazione di un file TypeScript: Crea un file myApp.ts (o diversamente) per il codice TypeScript.
//3. Scrittura del codice TypeScript: Dichiarare i tipi usando la sintassi ":".
//4. Compilazione del codice: nel terminale si utilizza il comando "tsc" seguito dal nome del file Typescript per generare un file JavaScript equivalente. Ad esempio, tsc myApp.ts.
//5. Compilazione in modalità di osservazione (watch): Con il comando "tsc myApp.ts - w", il compilatore rimarrà in ascolto del file myApp.ts e, ogni volta che vengono apportate modifiche a questo file, ricompilerà automaticamente il codice TypeScript in JavaScript, semplificando il processo di sviluppo e garantendo che il tuo codice JavaScript rimanga sempre aggiornato
//Il compilatore TypeScript è fondamentale per ottenere i vantaggi di TypeScript e garantire che il codice sia corretto e manutenibile.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// La Type Inference:
//TypeScript offre la possibilità di specificare i tipi delle variabili, ma in molti casi, il compilatore è in grado di inferire automaticamente i tipi in base ai valori assegnati. Ciò rende il codice più conciso e meno soggetto a errori di tipo.

let message = "Ciao, sono Giovanni!"; // TypeScript deduce che 'message' è di tipo string
message = "Salve a tutti!";
//message = 33; generera un errore in quanto si cerca di assegnare un numero a una variabile di tipo string

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Il tipo 'any':
//'any' è un tipo in TypeScript che rappresenta una variabile senza tipo specifico. È utile quando si lavora con dati di tipo sconosciuto.

// Dichiarazione di una variabile con tipo 'any'
let valore: any;

// Assegnazione di un valore di tipo string a 'valore'
valore = "Questo è un testo";
console.log(valore); // In console stampa: "Questo è un testo"

// Assegnazione di un valore di tipo number a 'valore'
valore = 42;
console.log(valore); // In console stampa: 42

// Assegnazione di un valore di tipo boolean a 'valore'
valore = true;
console.log(valore); // In console stampa: true

//non sarà più possibile controllarne l'accuratezza

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Il tipo Union:
//Un tipo Union in TypeScript permette di dichiarare variabili che possono avere uno dei diversi tipi specificati. Ad esempio, number | string rappresenta una variabile che può essere di tipo numero o stringa.

let risultato: number | string;
risultato = 42;
risultato = "Questo è un testo";

//Assegnazione di un valore di tipo boolean a 'risultato' (genererà un errore)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Il tipo Tuple:
//Una tupla è un tipo di dato in TypeScript che rappresenta un array di elementi dove il tipo di ciascun elemento è specificato e fissato in base alla sua posizione nell'array. Questo significa che la posizione associata all'elemento nella tupla determina il tipo di quell'elemento, e il numero di elementi nella tupla è anch'esso fisso.

let persona: [string, number, boolean] = ["Giovanni", 32, true];

persona[1].toString();
//La posizione associata all'elemento della tupla ci consiglierà i metodi relativi a quel tipo specifico (string in questo caso)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Le Interfacce in TypeScript:
//Le interfacce sono utilizzate per definire la forma dei dati in TypeScript. Consentono di dichiarare un contratto che gli oggetti devono seguire, specificando le proprietà e i metodi che devono essere presenti. Le interfacce sono spesso utilizzate per rendere il codice più leggibile e per definire contratti chiari tra diverse parti del sistema.

interface Animal {
  name: string;
  type: string;
}

// Interfaccia che estende Animal per rappresentare un animale domestico
interface Pet extends Animal {
  breed: string;
  age?: number; //con il "?" si indica che la proprietà age è opzionale.
}

// Creazione di un oggetto che segue l'interfaccia Pet
const myPet: Pet = {
  name: "Fido",
  type: "Cane",
  breed: "Golden Retriever",
  age: 3,
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Types (Tipi):

//Usati per definire la forma di una struttura dati.
//Creati con la parola chiave "type".

type Persona = {
  nome: string;
  età: number;
};

const person: Persona = {
  nome: "Alice",
  età: 30,
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Generics (Generici):

//Consentono di scrivere codice flessibile per funzioni e classi che lavorano con diversi tipi di dati.
//Utilizzati con la notazione <T> per rappresentare tipi di dati generici.
//Utile quando si desidera scrivere codice riutilizzabile e flessibile.

type Box<T> = {
  content: T;
};

const box1: Box<number> = {
  content: 42,
};

const box2: Box<string> = {
  content: "Contenuto della scatola",
};

const box3: Box<boolean> = {
  content: true,
};

// Possiamo anche usare "Box" con tipi personalizzati, ad esempio oggetti.
const box4: Box<{ nome: string; età: number }> = {
  content: { nome: "Alice", età: 30 },
};
