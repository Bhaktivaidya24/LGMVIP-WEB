class Studentform {
    constructor() {
        this.form = document.querySelector('.studentform-form form');
        this.studentformName = this.form.querySelector('.studentform-name-input');
        this.email = this.form.querySelector('.studentform-email');
        this.marks = this.form.querySelector('.studentform-marks');
        this.subject = this.form.querySelector('.studentform-subject');
        this.classteacher = this.form.querySelector('.studentform-classteacher');
        this.age = this.form.querySelector('.studentform-age');
        this.submitBtn = this.form.querySelector('.submit-btn');
        this.studentformTable = document.querySelector('.studentform-table-body');
        this.resetBtn = this.form.querySelector('.reset-btn')
        this.clickCount = 0;

        this.addListener();
    }

    addListener() {
        this.submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.addStudentform();
        });
    }

    addStudentform() {
        this.clickCount++;
        const studentform = `
            <td>${this.studentformName.value}</td>
            <td>${this.email.value}</td>
            <td>${this.marks.value}</td>
            <td>${this.subject.value}</td>
           <td>${this.classteacher.value}</td>
            <td>${this.age.value}</td>
            <td>
                <button class="remove-studentform" onclick="studentform.removeStudentform(${this.clickCount})">
                    Delete
                </button>
            </td>
        `;

        const tableRow = document.createElement('tr');
        tableRow.setAttribute('id', `studentform-${this.clickCount}`);
        tableRow.innerHTML = studentform;

        this.studentformTable.appendChild(tableRow);
        this.resetBtn.click();
    }

    removeStudentform(studentform) {
        const selectStudentform = document.querySelector(`#studentform-${studentform}`);
        selectStudentform.remove();

    }
}

const studentform = new Studentform();