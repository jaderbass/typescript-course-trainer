"use strict";
class AppointmentABC {
    constructor(startTimeInput, endTimeInput, descriptionInput) {
        this.startTime = startTimeInput;
        this.endTime = endTimeInput;
        this.description = descriptionInput;
    }
}
class Appointment extends AppointmentABC {
    constructor(startTimeInput, endTimeInput, descriptionInput) {
        super(startTimeInput, endTimeInput, descriptionInput);
    }
    // Implementierung der Methode (Var. 2)
    printAppointment() {
        console.log(this.startTime, this.endTime, this.description);
    }
}
const a = new Appointment(new Date('2024-01-16T10:52:00'), new Date('2024-01-16T11:35:00'), 'Eine Dauer');
a.printAppointment();
