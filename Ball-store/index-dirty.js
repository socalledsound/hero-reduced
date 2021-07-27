const root = document.getElementById('root')

// const initBallPosition = {
//     x: window.innerWidth/2 - 200,
//     y: window.innerHeight/2 ,
// }
//let ballPosition = initBallPosition;
//let ballPosition = store.getState();

const Ball = ({x, y}) => {

    const div = document.createElement('div')
    div.classList.add('hero')
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    return div

}

const ballRef = Ball(initBallPosition)

const updateBall = () => {
    //console.log(ballPosition.x)
    const ballPosition = store.getState()
    console.log(ballPosition)
    if(ballPosition.x < window.innerWidth - 200){
        ballRef.style.left = `${ballPosition.x}px`
        store.dispatch({type: 'MOVE_RIGHT'})
        window.requestAnimationFrame(updateBall)
    }    
}

updateBall()

root.appendChild(ballRef)