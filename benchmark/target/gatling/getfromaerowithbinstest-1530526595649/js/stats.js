var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45405",
        "ok": "23112",
        "ko": "22293"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38125",
        "ok": "38125",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3291",
        "ok": "6465",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6300",
        "ok": "7579",
        "ko": "0"
    },
    "percentiles1": {
        "total": "18",
        "ok": "830",
        "ko": "0"
    },
    "percentiles2": {
        "total": "892",
        "ok": "14154",
        "ko": "0"
    },
    "percentiles3": {
        "total": "16121",
        "ok": "17742",
        "ko": "0"
    },
    "percentiles4": {
        "total": "23252",
        "ok": "25112",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11456,
        "percentage": 25
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 837,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10819,
        "percentage": 24
    },
    "group4": {
        "name": "failed",
        "count": 22293,
        "percentage": 49
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "151.856",
        "ok": "77.298",
        "ko": "74.559"
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
        "total": "45405",
        "ok": "23112",
        "ko": "22293"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "3",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "38125",
        "ok": "38125",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3291",
        "ok": "6465",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "6300",
        "ok": "7579",
        "ko": "0"
    },
    "percentiles1": {
        "total": "18",
        "ok": "829",
        "ko": "0"
    },
    "percentiles2": {
        "total": "891",
        "ok": "14153",
        "ko": "0"
    },
    "percentiles3": {
        "total": "16121",
        "ok": "17743",
        "ko": "0"
    },
    "percentiles4": {
        "total": "23253",
        "ok": "25112",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11456,
        "percentage": 25
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 837,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10819,
        "percentage": 24
    },
    "group4": {
        "name": "failed",
        "count": 22293,
        "percentage": 49
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "151.856",
        "ok": "77.298",
        "ko": "74.559"
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
