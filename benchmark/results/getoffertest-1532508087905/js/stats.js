var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "276",
        "ko": "2724"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "37",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59350",
        "ok": "2097",
        "ko": "59350"
    },
    "meanResponseTime": {
        "total": "385",
        "ok": "1194",
        "ko": "302"
    },
    "standardDeviation": {
        "total": "3332",
        "ok": "537",
        "ko": "3482"
    },
    "percentiles1": {
        "total": "1253",
        "ok": "1982",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2069",
        "ok": "2082",
        "ko": "3288"
    },
    "percentiles3": {
        "total": "1253",
        "ok": "1982",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2069",
        "ok": "2082",
        "ko": "3288"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 68,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 73,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 135,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 2724,
        "percentage": 91
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "3.067",
        "ko": "30.267"
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
        "total": "3000",
        "ok": "276",
        "ko": "2724"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "37",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59350",
        "ok": "2097",
        "ko": "59350"
    },
    "meanResponseTime": {
        "total": "385",
        "ok": "1194",
        "ko": "302"
    },
    "standardDeviation": {
        "total": "3332",
        "ok": "537",
        "ko": "3482"
    },
    "percentiles1": {
        "total": "1253",
        "ok": "1982",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2069",
        "ok": "2082",
        "ko": "3396"
    },
    "percentiles3": {
        "total": "1253",
        "ok": "1982",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2069",
        "ok": "2082",
        "ko": "3396"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 68,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 73,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 135,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 2724,
        "percentage": 91
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "3.067",
        "ko": "30.267"
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
