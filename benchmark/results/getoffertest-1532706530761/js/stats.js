var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2664",
        "ko": "336"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "21",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59425",
        "ok": "59425",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "18131",
        "ok": "20417",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "17808",
        "ok": "17619",
        "ko": "0"
    },
    "percentiles1": {
        "total": "14482",
        "ok": "15199",
        "ko": "0"
    },
    "percentiles2": {
        "total": "35608",
        "ok": "36295",
        "ko": "0"
    },
    "percentiles3": {
        "total": "52214",
        "ok": "52425",
        "ko": "0"
    },
    "percentiles4": {
        "total": "58486",
        "ok": "58553",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 59,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 49,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2556,
        "percentage": 85
    },
    "group4": {
        "name": "failed",
        "count": 336,
        "percentage": 11
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "29.6",
        "ko": "3.733"
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
        "total": "3000",
        "ok": "2664",
        "ko": "336"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "21",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59425",
        "ok": "59425",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "18131",
        "ok": "20417",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "17808",
        "ok": "17619",
        "ko": "0"
    },
    "percentiles1": {
        "total": "14485",
        "ok": "15199",
        "ko": "0"
    },
    "percentiles2": {
        "total": "35561",
        "ok": "36295",
        "ko": "0"
    },
    "percentiles3": {
        "total": "52211",
        "ok": "52425",
        "ko": "0"
    },
    "percentiles4": {
        "total": "58486",
        "ok": "58553",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 59,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 49,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2556,
        "percentage": 85
    },
    "group4": {
        "name": "failed",
        "count": 336,
        "percentage": 11
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "29.6",
        "ko": "3.733"
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
