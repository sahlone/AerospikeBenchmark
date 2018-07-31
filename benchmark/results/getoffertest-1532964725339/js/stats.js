var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "215",
        "ko": "2785"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "349",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "60001",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1992",
        "ok": "27792",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "8597",
        "ok": "17727",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "28697",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "42861",
        "ko": "0"
    },
    "percentiles3": {
        "total": "16801",
        "ok": "54994",
        "ko": "0"
    },
    "percentiles4": {
        "total": "50192",
        "ok": "59404",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 212,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 2785,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "1.792",
        "ko": "23.208"
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
        "ok": "215",
        "ko": "2785"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "349",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "60001",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1992",
        "ok": "27792",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "8597",
        "ok": "17727",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "28697",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "42861",
        "ko": "0"
    },
    "percentiles3": {
        "total": "16801",
        "ok": "54994",
        "ko": "0"
    },
    "percentiles4": {
        "total": "50192",
        "ok": "59404",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 212,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 2785,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "1.792",
        "ko": "23.208"
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
