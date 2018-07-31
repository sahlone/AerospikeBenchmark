var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36000",
        "ok": "2572",
        "ko": "33428"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "32963",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59988",
        "ok": "59988",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3361",
        "ok": "47048",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12303",
        "ok": "7950",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "47888",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "53988",
        "ko": "0"
    },
    "percentiles3": {
        "total": "40107",
        "ok": "59413",
        "ko": "0"
    },
    "percentiles4": {
        "total": "57302",
        "ok": "59766",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2572,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 33428,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "300",
        "ok": "21.433",
        "ko": "278.567"
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
        "total": "36000",
        "ok": "2572",
        "ko": "33428"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "32963",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59988",
        "ok": "59988",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3361",
        "ok": "47048",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12303",
        "ok": "7950",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "47902",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "53980",
        "ko": "0"
    },
    "percentiles3": {
        "total": "40106",
        "ok": "59413",
        "ko": "0"
    },
    "percentiles4": {
        "total": "57302",
        "ok": "59766",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2572,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 33428,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "300",
        "ok": "21.433",
        "ko": "278.567"
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
