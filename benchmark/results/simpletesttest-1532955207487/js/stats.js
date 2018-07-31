var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90000",
        "ok": "89514",
        "ko": "486"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "7337",
        "ok": "7337",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1563",
        "ok": "1571",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1892",
        "ok": "1894",
        "ko": "0"
    },
    "percentiles1": {
        "total": "427",
        "ok": "449",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2991",
        "ok": "3006",
        "ko": "0"
    },
    "percentiles3": {
        "total": "5119",
        "ok": "5122",
        "ko": "0"
    },
    "percentiles4": {
        "total": "5611",
        "ok": "5611",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47935,
        "percentage": 53
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2746,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 38833,
        "percentage": 43
    },
    "group4": {
        "name": "failed",
        "count": 486,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1475.41",
        "ok": "1467.443",
        "ko": "7.967"
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
        "ok": "89514",
        "ko": "486"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "7337",
        "ok": "7337",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1563",
        "ok": "1571",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1892",
        "ok": "1894",
        "ko": "0"
    },
    "percentiles1": {
        "total": "428",
        "ok": "449",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2991",
        "ok": "3006",
        "ko": "0"
    },
    "percentiles3": {
        "total": "5119",
        "ok": "5123",
        "ko": "0"
    },
    "percentiles4": {
        "total": "5611",
        "ok": "5612",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47935,
        "percentage": 53
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2746,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 38833,
        "percentage": 43
    },
    "group4": {
        "name": "failed",
        "count": 486,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1475.41",
        "ok": "1467.443",
        "ko": "7.967"
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
