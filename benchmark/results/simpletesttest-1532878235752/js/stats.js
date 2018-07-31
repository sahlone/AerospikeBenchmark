var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "75000",
        "ok": "10625",
        "ko": "64375"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "36718",
        "ok": "36718",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "605",
        "ok": "4270",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2389",
        "ok": "4964",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "2167",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "4180",
        "ko": "0"
    },
    "percentiles3": {
        "total": "3690",
        "ok": "16108",
        "ko": "0"
    },
    "percentiles4": {
        "total": "14572",
        "ok": "21828",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 835,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1418,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8372,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 64375,
        "percentage": 86
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1056.338",
        "ok": "149.648",
        "ko": "906.69"
    }
},
contents: {
"req_execute-an-http-db146": {
        type: "REQUEST",
        name: "execute an http call",
path: "execute an http call",
pathFormatted: "req_execute-an-http-db146",
stats: {
    "name": "execute an http call",
    "numberOfRequests": {
        "total": "75000",
        "ok": "10625",
        "ko": "64375"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "36718",
        "ok": "36718",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "605",
        "ok": "4270",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2389",
        "ok": "4964",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "2167",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "4179",
        "ko": "0"
    },
    "percentiles3": {
        "total": "3689",
        "ok": "16108",
        "ko": "0"
    },
    "percentiles4": {
        "total": "14572",
        "ok": "21828",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 835,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1418,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8372,
        "percentage": 11
    },
    "group4": {
        "name": "failed",
        "count": 64375,
        "percentage": 86
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1056.338",
        "ok": "149.648",
        "ko": "906.69"
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
