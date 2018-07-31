var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "2921",
        "ko": "3079"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "162",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58036",
        "ok": "58036",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "11097",
        "ok": "22795",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "16093",
        "ok": "16289",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "20561",
        "ko": "0"
    },
    "percentiles2": {
        "total": "18461",
        "ok": "31450",
        "ko": "0"
    },
    "percentiles3": {
        "total": "52278",
        "ok": "54323",
        "ko": "0"
    },
    "percentiles4": {
        "total": "55924",
        "ok": "56017",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 26,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2862,
        "percentage": 48
    },
    "group4": {
        "name": "failed",
        "count": 3079,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.587",
        "ok": "24.14",
        "ko": "25.446"
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
        "total": "6000",
        "ok": "2921",
        "ko": "3079"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "162",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58036",
        "ok": "58036",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "11097",
        "ok": "22795",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "16093",
        "ok": "16289",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "20561",
        "ko": "0"
    },
    "percentiles2": {
        "total": "18461",
        "ok": "31450",
        "ko": "0"
    },
    "percentiles3": {
        "total": "52278",
        "ok": "54323",
        "ko": "0"
    },
    "percentiles4": {
        "total": "55924",
        "ok": "56017",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 26,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2862,
        "percentage": 48
    },
    "group4": {
        "name": "failed",
        "count": 3079,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.587",
        "ok": "24.14",
        "ko": "25.446"
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
