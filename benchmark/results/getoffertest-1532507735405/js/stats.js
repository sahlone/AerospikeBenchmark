var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "21000",
        "ok": "21000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3384",
        "ok": "3384",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1251",
        "ok": "1251",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1198",
        "ok": "1198",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3138",
        "ok": "3138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3318",
        "ok": "3318",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3138",
        "ok": "3138",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3318",
        "ok": "3318",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9679,
        "percentage": 46
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1108,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10213,
        "percentage": 49
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "677.419",
        "ok": "677.419",
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
        "total": "21000",
        "ok": "21000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3384",
        "ok": "3384",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1251",
        "ok": "1251",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1198",
        "ok": "1198",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3138",
        "ok": "3138",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3318",
        "ok": "3318",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3138",
        "ok": "3138",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3318",
        "ok": "3318",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9679,
        "percentage": 46
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1108,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10213,
        "percentage": 49
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "677.419",
        "ok": "677.419",
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
