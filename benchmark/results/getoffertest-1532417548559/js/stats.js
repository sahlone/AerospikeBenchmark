var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "29389",
        "ko": "30611"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "133",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "33073",
        "ok": "32031",
        "ko": "33073"
    },
    "meanResponseTime": {
        "total": "16551",
        "ok": "12373",
        "ko": "20562"
    },
    "standardDeviation": {
        "total": "12615",
        "ok": "9143",
        "ko": "14100"
    },
    "percentiles1": {
        "total": "30294",
        "ok": "28377",
        "ko": "30410"
    },
    "percentiles2": {
        "total": "30662",
        "ok": "29855",
        "ko": "30873"
    },
    "percentiles3": {
        "total": "30294",
        "ok": "28377",
        "ko": "30410"
    },
    "percentiles4": {
        "total": "30662",
        "ok": "29855",
        "ko": "30873"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1171,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 803,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27415,
        "percentage": 46
    },
    "group4": {
        "name": "failed",
        "count": 30611,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "397.351",
        "ok": "194.629",
        "ko": "202.722"
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
        "ok": "29389",
        "ko": "30611"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "133",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "33073",
        "ok": "32031",
        "ko": "33073"
    },
    "meanResponseTime": {
        "total": "16551",
        "ok": "12373",
        "ko": "20562"
    },
    "standardDeviation": {
        "total": "12615",
        "ok": "9143",
        "ko": "14100"
    },
    "percentiles1": {
        "total": "30294",
        "ok": "28377",
        "ko": "30410"
    },
    "percentiles2": {
        "total": "30662",
        "ok": "29855",
        "ko": "30873"
    },
    "percentiles3": {
        "total": "30294",
        "ok": "28377",
        "ko": "30410"
    },
    "percentiles4": {
        "total": "30662",
        "ok": "29855",
        "ko": "30873"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1171,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 803,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 27415,
        "percentage": 46
    },
    "group4": {
        "name": "failed",
        "count": 30611,
        "percentage": 51
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "397.351",
        "ok": "194.629",
        "ko": "202.722"
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
