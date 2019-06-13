const PLAYER_COUNT = 5;
const FRAMES_PER_SECOND = 15;
const PLAY_LENGTH = 24;

const BallStateEnum = Object.freeze({"Holding": 1, "Passing": 2, "Shooting": 3});

let frames = [];
for(let i = 0; i < PLAY_LENGTH * FRAMES_PER_SECOND; i++) {
    //Each frame will have an array of actions executed simultaneously when run
    frames[i] = [];
}

let currentFrame = 0;

//Initialize the state of the ball
let ballState = BallStateEnum.Holding;

//Store the last function address here for an undo feature
let lastAction = null;
//Arguments can be unpacked through function(...this.lastArgs)
let lastArgs = {};

class Animator {
    constructor() {
        
    }

    static updateFrame(playerIndex,x,y) {
        if (currentFrame < PLAY_LENGTH * FRAMES_PER_SECOND - 1) {
            frames[currentFrame][playerIndex] = {x:x, y:y};
            currentFrame++;
            console.log(JSON.stringify(frames));
            
            return currentFrame;
        }
        return currentFrame;
    }

    //Start running the animation at a normal rate from an optional start frame
    static play(startFrame = 0) {

    }

    //Ceases playing of the animator, if it is running.
    static stop() {

    }

    //Sets the playback frame of the animation, i.e. scrolling through it
    static setFrame(frame) {currentFrame = frame;}

    //Add an action (movement, pass, or shot) at the specified frame. Checks to make sure that a very similar action is not already present (i.e. a player passing the ball twice) and the action is valid (can't shoot without the ball, or pass when the ball is already in a passing state)
    static addAction(frame, action) {

    }

    //Delete an action in the frame given the type of action and the player performing it. Registers the call in lastAction and lastArgs (lastAction becomes addAction while the args are packed into an Action object) to allow for undoing.
    static deleteAction(frame, type, player) {

    }
}

export default Animator;