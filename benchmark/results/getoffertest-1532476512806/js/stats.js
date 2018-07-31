var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9000",
        "ok": "1444",
        "ko": "7556"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "118",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "12916",
        "ok": "12916",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1303",
        "ok": "8122",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3291",
        "ok": "3482",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10759",
        "ok": "12724",
        "ko": "0"
    },
    "percentiles2": {
        "total": "12479",
        "ok": "12896",
        "ko": "0"
    },
    "percentiles3": {
        "total": "10759",
        "ok": "12724",
        "ko": "0"
    },
    "percentiles4": {
        "total": "12479",
        "ok": "12896",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 14,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1397,
        "percentage": 16
    },
    "group4": {
        "name": "failed",
        "count": 7556,
        "percentage": 84
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "22.921",
        "ko": "119.937"
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
        "total": "9000",
        "ok": "1444",
        "ko": "7556"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "118",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "12916",
        "ok": "12916",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1303",
        "ok": "8122",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3291",
        "ok": "3482",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10759",
        "ok": "12724",
        "ko": "0"
    },
    "percentiles2": {
        "total": "12479",
        "ok": "12896",
        "ko": "0"
    },
    "percentiles3": {
        "total": "10759",
        "ok": "12724",
        "ko": "0"
    },
    "percentiles4": {
        "total": "12479",
        "ok": "12896",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 14,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1397,
        "percentage": 16
    },
    "group4": {
        "name": "failed",
        "count": 7556,
        "percentage": 84
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "22.921",
        "ko": "119.937"
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
