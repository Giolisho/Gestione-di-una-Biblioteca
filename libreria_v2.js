const prompt=require("prompt-sync")();

let a=parseInt(prompt("Inserire il numero di libri da inserire: "));

let l=[];
for(let i=0; i<a; i++)
    {
        let n=i+1;    
        const libro=
        {
            autore:prompt("Inserisci l'autore del libro "+n+": "),
            genere:prompt("Inserisci il genere del libro "+n+": "),
            titolo:prompt("Inserisci il titolo del libro "+n+": "),
            pagine:parseInt(prompt("Inserisci le pagine del libro "+n+": ")),
            isbn:parseInt(prompt("Inserisci l'ISBN: "))
        }
        while(libro.pagine<=0)
            {
                libro.pagine=parseInt(prompt("Le pagine del libro "+n+" devono essere maggiori di 0: "));
            }
        l.push(libro);
        console.log("Il libro "+n+" è stato inserito !");
    }

let risposta1=prompt("Vuoi modificare le informazioni di qualche libro? (Si/No): ");
while(risposta1.toLowerCase() !== "si" && risposta1.toLowerCase() !== "no")
    {
        risposta1=prompt("Vuoi modificare le informazioni di qualche libro? (Si/No): ");
    }
if(risposta1 === "no")
    {
        console.log("Lista dei libri disponibili: ");
        console.log(l);
    }

do
    {
        if(risposta1.toLowerCase() === "si")
        {
            let risposta2=parseInt(prompt("Di quale libro vuoi modificare le informazioni? (Inserisci un numero valido compreso tra 1 e " + a + "): "));
            while (risposta2 <= 0 || risposta2 > a)
                {
                    risposta2 = parseInt(prompt("Inserisci un numero valido compreso tra 1 e " + a + ": "));
                }
        
            let risposta4;
            do
                {
                    let risposta3=prompt("Quale delle seguenti informazioni vuoi modificare? (autore, genere, titolo, pagine): ");
            
                    while(risposta3.toLowerCase() !== "autore" && risposta3.toLowerCase() !== "genere" && risposta3.toLowerCase() !== "titolo" && risposta3.toLowerCase() !== "pagine" )
                        {
                            risposta3=prompt("Quale delle seguenti informazioni vuoi modificare? (autore, genere, titolo, pagine): ");
                        }

                    if(risposta3.toLowerCase() === "autore")
                        {
                            l[risposta2-1].autore=prompt("Inserisci il nuovo autore: ");
                        }
                    if(risposta3.toLowerCase() === "genere")
                        {
                            l[risposta2-1].genere=prompt("Inserisci il nuovo genere: ");
                        }
                    if(risposta3.toLowerCase() === "titolo")
                        {
                            l[risposta2-1].titolo=prompt("Inserisci il nuovo titolo: ");
                        }
                    if(risposta3.toLowerCase() === "pagine")
                        {
                            l[risposta2-1].pagine=parseInt(prompt("Inserisci il nuovo pagine: "));
                        }

                    risposta4=prompt("Vuoi modificare altro di questo libro? (Si/No): ")
                    while(risposta4.toLowerCase() !== "si" && risposta4.toLowerCase() !== "no")
                        {
                            risposta4=prompt("Vuoi modificare altro di questo libro? (Si/No): ");
                        }
                }
            while(risposta4.toLowerCase() === "si")

            risposta1=prompt("Vuoi modificare un altro libro? (Si/No): ");
            while(risposta1.toLowerCase() !== "si" && risposta1.toLowerCase() !== "no")
                {
                    risposta1=prompt("Vuoi modificare un altro libro? (Si/No): ");
                }
            console.log("Tutte le modifiche sono state salvate !");
        }
    }
while(risposta1.toLowerCase() === "si")
let richiesta2;



let richiesta=prompt("Vuoi cercare un libro? (Si/No): ");
while(richiesta.toLowerCase() !== "si" && richiesta.toLowerCase() !== "no")
    {
        richiesta=prompt("Vuoi cercare un libro? (Si/No): ");
    }

