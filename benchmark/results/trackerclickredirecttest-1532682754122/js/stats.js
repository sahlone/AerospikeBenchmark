var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24000",
        "ok": "23999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "114"
    },
    "maxResponseTime": {
        "total": "790",
        "ok": "790",
        "ko": "114"
    },
    "meanResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "114"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "96",
        "ko": "0"
    },
    "percentiles1": {
        "total": "190",
        "ok": "190",
        "ko": "114"
    },
    "percentiles2": {
        "total": "238",
        "ok": "238",
        "ko": "114"
    },
    "percentiles3": {
        "total": "419",
        "ok": "419",
        "ko": "114"
    },
    "percentiles4": {
        "total": "570",
        "ok": "570",
        "ko": "114"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23999,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "393.443",
        "ok": "393.426",
        "ko": "0.016"
    }
},
contents: {
"req_click-redirect-39c92": {
        type: "REQUEST",
        name: "Click Redirect",
path: "Click Redirect",
pathFormatted: "req_click-redirect-39c92",
stats: {
    "name": "Click Redirect",
    "numberOfRequests": {
        "total": "24000",
        "ok": "23999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "114"
    },
    "maxResponseTime": {
        "total": "790",
        "ok": "790",
        "ko": "114"
    },
    "meanResponseTime": {
        "total": "213",
        "ok": "213",
        "ko": "114"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "96",
        "ko": "0"
    },
    "percentiles1": {
        "total": "190",
        "ok": "190",
        "ko": "114"
    },
    "percentiles2": {
        "total": "238",
        "ok": "238",
        "ko": "114"
    },
    "percentiles3": {
        "total": "419",
        "ok": "419",
        "ko": "114"
    },
    "percentiles4": {
        "total": "570",
        "ok": "570",
        "ko": "114"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23999,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "393.443",
        "ok": "393.426",
        "ko": "0.016"
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
