enum DIRECTIONS {
    DOWN = 'down',
    UP = 'up'
}

export default class FullpageScroll {
    public speed: number
    private isAnimate: boolean
    private dir: string | null
    private destination: number

    constructor() {
        this.speed = 10
        this.isAnimate = false
        this.dir = null
        this.destination = 0
        this.animate = this.animate.bind(this)
    }

    wheelHandler(e:any) {
        e.preventDefault();
        this.dir = e.deltaY > 0 ? DIRECTIONS.DOWN : DIRECTIONS.UP

        this.destination = this.dir == DIRECTIONS.DOWN
                ? window.pageYOffset + document.documentElement.clientHeight
                : window.pageYOffset - document.documentElement.clientHeight

        if (!this.isAnimate) {
            requestAnimationFrame(this.animate);
        }
    }

    private animate() {
        this.isAnimate = true

        const condition:boolean = this.dir === DIRECTIONS.DOWN
                    ? window.pageYOffset < this.destination
                    : window.pageYOffset > this.destination
        const step:number = this.dir === DIRECTIONS.DOWN
                    ? window.pageYOffset + this.speed
                    : window.pageYOffset - this.speed

        if (condition) {
            window.scrollTo(0, step);
            requestAnimationFrame(this.animate);
        } else {
            this.isAnimate = false;
        }
    }
}
