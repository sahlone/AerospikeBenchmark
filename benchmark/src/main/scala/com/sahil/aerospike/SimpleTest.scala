package com.sahil.aerospike

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class SimpleTest extends Simulation with SimulationHelper with LazyLogger {


  val execHttp = http("execute an http call")
    .get("/click?yo=yo&xd=gc")
    .check(
      status.is(200)
    )


  setUpScenario("http://localhost:8080") {
    scenario("test vertex server")
      .exec(execHttp)
  }


}
