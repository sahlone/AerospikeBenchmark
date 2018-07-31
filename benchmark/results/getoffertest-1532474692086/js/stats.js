var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "18000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2797",
        "ok": "2797",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2178",
        "ok": "2178",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2433",
        "ok": "2433",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2178",
        "ok": "2178",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2433",
        "ok": "2433",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15633,
        "percentage": 87
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 779,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1588,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "580.645",
        "ok": "580.645",
        "ko": "-"
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
        "total": "18000",
        "ok": "18000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2797",
        "ok": "2797",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2178",
        "ok": "2178",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2433",
        "ok": "2433",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2178",
        "ok": "2178",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2433",
        "ok": "2433",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15633,
        "percentage": 87
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 779,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1588,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "580.645",
        "ok": "580.645",
        "ko": "-"
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
