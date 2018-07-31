var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "75000",
        "ok": "74326",
        "ko": "674"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9256",
        "ok": "9256",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1083",
        "ok": "1093",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1655",
        "ok": "1659",
        "ko": "0"
    },
    "percentiles1": {
        "total": "18",
        "ok": "21",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1555",
        "ok": "1564",
        "ko": "0"
    },
    "percentiles3": {
        "total": "5046",
        "ok": "5058",
        "ko": "0"
    },
    "percentiles4": {
        "total": "6708",
        "ok": "6713",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43730,
        "percentage": 58
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5928,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 24668,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 674,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2419.355",
        "ok": "2397.613",
        "ko": "21.742"
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
        "ok": "74326",
        "ko": "674"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9256",
        "ok": "9256",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1083",
        "ok": "1093",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1655",
        "ok": "1659",
        "ko": "0"
    },
    "percentiles1": {
        "total": "18",
        "ok": "21",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1556",
        "ok": "1564",
        "ko": "0"
    },
    "percentiles3": {
        "total": "5046",
        "ok": "5058",
        "ko": "0"
    },
    "percentiles4": {
        "total": "6708",
        "ok": "6713",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43730,
        "percentage": 58
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5928,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 24668,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 674,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2419.355",
        "ok": "2397.613",
        "ko": "21.742"
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
