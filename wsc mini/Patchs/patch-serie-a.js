const PATCH_DATA = {

    leagues: [
        {
            id: "BSA",                        // ID único da liga
            name: "Brasileirão Série A",            // Nome exibido no jogo
            format: "league",                // "league" ou "cup"
            division: 1,                     // 1 = primeira divisão, 2 = segunda...
            season: { start: 1, end: 38 },   // rodadas (38 = ida e volta 20 times)
            cupQualification: [
                { positions: [1,2,3,4], toCupId: "LIB" }, 
                { positions: [5,6,7,8], toCupId: "SUL" }  // top 4 vão pra copa
            ],
            promotionSlots: [
                {} // sobe pra L1
            ],
            relegationSlots: [
                { positions: [17,18,19,20], toLeagueId: "L2" } // desce pra L2
            ]
        }
    ],

    teams: [
        {
            id: "ATH",                        // ID único do time
            name: "Athletico Paranaense",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 40000,                // dinheiro inicial
            crest: "https://tse1.mm.bing.net/th/id/OIP.kn9BqQyvKIf2eEBinaaeNgHaHa?pid=Api&P=0&h=180" // URL do escudo — opcional
        },

        {
            id: "ATM",                        // ID único do time
            name: "Atlético Mineiro",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 60000,                // dinheiro inicial
            crest: "https://tse2.mm.bing.net/th/id/OIP.UJ247edvbdX-DT-RIyWxbgHaJQ?pid=Api&P=0&h=180" // URL do escudo — opcional
        },

        {
            id: "BAH",                        // ID único do time
            name: "Bahia",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 40000,                // dinheiro inicial
            crest: "https://tse3.mm.bing.net/th/id/OIP.43VfsEvjjHKbUupxzD_TpAHaHa?pid=Api&P=0&h=180" // URL do escudo — opcional
        },

          {
            id: "BOT",                        // ID único do time
            name: "Botafogo",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 50000,                // dinheiro inicial
            crest: "https://tse2.mm.bing.net/th/id/OIP.5_90dCRI_k8uQrMW-tMTZAHaEo?pid=Api&P=0&h=180" // URL do escudo — opcional
        },

        {
            id: "RBB",                        // ID único do time
            name: "Bragantino",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 45000,                // dinheiro inicial
            crest: "https://tse1.mm.bing.net/th/id/OIP.5-VqZ8In7D5Y3hnDIYs_eQHaFG?pid=Api&P=0&h=180" // URL do escudo — opcional
        },

         {
            id: "CHA",                        // ID único do time
            name: "Chapecoense",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 34000,                // dinheiro inicial
            crest: "https://tse2.mm.bing.net/th/id/OIP.GAGePeVlHWMQ0HmsC-e5ewHaD4?pid=Api&P=0&h=180" // URL do escudo — opcional
        },

           {
            id: "COR",                        // ID único do time
            name: "Corinthians",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 75000,                // dinheiro inicial
            crest: "https://tse4.mm.bing.net/th/id/OIP.n2A32nKHj0jcHhbEQFY9uAHaEo?pid=Api&P=0&h=180" // URL do escudo — opcional
        },

        {
            id: "CTB",                        // ID único do time
            name: "Coritiba",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 45000,                // dinheiro inicial
            crest: "https://tse4.mm.bing.net/th/id/OIP.RelJ8P0nr8wY_Z_p3UZemQHaEK?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
        {
            id: "CRU",                        // ID único do time
            name: "Cruzeiro",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 50000,                // dinheiro inicial
            crest: "https://tse1.mm.bing.net/th/id/OIP.bLqH9AhqtIIvSOHoeFaINwHaEo?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
        {
            id: "FLA",                        // ID único do time
            name: "Flamengo",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 100000,                // dinheiro inicial
            crest: "https://tse1.mm.bing.net/th/id/OIP.DNL0P0n1_U29gY4FzhgpyAHaEo?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
        {
            id: "FLU",                        // ID único do time
            name: "Fluminense",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 70000,                // dinheiro inicial
            crest: "https://tse2.mm.bing.net/th/id/OIP.OBpmdM2Ei9VopLMYEOk5XgHaE7?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
        {
            id: "GRE",                        // ID único do time
            name: "Grêmio",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 65000,                // dinheiro inicial
            crest: "https://tse3.mm.bing.net/th/id/OIP.KKc0kX2n0TktsJV-5Tl1JAAAAA?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
         {
            id: "INT",                        // ID único do time
            name: "Internacional",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 65000,                // dinheiro inicial
            crest: "https://tse1.mm.bing.net/th/id/OIP.qRNiCNG2atFqxh_34uyNYwHaHa?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
         {
            id: "MIR",                        // ID único do time
            name: "Mirassol",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 45000,                // dinheiro inicial
            crest: "https://tse2.mm.bing.net/th/id/OIP.mp8kDApLYQElKKdGwgXKXgHaHa?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
         {
            id: "PAL",                        // ID único do time
            name: "Palmeiras",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 95000,                // dinheiro inicial
            crest: "https://tse3.mm.bing.net/th/id/OIP.RQru5ZvGqVxuuY6muK76OgHaFM?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
         {
            id: "REM",                        // ID único do time
            name: "Remo",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 35000,                // dinheiro inicial
            crest: "https://tse4.mm.bing.net/th/id/OIP.QPX5rdTYWJi0dvenxzB9ygAAAA?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
        {
            id: "SAN",                        // ID único do time
            name: "Santos",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 50000,                // dinheiro inicial
            crest: "https://tse4.mm.bing.net/th/id/OIP.qXqZtEqUkwxBTEBilOBupQHaEo?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
        {
            id: "SAO",                        // ID único do time
            name: "São Paulo",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 70000000,                // dinheiro inicial
            crest: "https://tse2.mm.bing.net/th/id/OIP.fg-eaCtgJF70AK2CKQstbwHaEo?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
        {
            id: "VAS",                        // ID único do time
            name: "Vasco da Gama",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 70000,                // dinheiro inicial
            crest: "https://tse3.mm.bing.net/th/id/OIP.owgWWvBQvwpP1AmmH_87bQHaHE?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
         {
            id: "VIT",                        // ID único do time
            name: "Vitória",
            country: "BR",                   // país (2-3 letras)
            leagueIds: ["BSA"],        // ligas em que participa (array)
            startBux: 45000,                // dinheiro inicial
            crest: "https://tse3.mm.bing.net/th/id/OIP.vkfV0rVDAWMA9ZAxDa7EHgHaEo?pid=Api&P=0&h=180" // URL do escudo — opcional
        },
    ],

    players: [
       // ── ATHLETICO-PR ──────────────────────────────────────────────
{ teamId:"ATH", name:"Matheus Soares",    position:"GK",  power:77, nationality:"BR" },
{ teamId:"ATH", name:"Santos",            position:"GK",  power:74, nationality:"BR" },
{ teamId:"ATH", name:"Vitinho",           position:"DEF", power:77, nationality:"BR" },
{ teamId:"ATH", name:"Felipe Aguirre",    position:"DEF", power:76, nationality:"BR" },
{ teamId:"ATH", name:"Arthur Dias",       position:"DEF", power:76, nationality:"BR" },
{ teamId:"ATH", name:"Mycael",            position:"DEF", power:75, nationality:"BR" },
{ teamId:"ATH", name:"Habraão",           position:"DEF", power:75, nationality:"BR" },
{ teamId:"ATH", name:"Gastón Benavidez",  position:"DEF", power:76, nationality:"UY" },
{ teamId:"ATH", name:"Jádson",            position:"MID", power:78, nationality:"BR" },
{ teamId:"ATH", name:"João Cruz",         position:"MID", power:78, nationality:"BR" },
{ teamId:"ATH", name:"Juan Portilla",     position:"MID", power:77, nationality:"EC" },
{ teamId:"ATH", name:"Guilherme Back",    position:"MID", power:76, nationality:"BR" },
{ teamId:"ATH", name:"Alejandro García",  position:"MID", power:77, nationality:"AR" },
{ teamId:"ATH", name:"Benjamin Brito",    position:"MID", power:76, nationality:"BR" },
{ teamId:"ATH", name:"Bruninho",          position:"ATT", power:78, nationality:"BR" },
{ teamId:"ATH", name:"Kevin Viveiros",    position:"ATT", power:77, nationality:"BR" },
{ teamId:"ATH", name:"Gonzalo Mastriani", position:"ATT", power:79, nationality:"UY" },

// ── ATLÉTICO-MG ───────────────────────────────────────────────
{ teamId:"ATM", name:"Gabriel Delfim",    position:"GK",  power:85, nationality:"BR" },
{ teamId:"ATM", name:"Éverson",           position:"GK",  power:86, nationality:"BR" },
{ teamId:"ATM", name:"Victor Hugo",       position:"DEF", power:87, nationality:"BR" },
{ teamId:"ATM", name:"Vitão",             position:"DEF", power:88, nationality:"BR" },
{ teamId:"ATM", name:"Samuel Lima",       position:"DEF", power:86, nationality:"BR" },
{ teamId:"ATM", name:"Iván Román",        position:"DEF", power:87, nationality:"AR" },
{ teamId:"ATM", name:"Angelo Preciado",   position:"DEF", power:87, nationality:"EC" },
{ teamId:"ATM", name:"Luís Gustavo",      position:"DEF", power:86, nationality:"BR" },
{ teamId:"ATM", name:"Gustavo Scarpa",    position:"MID", power:89, nationality:"BR" },
{ teamId:"ATM", name:"Mamady Cissé",      position:"MID", power:88, nationality:"GN" },
{ teamId:"ATM", name:"Tomás Pérez",       position:"MID", power:87, nationality:"AR" },
{ teamId:"ATM", name:"Maycon",            position:"MID", power:87, nationality:"BR" },
{ teamId:"ATM", name:"Alexsander",        position:"MID", power:88, nationality:"BR" },
{ teamId:"ATM", name:"Patrick Silva",     position:"MID", power:87, nationality:"BR" },
{ teamId:"ATM", name:"Tomás Cuello",      position:"ATT", power:89, nationality:"AR" },
{ teamId:"ATM", name:"Dudu",              position:"ATT", power:90, nationality:"BR" },
{ teamId:"ATM", name:"Hulk",              position:"ATT", power:91, nationality:"BR" },

// ── BAHIA ─────────────────────────────────────────────────────
{ teamId:"BAH", name:"Ronaldo",           position:"GK",  power:81, nationality:"BR" },
{ teamId:"BAH", name:"João Paulo",        position:"GK",  power:79, nationality:"BR" },
{ teamId:"BAH", name:"Gilberto",          position:"DEF", power:81, nationality:"BR" },
{ teamId:"BAH", name:"Gabriel Xavier",    position:"DEF", power:82, nationality:"BR" },
{ teamId:"BAH", name:"Dodô",              position:"DEF", power:82, nationality:"BR" },
{ teamId:"BAH", name:"Luciano Juba",      position:"DEF", power:81, nationality:"BR" },
{ teamId:"BAH", name:"Román Gómez",       position:"DEF", power:80, nationality:"AR" },
{ teamId:"BAH", name:"Santiago Ramos",    position:"DEF", power:80, nationality:"UY" },
{ teamId:"BAH", name:"Erick",             position:"MID", power:82, nationality:"BR" },
{ teamId:"BAH", name:"Nicolás Acevedo",   position:"MID", power:83, nationality:"UY" },
{ teamId:"BAH", name:"Pedrinho",          position:"MID", power:82, nationality:"BR" },
{ teamId:"BAH", name:"Rodrigo Nestor",    position:"MID", power:81, nationality:"BR" },
{ teamId:"BAH", name:"Éverton Ribeiro",   position:"MID", power:84, nationality:"BR" },
{ teamId:"BAH", name:"Caio Alexandre",    position:"MID", power:82, nationality:"BR" },
{ teamId:"BAH", name:"Erick Pulga",       position:"ATT", power:84, nationality:"BR" },
{ teamId:"BAH", name:"Dell",              position:"ATT", power:82, nationality:"BR" },
{ teamId:"BAH", name:"Everaldo",          position:"ATT", power:83, nationality:"BR" },

// ── BOTAFOGO ──────────────────────────────────────────────────
{ teamId:"BOT", name:"Raul",              position:"GK",  power:81, nationality:"BR" },
{ teamId:"BOT", name:"Léo Linck",         position:"GK",  power:80, nationality:"BR" },
{ teamId:"BOT", name:"Rogério",           position:"DEF", power:81, nationality:"BR" },
{ teamId:"BOT", name:"Matteo Ponte",      position:"DEF", power:82, nationality:"IT" },
{ teamId:"BOT", name:"Bastos",            position:"DEF", power:82, nationality:"AO" },
{ teamId:"BOT", name:"Ythallo",           position:"DEF", power:80, nationality:"BR" },
{ teamId:"BOT", name:"Nahuel Ferraresi",  position:"DEF", power:82, nationality:"VE" },
{ teamId:"BOT", name:"Danillo Oliveira",  position:"DEF", power:81, nationality:"BR" },
{ teamId:"BOT", name:"Allan",             position:"MID", power:83, nationality:"BR" },
{ teamId:"BOT", name:"Marquinhos",        position:"MID", power:82, nationality:"BR" },
{ teamId:"BOT", name:"Lucas Camilo",      position:"MID", power:81, nationality:"BR" },
{ teamId:"BOT", name:"Cristian Medina",   position:"MID", power:83, nationality:"AR" },
{ teamId:"BOT", name:"Davi Nery",         position:"MID", power:81, nationality:"BR" },
{ teamId:"BOT", name:"Danilo",            position:"MID", power:82, nationality:"BR" },
{ teamId:"BOT", name:"Arthur Cabral",     position:"ATT", power:84, nationality:"BR" },
{ teamId:"BOT", name:"Samuel Alves",      position:"ATT", power:82, nationality:"BR" },
{ teamId:"BOT", name:"Matheus Martins",   position:"ATT", power:83, nationality:"BR" },

// ── RED BULL BRAGANTINO ───────────────────────────────────────
{ teamId:"RBB", name:"Cleiton",           position:"GK",  power:78, nationality:"BR" },
{ teamId:"RBB", name:"Tiago Volpi",       position:"GK",  power:76, nationality:"BR" },
{ teamId:"RBB", name:"Juninho Capixaba",  position:"DEF", power:77, nationality:"BR" },
{ teamId:"RBB", name:"Agustín Sant'Anna", position:"DEF", power:76, nationality:"UY" },
{ teamId:"RBB", name:"Ryan Augusto",      position:"DEF", power:76, nationality:"BR" },
{ teamId:"RBB", name:"Vanderlan",         position:"DEF", power:76, nationality:"BR" },
{ teamId:"RBB", name:"Gustavo Marques",   position:"DEF", power:75, nationality:"BR" },
{ teamId:"RBB", name:"Eduardo Santos",    position:"DEF", power:75, nationality:"BR" },
{ teamId:"RBB", name:"Fabinho",           position:"MID", power:77, nationality:"BR" },
{ teamId:"RBB", name:"Marcelinho",        position:"MID", power:78, nationality:"BR" },
{ teamId:"RBB", name:"Gabriel Lopes",     position:"MID", power:77, nationality:"BR" },
{ teamId:"RBB", name:"Rodriguinho",       position:"MID", power:76, nationality:"BR" },
{ teamId:"RBB", name:"João Neto",         position:"MID", power:76, nationality:"BR" },
{ teamId:"RBB", name:"Matheus Fernandes", position:"MID", power:77, nationality:"BR" },
{ teamId:"RBB", name:"Isidro Pitta",      position:"ATT", power:78, nationality:"PA" },
{ teamId:"RBB", name:"Eduardo Sasha",     position:"ATT", power:79, nationality:"BR" },
{ teamId:"RBB", name:"Henry Mosquera",    position:"ATT", power:78, nationality:"CO" },

// ── CHAPECOENSE ───────────────────────────────────────────────
{ teamId:"CHA", name:"Léo Vieira",        position:"GK",  power:76, nationality:"BR" },
{ teamId:"CHA", name:"Anderson",          position:"GK",  power:74, nationality:"BR" },
{ teamId:"CHA", name:"Mancha",            position:"DEF", power:75, nationality:"BR" },
{ teamId:"CHA", name:"Rafael Thyere",     position:"DEF", power:76, nationality:"BR" },
{ teamId:"CHA", name:"Kauan Faria",       position:"DEF", power:75, nationality:"BR" },
{ teamId:"CHA", name:"Marcos Vinícius",   position:"DEF", power:75, nationality:"BR" },
{ teamId:"CHA", name:"Victor Caetano",    position:"DEF", power:74, nationality:"BR" },
{ teamId:"CHA", name:"Eduardo Doma",      position:"DEF", power:74, nationality:"BR" },
{ teamId:"CHA", name:"Bruno Matias",      position:"MID", power:76, nationality:"BR" },
{ teamId:"CHA", name:"Giovanni Augusto",  position:"MID", power:77, nationality:"BR" },
{ teamId:"CHA", name:"Higor Meritão",     position:"MID", power:76, nationality:"BR" },
{ teamId:"CHA", name:"Rafael Carvalheira",position:"MID", power:76, nationality:"BR" },
{ teamId:"CHA", name:"Robert",            position:"MID", power:75, nationality:"BR" },
{ teamId:"CHA", name:"Vinícius Balieiro", position:"MID", power:75, nationality:"BR" },
{ teamId:"CHA", name:"Marcinho",          position:"ATT", power:77, nationality:"BR" },
{ teamId:"CHA", name:"Yannick Bolasie",   position:"ATT", power:78, nationality:"CD" },
{ teamId:"CHA", name:"Neto Pessoa",       position:"ATT", power:77, nationality:"BR" },
// ── CORINTHIANS ───────────────────────────────────────────────
{ teamId:"COR", name:"Hugo Souza",        position:"GK",  power:81, nationality:"BR" },
{ teamId:"COR", name:"Kauê Camargo",      position:"GK",  power:77, nationality:"BR" },
{ teamId:"COR", name:"Matheuzinho",       position:"DEF", power:80, nationality:"BR" },
{ teamId:"COR", name:"Hugo",              position:"DEF", power:79, nationality:"BR" },
{ teamId:"COR", name:"Matheus Bidu",      position:"DEF", power:79, nationality:"BR" },
{ teamId:"COR", name:"Pedro Milans",      position:"DEF", power:78, nationality:"UY" },
{ teamId:"COR", name:"Fabrício Angileri", position:"DEF", power:79, nationality:"AR" },
{ teamId:"COR", name:"André Ramalho",     position:"DEF", power:80, nationality:"BR" },
{ teamId:"COR", name:"Rodrigo Garro",     position:"MID", power:82, nationality:"AR" },
{ teamId:"COR", name:"Jesse Lingard",     position:"MID", power:80, nationality:"EN" },
{ teamId:"COR", name:"Matheus Pereira",   position:"MID", power:81, nationality:"BR" },
{ teamId:"COR", name:"Allan",             position:"MID", power:79, nationality:"BR" },
{ teamId:"COR", name:"Charles",           position:"MID", power:79, nationality:"BR" },
{ teamId:"COR", name:"Gui Amorim",        position:"MID", power:78, nationality:"BR" },
{ teamId:"COR", name:"Memphis Depay",     position:"ATT", power:83, nationality:"NL" },
{ teamId:"COR", name:"Yuri Alberto",      position:"ATT", power:82, nationality:"BR" },
{ teamId:"COR", name:"Vitinho",           position:"ATT", power:80, nationality:"BR" },
// ── CORITIBA ──────────────────────────────────────────────────
{ teamId:"CTB", name:"Pedro Luccas",      position:"GK",  power:77, nationality:"BR" },
{ teamId:"CTB", name:"Benassi",           position:"GK",  power:75, nationality:"BR" },
{ teamId:"CTB", name:"Maicon",            position:"DEF", power:77, nationality:"BR" },
{ teamId:"CTB", name:"João Almeida",      position:"DEF", power:76, nationality:"BR" },
{ teamId:"CTB", name:"Tiago",             position:"DEF", power:76, nationality:"BR" },
{ teamId:"CTB", name:"Bruno Melo",        position:"DEF", power:76, nationality:"BR" },
{ teamId:"CTB", name:"Felipe Jonatan",    position:"DEF", power:77, nationality:"BR" },
{ teamId:"CTB", name:"Rodrigo Moledo",    position:"DEF", power:76, nationality:"BR" },
{ teamId:"CTB", name:"Willian",           position:"MID", power:77, nationality:"BR" },
{ teamId:"CTB", name:"Thiago Azf",        position:"MID", power:76, nationality:"BR" },
{ teamId:"CTB", name:"Tissi",             position:"MID", power:76, nationality:"BR" },
{ teamId:"CTB", name:"Miguel Silva",      position:"MID", power:76, nationality:"BR" },
{ teamId:"CTB", name:"Walisson Luiz",     position:"MID", power:75, nationality:"BR" },
{ teamId:"CTB", name:"Gustavo",           position:"MID", power:76, nationality:"BR" },
{ teamId:"CTB", name:"Enzo Vágner",       position:"ATT", power:78, nationality:"BR" },
{ teamId:"CTB", name:"Vini Paulista",     position:"ATT", power:78, nationality:"BR" },
{ teamId:"CTB", name:"Brayan",            position:"ATT", power:77, nationality:"BR" },
// ── CRUZEIRO ──────────────────────────────────────────────────
{ teamId:"CRU", name:"Cássio",            position:"GK",  power:85, nationality:"BR" },
{ teamId:"CRU", name:"Matheus Cunha",     position:"GK",  power:80, nationality:"BR" },
{ teamId:"CRU", name:"Lucas Villalba",    position:"DEF", power:82, nationality:"AR" },
{ teamId:"CRU", name:"Fabrício Bruno",    position:"DEF", power:83, nationality:"BR" },
{ teamId:"CRU", name:"Jonathan Jesus",    position:"DEF", power:81, nationality:"BR" },
{ teamId:"CRU", name:"Kaiki",             position:"DEF", power:80, nationality:"BR" },
{ teamId:"CRU", name:"Fagner",            position:"DEF", power:82, nationality:"BR" },
{ teamId:"CRU", name:"William",           position:"DEF", power:81, nationality:"BR" },
{ teamId:"CRU", name:"Matheus Pereira",   position:"MID", power:84, nationality:"BR" },
{ teamId:"CRU", name:"Gerson",            position:"MID", power:85, nationality:"BR" },
{ teamId:"CRU", name:"Walace",            position:"MID", power:82, nationality:"BR" },
{ teamId:"CRU", name:"Vitinho",           position:"MID", power:81, nationality:"BR" },
{ teamId:"CRU", name:"Lucas Romero",      position:"MID", power:82, nationality:"AR" },
{ teamId:"CRU", name:"Japa",              position:"MID", power:80, nationality:"BR" },
{ teamId:"CRU", name:"Marquinhos",        position:"ATT", power:83, nationality:"BR" },
{ teamId:"CRU", name:"Kaio Jorge",        position:"ATT", power:84, nationality:"BR" },
{ teamId:"CRU", name:"Bruno Rodrigues",   position:"ATT", power:82, nationality:"BR" },
// ── FLAMENGO ──────────────────────────────────────────────────
{ teamId:"FLA", name:"Agustín Rossi",      position:"GK",  power:88, nationality:"AR" },
{ teamId:"FLA", name:"Dyogo Alves",        position:"GK",  power:82, nationality:"BR" },
{ teamId:"FLA", name:"Danilo",             position:"DEF", power:87, nationality:"BR" },
{ teamId:"FLA", name:"Léo Ortiz",          position:"DEF", power:88, nationality:"BR" },
{ teamId:"FLA", name:"Léo Pereira",        position:"DEF", power:88, nationality:"BR" },
{ teamId:"FLA", name:"Alex Sandro",        position:"DEF", power:86, nationality:"BR" },
{ teamId:"FLA", name:"Ayrton Lucas",       position:"DEF", power:87, nationality:"BR" },
{ teamId:"FLA", name:"Guillermo Varela",   position:"DEF", power:86, nationality:"UY" },
{ teamId:"FLA", name:"Erick Pulgar",       position:"MID", power:87, nationality:"CL" },
{ teamId:"FLA", name:"Nicolás de la Cruz", position:"MID", power:89, nationality:"UY" },
{ teamId:"FLA", name:"Arrascaeta",         position:"MID", power:91, nationality:"UY" },
{ teamId:"FLA", name:"Evertton Araújo",    position:"MID", power:86, nationality:"BR" },
{ teamId:"FLA", name:"Jorginho",           position:"MID", power:87, nationality:"IT" },
{ teamId:"FLA", name:"Jorge Carrascal",    position:"ATT", power:88, nationality:"CO" },
{ teamId:"FLA", name:"Gonzalo Plata",      position:"ATT", power:87, nationality:"EC" },
{ teamId:"FLA", name:"Samuel Lino",        position:"ATT", power:87, nationality:"BR" },
{ teamId:"FLA", name:"Pedro",              position:"ATT", power:92, nationality:"BR" },
{ teamId:"FLA", name:"Everton Cebolinha",  position:"ATT", power:88, nationality:"BR" },
{ teamId:"FLA", name:"Wallace Yan",        position:"ATT", power:84, nationality:"BR" },
// ── FLUMINENSE ────────────────────────────────────────────────
{ teamId:"FLU", name:"Fábio",             position:"GK",  power:87, nationality:"BR" },
{ teamId:"FLU", name:"Marcelo Pitaluga",  position:"GK",  power:81, nationality:"BR" },
{ teamId:"FLU", name:"Samuel Xavier",     position:"DEF", power:85, nationality:"BR" },
{ teamId:"FLU", name:"Miguel Sampaio",    position:"DEF", power:84, nationality:"BR" },
{ teamId:"FLU", name:"Guilherme Arana",   position:"DEF", power:87, nationality:"BR" },
{ teamId:"FLU", name:"Davi Schuindt",     position:"DEF", power:83, nationality:"BR" },
{ teamId:"FLU", name:"Igor Rabello",      position:"DEF", power:84, nationality:"BR" },
{ teamId:"FLU", name:"Julián Millán",     position:"DEF", power:83, nationality:"AR" },
{ teamId:"FLU", name:"Alisson",           position:"MID", power:86, nationality:"BR" },
{ teamId:"FLU", name:"Martinelli",        position:"MID", power:85, nationality:"BR" },
{ teamId:"FLU", name:"Nonato",            position:"MID", power:84, nationality:"BR" },
{ teamId:"FLU", name:"PH Ganso",          position:"MID", power:86, nationality:"BR" },
{ teamId:"FLU", name:"Hércules",          position:"MID", power:84, nationality:"BR" },
{ teamId:"FLU", name:"Jefferson Savarino",position:"MID", power:86, nationality:"VE" },
{ teamId:"FLU", name:"John Kennedy",      position:"ATT", power:87, nationality:"BR" },
{ teamId:"FLU", name:"Agustín Canobbio",  position:"ATT", power:87, nationality:"UY" },
{ teamId:"FLU", name:"Germán Cano",       position:"ATT", power:89, nationality:"AR" },
{ teamId:"FLU", name:"Yeferson Soteldo",  position:"ATT", power:88, nationality:"VE" },
// ── GRÊMIO ────────────────────────────────────────────────────
{ teamId:"GRE", name:"Weverton",           position:"GK",  power:85, nationality:"BR" },
{ teamId:"GRE", name:"Thiago Beltrame",    position:"GK",  power:79, nationality:"BR" },
{ teamId:"GRE", name:"João Pedro",         position:"DEF", power:82, nationality:"BR" },
{ teamId:"GRE", name:"Marcos Rocha",       position:"DEF", power:81, nationality:"BR" },
{ teamId:"GRE", name:"Caio Paulista",      position:"DEF", power:82, nationality:"BR" },
{ teamId:"GRE", name:"Marlon",             position:"DEF", power:81, nationality:"BR" },
{ teamId:"GRE", name:"Wálter Kannemann",   position:"DEF", power:83, nationality:"AR" },
{ teamId:"GRE", name:"Fabián Balbuena",    position:"DEF", power:82, nationality:"PY" },
{ teamId:"GRE", name:"Mathias Villasanti", position:"MID", power:84, nationality:"PY" },
{ teamId:"GRE", name:"Erick Noriega",      position:"MID", power:81, nationality:"BR" },
{ teamId:"GRE", name:"Arthur Melo",        position:"MID", power:83, nationality:"BR" },
{ teamId:"GRE", name:"Riquelme",           position:"MID", power:82, nationality:"BR" },
{ teamId:"GRE", name:"Dodi",               position:"MID", power:82, nationality:"BR" },
{ teamId:"GRE", name:"Leonel Pérez",       position:"MID", power:81, nationality:"AR" },
{ teamId:"GRE", name:"Cristian Pavón",     position:"ATT", power:84, nationality:"AR" },
{ teamId:"GRE", name:"Martin Braithwaite", position:"ATT", power:83, nationality:"DK" },
{ teamId:"GRE", name:"Francis Amuzu",      position:"ATT", power:83, nationality:"BE" },
// ── INTERNACIONAL ─────────────────────────────────────────────
{ teamId:"INT", name:"Sergio Rochet",      position:"GK",  power:80, nationality:"UY" },
{ teamId:"INT", name:"Kauan Jesus",        position:"GK",  power:76, nationality:"BR" },
{ teamId:"INT", name:"Cleyton Sampaio",    position:"DEF", power:78, nationality:"BR" },
{ teamId:"INT", name:"Gabriel Mercado",    position:"DEF", power:79, nationality:"AR" },
{ teamId:"INT", name:"Félix Torres",       position:"DEF", power:80, nationality:"EC" },
{ teamId:"INT", name:"Denis Marfo",        position:"DEF", power:77, nationality:"GH" },
{ teamId:"INT", name:"Braian Aguirre",     position:"DEF", power:78, nationality:"AR" },
{ teamId:"INT", name:"Alexandro Bernabei", position:"DEF", power:79, nationality:"AR" },
{ teamId:"INT", name:"Richard",            position:"MID", power:79, nationality:"BR" },
{ teamId:"INT", name:"Alan Patrick",       position:"MID", power:81, nationality:"BR" },
{ teamId:"INT", name:"Benjamin Arhin",     position:"MID", power:77, nationality:"GH" },
{ teamId:"INT", name:"Alan Rodríguez",     position:"MID", power:78, nationality:"UY" },
{ teamId:"INT", name:"Bruno Gomes",        position:"MID", power:78, nationality:"BR" },
{ teamId:"INT", name:"Paulinho Paula",     position:"MID", power:77, nationality:"BR" },
{ teamId:"INT", name:"Rafael Borré",       position:"ATT", power:81, nationality:"CO" },
{ teamId:"INT", name:"Vitinho",            position:"ATT", power:79, nationality:"BR" },
{ teamId:"INT", name:"Allex",              position:"ATT", power:79, nationality:"BR" },
// ── MIRASSOL ──────────────────────────────────────────────────
{ teamId:"MIR", name:"Walter",             position:"GK",  power:85, nationality:"BR" },
{ teamId:"MIR", name:"Alex Muralha",       position:"GK",  power:83, nationality:"BR" },
{ teamId:"MIR", name:"Igor Formiga",       position:"DEF", power:84, nationality:"BR" },
{ teamId:"MIR", name:"João Victor",        position:"DEF", power:85, nationality:"BR" },
{ teamId:"MIR", name:"Willian Machado",    position:"DEF", power:84, nationality:"BR" },
{ teamId:"MIR", name:"Reinaldo",           position:"DEF", power:85, nationality:"BR" },
{ teamId:"MIR", name:"Daniel Borges",      position:"DEF", power:84, nationality:"BR" },
{ teamId:"MIR", name:"Cauã Victor",        position:"DEF", power:83, nationality:"BR" },
{ teamId:"MIR", name:"Chico Kim",          position:"MID", power:86, nationality:"BR" },
{ teamId:"MIR", name:"Shaylon",            position:"MID", power:85, nationality:"BR" },
{ teamId:"MIR", name:"Lucas Mugni",        position:"MID", power:85, nationality:"AR" },
{ teamId:"MIR", name:"José Aldo",          position:"MID", power:84, nationality:"BR" },
{ teamId:"MIR", name:"Denilson",           position:"MID", power:84, nationality:"BR" },
{ teamId:"MIR", name:"Gabriel Pires",      position:"MID", power:85, nationality:"BR" },
{ teamId:"MIR", name:"Tiquinho Soares",    position:"ATT", power:88, nationality:"BR" },
{ teamId:"MIR", name:"Negueba",            position:"ATT", power:86, nationality:"BR" },
{ teamId:"MIR", name:"Antônio Galeano",    position:"ATT", power:86, nationality:"PY" },
// ── PALMEIRAS ─────────────────────────────────────────────────
{ teamId:"PAL", name:"Carlos Miguel",      position:"GK",  power:88, nationality:"BR" },
{ teamId:"PAL", name:"Aranha",             position:"GK",  power:83, nationality:"BR" },
{ teamId:"PAL", name:"Joaquín Piquerez",   position:"DEF", power:89, nationality:"UY" },
{ teamId:"PAL", name:"Bruno Fuchs",        position:"DEF", power:88, nationality:"BR" },
{ teamId:"PAL", name:"Gustavo Gómez",      position:"DEF", power:90, nationality:"PY" },
{ teamId:"PAL", name:"Murilo",             position:"DEF", power:88, nationality:"BR" },
{ teamId:"PAL", name:"Benedetti",          position:"DEF", power:87, nationality:"AR" },
{ teamId:"PAL", name:"Agustín Giay",       position:"DEF", power:88, nationality:"AR" },
{ teamId:"PAL", name:"Lucas Evangelista",  position:"MID", power:88, nationality:"BR" },
{ teamId:"PAL", name:"Emiliano Martínez",  position:"MID", power:87, nationality:"AR" },
{ teamId:"PAL", name:"Maurício",           position:"MID", power:89, nationality:"BR" },
{ teamId:"PAL", name:"Marlon Freitas",     position:"MID", power:89, nationality:"BR" },
{ teamId:"PAL", name:"Allan Elias",        position:"MID", power:87, nationality:"BR" },
{ teamId:"PAL", name:"Figueiredo",         position:"MID", power:87, nationality:"BR" },
{ teamId:"PAL", name:"Vitor Roque",        position:"ATT", power:91, nationality:"BR" },
{ teamId:"PAL", name:"Flaco López",        position:"ATT", power:91, nationality:"AR" },
{ teamId:"PAL", name:"Luighi",             position:"ATT", power:88, nationality:"BR" },
// ── REMO ─────────────────────────────────────────────────────
{ teamId:"REM", name:"Marcos Alexandre",   position:"GK",  power:73, nationality:"BR" },
{ teamId:"REM", name:"Marcelo Rangel",     position:"GK",  power:71, nationality:"BR" },
{ teamId:"REM", name:"João Lucas",         position:"DEF", power:72, nationality:"BR" },
{ teamId:"REM", name:"Marllon",            position:"DEF", power:73, nationality:"BR" },
{ teamId:"REM", name:"Léo Andrade",        position:"DEF", power:72, nationality:"BR" },
{ teamId:"REM", name:"Kayky Almeida",      position:"DEF", power:72, nationality:"BR" },
{ teamId:"REM", name:"Sávio",              position:"DEF", power:70, nationality:"BR" },
{ teamId:"REM", name:"Cristian Tassano",   position:"DEF", power:72, nationality:"AR" },
{ teamId:"REM", name:"Zé Ricardo",         position:"MID", power:73, nationality:"BR" },
{ teamId:"REM", name:"Patrick de Paula",   position:"MID", power:74, nationality:"BR" },
{ teamId:"REM", name:"Vitor Bueno",        position:"MID", power:73, nationality:"BR" },
{ teamId:"REM", name:"Kakaroto",           position:"MID", power:72, nationality:"BR" },
{ teamId:"REM", name:"Leonel Picco",       position:"MID", power:72, nationality:"AR" },
{ teamId:"REM", name:"Franco Catarozzi",   position:"MID", power:72, nationality:"AR" },
{ teamId:"REM", name:"João Pedro",         position:"ATT", power:74, nationality:"BR" },
{ teamId:"REM", name:"Yago Pikachu",       position:"ATT", power:81, nationality:"BR" },
{ teamId:"REM", name:"Alef Manga",         position:"ATT", power:74, nationality:"BR" },
// ── SANTOS ────────────────────────────────────────────────────
{ teamId:"SAN", name:"Gabriel Brazão",     position:"GK",  power:78, nationality:"BR" },
{ teamId:"SAN", name:"Rodrigo Falcão",     position:"GK",  power:75, nationality:"BR" },
{ teamId:"SAN", name:"Mayke",              position:"DEF", power:77, nationality:"BR" },
{ teamId:"SAN", name:"Vinícius Lira",      position:"DEF", power:76, nationality:"BR" },
{ teamId:"SAN", name:"Adonis Frías",       position:"DEF", power:77, nationality:"DO" },
{ teamId:"SAN", name:"Zé Ivaldo",          position:"DEF", power:77, nationality:"BR" },
{ teamId:"SAN", name:"Luan Peres",         position:"DEF", power:76, nationality:"BR" },
{ teamId:"SAN", name:"Igor Vinícius",      position:"DEF", power:75, nationality:"BR" },
{ teamId:"SAN", name:"João Schmidt",       position:"MID", power:77, nationality:"BR" },
{ teamId:"SAN", name:"Willian Arão",       position:"MID", power:78, nationality:"BR" },
{ teamId:"SAN", name:"Gabriel Menino",     position:"MID", power:77, nationality:"BR" },
{ teamId:"SAN", name:"Thaciano",           position:"MID", power:77, nationality:"BR" },
{ teamId:"SAN", name:"Tomás Rincón",       position:"MID", power:76, nationality:"VE" },
{ teamId:"SAN", name:"Miguelito",          position:"MID", power:77, nationality:"EC" },
{ teamId:"SAN", name:"Rony",               position:"ATT", power:84, nationality:"BR" },
{ teamId:"SAN", name:"Neymar",             position:"ATT", power:89, nationality:"BR" },
{ teamId:"SAN", name:"Gabriel Barbosa",    position:"ATT", power:85, nationality:"BR" },
// ── SÃO PAULO ─────────────────────────────────────────────────
{ teamId:"SAO", name:"Carlos Coronel",     position:"GK",  power:85, nationality:"UY" },
{ teamId:"SAO", name:"Young",              position:"GK",  power:83, nationality:"BR" },
{ teamId:"SAO", name:"Rafael",             position:"GK",  power:87, nationality:"BR" },
{ teamId:"SAO", name:"Alan Franco",        position:"DEF", power:86, nationality:"EC" },
{ teamId:"SAO", name:"Maik Gomes",         position:"DEF", power:84, nationality:"BR" },
{ teamId:"SAO", name:"Enzo Díaz",          position:"DEF", power:87, nationality:"AR" },
{ teamId:"SAO", name:"Wendell",            position:"DEF", power:86, nationality:"BR" },
{ teamId:"SAO", name:"Sabino",             position:"DEF", power:85, nationality:"BR" },
{ teamId:"SAO", name:"Rafael Tolói",       position:"DEF", power:85, nationality:"IT" },
{ teamId:"SAO", name:"Lucas Ramon",        position:"DEF", power:83, nationality:"BR" },
{ teamId:"SAO", name:"Cédric Soares",      position:"DEF", power:83, nationality:"PT" },
{ teamId:"SAO", name:"Cauly",              position:"MID", power:87, nationality:"BR" },
{ teamId:"SAO", name:"Danielzinho",        position:"MID", power:86, nationality:"BR" },
{ teamId:"SAO", name:"Damián Bobadilla",   position:"MID", power:87, nationality:"PY" },
{ teamId:"SAO", name:"Luan",               position:"MID", power:85, nationality:"BR" },
{ teamId:"SAO", name:"Pablo Maia",         position:"MID", power:86, nationality:"BR" },
{ teamId:"SAO", name:"Marcos Antônio",     position:"MID", power:86, nationality:"BR" },
{ teamId:"SAO", name:"Felipe Negrucci",    position:"MID", power:84, nationality:"BR" },
{ teamId:"SAO", name:"Pedro Ferreira",     position:"MID", power:83, nationality:"BR" },
{ teamId:"SAO", name:"Luciano",            position:"ATT", power:89, nationality:"BR" },
{ teamId:"SAO", name:"Jonathan Calleri",   position:"ATT", power:91, nationality:"AR" },
{ teamId:"SAO", name:"Gonzalo Tapia",      position:"ATT", power:86, nationality:"CL" },
{ teamId:"SAO", name:"Ryan Francisco",     position:"ATT", power:84, nationality:"BR" },
// ── VASCO DA GAMA ─────────────────────────────────────────────
{ teamId:"VAS", name:"Léo Jardim",         position:"GK",  power:83, nationality:"BR" },
{ teamId:"VAS", name:"Pablo Cardoso",      position:"GK",  power:79, nationality:"BR" },
{ teamId:"VAS", name:"Pumita Rodríguez",   position:"DEF", power:82, nationality:"UY" },
{ teamId:"VAS", name:"Lucas Piton",        position:"DEF", power:82, nationality:"BR" },
{ teamId:"VAS", name:"Carlos Cuesta",      position:"DEF", power:83, nationality:"CO" },
{ teamId:"VAS", name:"Robert Renan",       position:"DEF", power:82, nationality:"BR" },
{ teamId:"VAS", name:"Alan Saldivia",      position:"DEF", power:81, nationality:"CL" },
{ teamId:"VAS", name:"Walace Fernandes",   position:"DEF", power:81, nationality:"BR" },
{ teamId:"VAS", name:"Thiago Mendes",      position:"MID", power:82, nationality:"BR" },
{ teamId:"VAS", name:"Cauan Barros",       position:"MID", power:81, nationality:"BR" },
{ teamId:"VAS", name:"Johan Rojas",        position:"MID", power:83, nationality:"CO" },
{ teamId:"VAS", name:"Tchê Tchê",          position:"MID", power:82, nationality:"BR" },
{ teamId:"VAS", name:"Matheus França",     position:"MID", power:84, nationality:"BR" },
{ teamId:"VAS", name:"Luiz Lócio",         position:"MID", power:81, nationality:"BR" },
{ teamId:"VAS", name:"Andrés Gómez",       position:"ATT", power:83, nationality:"EC" },
{ teamId:"VAS", name:"Nuno Moreira",       position:"ATT", power:82, nationality:"PT" },
{ teamId:"VAS", name:"Claudio Spinelli",   position:"ATT", power:83, nationality:"AR" },
// ── VITÓRIA ───────────────────────────────────────────────────
{ teamId:"VIT", name:"Gabriel Vasconcelos", position:"GK",  power:77, nationality:"BR" },
{ teamId:"VIT", name:"Lucas Arcanjo",       position:"GK",  power:75, nationality:"BR" },
{ teamId:"VIT", name:"Kévin",               position:"DEF", power:76, nationality:"BR" },
{ teamId:"VIT", name:"Matheusinho",         position:"DEF", power:77, nationality:"BR" },
{ teamId:"VIT", name:"Camutanga",           position:"DEF", power:77, nationality:"BR" },
{ teamId:"VIT", name:"Edenilson",           position:"DEF", power:77, nationality:"BR" },
{ teamId:"VIT", name:"Ramon",               position:"DEF", power:76, nationality:"BR" },
{ teamId:"VIT", name:"Riquelme Carvalho",   position:"DEF", power:76, nationality:"BR" },
{ teamId:"VIT", name:"Matheuzinho",         position:"MID", power:77, nationality:"BR" },
{ teamId:"VIT", name:"Rúben Ismael",        position:"MID", power:77, nationality:"AO" },
{ teamId:"VIT", name:"Baralhas",            position:"MID", power:76, nationality:"BR" },
{ teamId:"VIT", name:"Caíque Gonçalves",    position:"MID", power:76, nationality:"BR" },
{ teamId:"VIT", name:"Alejandro Almaraz",   position:"MID", power:77, nationality:"AR" },
{ teamId:"VIT", name:"Luis Aucélio",        position:"MID", power:76, nationality:"BR" },
{ teamId:"VIT", name:"Erick",               position:"ATT", power:78, nationality:"BR" },
{ teamId:"VIT", name:"Renato Kayzer",       position:"ATT", power:79, nationality:"BR" },
{ teamId:"VIT", name:"Aitor Cantalapiedra", position:"ATT", power:79, nationality:"ES" },
    ]

};