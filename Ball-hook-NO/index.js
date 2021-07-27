const root = document.getElementById('root')

const initBallPosition = {
    x: window.innerWidth/2 - 200,
    y: window.innerHeight/2 ,
}
//let ballPosition = initBallPosition;
//let ballPosition = store.getState();

const useState = (initVal) => {

    const val = 

    return [val, setter]
}


const Ball = ({x, y}) => {

    const div = document.createElement('div')
    div.classList.add('hero')
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    return div

}

const ballRef = Ball(initBallPosition)

const updateBall = () => {


    const [stateX, moveRight] = useState(initBallPosition.x)

    //console.log(ballPosition.x)
    //const ballPosition = store.getState()
    //console.log(ballPosition)
    if(stateX < window.innerWidth - 200){

        moveRight(stateX)

        ballRef.style.left = `${stateX}px`
       // store.dispatch({type: 'MOVE_RIGHT'})
        window.requestAnimationFrame(updateBall)
    }    
}

updateBall(initBallPosition.x)

root.appendChild(ballRef)