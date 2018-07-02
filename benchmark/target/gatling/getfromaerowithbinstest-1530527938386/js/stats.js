var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "52601",
        "ok": "52601",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15870",
        "ok": "15870",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1221",
        "ok": "1221",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2137",
        "ok": "2137",
        "ko": "-"
    },
    "percentiles1": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4165",
        "ok": "4166",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13134",
        "ok": "13134",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 31922,
        "percentage": 61
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6595,
        "percentage": 13
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14084,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "175.337",
        "ok": "175.337",
        "ko": "-"
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
        "total": "52601",
        "ok": "52601",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15870",
        "ok": "15870",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1221",
        "ok": "1221",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2137",
        "ok": "2137",
        "ko": "-"
    },
    "percentiles1": {
        "total": "529",
        "ok": "529",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1264",
        "ok": "1264",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4173",
        "ok": "4165",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13134",
        "ok": "13134",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 31922,
        "percentage": 61
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6595,
        "percentage": 13
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14084,
        "percentage": 27
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "175.337",
        "ok": "175.337",
        "ko": "-"
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
