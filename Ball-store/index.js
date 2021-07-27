const root = document.getElementById('root')


const Ball = ({x, y}) => {

    const div = document.createElement('div')
    div.classList.add('hero')
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    return div

}

const ballRef = Ball(initBallPosition)

const updateBall = () => {
    
    const ballPosition = store.getState()
    console.log(ballPosition)
    ballRef.style.left = `${ballPosition.x}px`

    if(ballPosition.x < window.innerWidth - 200){   
        store.dispatch({type: 'MOVE_RIGHT'})
        window.requestAnimationFrame(updateBall)
    }    
}

updateBall()

root.appendChild(ballRef)