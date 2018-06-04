let cards = [
    'EX1_238',
    'CS2_053', 
    'LOOT_373', 
    'EX1_259', 
    'EX1_575', 
    'LOEA13_1', 
    'UNG_025', 
    'LOOT_358', 
    'GIL_504', 
    'GIL_820', 
    'UNG_205',
    'ICC_851',
    'EX1_007',
    'UNG_946',
    'EX1_085',
    'LOOT_516',
    'GIL_622',
    'GIL_581',
    'ICC_466'
];

let cardId = '';

module.exports = {
    create: (req, res) => {
        cards.push({ cardId });
        res.status(200).send(cards);
    },

    read: (req, res) => {
        res.status(200).send(cards);
    },

    update: (req, res) => {
        const updateCard = req.params.cardId;
        const cardIndex = cards.findIndex( card => card.cardId == updateCard );
        let card = cards[ cardIndex ];

        cards[ cardIndex ] = {
            cardId: card.cardId
        };

        res.status(200).send(cards);
    },

    delete: (req,res) => {
        const deleteCardId = req.params.cardId;
        cardIndex = cards.findIndex(card => card.cardId == deleteCardId);
        cards.splice(cardIndex, 1);
        res.status(200).send(cards);
    }
};