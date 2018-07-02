var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "58032",
        "ok": "49434",
        "ko": "8598"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "50106",
        "ok": "48599",
        "ko": "50106"
    },
    "meanResponseTime": {
        "total": "4324",
        "ok": "2921",
        "ko": "12394"
    },
    "standardDeviation": {
        "total": "8393",
        "ok": "6272",
        "ko": "13146"
    },
    "percentiles1": {
        "total": "571",
        "ok": "580",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3014",
        "ok": "2163",
        "ko": "25715"
    },
    "percentiles3": {
        "total": "25907",
        "ok": "15075",
        "ko": "28437"
    },
    "percentiles4": {
        "total": "36695",
        "ok": "36587",
        "ko": "37220"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 28029,
        "percentage": 48
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3308,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 18097,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 8598,
        "percentage": 15
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "192.797",
        "ok": "164.233",
        "ko": "28.565"
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
        "total": "58032",
        "ok": "49434",
        "ko": "8598"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "50106",
        "ok": "48599",
        "ko": "50106"
    },
    "meanResponseTime": {
        "total": "4324",
        "ok": "2921",
        "ko": "12394"
    },
    "standardDeviation": {
        "total": "8393",
        "ok": "6272",
        "ko": "13146"
    },
    "percentiles1": {
        "total": "574",
        "ok": "581",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3022",
        "ok": "2163",
        "ko": "25715"
    },
    "percentiles3": {
        "total": "25905",
        "ok": "15079",
        "ko": "28437"
    },
    "percentiles4": {
        "total": "36696",
        "ok": "36588",
        "ko": "37220"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 28029,
        "percentage": 48
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3308,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 18097,
        "percentage": 31
    },
    "group4": {
        "name": "failed",
        "count": 8598,
        "percentage": 15
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "192.797",
        "ok": "164.233",
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
