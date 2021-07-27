// assume that there's a div with the id of root in a linked index.html file
const root = document.getElementById('root')

const initBallPosition = {
    x: window.innerWidth/2 - 200,
    y: window.innerHeight/2 ,
}
// for now let's just use a global let variable,
// even though this is a great way to introduce bugs
let ballPosition = initBallPosition;

// instead of a class, let's just write a function that returns a div
const Ball = ({x, y}) => {

    const div = document.createElement('div')
    div.classList.add('hero')
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    return div

}

// a reference to the div returned by the Ball function
const ballRef = Ball(initBallPosition)

// this is a recursive call to update the ball, 
// which will get called as long as the ball is 
// more than 200 pixels from the right hand edge of the screen
const updateBall = () => {
    
    if(ballPosition.x < window.innerWidth - 200){
        ballPosition += 5
        ballRef.style.left = `${ballPosition.x}px`   
        window.requestAnimationFrame(updateBall)
    }    
}

// call the updateBall function once to start the recursive loop
updateBall()

// this is the non-virtual dom version of ReactDOM.render
root.appendChild(ballRef)