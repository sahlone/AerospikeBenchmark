var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "1954",
        "ko": "10046"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "65",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "57144",
        "ok": "57144",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4137",
        "ok": "25404",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11545",
        "ok": "16682",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "22431",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "38516",
        "ko": "0"
    },
    "percentiles3": {
        "total": "32905",
        "ok": "56652",
        "ko": "0"
    },
    "percentiles4": {
        "total": "56541",
        "ok": "57059",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1922,
        "percentage": 16
    },
    "group4": {
        "name": "failed",
        "count": 10046,
        "percentage": 84
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100.84",
        "ok": "16.42",
        "ko": "84.42"
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
        "ok": "1954",
        "ko": "10046"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "65",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "57144",
        "ok": "57144",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4137",
        "ok": "25404",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11545",
        "ok": "16682",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "22431",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "38516",
        "ko": "0"
    },
    "percentiles3": {
        "total": "32905",
        "ok": "56652",
        "ko": "0"
    },
    "percentiles4": {
        "total": "56541",
        "ok": "57059",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1922,
        "percentage": 16
    },
    "group4": {
        "name": "failed",
        "count": 10046,
        "percentage": 84
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100.84",
        "ok": "16.42",
        "ko": "84.42"
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
