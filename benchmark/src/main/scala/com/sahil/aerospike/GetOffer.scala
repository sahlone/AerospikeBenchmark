package com.sahil.aerospike

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetOffer extends Simulation with SimulationHelper with LazyLogger {


  val getOffer = http("Get Offer")
    .get("/offers/${offerId}")
    .check(
      status.is(200)
    )


  setUpScenario(masterDataUrl) {
    scenario("Get offer")
      .feed(circularFeederBuilder(DataFeeder.getOfferRecordKeys()))
      .exec(getOffer)
  }


}
