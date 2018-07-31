var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90000",
        "ok": "32435",
        "ko": "57565"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "17",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58823",
        "ok": "58823",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6613",
        "ok": "18350",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "10217",
        "ok": "8619",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "16819",
        "ko": "0"
    },
    "percentiles2": {
        "total": "11213",
        "ok": "24397",
        "ko": "0"
    },
    "percentiles3": {
        "total": "29649",
        "ok": "33857",
        "ko": "0"
    },
    "percentiles4": {
        "total": "34236",
        "ok": "37095",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 76,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32335,
        "percentage": 36
    },
    "group4": {
        "name": "failed",
        "count": 57565,
        "percentage": 64
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "803.571",
        "ok": "289.598",
        "ko": "513.973"
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
        "ok": "32435",
        "ko": "57565"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "17",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58823",
        "ok": "58823",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6613",
        "ok": "18350",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "10217",
        "ok": "8619",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "16788",
        "ko": "0"
    },
    "percentiles2": {
        "total": "11216",
        "ok": "24401",
        "ko": "0"
    },
    "percentiles3": {
        "total": "29645",
        "ok": "33857",
        "ko": "0"
    },
    "percentiles4": {
        "total": "34236",
        "ok": "37095",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 76,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32335,
        "percentage": 36
    },
    "group4": {
        "name": "failed",
        "count": 57565,
        "percentage": 64
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "803.571",
        "ok": "289.598",
        "ko": "513.973"
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
