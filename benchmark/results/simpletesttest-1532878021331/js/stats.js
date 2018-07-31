var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "90000",
        "ok": "88029",
        "ko": "1971"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "49221",
        "ok": "49221",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1218",
        "ok": "1246",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1479",
        "ok": "1484",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1018",
        "ok": "1072",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2025",
        "ok": "2036",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4051",
        "ok": "4075",
        "ko": "0"
    },
    "percentiles4": {
        "total": "5141",
        "ok": "5149",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39386,
        "percentage": 44
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6431,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 42212,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 1971,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1304.348",
        "ok": "1275.783",
        "ko": "28.565"
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
        "ok": "88029",
        "ko": "1971"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "49221",
        "ok": "49221",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1218",
        "ok": "1246",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1479",
        "ok": "1484",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1019",
        "ok": "1071",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2023",
        "ok": "2035",
        "ko": "0"
    },
    "percentiles3": {
        "total": "4051",
        "ok": "4073",
        "ko": "0"
    },
    "percentiles4": {
        "total": "5141",
        "ok": "5150",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39386,
        "percentage": 44
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6431,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 42212,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 1971,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1304.348",
        "ok": "1275.783",
        "ko": "28.565"
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
