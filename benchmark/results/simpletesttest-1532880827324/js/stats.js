var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180000",
        "ok": "177309",
        "ko": "2691"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "47383",
        "ok": "47383",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "334",
        "ok": "339",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1077",
        "ok": "1084",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2997",
        "ok": "3039",
        "ko": "0"
    },
    "percentiles4": {
        "total": "4579",
        "ok": "4583",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 156754,
        "percentage": 87
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4284,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16271,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 2691,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2950.82",
        "ok": "2906.705",
        "ko": "44.115"
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
        "total": "180000",
        "ok": "177309",
        "ko": "2691"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "47383",
        "ok": "47383",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "334",
        "ok": "339",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1077",
        "ok": "1084",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "percentiles3": {
        "total": "3018",
        "ok": "3038",
        "ko": "0"
    },
    "percentiles4": {
        "total": "4578",
        "ok": "4583",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 156754,
        "percentage": 87
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4284,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16271,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 2691,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2950.82",
        "ok": "2906.705",
        "ko": "44.115"
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
