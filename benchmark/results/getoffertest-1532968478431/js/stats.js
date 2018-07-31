var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "2777",
        "ko": "9223"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "40",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "55114",
        "ok": "55114",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5142",
        "ok": "22218",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12258",
        "ok": "16427",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "18660",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "35751",
        "ko": "0"
    },
    "percentiles3": {
        "total": "41915",
        "ok": "52885",
        "ko": "0"
    },
    "percentiles4": {
        "total": "52984",
        "ok": "54986",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2755,
        "percentage": 23
    },
    "group4": {
        "name": "failed",
        "count": 9223,
        "percentage": 77
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "22.95",
        "ko": "76.223"
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
        "total": "12000",
        "ok": "2777",
        "ko": "9223"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "40",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "55114",
        "ok": "55114",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5142",
        "ok": "22218",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12258",
        "ok": "16427",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "18658",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "35750",
        "ko": "0"
    },
    "percentiles3": {
        "total": "41901",
        "ok": "52886",
        "ko": "0"
    },
    "percentiles4": {
        "total": "52984",
        "ok": "54986",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2755,
        "percentage": 23
    },
    "group4": {
        "name": "failed",
        "count": 9223,
        "percentage": 77
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "22.95",
        "ko": "76.223"
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
