// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a haunted house",
            choices: [
                {
                    text: "Enter the house",
                    nextLevel: "house",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        house: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a mysterious statue!",
            choices: [
                
                {
                    text: "Takes statue",
                    nextLevel: "statue",
                },
                
               {
                    text: "Start over",
                    nextLevel: "start",
                },
                
            ]
        },
        statue: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You got eaten by a monster!!!!",
            choices: [
                
               
               {
                    text: "Start over",
                    nextLevel: "start",
                },
                
            ]
         },
        
        field: {
            message: "You are safety home...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
