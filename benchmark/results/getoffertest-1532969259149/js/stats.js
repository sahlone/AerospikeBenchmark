var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "2066",
        "ko": "9934"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "16",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "60005",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4576",
        "ok": "26581",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12318",
        "ok": "17218",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "25550",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "40214",
        "ko": "0"
    },
    "percentiles3": {
        "total": "38392",
        "ok": "54881",
        "ko": "0"
    },
    "percentiles4": {
        "total": "54660",
        "ok": "59589",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2019,
        "percentage": 17
    },
    "group4": {
        "name": "failed",
        "count": 9934,
        "percentage": 83
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "17.217",
        "ko": "82.783"
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
        "ok": "2066",
        "ko": "9934"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "16",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60005",
        "ok": "60005",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4576",
        "ok": "26581",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "12318",
        "ok": "17218",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "25550",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "40214",
        "ko": "0"
    },
    "percentiles3": {
        "total": "38392",
        "ok": "54881",
        "ko": "0"
    },
    "percentiles4": {
        "total": "54660",
        "ok": "59589",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2019,
        "percentage": 17
    },
    "group4": {
        "name": "failed",
        "count": 9934,
        "percentage": 83
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "17.217",
        "ko": "82.783"
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
