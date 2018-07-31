var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "2174",
        "ko": "9826"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "32",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59995",
        "ok": "59995",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4676",
        "ok": "25813",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12171",
        "ok": "16495",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "23368",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "36966",
        "ko": "0"
    },
    "percentiles3": {
        "total": "36638",
        "ok": "57426",
        "ko": "0"
    },
    "percentiles4": {
        "total": "57127",
        "ok": "59462",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 29,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2122,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 9826,
        "percentage": 82
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "123.711",
        "ok": "22.412",
        "ko": "101.299"
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
        "ok": "2174",
        "ko": "9826"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "32",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59995",
        "ok": "59995",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4676",
        "ok": "25813",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12171",
        "ok": "16495",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "23368",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "36966",
        "ko": "0"
    },
    "percentiles3": {
        "total": "36638",
        "ok": "57426",
        "ko": "0"
    },
    "percentiles4": {
        "total": "57127",
        "ok": "59462",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 29,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2122,
        "percentage": 18
    },
    "group4": {
        "name": "failed",
        "count": 9826,
        "percentage": 82
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "123.711",
        "ok": "22.412",
        "ko": "101.299"
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
