var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "12697",
        "ko": "5303"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "258",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "35112",
        "ok": "35112",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "15874",
        "ok": "22504",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "14175",
        "ok": "11647",
        "ko": "0"
    },
    "percentiles1": {
        "total": "14879",
        "ok": "30817",
        "ko": "0"
    },
    "percentiles2": {
        "total": "32224",
        "ok": "33150",
        "ko": "0"
    },
    "percentiles3": {
        "total": "34294",
        "ok": "34471",
        "ko": "0"
    },
    "percentiles4": {
        "total": "34868",
        "ok": "34995",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 68,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 102,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12527,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 5303,
        "percentage": 29
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "150",
        "ok": "105.808",
        "ko": "44.192"
    }
},
contents: {
"req_click-redirect-39c92": {
        type: "REQUEST",
        name: "Click Redirect",
path: "Click Redirect",
pathFormatted: "req_click-redirect-39c92",
stats: {
    "name": "Click Redirect",
    "numberOfRequests": {
        "total": "18000",
        "ok": "12697",
        "ko": "5303"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "258",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "35112",
        "ok": "35112",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "15874",
        "ok": "22504",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "14175",
        "ok": "11647",
        "ko": "0"
    },
    "percentiles1": {
        "total": "14879",
        "ok": "30820",
        "ko": "0"
    },
    "percentiles2": {
        "total": "32224",
        "ok": "33150",
        "ko": "0"
    },
    "percentiles3": {
        "total": "34294",
        "ok": "34471",
        "ko": "0"
    },
    "percentiles4": {
        "total": "34868",
        "ok": "34995",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 68,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 102,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12527,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 5303,
        "percentage": 29
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "150",
        "ok": "105.808",
        "ko": "44.192"
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
