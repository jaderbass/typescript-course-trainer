"use strict";
class Appointment {
    constructor(startTimeInput, endTimeInput, descriptionInput) {
        this._startTime = startTimeInput;
        this._endTime = endTimeInput;
        this._description = descriptionInput;
    }
    get startTime() {
        return this._startTime;
    }
    get endTime() {
        return this._endTime;
    }
    get description() {
        return this._description;
    }
    printAppointment() {
        console.log(this._startTime, this._endTime, this._description);
    }
}
const a = new Appointment(new Date('2024-01-16T10:52:00'), new Date('2024-01-16T11:35:00'), 'Eine Dauer');
a.printAppointment();
