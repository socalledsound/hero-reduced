const root = document.getElementById('root')

const initBallOptions = {
    size: 100,
    color : 'blue',
    position : {
        x: window.innerWidth/2 - 200,
        y: window.innerHeight/2 ,
    }
}

const myBall = new Ball(initBallOptions, root)


const moveAndRender = () => {
    myBall.moveBall({x: 5, y : 0})
    myBall.render()
}


for(let i = 0; i < 100; i++){
    setTimeout(moveAndRender, i * 100)
}






