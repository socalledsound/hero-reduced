class Ball {
    constructor({size, color, position}, root){
        this.size = size;
        this.color = color;
        this.pos = position;
        this.root = root
        this.el = this.init()
    }

    init(){
        const div = document.createElement('div')
        div.style.width = `${this.size}px`
        div.style.height = `${this.size}px`
        div.style.backgroundColor = this.color
        div.style.borderRadius = `${this.size/2}px`
        div.style.position = 'absolute'
        div.style.left = `${this.pos.x}px`
        div.style.top = `${this.pos.y}px`
        this.root.appendChild(div)
        return div
    }


    moveBall(moveVal){
        console.log('moving')
        const newPosition = {
            x: this.pos.x + moveVal.x,
            y: this.pos.y + moveVal.y
        }
        this.pos = newPosition
    }

    render(){
        console.log('rednering')
    this.el.style.left = `${this.pos.x}px`
    this.el.style.top = `${this.pos.y}px`
}

}