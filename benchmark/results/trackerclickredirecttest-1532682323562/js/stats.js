var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36000",
        "ok": "25298",
        "ko": "10702"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "374",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59693",
        "ok": "58945",
        "ko": "59693"
    },
    "meanResponseTime": {
        "total": "15711",
        "ok": "18482",
        "ko": "9161"
    },
    "standardDeviation": {
        "total": "11917",
        "ok": "9163",
        "ko": "14771"
    },
    "percentiles1": {
        "total": "16934",
        "ok": "17187",
        "ko": "0"
    },
    "percentiles2": {
        "total": "24625",
        "ok": "24077",
        "ko": "30110"
    },
    "percentiles3": {
        "total": "35126",
        "ok": "36196",
        "ko": "30445"
    },
    "percentiles4": {
        "total": "46695",
        "ok": "46406",
        "ko": "49777"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 85,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 25213,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 10702,
        "percentage": 30
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "395.604",
        "ok": "278",
        "ko": "117.604"
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
        "ok": "25298",
        "ko": "10702"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "374",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59693",
        "ok": "58945",
        "ko": "59693"
    },
    "meanResponseTime": {
        "total": "15711",
        "ok": "18482",
        "ko": "9161"
    },
    "standardDeviation": {
        "total": "11917",
        "ok": "9163",
        "ko": "14771"
    },
    "percentiles1": {
        "total": "16925",
        "ok": "17190",
        "ko": "0"
    },
    "percentiles2": {
        "total": "24618",
        "ok": "24077",
        "ko": "30110"
    },
    "percentiles3": {
        "total": "35126",
        "ok": "36196",
        "ko": "30445"
    },
    "percentiles4": {
        "total": "46695",
        "ok": "46406",
        "ko": "49777"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 85,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 25213,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 10702,
        "percentage": 30
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "395.604",
        "ok": "278",
        "ko": "117.604"
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
