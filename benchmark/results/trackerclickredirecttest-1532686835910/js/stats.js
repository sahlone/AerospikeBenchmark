var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180",
        "ok": "151",
        "ko": "29"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "214",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "3306",
        "ok": "3306",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "474",
        "ok": "564",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "671",
        "ok": "697",
        "ko": "0"
    },
    "percentiles1": {
        "total": "248",
        "ok": "277",
        "ko": "0"
    },
    "percentiles2": {
        "total": "313",
        "ok": "361",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2056",
        "ok": "2328",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2997",
        "ok": "3064",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 126,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 21,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 29,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.951",
        "ok": "2.475",
        "ko": "0.475"
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
        "total": "180",
        "ok": "151",
        "ko": "29"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "214",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "3306",
        "ok": "3306",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "474",
        "ok": "564",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "671",
        "ok": "697",
        "ko": "0"
    },
    "percentiles1": {
        "total": "248",
        "ok": "277",
        "ko": "0"
    },
    "percentiles2": {
        "total": "313",
        "ok": "361",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2056",
        "ok": "2328",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2997",
        "ok": "3064",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 126,
        "percentage": 70
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 21,
        "percentage": 12
    },
    "group4": {
        "name": "failed",
        "count": 29,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.951",
        "ok": "2.475",
        "ko": "0.475"
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
