var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "1835",
        "ko": "10165"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "40",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58405",
        "ok": "58405",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4114",
        "ok": "26906",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11711",
        "ok": "16840",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "24401",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "38308",
        "ko": "0"
    },
    "percentiles3": {
        "total": "34409",
        "ok": "57957",
        "ko": "0"
    },
    "percentiles4": {
        "total": "53508",
        "ok": "58338",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 27,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1799,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 10165,
        "percentage": 85
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "15.292",
        "ko": "84.708"
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
        "ok": "1835",
        "ko": "10165"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "40",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58405",
        "ok": "58405",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4114",
        "ok": "26906",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11711",
        "ok": "16840",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "24401",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "38308",
        "ko": "0"
    },
    "percentiles3": {
        "total": "34409",
        "ok": "57957",
        "ko": "0"
    },
    "percentiles4": {
        "total": "53508",
        "ok": "58338",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 27,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1799,
        "percentage": 15
    },
    "group4": {
        "name": "failed",
        "count": 10165,
        "percentage": 85
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "15.292",
        "ko": "84.708"
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
