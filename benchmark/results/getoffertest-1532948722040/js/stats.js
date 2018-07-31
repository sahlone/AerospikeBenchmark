var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "2122",
        "ko": "9878"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "14",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "56270",
        "ok": "56270",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3994",
        "ok": "22585",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11007",
        "ok": "16288",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "18262",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "33985",
        "ko": "0"
    },
    "percentiles3": {
        "total": "33698",
        "ok": "55772",
        "ko": "0"
    },
    "percentiles4": {
        "total": "55708",
        "ok": "56176",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 60,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2045,
        "percentage": 17
    },
    "group4": {
        "name": "failed",
        "count": 9878,
        "percentage": 82
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "17.537",
        "ko": "81.636"
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
        "ok": "2122",
        "ko": "9878"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "14",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "56270",
        "ok": "56270",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3994",
        "ok": "22585",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11007",
        "ok": "16288",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "18262",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "33985",
        "ko": "0"
    },
    "percentiles3": {
        "total": "33698",
        "ok": "55772",
        "ko": "0"
    },
    "percentiles4": {
        "total": "55708",
        "ok": "56176",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 17,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 60,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2045,
        "percentage": 17
    },
    "group4": {
        "name": "failed",
        "count": 9878,
        "percentage": 82
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "99.174",
        "ok": "17.537",
        "ko": "81.636"
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
