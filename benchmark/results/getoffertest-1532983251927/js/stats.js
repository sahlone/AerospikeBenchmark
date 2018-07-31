var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "337",
        "ko": "11663"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "27",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "16757",
        "ok": "16757",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "201",
        "ok": "7167",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1444",
        "ok": "4933",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "7889",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "11490",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "13968",
        "ko": "0"
    },
    "percentiles4": {
        "total": "10775",
        "ok": "16614",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 41,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 296,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 11663,
        "percentage": 97
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "169.014",
        "ok": "4.746",
        "ko": "164.268"
    }
},
contents: {
"req_get-offer-daaa5": {
        type: "REQUEST",
        name: "Get Offer",
path: "Get Offer",
pathFormatted: "req_get-offer-daaa5",
stats: {
    "name": "Get Offer",
    "numberOfRequests": {
        "total": "12000",
        "ok": "337",
        "ko": "11663"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "27",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "16757",
        "ok": "16757",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "201",
        "ok": "7167",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1444",
        "ok": "4933",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "7889",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "11490",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "13968",
        "ko": "0"
    },
    "percentiles4": {
        "total": "10775",
        "ok": "16614",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 41,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 296,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 11663,
        "percentage": 97
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "169.014",
        "ok": "4.746",
        "ko": "164.268"
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
