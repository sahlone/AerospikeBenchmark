var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "1666",
        "ko": "1334"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "87",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59506",
        "ok": "59506",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "15723",
        "ok": "28312",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "18852",
        "ok": "16838",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6678",
        "ok": "25804",
        "ko": "0"
    },
    "percentiles2": {
        "total": "28712",
        "ok": "41852",
        "ko": "0"
    },
    "percentiles3": {
        "total": "56255",
        "ok": "57853",
        "ko": "0"
    },
    "percentiles4": {
        "total": "58971",
        "ok": "59207",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1645,
        "percentage": 55
    },
    "group4": {
        "name": "failed",
        "count": 1334,
        "percentage": 44
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "32.967",
        "ok": "18.308",
        "ko": "14.659"
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
        "ok": "1666",
        "ko": "1334"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "87",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59506",
        "ok": "59506",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "15723",
        "ok": "28312",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "18852",
        "ok": "16838",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6678",
        "ok": "25804",
        "ko": "0"
    },
    "percentiles2": {
        "total": "28712",
        "ok": "41852",
        "ko": "0"
    },
    "percentiles3": {
        "total": "56255",
        "ok": "57853",
        "ko": "0"
    },
    "percentiles4": {
        "total": "58971",
        "ok": "59207",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1645,
        "percentage": 55
    },
    "group4": {
        "name": "failed",
        "count": 1334,
        "percentage": 44
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "32.967",
        "ok": "18.308",
        "ko": "14.659"
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
