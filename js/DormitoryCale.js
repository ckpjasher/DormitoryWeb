function cale() {
  var numbers = new Array(
    "叶佳泽, 李文锋",
    "林耿镖, 莫天泽",
    "张桂忠, 汤不凡 "
  );
  var date, date1, date2;
  date = new Date();
  date1 = new Date("2/26/2023");
  date2 = new Date(
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
  );
  var time_difference = date2.getTime() - date1.getTime();
  var days_difference = time_difference / (1000 * 60 * 60 * 24);
  window.alert(numbers[days_difference % 3]);
}

function timeTable() {
  const htmlString = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>课程表</title>
          </head>
          <body>
            <img src="images/timetable.webp" alt="课程表" />
          </body>
        </html>
    `;
  window.open().document.write(htmlString);
}

function scoolMap() {
  const htmlString = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>校园图</title>
          </head>
          <body>
            <img src="images/scoolmap.webp" alt="校园图" />
          </body>
        </html>
    `;
  window.open().document.write(htmlString);
}

function ASCIITable() {
  const htmlString = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>ASCII表</title>
          </head>
          <body>
            <img src="images/ASCIITable.webp" alt="ASCII表" />
          </body>
        </html>
    `;
  window.open().document.write(htmlString);
}

function SchoolCalendar() {
  const htmlString = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>校日历</title>
          </head>
          <body>
            <img src="images/SchoolCalendar.webp" alt="校日历" />
          </body>
        </html>
    `;
  window.open().document.write(htmlString);
}

function WeekCale() {
  var date, date2;
  date = new Date();
  date2 = new Date(
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
  );
  $.ajax({
    url: "https://duly-dynamic-garfish.ngrok-free.app",
    type: "GET",
    dataType: "json",
    success: function (response) {
      window.alert(
        "今天是2023年" +
          (date2.getMonth() + 1) +
          "月" +
          date2.getDate() +
          "日，是第 " +
          response["week"] +
          " 周"
      );
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
}

function Lottery() {
  window.open("../lottery.html");
}
