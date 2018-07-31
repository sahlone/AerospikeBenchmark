package com.sahil.aerospike

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetFromAeroWithJson extends Simulation with SimulationHelper with LazyLogger {


  val getRecordWithJson = http("Retrieve created aerospike record with json entity")
    .get("/aero/json/${key}")
    .check(
      status.is(200)
    )


  setUpScenario("") {
    scenario("Get dat from aerospike based on bins")
      .feed(circularFeederBuilder(DataFeeder.getAerospikeRecordKeys()))
      .exec(getRecordWithJson)
  }


}
