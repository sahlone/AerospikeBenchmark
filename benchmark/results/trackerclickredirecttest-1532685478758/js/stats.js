var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "726",
        "ko": "5274"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2295",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59997",
        "ok": "59997",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4896",
        "ok": "40462",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "14293",
        "ok": "15789",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "45084",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "54177",
        "ko": "0"
    },
    "percentiles3": {
        "total": "47825",
        "ok": "58596",
        "ko": "0"
    },
    "percentiles4": {
        "total": "58282",
        "ok": "59794",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 726,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 5274,
        "percentage": 88
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "6.05",
        "ko": "43.95"
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
        "ok": "726",
        "ko": "5274"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2295",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59997",
        "ok": "59997",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4896",
        "ok": "40462",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "14293",
        "ok": "15789",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "45084",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "54177",
        "ko": "0"
    },
    "percentiles3": {
        "total": "47825",
        "ok": "58596",
        "ko": "0"
    },
    "percentiles4": {
        "total": "58282",
        "ok": "59794",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 726,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 5274,
        "percentage": 88
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "6.05",
        "ko": "43.95"
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
