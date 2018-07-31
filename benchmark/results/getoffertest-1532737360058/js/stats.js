var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "24000",
        "ok": "1297",
        "ko": "22703"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "22",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "60007",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1184",
        "ok": "21905",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6048",
        "ok": "14934",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "22075",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "30397",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1717",
        "ok": "53786",
        "ko": "0"
    },
    "percentiles4": {
        "total": "33273",
        "ok": "59248",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 55,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 22,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1220,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 22703,
        "percentage": 95
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "200",
        "ok": "10.808",
        "ko": "189.192"
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
        "total": "24000",
        "ok": "1297",
        "ko": "22703"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "22",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "60007",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1184",
        "ok": "21905",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6048",
        "ok": "14934",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "22075",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "30397",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1717",
        "ok": "53786",
        "ko": "0"
    },
    "percentiles4": {
        "total": "33273",
        "ok": "59248",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 55,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 22,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1220,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 22703,
        "percentage": 95
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "200",
        "ok": "10.808",
        "ko": "189.192"
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
