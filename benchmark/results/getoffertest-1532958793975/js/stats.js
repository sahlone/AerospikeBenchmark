var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "1634",
        "ko": "4366"
    },
    "minResponseTime": {
        "total": "210",
        "ok": "281",
        "ko": "210"
    },
    "maxResponseTime": {
        "total": "6471",
        "ok": "5689",
        "ko": "6471"
    },
    "meanResponseTime": {
        "total": "1167",
        "ok": "2748",
        "ko": "575"
    },
    "standardDeviation": {
        "total": "1373",
        "ok": "973",
        "ko": "976"
    },
    "percentiles1": {
        "total": "214",
        "ok": "2762",
        "ko": "213"
    },
    "percentiles2": {
        "total": "2177",
        "ok": "3465",
        "ko": "216"
    },
    "percentiles3": {
        "total": "3965",
        "ok": "4293",
        "ko": "3035"
    },
    "percentiles4": {
        "total": "4711",
        "ok": "4790",
        "ko": "4598"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 61,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1550,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 4366,
        "percentage": 73
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "98.361",
        "ok": "26.787",
        "ko": "71.574"
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
        "ok": "1634",
        "ko": "4366"
    },
    "minResponseTime": {
        "total": "210",
        "ok": "281",
        "ko": "210"
    },
    "maxResponseTime": {
        "total": "6471",
        "ok": "5689",
        "ko": "6471"
    },
    "meanResponseTime": {
        "total": "1167",
        "ok": "2748",
        "ko": "575"
    },
    "standardDeviation": {
        "total": "1373",
        "ok": "973",
        "ko": "976"
    },
    "percentiles1": {
        "total": "214",
        "ok": "2762",
        "ko": "213"
    },
    "percentiles2": {
        "total": "2177",
        "ok": "3465",
        "ko": "216"
    },
    "percentiles3": {
        "total": "3965",
        "ok": "4293",
        "ko": "3035"
    },
    "percentiles4": {
        "total": "4711",
        "ok": "4790",
        "ko": "4598"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 23,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 61,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1550,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 4366,
        "percentage": 73
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "98.361",
        "ok": "26.787",
        "ko": "71.574"
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
