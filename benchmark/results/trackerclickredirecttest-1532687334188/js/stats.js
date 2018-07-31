var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "2142",
        "ko": "3858"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "272",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "60002",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "13335",
        "ok": "37352",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "20713",
        "ok": "17456",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "41314",
        "ko": "0"
    },
    "percentiles2": {
        "total": "28968",
        "ok": "54019",
        "ko": "0"
    },
    "percentiles3": {
        "total": "55535",
        "ok": "58257",
        "ko": "0"
    },
    "percentiles4": {
        "total": "59591",
        "ok": "59771",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2129,
        "percentage": 35
    },
    "group4": {
        "name": "failed",
        "count": 3858,
        "percentage": 64
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.587",
        "ok": "17.702",
        "ko": "31.884"
    }
},
contents: {
"req_click-redirect-39c92": {
        type: "REQUEST",
        name: "Click Redirect",
path: "Click Redirect",
pathFormatted: "req_click-redirect-39c92",
stats: {
    "name": "Click Redirect",
    "numberOfRequests": {
        "total": "6000",
        "ok": "2142",
        "ko": "3858"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "272",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "60002",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "13335",
        "ok": "37352",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "20713",
        "ok": "17456",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "41356",
        "ko": "0"
    },
    "percentiles2": {
        "total": "28952",
        "ok": "54009",
        "ko": "0"
    },
    "percentiles3": {
        "total": "55535",
        "ok": "58257",
        "ko": "0"
    },
    "percentiles4": {
        "total": "59591",
        "ok": "59771",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2129,
        "percentage": 35
    },
    "group4": {
        "name": "failed",
        "count": 3858,
        "percentage": 64
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.587",
        "ok": "17.702",
        "ko": "31.884"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
