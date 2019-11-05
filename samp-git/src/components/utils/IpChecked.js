//比较两个IP地址的大小
const compareIp = (startIP, endIP) => {
    var temp1;
    var temp2;
    temp1 = startIP.split(".");
    temp2 = endIP.split(".");
    for (var i = 0; i < 4; i++) {
        var tmp1 = parseInt(temp1[i]);
        var tmp2 = parseInt(temp2[i]);
        if (tmp1 > tmp2) {
            return -1;
        }
        else if (tmp1 < tmp2) {
            return 1;
        }
    }
    return 0;
}
export default compareIp