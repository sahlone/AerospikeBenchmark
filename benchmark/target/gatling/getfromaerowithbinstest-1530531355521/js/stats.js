var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "54756",
        "ok": "54750",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "26513",
        "ok": "26513",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2869",
        "ok": "2870",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5464",
        "ok": "5464",
        "ko": "0"
    },
    "percentiles1": {
        "total": "597",
        "ok": "597",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1664",
        "ok": "1663",
        "ko": "0"
    },
    "percentiles3": {
        "total": "17329",
        "ok": "17330",
        "ko": "0"
    },
    "percentiles4": {
        "total": "21226",
        "ok": "21226",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32283,
        "percentage": 59
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5196,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 17271,
        "percentage": 32
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "182.52",
        "ok": "182.5",
        "ko": "0.02"
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
        "total": "54756",
        "ok": "54750",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "26513",
        "ok": "26513",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2869",
        "ok": "2870",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5464",
        "ok": "5464",
        "ko": "0"
    },
    "percentiles1": {
        "total": "597",
        "ok": "597",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1663",
        "ok": "1663",
        "ko": "0"
    },
    "percentiles3": {
        "total": "17315",
        "ok": "17363",
        "ko": "0"
    },
    "percentiles4": {
        "total": "21226",
        "ok": "21226",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32283,
        "percentage": 59
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5196,
        "percentage": 9
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 17271,
        "percentage": 32
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "182.52",
        "ok": "182.5",
        "ko": "0.02"
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
