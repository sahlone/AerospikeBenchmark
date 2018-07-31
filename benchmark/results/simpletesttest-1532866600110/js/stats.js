var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "180000",
        "ok": "143357",
        "ko": "36643"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "9",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59214",
        "ok": "59214",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2031",
        "ok": "2551",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1822",
        "ok": "1686",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2130",
        "ok": "2263",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2475",
        "ok": "2555",
        "ko": "0"
    },
    "percentiles3": {
        "total": "5565",
        "ok": "6754",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7639",
        "ok": "7858",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2102,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3902,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 137353,
        "percentage": 76
    },
    "group4": {
        "name": "failed",
        "count": 36643,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1935.484",
        "ok": "1541.473",
        "ko": "394.011"
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
        "total": "180000",
        "ok": "143357",
        "ko": "36643"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "9",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59214",
        "ok": "59214",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2031",
        "ok": "2551",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "1822",
        "ok": "1686",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2128",
        "ok": "2263",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2474",
        "ok": "2555",
        "ko": "0"
    },
    "percentiles3": {
        "total": "5573",
        "ok": "6754",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7639",
        "ok": "7859",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2102,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3902,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 137353,
        "percentage": 76
    },
    "group4": {
        "name": "failed",
        "count": 36643,
        "percentage": 20
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1935.484",
        "ok": "1541.473",
        "ko": "394.011"
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
