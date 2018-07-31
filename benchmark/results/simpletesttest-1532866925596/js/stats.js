var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90000",
        "ok": "83464",
        "ko": "6536"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "26698",
        "ok": "26698",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2033",
        "ok": "2192",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3862",
        "ok": "3967",
        "ko": "0"
    },
    "percentiles1": {
        "total": "925",
        "ok": "974",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1144",
        "ok": "1171",
        "ko": "0"
    },
    "percentiles3": {
        "total": "14150",
        "ok": "14802",
        "ko": "0"
    },
    "percentiles4": {
        "total": "16399",
        "ok": "16433",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 25522,
        "percentage": 28
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 38416,
        "percentage": 43
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19526,
        "percentage": 22
    },
    "group4": {
        "name": "failed",
        "count": 6536,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2903.226",
        "ok": "2692.387",
        "ko": "210.839"
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
        "total": "90000",
        "ok": "83464",
        "ko": "6536"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "26698",
        "ok": "26698",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2033",
        "ok": "2192",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3862",
        "ok": "3967",
        "ko": "0"
    },
    "percentiles1": {
        "total": "924",
        "ok": "974",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1145",
        "ok": "1169",
        "ko": "0"
    },
    "percentiles3": {
        "total": "14150",
        "ok": "14802",
        "ko": "0"
    },
    "percentiles4": {
        "total": "16399",
        "ok": "16433",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 25522,
        "percentage": 28
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 38416,
        "percentage": 43
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19526,
        "percentage": 22
    },
    "group4": {
        "name": "failed",
        "count": 6536,
        "percentage": 7
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2903.226",
        "ok": "2692.387",
        "ko": "210.839"
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
