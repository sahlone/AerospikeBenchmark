var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36000",
        "ok": "36000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9149",
        "ok": "9149",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5020",
        "ok": "5020",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2349",
        "ok": "2349",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5422",
        "ok": "5421",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6861",
        "ok": "6861",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8210",
        "ok": "8210",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8663",
        "ok": "8663",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2487,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 926,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32587,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "590.164",
        "ok": "590.164",
        "ko": "-"
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
        "total": "36000",
        "ok": "36000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9149",
        "ok": "9149",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5020",
        "ok": "5020",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2349",
        "ok": "2349",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5422",
        "ok": "5422",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6861",
        "ok": "6861",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8210",
        "ok": "8210",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8663",
        "ok": "8663",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2487,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 926,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 32587,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "590.164",
        "ok": "590.164",
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
