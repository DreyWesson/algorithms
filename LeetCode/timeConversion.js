function timeConversion(s) {
    // Write your code here

    let dayTime = s.substring(8);
    s = s.substring(0, 8);
    const am = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "00",
    ];
    const pm = [
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "12",
    ];
    let arr = s.split(":");
    arr[0] = dayTime === "PM" ? pm[+arr[0] - 1] : am[+arr[0] - 1];
    return arr.join(":");
}
