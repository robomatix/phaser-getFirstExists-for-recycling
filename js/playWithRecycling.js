/**
 * Created by robomatix on 11/10/14.
 */
var playWithRecyclingState = {

    create: function () {

        /* Display the labels on the screen
         ******************************************************/

        // Display the type of test and some informations
        this.typeLabel = game.add.text(20, 20, 'Recycling',
            { font: '20px Arial', fill: '#ffffff' });
        this.iterationLabel = game.add.text(20, 40, 'Iterations : 0',
            { font: '20px Arial', fill: '#ffffff' });
        this.squaresGeneratedLabel = game.add.text(20, 60, 'Squares generated : 0',
            { font: '20px Arial', fill: '#ffffff' });


        /* add a group
         ******************************************************/
        this.squaresGroup = game.add.group();
        this.squaresGroup.enableBody = true;


        /* add a timer to generate black squares
         ******************************************************/
        this.squaresGenerator = this.game.time.events.loop(250, this.generateSquares, this);
        this.squaresGenerator.timer.start();

        this.iteration = 0;
        this.squaresGenerated = 0;

    },
    update: function () {

    },
    generateSquares: function () {
        for (var i = 0; i < 50; i++) {

            // Some variables
            var x = i * 10;
            var velocityY = this.game.rnd.integerInRange(600, 800);

            // Generates a square or recycles one
            var square;
            square = this.squaresGroup.getFirstExists(false);
            if (!square) {

                // Generate a new square
                square = game.add.sprite(x, 0, 'blackSquare');
                this.squaresGroup.add(square);

                // Init the square
                square.anchor.setTo(0, 0.5);
                // Add physic body
                game.physics.arcade.enableBody(square);
                square.enableBody = true;


                this.squaresGenerated++;

            }

            // Init the square
            square.anchor.setTo(0, 0.5);
            square.reset(x, 0);
            square.body.velocity.y = velocityY;
            // Kill the square when out of the world
            square.checkWorldBounds = true;
            square.outOfBoundsKill = true;

        }

        this.iteration++;

        this.iterationLabel.setText('Iterations : ' + this.iteration.toString());
        this.squaresGeneratedLabel.setText('Squares generated : ' + this.squaresGenerated.toString());
    }

};
