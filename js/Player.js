
class Player {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.showPoints = function () {
            return this.name + " has " + this.points + " points.";
        };
    }
}
