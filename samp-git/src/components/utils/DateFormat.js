function formatTen(num) {
    return num > 9 ? (num + "") : ("0" + num);
}
const formatDate = (number) => {
    var date = new Date(number)
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return year + "-" + formatTen(month) + "-" + formatTen(day) + " " + formatTen(hour) + ":" + formatTen(minute) + ":" + formatTen(second);
}
export default formatDate