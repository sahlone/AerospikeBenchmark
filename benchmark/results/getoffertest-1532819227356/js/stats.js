var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3376",
        "ok": "3376",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1274",
        "ok": "1274",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1077",
        "ok": "1077",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1417",
        "ok": "1417",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2258",
        "ok": "2258",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2839",
        "ok": "2839",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3137",
        "ok": "3137",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2387,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 359,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3254,
        "percentage": 54
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "193.548",
        "ok": "193.548",
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3376",
        "ok": "3376",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1274",
        "ok": "1274",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1077",
        "ok": "1077",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1417",
        "ok": "1417",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2258",
        "ok": "2258",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2839",
        "ok": "2839",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3137",
        "ok": "3137",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2387,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 359,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3254,
        "percentage": 54
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "193.548",
        "ok": "193.548",
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
