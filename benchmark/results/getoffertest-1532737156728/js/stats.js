var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36000",
        "ok": "189",
        "ko": "35811"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "27",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "49838",
        "ok": "49838",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "93",
        "ok": "17789",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1695",
        "ok": "15255",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "16232",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "24322",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "48855",
        "ko": "0"
    },
    "percentiles4": {
        "total": "0",
        "ok": "49713",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 159,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 35811,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "305.085",
        "ok": "1.602",
        "ko": "303.483"
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
        "total": "36000",
        "ok": "189",
        "ko": "35811"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "27",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "49838",
        "ok": "49838",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "93",
        "ok": "17789",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1695",
        "ok": "15255",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "16232",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "24322",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "48855",
        "ko": "0"
    },
    "percentiles4": {
        "total": "0",
        "ok": "49713",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 159,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 35811,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "305.085",
        "ok": "1.602",
        "ko": "303.483"
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
