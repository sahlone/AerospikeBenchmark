var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "420000",
        "ok": "25283",
        "ko": "394717"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "216",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38914",
        "ok": "38008",
        "ko": "38914"
    },
    "meanResponseTime": {
        "total": "2090",
        "ok": "12207",
        "ko": "1442"
    },
    "standardDeviation": {
        "total": "5006",
        "ok": "7851",
        "ko": "3968"
    },
    "percentiles1": {
        "total": "115",
        "ok": "9205",
        "ko": "114"
    },
    "percentiles2": {
        "total": "3110",
        "ok": "15208",
        "ko": "368"
    },
    "percentiles3": {
        "total": "10321",
        "ok": "28416",
        "ko": "5235"
    },
    "percentiles4": {
        "total": "29030",
        "ok": "31250",
        "ko": "27216"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 369,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 437,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 24477,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 394717,
        "percentage": 94
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "698.835",
        "ok": "42.068",
        "ko": "656.767"
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
        "total": "420000",
        "ok": "25283",
        "ko": "394717"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "216",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38914",
        "ok": "38008",
        "ko": "38914"
    },
    "meanResponseTime": {
        "total": "2090",
        "ok": "12207",
        "ko": "1442"
    },
    "standardDeviation": {
        "total": "5006",
        "ok": "7851",
        "ko": "3968"
    },
    "percentiles1": {
        "total": "115",
        "ok": "9205",
        "ko": "114"
    },
    "percentiles2": {
        "total": "3110",
        "ok": "15208",
        "ko": "375"
    },
    "percentiles3": {
        "total": "10286",
        "ok": "28416",
        "ko": "5240"
    },
    "percentiles4": {
        "total": "29027",
        "ok": "31250",
        "ko": "27216"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 369,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 437,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 24477,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 394717,
        "percentage": 94
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "698.835",
        "ok": "42.068",
        "ko": "656.767"
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
