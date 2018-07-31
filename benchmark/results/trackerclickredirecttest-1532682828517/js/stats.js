var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36000",
        "ok": "33496",
        "ko": "2504"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "126",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "30214",
        "ok": "30214",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "12772",
        "ok": "13726",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "9507",
        "ok": "9167",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10591",
        "ok": "11620",
        "ko": "0"
    },
    "percentiles2": {
        "total": "23174",
        "ok": "23848",
        "ko": "0"
    },
    "percentiles3": {
        "total": "28922",
        "ok": "28967",
        "ko": "0"
    },
    "percentiles4": {
        "total": "29528",
        "ok": "29534",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 953,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 386,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32157,
        "percentage": 89
    },
    "group4": {
        "name": "failed",
        "count": 2504,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "428.571",
        "ok": "398.762",
        "ko": "29.81"
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
        "total": "36000",
        "ok": "33496",
        "ko": "2504"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "126",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "30214",
        "ok": "30214",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "12772",
        "ok": "13726",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "9507",
        "ok": "9167",
        "ko": "0"
    },
    "percentiles1": {
        "total": "10597",
        "ok": "11599",
        "ko": "0"
    },
    "percentiles2": {
        "total": "23090",
        "ok": "23894",
        "ko": "0"
    },
    "percentiles3": {
        "total": "28921",
        "ok": "28967",
        "ko": "0"
    },
    "percentiles4": {
        "total": "29528",
        "ok": "29534",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 953,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 386,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32157,
        "percentage": 89
    },
    "group4": {
        "name": "failed",
        "count": 2504,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "428.571",
        "ok": "398.762",
        "ko": "29.81"
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
