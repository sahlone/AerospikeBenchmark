var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90000",
        "ok": "78655",
        "ko": "11345"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59164",
        "ok": "59164",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1749",
        "ok": "2001",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1989",
        "ok": "2006",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1585",
        "ok": "2206",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3075",
        "ok": "3181",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4329",
        "ok": "4532",
        "ko": "0"
    },
    "percentiles4": {
        "total": "6216",
        "ok": "6358",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 27018,
        "percentage": 30
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3053,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 48584,
        "percentage": 54
    },
    "group4": {
        "name": "failed",
        "count": 11345,
        "percentage": 13
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1153.846",
        "ok": "1008.397",
        "ko": "145.449"
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
        "total": "90000",
        "ok": "78655",
        "ko": "11345"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59164",
        "ok": "59164",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1749",
        "ok": "2001",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1989",
        "ok": "2006",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1588",
        "ok": "2206",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3075",
        "ok": "3182",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4329",
        "ok": "4533",
        "ko": "0"
    },
    "percentiles4": {
        "total": "6216",
        "ok": "6358",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 27018,
        "percentage": 30
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3053,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 48584,
        "percentage": 54
    },
    "group4": {
        "name": "failed",
        "count": 11345,
        "percentage": 13
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1153.846",
        "ok": "1008.397",
        "ko": "145.449"
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