if(richiesta==="si")
    {
        do
        {
            let termineRicerca = prompt("Inserisci il termine di ricerca (titolo, autore, genere): ").toLowerCase();
            while(termineRicerca !== "titolo" && termineRicerca !== "autore" && termineRicerca !== "genere")
            {
                 termineRicerca=prompt("Inserisci il termine di ricerca (titolo, autore, genere): ").toLowerCase();
            }

            const valoreRicerca = prompt("Inserisci il " + termineRicerca+" da cercare: ").toLowerCase();

            const risultati = l.filter(libro =>
            {
                if (termineRicerca === "autore")
                {
                    return libro.autore.toLowerCase().includes(valoreRicerca);
                }
                else if (termineRicerca === "genere")
                {
                    return libro.genere.toLowerCase().includes(valoreRicerca);
                }
                else if (termineRicerca === "titolo")
                {
                    return libro.titolo.toLowerCase().includes(valoreRicerca);
                } 
            });

            console.log("Risultati della ricerca:");
            console.log(risultati);

            richiesta=prompt("Vuoi cercare un altro libro? (Si/No): ");
            while(richiesta.toLowerCase() !== "si" && richiesta.toLowerCase() !== "no")
            {
                richiesta=prompt("Vuoi cercare un altro libro? (Si/No): ");
            }
            
        }
        while(richiesta==="si");
    }


let prestito=prompt("Vuoi prendere in prestito un libro? (Si/No): ");
while(prestito.toLowerCase() !== "si" && prestito.toLowerCase() !== "no")
    {
        prestito=prompt("Vuoi prendere in prestito un libro? (Si/No): ");
    }

if(prestito === "no")
    {
        console.log("Arrivederci !");
    }

if(prestito === "si")
    {
        let u=parseInt(prompt("Quanti utenti vogliono prendere in prestito un libro? "));
        while(u<=0 || u>l.length)
            {
                u=parseInt(prompt("Numero utenti non valido. Quanti utenti vogliono prendere in prestito un libro? "));
            }
        let utenti=[];

        for (let i = 0; i < u; i++)
        {
            let n = i + 1;

            let nome = prompt("L'utente " + n + " inserisce il proprio nome: ");
            let cognome = prompt(nome + " inserisce il proprio cognome: ");

            let utentePresente = utenti.find(utente => utente.nome === nome && utente.cognome === cognome);
            while (utentePresente)
            {
                console.log("L'utente " + nome + " " + cognome + " è già registrato.");
                nome = prompt("L'utente " + n + " reinserisce il proprio nome: ");
                cognome = prompt(nome + " reinserisce il proprio cognome: ");
                utentePresente = utenti.find(utente => utente.nome.toLowerCase() === nome.toLowerCase() && utente.cognome.toLowerCase() === cognome.toLowerCase());
            }

            const nuovoUtente =
            {
                nome: nome,
                cognome: cognome,
                durataPrestito: parseInt(prompt("Per quanti giorni " + nome + " " + cognome + " desidera prolungare il prestito?: "))
            };
            while (nuovoUtente.durataPrestito <= 0)
            {
                nuovoUtente.durataPrestito = parseInt(prompt("Per quanti giorni " + nome + " " + cognome + " desidera prolungare il prestito?: "));
            }
            utenti.push(nuovoUtente);
            console.log(nuovoUtente.nome + " " + nuovoUtente.cognome + " è stato salvato !");
            
            console.log(l);
            let libroDaPrestare = prompt("Inserisci il titolo del libro da prendere in prestito: ");
            let libro = l.find(libro => libro.titolo === libroDaPrestare);

            while (!libro)
            {
                console.log(l);
                libroDaPrestare = prompt("Inserisci il titolo del libro valido da prendere in prestito: ");
                libro = l.find(libro => libro.titolo === libroDaPrestare);
            }

            while (libro.prestato===true)
            {
                console.log("Il libro è già stato prestato. Sarà disponibile fra qualche giorno.");
                libroDaPrestare = prompt("Inserisci il titolo del libro valido da prendere in prestito: ");
                libro = l.find(libro => libro.titolo === libroDaPrestare);
                while (!libro)
                {
                    console.log(l);
                    libroDaPrestare = prompt("Inserisci il titolo del libro valido da prendere in prestito: ");
                    libro = l.find(libro => libro.titolo === libroDaPrestare);
                }
            }
                        
                            
            libro.prestato = true;
                                
            console.log("Libro prestato con successo a " + nuovoUtente.nome + " " + nuovoUtente.cognome + ".");
                            
            if (!utenti[utenti.length - 1].libriInPrestito)
            {
                utenti[utenti.length - 1].libriInPrestito = [];
            }
                        
            utenti[utenti.length - 1].libriInPrestito.push(libro);
        }
    }
    