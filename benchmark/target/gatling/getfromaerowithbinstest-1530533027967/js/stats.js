var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "31903",
        "ok": "24740",
        "ko": "7163"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "74133",
        "ok": "63185",
        "ko": "74133"
    },
    "meanResponseTime": {
        "total": "9845",
        "ok": "8855",
        "ko": "13266"
    },
    "standardDeviation": {
        "total": "15412",
        "ok": "13159",
        "ko": "21091"
    },
    "percentiles1": {
        "total": "261",
        "ok": "357",
        "ko": "0"
    },
    "percentiles2": {
        "total": "19564",
        "ok": "18266",
        "ko": "21803"
    },
    "percentiles3": {
        "total": "40488",
        "ok": "37017",
        "ko": "51741"
    },
    "percentiles4": {
        "total": "52046",
        "ok": "38530",
        "ko": "67656"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14438,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 515,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9787,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 7163,
        "percentage": 22
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "105.99",
        "ok": "82.193",
        "ko": "23.797"
    }
},
contents: {
"req_retrieve-create-e1a32": {
        type: "REQUEST",
        name: "Retrieve created aerospike record with bins",
path: "Retrieve created aerospike record with bins",
pathFormatted: "req_retrieve-create-e1a32",
stats: {
    "name": "Retrieve created aerospike record with bins",
    "numberOfRequests": {
        "total": "31903",
        "ok": "24740",
        "ko": "7163"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "74133",
        "ok": "63185",
        "ko": "74133"
    },
    "meanResponseTime": {
        "total": "9845",
        "ok": "8855",
        "ko": "13266"
    },
    "standardDeviation": {
        "total": "15412",
        "ok": "13159",
        "ko": "21091"
    },
    "percentiles1": {
        "total": "263",
        "ok": "356",
        "ko": "0"
    },
    "percentiles2": {
        "total": "19580",
        "ok": "18260",
        "ko": "21803"
    },
    "percentiles3": {
        "total": "40490",
        "ok": "37017",
        "ko": "51741"
    },
    "percentiles4": {
        "total": "52046",
        "ok": "38530",
        "ko": "67656"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14438,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 515,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9787,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 7163,
        "percentage": 22
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "105.99",
        "ok": "82.193",
        "ko": "23.797"
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
