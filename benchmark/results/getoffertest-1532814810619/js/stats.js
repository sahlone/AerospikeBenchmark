var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4310",
        "ok": "4310",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "782",
        "ok": "782",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "992",
        "ok": "992",
        "ko": "-"
    },
    "percentiles1": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1567",
        "ok": "1567",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2575",
        "ok": "2575",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3800",
        "ok": "3800",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1801,
        "percentage": 60
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 176,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1023,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "96.774",
        "ok": "96.774",
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
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4310",
        "ok": "4310",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "782",
        "ok": "782",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "992",
        "ok": "992",
        "ko": "-"
    },
    "percentiles1": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1567",
        "ok": "1567",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2575",
        "ok": "2575",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3800",
        "ok": "3800",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1801,
        "percentage": 60
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 176,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1023,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "96.774",
        "ok": "96.774",
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
