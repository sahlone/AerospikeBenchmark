var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "524",
        "ko": "5476"
    },
    "minResponseTime": {
        "total": "316",
        "ok": "316",
        "ko": "30103"
    },
    "maxResponseTime": {
        "total": "31355",
        "ok": "5271",
        "ko": "31355"
    },
    "meanResponseTime": {
        "total": "27721",
        "ok": "1680",
        "ko": "30213"
    },
    "standardDeviation": {
        "total": "8062",
        "ok": "1118",
        "ko": "30"
    },
    "percentiles1": {
        "total": "30210",
        "ok": "1324",
        "ko": "30210"
    },
    "percentiles2": {
        "total": "30211",
        "ok": "2056",
        "ko": "30211"
    },
    "percentiles3": {
        "total": "30255",
        "ok": "4214",
        "ko": "30256"
    },
    "percentiles4": {
        "total": "30288",
        "ok": "4809",
        "ko": "30289"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 113,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 111,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 300,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 5476,
        "percentage": 91
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "65.934",
        "ok": "5.758",
        "ko": "60.176"
    }
},
contents: {
"req_get-offer-daaa5": {
        type: "REQUEST",
        name: "Get Offer",
path: "Get Offer",
pathFormatted: "req_get-offer-daaa5",
stats: {
    "name": "Get Offer",
    "numberOfRequests": {
        "total": "6000",
        "ok": "524",
        "ko": "5476"
    },
    "minResponseTime": {
        "total": "316",
        "ok": "316",
        "ko": "30103"
    },
    "maxResponseTime": {
        "total": "31355",
        "ok": "5271",
        "ko": "31355"
    },
    "meanResponseTime": {
        "total": "27721",
        "ok": "1680",
        "ko": "30213"
    },
    "standardDeviation": {
        "total": "8062",
        "ok": "1118",
        "ko": "30"
    },
    "percentiles1": {
        "total": "30210",
        "ok": "1324",
        "ko": "30210"
    },
    "percentiles2": {
        "total": "30211",
        "ok": "2056",
        "ko": "30211"
    },
    "percentiles3": {
        "total": "30255",
        "ok": "4214",
        "ko": "30256"
    },
    "percentiles4": {
        "total": "30288",
        "ok": "4809",
        "ko": "30289"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 113,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 111,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 300,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 5476,
        "percentage": 91
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "65.934",
        "ok": "5.758",
        "ko": "60.176"
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
