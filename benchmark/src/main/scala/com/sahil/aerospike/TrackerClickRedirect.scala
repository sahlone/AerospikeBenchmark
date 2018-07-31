package com.sahil.aerospike

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class TrackerClickRedirect extends Simulation with SimulationHelper with LazyLogger {


  val clickRedirect = http("Click Redirect")
    .get("/click?offer_id=${offerId}&pub_id={{publisher_id}}&pub_click_id={{$guid}}")
    .check(
      status.in(409, 302)
    )


  setUpScenario(trackerUrl) {
    scenario("Get offer")
      .feed(circularFeederBuilder(DataFeeder.getOfferRecordKeys()))
      .exec(clickRedirect)
  }


}
