var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9000",
        "ok": "9000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12154",
        "ok": "12154",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9865",
        "ok": "9865",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1809",
        "ok": "1809",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11571",
        "ok": "11571",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11908",
        "ok": "11908",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11571",
        "ok": "11571",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11908",
        "ok": "11908",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 26,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8959,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "230.769",
        "ok": "230.769",
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
        "total": "9000",
        "ok": "9000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12154",
        "ok": "12154",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9865",
        "ok": "9865",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1809",
        "ok": "1809",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11571",
        "ok": "11570",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11908",
        "ok": "11908",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11571",
        "ok": "11570",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11908",
        "ok": "11908",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 26,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8959,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "230.769",
        "ok": "230.769",
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
