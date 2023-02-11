class Studentform {
    constructor() {
        this.form = document.querySelector('.studentform-form form');
        this.studentformName = this.form.querySelector('.studentform-name-input');
        this.email = this.form.querySelector('.studentform-email');
        this.gender = this.form.querySelector('.studentform-gender');
        this.skill = this.form.querySelector('.studentform-skill');
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
//Add the Information to the Registration form 
    addStudentform() {
        this.clickCount++;
        const studentform = `
            <td>${this.studentformName.value}</td>
            <td>${this.email.value}</td>
            <td>${this.gender.value}</td>
            <td>${this.skill.value}</td>
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

    }// To remove the data after filling the Registration Form.
}

const studentform = new Studentform();