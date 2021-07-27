
const initBallPosition = {
    x: window.innerWidth/2 - 200,
    y: window.innerHeight/2 ,
}

const moveReducer = (state = initBallPosition, action) => {
    switch(action.type){
        case 'MOVE_RIGHT' : 
            const newX = state.x + 1
            return {
                ...state,
                x: newX,
            }
        default: 
            return {
                ...state
            }
    }
}

const createStore = (reducer, initState) => {  
    let store = reducer(initState, {type: 'INIT'})
    return {    
        dispatch: (action) => {      
        store = [action].reduce(reducer, store)    
        },    
        getState: _ => store  
    }
}


const store = createStore(moveReducer, initBallPosition)
console.log(store)

