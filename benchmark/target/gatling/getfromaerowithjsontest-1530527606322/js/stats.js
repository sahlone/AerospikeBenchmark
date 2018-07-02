var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45950",
        "ok": "38503",
        "ko": "7447"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58523",
        "ok": "58523",
        "ko": "52548"
    },
    "meanResponseTime": {
        "total": "5842",
        "ok": "4870",
        "ko": "10866"
    },
    "standardDeviation": {
        "total": "11557",
        "ok": "9575",
        "ko": "17888"
    },
    "percentiles1": {
        "total": "651",
        "ok": "853",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4357",
        "ok": "4078",
        "ko": "33799"
    },
    "percentiles3": {
        "total": "35547",
        "ok": "29020",
        "ko": "43175"
    },
    "percentiles4": {
        "total": "51452",
        "ok": "42962",
        "ko": "51669"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18978,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2566,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16959,
        "percentage": 37
    },
    "group4": {
        "name": "failed",
        "count": 7447,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "152.152",
        "ok": "127.493",
        "ko": "24.659"
    }
},
contents: {
"req_retrieve-create-e62fc": {
        type: "REQUEST",
        name: "Retrieve created aerospike record with json entity",
path: "Retrieve created aerospike record with json entity",
pathFormatted: "req_retrieve-create-e62fc",
stats: {
    "name": "Retrieve created aerospike record with json entity",
    "numberOfRequests": {
        "total": "45950",
        "ok": "38503",
        "ko": "7447"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "58523",
        "ok": "58523",
        "ko": "52548"
    },
    "meanResponseTime": {
        "total": "5842",
        "ok": "4870",
        "ko": "10866"
    },
    "standardDeviation": {
        "total": "11557",
        "ok": "9575",
        "ko": "17888"
    },
    "percentiles1": {
        "total": "651",
        "ok": "855",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4359",
        "ok": "4074",
        "ko": "33799"
    },
    "percentiles3": {
        "total": "35587",
        "ok": "29020",
        "ko": "43175"
    },
    "percentiles4": {
        "total": "51452",
        "ok": "42962",
        "ko": "51669"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18978,
        "percentage": 41
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2566,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16959,
        "percentage": 37
    },
    "group4": {
        "name": "failed",
        "count": 7447,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "152.152",
        "ok": "127.493",
        "ko": "24.659"
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
