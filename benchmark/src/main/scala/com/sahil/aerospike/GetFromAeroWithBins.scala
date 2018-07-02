package com.sahil.aerospike

import com.aerospike.client.{AerospikeClient, Key}
import com.fasterxml.jackson.databind.ObjectMapper
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.Await
import scala.concurrent.duration._

class GetFromAeroWithBins extends Simulation with SimulationHelper with LazyLogger {


  val getRecordWithBins = http("Retrieve created aerospike record with bins")
    .get("/aero/bin/${key}")
    .check(
      status.is(200)
    )


  setUpScenario {
    scenario("Get dat from aerospike based on bins")
      .feed(circularFeederBuilder(DataFeeder.getAerospikeRecordKeys()))
      .exec(getRecordWithBins)
  }


}
