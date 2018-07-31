var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "4340",
        "ko": "1660"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "51",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58947",
        "ok": "58947",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "13404",
        "ok": "18531",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "16299",
        "ok": "16500",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6377",
        "ok": "12787",
        "ko": "0"
    },
    "percentiles2": {
        "total": "19252",
        "ok": "25350",
        "ko": "0"
    },
    "percentiles3": {
        "total": "50007",
        "ok": "50375",
        "ko": "0"
    },
    "percentiles4": {
        "total": "57885",
        "ok": "58032",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 118,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 47,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4175,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 1660,
        "percentage": 28
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.587",
        "ok": "35.868",
        "ko": "13.719"
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
        "ok": "4340",
        "ko": "1660"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "51",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58947",
        "ok": "58947",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "13404",
        "ok": "18531",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "16299",
        "ok": "16500",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6377",
        "ok": "12787",
        "ko": "0"
    },
    "percentiles2": {
        "total": "19233",
        "ok": "25350",
        "ko": "0"
    },
    "percentiles3": {
        "total": "50006",
        "ok": "50375",
        "ko": "0"
    },
    "percentiles4": {
        "total": "57885",
        "ok": "58032",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 118,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 47,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4175,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 1660,
        "percentage": 28
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.587",
        "ok": "35.868",
        "ko": "13.719"
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
