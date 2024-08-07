// BOOLZAP BONUSS
const { createApp } = Vue;
const { DateTime } = luxon;

createApp({
    data() {
        return {
             // Memorizza il testo del messaggio in input
            messageText: '',
            // Memorizza l'inserimento di ricerca dell'utente
            searchContacts: '', 
            // darkmode per memorizzare nel data la modalità scelta
            DarkMode: false,
            // splash 
            showSplash: true,
            // dropdown
            dropdownVisible: false,
            // contatto attivo 
            activeContact: null,
            // stato ultimo accesso
            showLastaccess: false,

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

             // creazione array di frasi casuali da inserire al recivemessage
             randomAnswers: [
                "Il mio unicorno ha bisogno di un caffè.",
                "Ho perso il filo del discorso... Ah, ecco, era di lana.",
                "Risolto un bug, creati altri dieci.",
                "Ho chiuso il div, possiamo andare a pranzo.",
                "Se la vita ti dà limoni, fai un lancio di limoni.",
                "HTML, CSS, JavaScript... e un pizzico di magia.",
                "Un deploy al venerdì pomeriggio? Cosa potrebbe andare storto?",
                "Verso l'infinito e oltre",
                "Non è facile essere perfetti, ma qualcuno deve pur farlo.",
                "Sono confuso, quindi esisto.",
                "JavaScript: un linguaggio, infinite possibilità di sbagliare.",
                "CSS is awesome. Just kidding, it's a nightmare.",
            ],
            
        }
    },
    // Utilizziamo la proprietà computed "filterinContacts" per restituire un array di contatti filtrati nel searchContacts
    computed: {
        filterinContacts() {
            // Se searchContact è vuoto ci ritorna tutti i contatti, altrimenti filtra i contatti attraverso il nome
            if (!this.searchContacts) {
                return this.contacts;
            }
            const searchContactslower = this.searchContacts.toLowerCase();
            // Verifica salvataggio inserimento user dei contatti filtrati
            console.log(`contatti filtrati dalla ricerca: ${this.searchContacts}`);
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchContactslower)
            );
        }
    },
    methods: {
        setActiveContact(contact) {
            this.activeContact = contact;
            // Verifica contatto attivo 
            console.log(`contatto attivo: ${contact.name}`);
        },
        sendMessage(text) {
        // Mostra l'ultimo accesso dopo aver inviato un messaggio e ricevuto una risposta
        this.showLastaccess = true;
        // Controlla che il testo non sia vuoto o composto solamente da spazi
        if (!text.trim()) return;

          // Simula "sta scrivendo..." per 1 secondo
        this.activeContact.isTyping = true;
        setTimeout(() => {
            this.activeContact.isTyping = false;
            // Simula "online" per 2 secondi
            this.activeContact.lastSeen = 'online';
            setTimeout(() => {
                // Mostra l'ultimo accesso
                this.activeContact.lastSeen = DateTime.now().setLocale('it').toFormat('HH:mm');
            }, 2000);
        }, 1000);

        const newMessage = {
            date: DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
            message: text,
            status: 'sent',
            showOptions: false
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

             // Seleziona una frase casuale dalla lista delle frasi meme del nuovo array utilizzando mathfloor per generarla casualmente
                const randomAnswere = this.randomAnswers[Math.floor(Math.random() * this.randomAnswers.length)];
            //  logica per mostrare l'ultimo accesso solo dopo aver ricevuto una risposta
            if (this.activeContact && this.activeContact.messages.length === 1) {
                this.showLastaccess= true;
            }

            const responseMessage = {
                date: DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
                message: randomAnswere ,
                status: 'received',
                showOptions: false
            };
            
            this.activeContact.messages.push(responseMessage);
            // Verifica Messaggio ricevuto 
            console.log(`Messaggio ricevuto: "${randomAnswere}" from ${this.activeContact.name}`);
        },

        // function per delete messaggi
        deleteMessage(contact, message) {
            const index = contact.messages.indexOf(message);
            if (index > -1) {
                contact.messages.splice(index, 1);
                console.log(`Messaggio eliminato: "${message.message}"`);
            }
            // Chiudi il menu a tendina dopo aver eliminato il messaggio
            message.showOptions = false;
        },
        
        // menu toggle per apertura finestra delete messaggi
        toggleMessageOptions(message) {
            // Se il messaggio è già attivo, lo chiudiamo
            if (message.showOptions) {
                message.showOptions = false;
            } else {
                // Chiudiamo eventuali altri menu aperti
                this.activeContact.messages.forEach(msg => {
                    msg.showOptions = false;
                });
                // Apriamo il menu per il messaggio corrente
                message.showOptions = true;
            }
        },
        // option darkmode per cambio modalità
        toggleDarkMode() {
            this.DarkMode = !this.DarkMode;
            if (this.DarkMode) {
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
            } else {
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
            }
        },
        
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },

        // funzione con condizione di eliminazione chat 
       
        deleteChat() {
            if (this.activeContact) {
                const index = this.contacts.indexOf(this.activeContact);
                if (index > -1) {
                    this.contacts.splice(index, 1);
                    this.activeContact = null;
                }
                this.dropdownVisible = false;
            }
        },
        // evento per la chiusura del menu toggle dell eliminazione chat
        closeDropdown(event) {
            if (!this.$refs.dropdownMenu.contains(event.target)) {
                this.dropdownVisible = false;
            }
        }
    },
    
    
    mounted() {
        // Imposta il primo contatto come attivo all'avvio della pagina
        if (this.contacts.length > 0) {
            // this.activeContact = this.contacts[0];
        }

        document.body.classList.add('light-mode');

        // funzione per inizializzare lo splash al montaggio della pagina
        setTimeout(() => {
            this.showSplash = false;
            document.getElementById('splash').classList.add('splash-hidden');
        }, 2000);
    },
}).mount('#app');