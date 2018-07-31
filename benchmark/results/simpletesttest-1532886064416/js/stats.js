var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "3964",
        "ko": "56036"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "9",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "4632",
        "ok": "4632",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "159",
        "ok": "2409",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "642",
        "ok": "907",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "2584",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "3104",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1676",
        "ok": "3642",
        "ko": "0"
    },
    "percentiles4": {
        "total": "3410",
        "ok": "3942",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 226,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 250,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3488,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 56036,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "504.202",
        "ok": "33.311",
        "ko": "470.891"
    }
},
contents: {
"req_execute-an-http-db146": {
        type: "REQUEST",
        name: "execute an http call",
path: "execute an http call",
pathFormatted: "req_execute-an-http-db146",
stats: {
    "name": "execute an http call",
    "numberOfRequests": {
        "total": "60000",
        "ok": "3964",
        "ko": "56036"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "9",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "4632",
        "ok": "4632",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "159",
        "ok": "2409",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "642",
        "ok": "907",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "2584",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "3104",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1676",
        "ok": "3642",
        "ko": "0"
    },
    "percentiles4": {
        "total": "3410",
        "ok": "3942",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 226,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 250,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3488,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 56036,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "504.202",
        "ok": "33.311",
        "ko": "470.891"
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
