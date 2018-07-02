var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47967",
        "ok": "30984",
        "ko": "16983"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "41336",
        "ok": "41336",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2117",
        "ok": "3277",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5097",
        "ok": "6034",
        "ko": "0"
    },
    "percentiles1": {
        "total": "97",
        "ok": "593",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1478",
        "ok": "3286",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12913",
        "ok": "17458",
        "ko": "0"
    },
    "percentiles4": {
        "total": "27521",
        "ok": "28114",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16856,
        "percentage": 35
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1366,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12762,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 16983,
        "percentage": 35
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "159.359",
        "ok": "102.937",
        "ko": "56.422"
    }
},
contents: {
"req_retrieve-create-e62fc": {
        type: "REQUEST",
        name: "Retrieve created aerospike record with json entity",
path: "Retrieve created aerospike record with json entity",
pathFormatted: "req_retrieve-create-e62fc",
stats: {
    "name": "Retrieve created aerospike record with json entity",
    "numberOfRequests": {
        "total": "47967",
        "ok": "30984",
        "ko": "16983"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "41336",
        "ok": "41336",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2117",
        "ok": "3277",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "5097",
        "ok": "6034",
        "ko": "0"
    },
    "percentiles1": {
        "total": "97",
        "ok": "589",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1480",
        "ok": "3284",
        "ko": "0"
    },
    "percentiles3": {
        "total": "13097",
        "ok": "17449",
        "ko": "0"
    },
    "percentiles4": {
        "total": "27521",
        "ok": "28114",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16856,
        "percentage": 35
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1366,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12762,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 16983,
        "percentage": 35
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "159.359",
        "ok": "102.937",
        "ko": "56.422"
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
