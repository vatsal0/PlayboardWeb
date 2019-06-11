const PLAYER_COUNT = 5;
const FRAMES_PER_SECOND = 15;
const PLAY_LENGTH = 24;

const BallStateEnum = Object.freeze({"Holding": 1, "Passing": 2, "Shooting": 3});

class Animator {
    constructor() {
        let frames = [];
        for(let i = 0; i < PLAY_LENGTH * FRAMES_PER_SECOND; i++) {
            //Each frame will have an array of actions executed simultaneously when run
            frames[i] = [];
        }
        this.frames = frames;
        this.currentFrame = 0;

        //A table of Player objects whose length cannot exceed PLAYER_COUNT. Starts empty to allow for setting initial positions.
        this.players = [];

        //Initialize the state of the ball
        this.ballState = BallStateEnum.Holding;

        //Store the last function address here for an undo feature
        this.lastAction = null;
        //Arguments can be unpacked through function(...this.lastArgs)
        this.lastArgs = {};
    }



    //Start running the animation at a normal rate from an optional start frame
    play(startFrame = 0) {

    }

    //Ceases playing of the animator, if it is running.
    stop() {

    }

    //Sets the playback frame of the animation, i.e. scrolling through it
    setFrame(frame) {this.currentFrame = frame;}

    //Add an action (movement, pass, or shot) at the specified frame. Checks to make sure that a very similar action is not already present (i.e. a player passing the ball twice) and the action is valid (can't shoot without the ball, or pass when the ball is already in a passing state)
    addAction(frame, action) {

    }

    //Delete an action in the frame given the type of action and the player performing it. Registers the call in lastAction and lastArgs (lastAction becomes addAction while the args are packed into an Action object) to allow for undoing.
    deleteAction(frame, type, player) {

    }
}

export default Animator;