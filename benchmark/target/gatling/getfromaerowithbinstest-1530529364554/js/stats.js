var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "49323",
        "ok": "39673",
        "ko": "9650"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "72814",
        "ok": "72814",
        "ko": "72077"
    },
    "meanResponseTime": {
        "total": "3424",
        "ok": "958",
        "ko": "13563"
    },
    "standardDeviation": {
        "total": "13249",
        "ok": "4492",
        "ko": "26201"
    },
    "percentiles1": {
        "total": "141",
        "ok": "187",
        "ko": "0"
    },
    "percentiles2": {
        "total": "400",
        "ok": "411",
        "ko": "0"
    },
    "percentiles3": {
        "total": "14912",
        "ok": "3189",
        "ko": "66899"
    },
    "percentiles4": {
        "total": "67658",
        "ok": "15269",
        "ko": "69673"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34227,
        "percentage": 69
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1239,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4207,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 9650,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "163.864",
        "ok": "131.804",
        "ko": "32.06"
    }
},
contents: {
"req_retrieve-create-e1a32": {
        type: "REQUEST",
        name: "Retrieve created aerospike record with bins",
path: "Retrieve created aerospike record with bins",
pathFormatted: "req_retrieve-create-e1a32",
stats: {
    "name": "Retrieve created aerospike record with bins",
    "numberOfRequests": {
        "total": "49323",
        "ok": "39673",
        "ko": "9650"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "72814",
        "ok": "72814",
        "ko": "72077"
    },
    "meanResponseTime": {
        "total": "3424",
        "ok": "958",
        "ko": "13563"
    },
    "standardDeviation": {
        "total": "13249",
        "ok": "4492",
        "ko": "26201"
    },
    "percentiles1": {
        "total": "141",
        "ok": "187",
        "ko": "0"
    },
    "percentiles2": {
        "total": "400",
        "ok": "411",
        "ko": "0"
    },
    "percentiles3": {
        "total": "14912",
        "ok": "3193",
        "ko": "66899"
    },
    "percentiles4": {
        "total": "67658",
        "ok": "15269",
        "ko": "69673"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34227,
        "percentage": 69
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1239,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4207,
        "percentage": 9
    },
    "group4": {
        "name": "failed",
        "count": 9650,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "163.864",
        "ok": "131.804",
        "ko": "32.06"
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
