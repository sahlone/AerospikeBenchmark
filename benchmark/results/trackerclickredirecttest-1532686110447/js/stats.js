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
        "total": "390",
        "ok": "390",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "52341",
        "ok": "52341",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "35585",
        "ok": "35585",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14802",
        "ok": "14802",
        "ko": "-"
    },
    "percentiles1": {
        "total": "44136",
        "ok": "44136",
        "ko": "-"
    },
    "percentiles2": {
        "total": "47811",
        "ok": "47811",
        "ko": "-"
    },
    "percentiles3": {
        "total": "49584",
        "ok": "49584",
        "ko": "-"
    },
    "percentiles4": {
        "total": "52242",
        "ok": "52242",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5976,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "53.097",
        "ok": "53.097",
        "ko": "-"
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
        "total": "6000",
        "ok": "6000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "390",
        "ok": "390",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "52341",
        "ok": "52341",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "35585",
        "ok": "35585",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "14802",
        "ok": "14802",
        "ko": "-"
    },
    "percentiles1": {
        "total": "44133",
        "ok": "44134",
        "ko": "-"
    },
    "percentiles2": {
        "total": "47811",
        "ok": "47811",
        "ko": "-"
    },
    "percentiles3": {
        "total": "49584",
        "ok": "49584",
        "ko": "-"
    },
    "percentiles4": {
        "total": "52242",
        "ok": "52242",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5976,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "53.097",
        "ok": "53.097",
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
