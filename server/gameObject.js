let iCurrentPicture = 0;
let iCurrentQuote = 0;

const game = {
    pictures: [
        "http://tse4.mm.bing.net/th?id=ORT.TH_470633631&pid=1.12&eid=G.470633631",
        "https://www.w3schools.com/css/trolltunga.jpg"
    ],
    getNextPicture: () => game.pictures[iCurrentPicture++],
    quotes: [
        { text: "Get me out of here"},
        { text: "They're just fine"},
        { text: "Anywhere but Hasbrouck"},
    ],
    room: {
        picture: "",
        quotes: []
    }

}

module.exports = game;