var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "16264",
        "ko": "43736"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "212",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "31251",
        "ok": "31251",
        "ko": "30923"
    },
    "meanResponseTime": {
        "total": "2065",
        "ok": "7606",
        "ko": "4"
    },
    "standardDeviation": {
        "total": "4919",
        "ok": "6843",
        "ko": "354"
    },
    "percentiles1": {
        "total": "14306",
        "ok": "21346",
        "ko": "0"
    },
    "percentiles2": {
        "total": "21902",
        "ok": "29616",
        "ko": "0"
    },
    "percentiles3": {
        "total": "14306",
        "ok": "21346",
        "ko": "0"
    },
    "percentiles4": {
        "total": "21902",
        "ok": "29616",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1052,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 719,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14493,
        "percentage": 24
    },
    "group4": {
        "name": "failed",
        "count": 43736,
        "percentage": 73
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "402.685",
        "ok": "109.154",
        "ko": "293.53"
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
        "ok": "16264",
        "ko": "43736"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "212",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "31251",
        "ok": "31251",
        "ko": "30923"
    },
    "meanResponseTime": {
        "total": "2065",
        "ok": "7606",
        "ko": "4"
    },
    "standardDeviation": {
        "total": "4919",
        "ok": "6843",
        "ko": "354"
    },
    "percentiles1": {
        "total": "14305",
        "ok": "21346",
        "ko": "0"
    },
    "percentiles2": {
        "total": "21902",
        "ok": "29616",
        "ko": "0"
    },
    "percentiles3": {
        "total": "14305",
        "ok": "21346",
        "ko": "0"
    },
    "percentiles4": {
        "total": "21902",
        "ok": "29616",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1052,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 719,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14493,
        "percentage": 24
    },
    "group4": {
        "name": "failed",
        "count": 43736,
        "percentage": 73
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "402.685",
        "ok": "109.154",
        "ko": "293.53"
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
