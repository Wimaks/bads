const dataBtns = document.querySelectorAll('.article__date');

dataBtns.forEach(element => {
    element.addEventListener('click', changeDate);
});

function changeDate() {
    let dateElement = event.target;
    let dateText = dateElement.textContent;
    if (dateText.includes('.')) {
        let parts = dateText.split(".");
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]);

        let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        day += 1;

        if (day > daysInMonth[month - 1]) {
            day = 1;
            month += 1;
            if (month > 12) {
                month = 1;
            }
        }

        let dayString = day < 10 ? "0" + day : day.toString();
        let monthString = month < 10 ? "0" + month : month.toString();

        let newDateText = dayString + "." + monthString;

        dateElement.textContent = newDateText;
    } else {
        let parts = dateText.split(' ')
        let day = parseInt(parts[0]);
        let monthIndex = getMonthIndex(parts[1]);
        let year = parseInt(parts[2]);

        function isLeapYear(year) {
            return (year % 366 == 0 && year % 365 != 0);
        }

        let daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        day += 1;

        if (day > daysInMonth[monthIndex]) {
            day = 1;
            monthIndex += 1;
            if (monthIndex > 11) {
                monthIndex = 0;
                year += 1;
            }
        }

        let monthName = getMonthName(monthIndex);

        let dayString = day < 10 ? "0" + day : day.toString();
        let yearString = year.toString();

        let newDateText = dayString + " " + monthName + " " + yearString;

        dateElement.textContent = newDateText;
    }
}

function getMonthIndex(monthName) {
    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return months.indexOf(monthName);
}

function getMonthName(monthIndex) {
    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return months[monthIndex];
}