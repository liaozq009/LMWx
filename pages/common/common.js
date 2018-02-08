// 日期选择
var formatDate = function (ymd) { //日期格式化
  return ymd.replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function (ymdFormatDate, y, m, d) {
    m < 10 && (m = '0' + m);
    d < 10 && (d = '0' + d);
    return y + '-' + m + '-' + d;
  });
};
var today = new Date();
var startTimeStr = new Date(today.getTime() + 86400000 * 0);
var startTime = formatDate(startTimeStr.getFullYear() + '-' + (startTimeStr.getMonth() + 1) + '-' + startTimeStr.getDate());
var endTimeStr = new Date(today.getTime() + 86400000 * 3);
var endTime = formatDate(endTimeStr.getFullYear() + '-' + (endTimeStr.getMonth() + 1) + '-' + (endTimeStr.getDate()));

// exports.startTime = startTime
// exports.endTime = endTime

module.exports = {
  startTime: startTime,
  endTime: endTime,
};