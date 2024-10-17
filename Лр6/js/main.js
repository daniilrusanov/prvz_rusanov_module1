document.getElementById('checkTasksButton').addEventListener('click', ras);
var arrTasks = [];

arrTasks[0] = {
    Name: "Задача 1",
    Description: "Підготовка звіту по проєкту",
    Deadline: "24.10.2024",
    Duration: 2
};
arrTasks[1] = {
    Name: "Задача 2",
    Description: "Розробка нової функції для сайту",
    Deadline: "11.10.2024",
    Duration: 5
};
arrTasks[2] = {
    Name: "Задача 3",
    Description: "Тестування мобільного додатку",
    Deadline: "17.10.2024",
    Duration: 10
};
arrTasks[3] = {
    Name: "Задача 4",
    Description: "Виправлення помилок у коді",
    Deadline: "25.10.2024",
    Duration: 1
};
arrTasks[4] = {
    Name: "Задача 5",
    Description: "Оновлення документації",
    Deadline: "24.10.2024",
    Duration: 13
};
arrTasks[5] = {
    Name: "Задача 6",
    Description: "Проведення навчання для нових співробітників",
    Deadline: "01.11.2024",
    Duration: 11
};

function ras_diff_Days(text) {
    var currentDate = new Date();
    var date1 = new Date(text.replace(/(\d+)\.(\d+)\.(\d+)/, '$3-$2-$1'));
    var timeDiff = date1.getTime() - currentDate.getTime();
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

function vivod(html, item) {
    var text = item['Deadline'];
    var daysDiff = ras_diff_Days(text);
    var status = "";

    if (daysDiff < 0) {
        html += "<tr style='background:lightgreen;'>";
        status = "Виконано!";
    } else if (daysDiff === 0) {
        html += "<tr style='background:yellow;'>";
        status = "Термін сьогодні!";
    } else {
        html += "<tr style='background:mediumpurple;'>";
        status = "Через " + daysDiff + " днів";
    }

    for (var key in item) {
        html += "<td>" + item[key] + "</td>";
    }
    html += "<td>" + status + "</td>";
    html += "</tr>";
    return html;
}

function ras() {
    var html = "<table style='border-collapse: collapse; width: 100%;'>";
    html += "<tr><th>Назва</th><th>Опис</th><th>Термін виконання</th><th>Тривалість виконання</th><th>Статус</th></tr>";
    arrTasks.forEach(function(item) {
        html = vivod(html, item);
    });
    html += "</table>";
    document.getElementById('result').innerHTML = html;
}