interface AppointmentInterface {
    startTime: Date;
    endTime: Date;
    description: string;

    printAppointment(): void;
}

abstract class AppointmentABC {
    protected startTime: Date;
    protected endTime: Date;
    protected description: string;

    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        this.startTime = startTimeInput;
        this.endTime = endTimeInput;
        this.description = descriptionInput;
    }

    // Var. 1 Methode wird in der abstrakten Klasse implementiert (mit Anweisungsblock)
    // Dann darf die Methode in der Kind-KLasse nicht noch einmal implementiert werden
    /* printAppointment(): void {
        console.log(this.startTime, this.endTime, this.description);
    } */

    // Var. 2 Methode wird in der abstrakten Klasse nur angegeben. Die Implementierung (also die Anweisungen) müssen in der Kindklasse umgesetzt werden. Hierbei benötigt die Methode in der abstrkten Klasse das Schlüsselwort abstract.
    abstract printAppointment(): void;
}

class Appointment extends AppointmentABC {
    constructor(
        startTimeInput: Date,
        endTimeInput: Date,
        descriptionInput: string,
    ) {
        super(startTimeInput, endTimeInput, descriptionInput);
    }

    // Implementierung der Methode (Var. 2)
    printAppointment(): void {
        console.log(this.startTime, this.endTime, this.description);
    }
}

const a = new Appointment(
    new Date('2024-01-16T10:52:00'),
    new Date('2024-01-16T11:35:00'),
    'Eine Dauer',
);

a.printAppointment();
