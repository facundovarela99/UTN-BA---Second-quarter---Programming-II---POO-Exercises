"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cinema = void 0;
class Cinema {
    _movie;
    _schedule;
    constructor(movie, schedule) {
        this._movie = movie;
        this._schedule = schedule;
    }
    set movie(newMovie) {
        this._movie = newMovie;
    }
    get movie() {
        return this._movie;
    }
    set schedule(newSchedule) {
        this._schedule = newSchedule;
    }
    get schedule() {
        return this._schedule;
    }
}
exports.Cinema = Cinema;
//# sourceMappingURL=excercise4.js.map