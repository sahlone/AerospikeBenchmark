var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "2078",
        "ko": "57922"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "24",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58551",
        "ok": "58551",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "814",
        "ok": "23509",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5384",
        "ok": "17424",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "18340",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "36844",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "53220",
        "ko": "0"
    },
    "percentiles4": {
        "total": "35502",
        "ok": "58095",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 44,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2016,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 57922,
        "percentage": 97
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "5.772",
        "ko": "160.894"
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
        "ok": "2078",
        "ko": "57922"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "24",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58551",
        "ok": "58551",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "814",
        "ok": "23509",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5384",
        "ok": "17424",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "18340",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "36844",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "53220",
        "ko": "0"
    },
    "percentiles4": {
        "total": "35502",
        "ok": "58095",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 44,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2016,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 57922,
        "percentage": 97
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "5.772",
        "ko": "160.894"
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
