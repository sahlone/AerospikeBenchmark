var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "28584",
        "ok": "28192",
        "ko": "392"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "62699",
        "ok": "59774",
        "ko": "62699"
    },
    "meanResponseTime": {
        "total": "11460",
        "ok": "11192",
        "ko": "30717"
    },
    "standardDeviation": {
        "total": "15183",
        "ok": "14718",
        "ko": "29241"
    },
    "percentiles1": {
        "total": "316",
        "ok": "305",
        "ko": "54205"
    },
    "percentiles2": {
        "total": "22207",
        "ok": "21947",
        "ko": "58793"
    },
    "percentiles3": {
        "total": "38665",
        "ok": "38453",
        "ko": "61301"
    },
    "percentiles4": {
        "total": "44983",
        "ok": "41144",
        "ko": "61898"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15076,
        "percentage": 53
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 198,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12918,
        "percentage": 45
    },
    "group4": {
        "name": "failed",
        "count": 392,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "94.963",
        "ok": "93.661",
        "ko": "1.302"
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
        "total": "28584",
        "ok": "28192",
        "ko": "392"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "62699",
        "ok": "59774",
        "ko": "62699"
    },
    "meanResponseTime": {
        "total": "11460",
        "ok": "11192",
        "ko": "30717"
    },
    "standardDeviation": {
        "total": "15183",
        "ok": "14718",
        "ko": "29241"
    },
    "percentiles1": {
        "total": "307",
        "ok": "306",
        "ko": "54205"
    },
    "percentiles2": {
        "total": "22218",
        "ok": "21947",
        "ko": "58793"
    },
    "percentiles3": {
        "total": "38661",
        "ok": "38453",
        "ko": "61301"
    },
    "percentiles4": {
        "total": "44983",
        "ok": "41144",
        "ko": "61898"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15076,
        "percentage": 53
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 198,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 12918,
        "percentage": 45
    },
    "group4": {
        "name": "failed",
        "count": 392,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "94.963",
        "ok": "93.661",
        "ko": "1.302"
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
