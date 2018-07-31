var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "132000",
        "ok": "76798",
        "ko": "55202"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "106",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "29135",
        "ok": "29135",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "889",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1531",
        "ok": "1923",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2835",
        "ok": "4614",
        "ko": "0"
    },
    "percentiles2": {
        "total": "7989",
        "ok": "9605",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2835",
        "ok": "4614",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7989",
        "ok": "9605",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 59671,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3672,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13455,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 55202,
        "percentage": 42
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1333.333",
        "ok": "775.737",
        "ko": "557.596"
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
        "total": "132000",
        "ok": "76798",
        "ko": "55202"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "106",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "29135",
        "ok": "29135",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "889",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1531",
        "ok": "1923",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2839",
        "ok": "4616",
        "ko": "0"
    },
    "percentiles2": {
        "total": "7988",
        "ok": "9607",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2839",
        "ok": "4616",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7988",
        "ok": "9607",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 59671,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3672,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13455,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 55202,
        "percentage": 42
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1333.333",
        "ok": "775.737",
        "ko": "557.596"
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
