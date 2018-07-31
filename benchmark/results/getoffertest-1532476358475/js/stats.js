var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9000",
        "ok": "7517",
        "ko": "1483"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "112",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "17557",
        "ok": "17557",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "11931",
        "ok": "14285",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6350",
        "ok": "3828",
        "ko": "0"
    },
    "percentiles1": {
        "total": "17276",
        "ok": "17297",
        "ko": "0"
    },
    "percentiles2": {
        "total": "17432",
        "ok": "17450",
        "ko": "0"
    },
    "percentiles3": {
        "total": "17276",
        "ok": "17297",
        "ko": "0"
    },
    "percentiles4": {
        "total": "17432",
        "ok": "17450",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 50,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 89,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7378,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 1483,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "140.625",
        "ok": "117.453",
        "ko": "23.172"
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
        "total": "9000",
        "ok": "7517",
        "ko": "1483"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "112",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "17557",
        "ok": "17557",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "11931",
        "ok": "14285",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6350",
        "ok": "3828",
        "ko": "0"
    },
    "percentiles1": {
        "total": "17276",
        "ok": "17297",
        "ko": "0"
    },
    "percentiles2": {
        "total": "17432",
        "ok": "17450",
        "ko": "0"
    },
    "percentiles3": {
        "total": "17276",
        "ok": "17297",
        "ko": "0"
    },
    "percentiles4": {
        "total": "17432",
        "ok": "17450",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 50,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 89,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7378,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 1483,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "140.625",
        "ok": "117.453",
        "ko": "23.172"
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
