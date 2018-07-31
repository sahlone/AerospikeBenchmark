var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "7231",
        "ko": "10769"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "409",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "56020",
        "ok": "56020",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "13699",
        "ok": "34100",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "18773",
        "ok": "13477",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "32234",
        "ko": "0"
    },
    "percentiles2": {
        "total": "29083",
        "ok": "46853",
        "ko": "0"
    },
    "percentiles3": {
        "total": "55455",
        "ok": "55720",
        "ko": "0"
    },
    "percentiles4": {
        "total": "55787",
        "ok": "55825",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7225,
        "percentage": 40
    },
    "group4": {
        "name": "failed",
        "count": 10769,
        "percentage": 60
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "178.218",
        "ok": "71.594",
        "ko": "106.624"
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
        "total": "18000",
        "ok": "7231",
        "ko": "10769"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "409",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "56020",
        "ok": "56020",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "13699",
        "ok": "34100",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "18773",
        "ok": "13477",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "32233",
        "ko": "0"
    },
    "percentiles2": {
        "total": "29082",
        "ok": "46851",
        "ko": "0"
    },
    "percentiles3": {
        "total": "55455",
        "ok": "55720",
        "ko": "0"
    },
    "percentiles4": {
        "total": "55787",
        "ok": "55825",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7225,
        "percentage": 40
    },
    "group4": {
        "name": "failed",
        "count": 10769,
        "percentage": 60
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "178.218",
        "ok": "71.594",
        "ko": "106.624"
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
