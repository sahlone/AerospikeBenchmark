var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "72000",
        "ok": "33160",
        "ko": "38840"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "123",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "14149",
        "ok": "14149",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1816",
        "ok": "3944",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2555",
        "ok": "2405",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "3409",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3295",
        "ok": "5410",
        "ko": "0"
    },
    "percentiles3": {
        "total": "6783",
        "ok": "7948",
        "ko": "0"
    },
    "percentiles4": {
        "total": "10229",
        "ok": "12272",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1617,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1691,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 29852,
        "percentage": 41
    },
    "group4": {
        "name": "failed",
        "count": 38840,
        "percentage": 54
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "595.041",
        "ok": "274.05",
        "ko": "320.992"
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
        "total": "72000",
        "ok": "33160",
        "ko": "38840"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "123",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "14149",
        "ok": "14149",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1816",
        "ok": "3944",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2555",
        "ok": "2405",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "3408",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3294",
        "ok": "5411",
        "ko": "0"
    },
    "percentiles3": {
        "total": "6784",
        "ok": "7945",
        "ko": "0"
    },
    "percentiles4": {
        "total": "10230",
        "ok": "12272",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1617,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1691,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 29852,
        "percentage": 41
    },
    "group4": {
        "name": "failed",
        "count": 38840,
        "percentage": 54
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "595.041",
        "ok": "274.05",
        "ko": "320.992"
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
