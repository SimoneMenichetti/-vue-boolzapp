// MILES 1
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato


// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.





const {createApp}= Vue;

createApp({
    data() {
        return{

            messageText: '',
            // inseriamo searchContacts per memorizzare l'inserimento di ricerca dell'utente
             searchContacts: '',

            contacts: [
                {
                    name: 'Obi-wan',
                    avatar: './img/avatar-icon-6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Trump',
                    avatar: './img/OIP (1).jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'sono giapponese',
                    avatar: './img/io sono giapponese.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Ma io sono giapponese!',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'bomba anarchica',
                    avatar: './img/bomba anarchica.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'iL Mac',
                    avatar: './img/entra.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Entra?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'lo vedi sto trapezio',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Salvini',
                    avatar: './img/salvini.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao , hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Saluta Antonio',
                    avatar: './img/saluta antonio.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Saluta Antonio!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, addio!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Ibra',
                    avatar: './img/ibra.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'ok hai ragione!',
                            status: 'received'
                        }
                    ],
                }
                
            ],
            activeContact: null
        }
    },
// utilizziamo la proprietà computed "filterincontacts" per restituire un array di contatti filtrati nel searchContacts
    computed: {
        filterinContacts() {
            // se searchContact è vuoto ci ritorna tutti i contatti , altrimenti filtra i contatti attraverso il nome
            if (!this.searchContacts) {
                return this.contacts;
            }
            const searchContactslower = this.searchContacts.toLowerCase();
            // verifica salvataggio inserimento user dei contatti filtrati
            console.log(`contatti filtrati dalla ricerca: ${this.searchContacts}`);
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchContactslower)
            );
        }
    },
    methods: {
        setActiveContact(contact) {
            this.activeContact = contact;
            // verifica contatto attivo 
            console.log(`contatto attivo: ${contact.name}`);
        },
        sendMessage(text) {
            // check  testo non sia vuoto
            if (!text) return; 
            
            const newMessage = {
                date: new Date().toLocaleString('it-IT'),
                message: text,
                status: 'sent'
            };
            
            this.activeContact.messages.push(newMessage);
            console.log(`Messaggio inviato: "${text}" to ${this.activeContact.name}`);

    
            // Dopo 1 secondo, ricevi una risposta automatica
            setTimeout(() => {
                this.receiveMessage();
            }, 1000);
    
            // Resetta l'input del messaggio
            this.messageText = '';
        },
        receiveMessage() {
            const responseMessage = {
                date: new Date().toLocaleString('it-IT'),
                message: "Let's go",
                status: 'received'
            };
            
            this.activeContact.messages.push(responseMessage);
            // Verifica Messaggio ricevuto 
            console.log(`Messaggio ricevuto: "Let's go" from ${this.activeContact.name}`);
        }
    },

        mounted() {
            // Imposta il primo contatto come attivo all'avvio della pagina
            if (this.contacts.length > 0) {
                this.activeContact = this.contacts[0];
            }
        }
    // montiamo all esecuzione
}).mount('#app');