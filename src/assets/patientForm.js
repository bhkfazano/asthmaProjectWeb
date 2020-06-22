
export const patientForm = [
    {
        question: "Em média, durante os últimos sete dias, o quão frequentemente você se acordou por causa de sua asma, durante a noite?",
        options: [
            "Nunca.",
            "Quase nunca.",
            "Poucas vezes.",
            "Várias vezes",
            "Muitas vezes.",
            "Muitíssimas vezes.",
            "Incapaz de dormir devido a asma.",
            "Nenhuma das anteriores."
        ],
        id: "hm_1",
        number: 1
    },
    {
        question: "Em média, durante os últimos sete dias, o quão ruins foram os seus sintomas da asma, quando você acordou pela manhã?",
        options: [
            "Sem sintomas.",
            "Sintomas muito leves.",
            "Sintomas leves.",
            "Sintomas moderados",
            "Sintomas um, tanto graves.",
            "Sintomas graves.",
            "Sintomas muito graves.",
            "Nenhuma das anteriores."
        ],
        id: "hm_2",
        number: 2
    },
    {
        question: "De um modo geral, durante os últimos sete dias, o quão limitado você tem estado em suas atividades por causa de sua asma?",
        options: [
            "Nada limitado.",
            "Muito pouco limitado.",
            "Pouco limitado.",
            "Moderadamente limitado",
            "Muito limitado.",
            "Extremamente limitado.",
            "Totalmente limitado.",
            "Nenhuma das anteriores."
        ],
        id: "hm_3",
        number: 3
    },
    {
        question: "De um modo geral, durante os últimos sete dias, o quanto de falta de ar você teve por causa de sua asma?",
        options: [
            "Nenhuma.",
            "Muito pouco.",
            "Alguma.",
            "Moderada",
            "Bastante.",
            "Muita.",
            "Muitíssima.",
            "Nenhuma das anteriores."
        ],
        id: "hm_4",
        number: 4
    },
    {
        question: "De um modo geral, durante os últimos sete dias, quanto tempo você teve chiado?",
        options: [
            "Nunca.",
            "Quase nunca.",
            "Pouco tempo.",
            "Algum tempo",
            "Bastante tempo.",
            "Quase sempre.",
            "Sempre.",
            "Nenhuma das anteriores."
        ],
        id: "hm_5",
        number: 5
    },
    {
        question: "Em média, durante os últimos sete dias, quantos jatos de broncodilatador de resgate (Sabutamol, Fenoterol, etc) você usou por dia?",
        options: [
            "1-2 jatos na maior parte dos dias.",
            "3-4 jatos na maior parte dos dias.",
            "5-8 jatos na maior parte dos dias.",
            "9-12 jatos na maior parte dos dias.",
            "13-16 jatos na maior parte dos dias.",
            "Mais de 16 jatos na maior parte dos dias.",
            "Nenhuma das anteriores."
        ],
        id: "hm_6",
        number: 6
    }
];

export const barriers = {
    questions : [
        { question : "Fatores pessoais:", id : "ba_1", number : 1 },
        { question : "Não tenho interesse:", id : "ba_2", number : 2 },
        { question : "Falta de tempo:", id : "ba_3", number : 3 },
        { question : "Sinto que não tenho energia ou disposição:", id : "ba_4", number : 4 },
        { question : "Tenho medo de sentir falta de ar:", id : "ba_5", number : 5 },
        { question : "Fatores sociais:", id : "ba_6", number : 6 },
        { question : "Não tenho companhia ou incentivo:", id : "ba_7", number : 7 },
        { question : "Não tenho dinheiro:", id : "ba_8", number : 8 },
        { question : "Tenho muitos afazeres:", id : "ba_9", number : 9 },
        { question : "Fatores ambientais:", id : "ba_10", number : 10 },
        { question : "Não tenho um local seguro disponível:", id : "ba_11", number : 11 },
        { question : "Por causa do clima:", id : "ba_12", number : 12 },
        { question : "Não tenho equipamentos para praticar:", id : "ba_13", number : 13 }
    ],
    answers : [
        "Sempre",
        "Quase sempre",
        "Às vezes",
        "Raramente",
        "Nunca"
    ]
};
