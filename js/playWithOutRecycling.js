/**
 * Created by robomatix on 11/10/14.
 */
var playWithOutRecyclingState = {

    create: function () {

        /* Display the labels on the screen
         ******************************************************/

        // Display the type of test and some informations
        this.typeLabel = game.add.text(20, 20, 'No Recycling',
            { font: '20px Arial', fill: '#ffffff' });
        this.iterationLabel = game.add.text(20, 40, 'Iterations : 0',
            { font: '20px Arial', fill: '#ffffff' });
        this.squaresGeneratedLabel = game.add.text(20, 60, 'Squares generated : 0',
            { font: '20px Arial', fill: '#ffffff' });

        /* add a timer to generate black squares
         ******************************************************/
        this.squaresGenerator = game.time.events.loop(250, this.generateSquares, this);
        this.squaresGenerator.timer.start();

        /* Counters
         ******************************************************/
        this.iteration = 0;
        this.squaresGenerated = 0;


    },
    update: function () {

    },
    generateSquares: function () {

        for (var i = 0; i < 50; i++) {

            // Some variables
            var x = i * 10;
            var velocityY = game.rnd.integerInRange(600, 800);//400/600

            // Generation of a square
            var square = game.add.sprite(x, 0, 'blackSquare');

            // Init the square
            square.anchor.setTo(0, 0.5);
            // Add physic body
            game.physics.arcade.enableBody(square);
            square.enableBody = true;
            square.body.velocity.y = velocityY;

            this.squaresGenerated++;


        }

        this.iteration++;

        this.iterationLabel.setText('Iterations : ' + this.iteration.toString());
        this.squaresGeneratedLabel.setText('Squares generated : ' + this.squaresGenerated.toString());

    }

};
