var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "1211",
        "ko": "10789"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "25",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59550",
        "ok": "59550",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2967",
        "ok": "29403",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "10414",
        "ok": "17243",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "25308",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "44829",
        "ko": "0"
    },
    "percentiles3": {
        "total": "25516",
        "ok": "58118",
        "ko": "0"
    },
    "percentiles4": {
        "total": "56640",
        "ok": "59255",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 14,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1174,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 10789,
        "percentage": 90
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "107.143",
        "ok": "10.812",
        "ko": "96.33"
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
        "ok": "1211",
        "ko": "10789"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "25",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59550",
        "ok": "59550",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2967",
        "ok": "29403",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "10414",
        "ok": "17243",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "25308",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "44829",
        "ko": "0"
    },
    "percentiles3": {
        "total": "25516",
        "ok": "58118",
        "ko": "0"
    },
    "percentiles4": {
        "total": "56640",
        "ok": "59255",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 14,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1174,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 10789,
        "percentage": 90
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "107.143",
        "ok": "10.812",
        "ko": "96.33"
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
