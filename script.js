const tegTime = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    // Добавляем 0 если меньше 10
    const format = (num) => num < 10 ? "0" + num : num;

    document.getElementById("time").innerText =
        format(hours) + ":" + format(minutes) + ":" + format(seconds);

    document.getElementById("date").innerText =
        `${day}, ${month} ${date} ${year}`;
};

// Обновление каждую секунду
setInterval(tegTime, 1000);

// Запуск сразу
tegTime();