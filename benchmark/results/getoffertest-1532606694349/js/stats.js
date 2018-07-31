var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18000",
        "ok": "1410",
        "ko": "16590"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "119",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "53211",
        "ok": "53211",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "446",
        "ok": "5694",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2211",
        "ok": "5703",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2572",
        "ok": "16219",
        "ko": "0"
    },
    "percentiles2": {
        "total": "12015",
        "ok": "27198",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2572",
        "ok": "16219",
        "ko": "0"
    },
    "percentiles4": {
        "total": "12015",
        "ok": "27198",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 125,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 116,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1169,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 16590,
        "percentage": 92
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "150",
        "ok": "11.75",
        "ko": "138.25"
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
        "total": "18000",
        "ok": "1410",
        "ko": "16590"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "119",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "53211",
        "ok": "53211",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "446",
        "ok": "5694",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2211",
        "ok": "5703",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2572",
        "ok": "16219",
        "ko": "0"
    },
    "percentiles2": {
        "total": "12015",
        "ok": "27198",
        "ko": "0"
    },
    "percentiles3": {
        "total": "2572",
        "ok": "16219",
        "ko": "0"
    },
    "percentiles4": {
        "total": "12015",
        "ok": "27198",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 125,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 116,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1169,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 16590,
        "percentage": 92
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "150",
        "ok": "11.75",
        "ko": "138.25"
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
