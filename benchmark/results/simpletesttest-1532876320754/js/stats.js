var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90000",
        "ok": "87196",
        "ko": "2804"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59854",
        "ok": "59854",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1649",
        "ok": "1702",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2119",
        "ok": "2132",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1327",
        "ok": "1368",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1973",
        "ok": "1988",
        "ko": "0"
    },
    "percentiles3": {
        "total": "6695",
        "ok": "6772",
        "ko": "0"
    },
    "percentiles4": {
        "total": "9535",
        "ok": "9598",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 27415,
        "percentage": 30
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 12213,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 47568,
        "percentage": 53
    },
    "group4": {
        "name": "failed",
        "count": 2804,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1111.111",
        "ok": "1076.494",
        "ko": "34.617"
    }
},
contents: {
"req_execute-an-http-db146": {
        type: "REQUEST",
        name: "execute an http call",
path: "execute an http call",
pathFormatted: "req_execute-an-http-db146",
stats: {
    "name": "execute an http call",
    "numberOfRequests": {
        "total": "90000",
        "ok": "87196",
        "ko": "2804"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59854",
        "ok": "59854",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1649",
        "ok": "1702",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2119",
        "ok": "2132",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1327",
        "ok": "1368",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1977",
        "ok": "1987",
        "ko": "0"
    },
    "percentiles3": {
        "total": "6695",
        "ok": "6759",
        "ko": "0"
    },
    "percentiles4": {
        "total": "9535",
        "ok": "9598",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 27415,
        "percentage": 30
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 12213,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 47568,
        "percentage": 53
    },
    "group4": {
        "name": "failed",
        "count": 2804,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1111.111",
        "ok": "1076.494",
        "ko": "34.617"
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
