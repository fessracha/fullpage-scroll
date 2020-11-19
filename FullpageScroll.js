"use strict";
exports.__esModule = true;
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS["DOWN"] = "down";
    DIRECTIONS["UP"] = "up";
})(DIRECTIONS || (DIRECTIONS = {}));
var FullpageScroll = /** @class */ (function () {
    function FullpageScroll() {
        this.speed = 10;
        this.isAnimate = false;
        this.dir = null;
        this.destination = 0;
        this.animate = this.animate.bind(this);
    }
    FullpageScroll.prototype.wheelHandler = function (e) {
        e.preventDefault();
        this.dir = e.deltaY > 0 ? DIRECTIONS.DOWN : DIRECTIONS.UP;
        this.destination = this.dir == DIRECTIONS.DOWN
            ? window.pageYOffset + document.documentElement.clientHeight
            : window.pageYOffset - document.documentElement.clientHeight;
        if (!this.isAnimate) {
            requestAnimationFrame(this.animate);
        }
    };
    FullpageScroll.prototype.animate = function () {
        this.isAnimate = true;
        var condition = this.dir === DIRECTIONS.DOWN
            ? window.pageYOffset < this.destination
            : window.pageYOffset > this.destination;
        var step = this.dir === DIRECTIONS.DOWN
            ? window.pageYOffset + this.speed
            : window.pageYOffset - this.speed;
        if (condition) {
            window.scrollTo(0, step);
            requestAnimationFrame(this.animate);
        }
        else {
            this.isAnimate = false;
        }
    };
    return FullpageScroll;
}());
exports["default"] = FullpageScroll;
