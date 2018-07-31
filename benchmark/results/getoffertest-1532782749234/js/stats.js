var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "60000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4559",
        "ok": "4559",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "876",
        "ok": "876",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1451",
        "ok": "1451",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1263",
        "ok": "1271",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4030",
        "ok": "4030",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4199",
        "ok": "4199",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42839,
        "percentage": 71
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1964,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 15197,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "983.607",
        "ok": "983.607",
        "ko": "-"
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
        "total": "60000",
        "ok": "60000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4559",
        "ok": "4559",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "876",
        "ok": "876",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1451",
        "ok": "1451",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4030",
        "ok": "4030",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4199",
        "ok": "4199",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42839,
        "percentage": 71
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1964,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 15197,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "983.607",
        "ok": "983.607",
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
