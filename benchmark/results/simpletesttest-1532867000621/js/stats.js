var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "81000",
        "ok": "80998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "14885",
        "ok": "14885",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "513",
        "ok": "513",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1479",
        "ok": "1479",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "percentiles2": {
        "total": "21",
        "ok": "21",
        "ko": "0"
    },
    "percentiles3": {
        "total": "3067",
        "ok": "3067",
        "ko": "0"
    },
    "percentiles4": {
        "total": "8402",
        "ok": "8402",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 67248,
        "percentage": 83
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2721,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11029,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2612.903",
        "ok": "2612.839",
        "ko": "0.065"
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
        "total": "81000",
        "ok": "80998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "14885",
        "ok": "14885",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "513",
        "ok": "513",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1479",
        "ok": "1479",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "percentiles2": {
        "total": "21",
        "ok": "21",
        "ko": "0"
    },
    "percentiles3": {
        "total": "3067",
        "ok": "3067",
        "ko": "0"
    },
    "percentiles4": {
        "total": "8402",
        "ok": "8402",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 67248,
        "percentage": 83
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2721,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 11029,
        "percentage": 14
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2612.903",
        "ok": "2612.839",
        "ko": "0.065"
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
