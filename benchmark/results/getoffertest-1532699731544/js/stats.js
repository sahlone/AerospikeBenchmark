var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "72000",
        "ok": "654",
        "ko": "71346"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1704",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "53739",
        "ok": "53739",
        "ko": "42549"
    },
    "meanResponseTime": {
        "total": "12555",
        "ok": "16778",
        "ko": "12517"
    },
    "standardDeviation": {
        "total": "14748",
        "ok": "10166",
        "ko": "14778"
    },
    "percentiles1": {
        "total": "0",
        "ok": "13020",
        "ko": "0"
    },
    "percentiles2": {
        "total": "30214",
        "ok": "22574",
        "ko": "30215"
    },
    "percentiles3": {
        "total": "30843",
        "ok": "37651",
        "ko": "30834"
    },
    "percentiles4": {
        "total": "31260",
        "ok": "48258",
        "ko": "31254"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 654,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 71346,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "431.138",
        "ok": "3.916",
        "ko": "427.222"
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
        "total": "72000",
        "ok": "654",
        "ko": "71346"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1704",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "53739",
        "ok": "53739",
        "ko": "42549"
    },
    "meanResponseTime": {
        "total": "12555",
        "ok": "16778",
        "ko": "12517"
    },
    "standardDeviation": {
        "total": "14748",
        "ok": "10166",
        "ko": "14778"
    },
    "percentiles1": {
        "total": "0",
        "ok": "13020",
        "ko": "0"
    },
    "percentiles2": {
        "total": "30214",
        "ok": "22574",
        "ko": "30215"
    },
    "percentiles3": {
        "total": "30843",
        "ok": "37651",
        "ko": "30834"
    },
    "percentiles4": {
        "total": "31260",
        "ok": "48258",
        "ko": "31254"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 654,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 71346,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "431.138",
        "ok": "3.916",
        "ko": "427.222"
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
