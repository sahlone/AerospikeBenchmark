var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "1074",
        "ko": "4926"
    },
    "minResponseTime": {
        "total": "208",
        "ok": "222",
        "ko": "208"
    },
    "maxResponseTime": {
        "total": "30754",
        "ok": "21375",
        "ko": "30754"
    },
    "meanResponseTime": {
        "total": "12862",
        "ok": "3048",
        "ko": "15002"
    },
    "standardDeviation": {
        "total": "14386",
        "ok": "2783",
        "ko": "14994"
    },
    "percentiles1": {
        "total": "1783",
        "ok": "1912",
        "ko": "269"
    },
    "percentiles2": {
        "total": "30210",
        "ok": "3939",
        "ko": "30210"
    },
    "percentiles3": {
        "total": "30219",
        "ok": "9816",
        "ko": "30228"
    },
    "percentiles4": {
        "total": "30279",
        "ok": "11392",
        "ko": "30280"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 105,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 179,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 790,
        "percentage": 13
    },
    "group4": {
        "name": "failed",
        "count": 4926,
        "percentage": 82
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "65.934",
        "ok": "11.802",
        "ko": "54.132"
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
        "ok": "1074",
        "ko": "4926"
    },
    "minResponseTime": {
        "total": "208",
        "ok": "222",
        "ko": "208"
    },
    "maxResponseTime": {
        "total": "30754",
        "ok": "21375",
        "ko": "30754"
    },
    "meanResponseTime": {
        "total": "12862",
        "ok": "3048",
        "ko": "15002"
    },
    "standardDeviation": {
        "total": "14386",
        "ok": "2783",
        "ko": "14994"
    },
    "percentiles1": {
        "total": "1783",
        "ok": "1912",
        "ko": "269"
    },
    "percentiles2": {
        "total": "30210",
        "ok": "3939",
        "ko": "30210"
    },
    "percentiles3": {
        "total": "30219",
        "ok": "9816",
        "ko": "30228"
    },
    "percentiles4": {
        "total": "30279",
        "ok": "11392",
        "ko": "30280"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 105,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 179,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 790,
        "percentage": 13
    },
    "group4": {
        "name": "failed",
        "count": 4926,
        "percentage": 82
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "65.934",
        "ok": "11.802",
        "ko": "54.132"
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
