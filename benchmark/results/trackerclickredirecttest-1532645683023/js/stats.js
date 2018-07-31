var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "60000",
        "ok": "37522",
        "ko": "22478"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "101",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "23086",
        "ok": "23086",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "10300",
        "ok": "16470",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "9563",
        "ok": "6679",
        "ko": "0"
    },
    "percentiles1": {
        "total": "9755",
        "ok": "20216",
        "ko": "0"
    },
    "percentiles2": {
        "total": "20302",
        "ok": "20791",
        "ko": "0"
    },
    "percentiles3": {
        "total": "20994",
        "ok": "21185",
        "ko": "0"
    },
    "percentiles4": {
        "total": "22285",
        "ok": "22368",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1309,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 148,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 36065,
        "percentage": 60
    },
    "group4": {
        "name": "failed",
        "count": 22478,
        "percentage": 37
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "740.741",
        "ok": "463.235",
        "ko": "277.506"
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
        "total": "60000",
        "ok": "37522",
        "ko": "22478"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "101",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "23086",
        "ok": "23086",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "10300",
        "ok": "16470",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "9563",
        "ok": "6679",
        "ko": "0"
    },
    "percentiles1": {
        "total": "9755",
        "ok": "20216",
        "ko": "0"
    },
    "percentiles2": {
        "total": "20304",
        "ok": "20795",
        "ko": "0"
    },
    "percentiles3": {
        "total": "20996",
        "ok": "21184",
        "ko": "0"
    },
    "percentiles4": {
        "total": "22287",
        "ok": "22368",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1309,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 148,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 36065,
        "percentage": 60
    },
    "group4": {
        "name": "failed",
        "count": 22478,
        "percentage": 37
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "740.741",
        "ok": "463.235",
        "ko": "277.506"
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
