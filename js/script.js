// ARRAY PER MEMORIZZARE IL NOME DEI FILE DELLE TRE IMMAGINI
let immagini = ['diamond.jpg','bell.jpg','bar.jpg'];
// INIZIALIZZAZIONE DELLE VARIABILI
let img0 = document.getElementById('img0')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let messaggio_credito = document.getElementById('credito')
let risultato = document.getElementById('risultato')
let btn_gioca = document.getElementById('btn_gioca')
let credito = document.getElementById("credito")
// CARTELLA WINDOWS DELLE IMMAGINI
let path_img = "images/";

function gioca() {
    // RESET VISUALIZZAZIONE SIMBOLI E CANCELLAZIONE SCRITTA ESITO GIOCO
    img0.src = path_img + 'back.jpg'
    img1.src = path_img + 'back.jpg'
    img2.src = path_img + 'back.jpg'
    // LOGICA DEL GIOCO
    setTimeout( function() {
        // GENERAZIONE CASUALE DELLE POSIZIONI DELLE IMMAGINI NELL' ARRAY
        let index0 = Math.round(Math.random()*2)
        let index1 = Math.round(Math.random()*2)
        let index2 = Math.round(Math.random()*2)
        // VISUALIZZAZIONE DELLE IMMAGINI
        img0.src = path_img + immagini[index0]
        img1.src = path_img + immagini[index1]
        img2.src = path_img + immagini[index2]
        // CONTROLLO SE IL GIOCATORE HA VINTO O PERSO      
        if(index0 == 0 && index1 == 0 && index2 == 0){  // SE SONO USCITI TRE DIAMANTI
            risultato.innerHTML = 'WOW! BEL COLPO! HAI FATTO TRIS!!!'
            credito.innerHTML = parseInt(credito.innerHTML) + 50
        } else {    // ALTRIMENTI
            risultato.innerHTML = 'PECCATO! NON HAI VINTO. RITENTA LA FORTUNA'
            credito.innerHTML = parseInt(credito.innerHTML) - 5
            if(parseInt(credito.innerHTML) == 0) {
                risultato.innerHTML = 'SPIACENTE! HAI FINITO IL CREDITO. GAME OVER'
                btn_gioca.disabled = true
            }
        }
    }, 1000);
}