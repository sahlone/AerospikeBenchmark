package com.sahil.aerospike

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class SimpleTest extends Simulation with SimulationHelper with LazyLogger {


  val getRecordWithJson = http("Retrieve created aerospike record with json entity")
    .get("http://tracker.bfg.applift.team/click?offer_id=85a642b7-ab71-4214-815b-a882a2601a1b&pub_id=894da046-2539-4d95-b45e-acfcb58072ff&pub_click_id=${key}")
    .check(
      status.is(302)
    )


  setUpScenario {
    scenario("Get data from tracker")
      .feed(circularFeederBuilder(DataFeeder.getRandomRecordKeys()))
      .exec(getRecordWithJson)
  }


}
