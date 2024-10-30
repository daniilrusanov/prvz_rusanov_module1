class Student {
    constructor(name, averageScore) {
        this.name = name;
        this.averageScore = averageScore;
    }

    calculateScholarship() {
        return 3000 + 1000 * (Math.floor(this.averageScore) - 5);
    }
}

class Master extends Student {
    constructor(name, averageScore, specialty, additionalScholarship) {
        super(name, averageScore);
        this.specialty = specialty;
        this.additionalScholarship = additionalScholarship;
    }

    calculateScholarship() {
        return super.calculateScholarship() + this.additionalScholarship;
    }
}

function calculateStudentScholarship() {
    const name = document.getElementById("studentName_bc").value;
    const averageScore = parseFloat(document.getElementById("averageScore_bc").value);
    const specialty = "Бакалавр";

    const student = new Student(name, averageScore);
    const scholarship = student.calculateScholarship();

    document.getElementById("result_bc").textContent = 
    `${student.name} з середнім балом ${student.averageScore} та спеціальністю ${specialty} отримує стипендію: ${scholarship} грн`;
}

function calculateMasterScholarship() {
    const name = document.getElementById("studentName").value;
    const averageScore = parseFloat(document.getElementById("averageScore").value);
    const specialty = document.getElementById("masterSpecialty").value;
    const additionalScholarship = parseFloat(document.getElementById("additionalScholarship").value);

    const master = new Master(name, averageScore, specialty, additionalScholarship);
    const scholarship = master.calculateScholarship();

    document.getElementById("result").textContent = `${master.name} отримує стипендію: ${scholarship} грн`;
}