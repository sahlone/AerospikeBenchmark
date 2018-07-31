package com.sahil.aerospike

import io.gatling.core.Predef.{constantUsersPerSec, rampUsersPerSec, _}
import io.gatling.core.feeder.{Circular, Record}
import io.gatling.core.structure.{ScenarioBuilder, ScenarioContext}
import io.gatling.http.Predef.http
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration._

trait SimulationHelper extends Fixtures {
  simulation: Simulation =>

  def httpConf(baseUrl: String): HttpProtocolBuilder =
    http.baseURL(baseUrl).shareConnections

  def circularFeederBuilder(records: => IndexedSeq[Record[String]]) =
    new FeederBuilder[String] {
      override def build(ctx: ScenarioContext): Feeder[String] =
        Circular.feeder(records, ctx)
    }

  def setUpScenario1(baseUrl: String, scenarioBuilder: ScenarioBuilder): Unit = {
    val _ = setUp(
      scenarioBuilder
        .inject(
          nothingFor(4 seconds), // 1
          atOnceUsers(10), // 2
          rampUsers(10) over (5 seconds), // 3
          constantUsersPerSec(20) during (15 seconds), // 4
          constantUsersPerSec(20) during (15 seconds) randomized, // 5
          rampUsersPerSec(10) to 20 during (10 minutes), // 6
          rampUsersPerSec(10) to 20 during (10 minutes) randomized, // 7
          splitUsers(1000) into (rampUsers(10) over (10 seconds)) separatedBy (10 seconds), // 8
          splitUsers(1000) into (rampUsers(10) over (10 seconds)) separatedBy atOnceUsers(30), // 9
          heavisideUsers(1000) over (20 seconds) // 1
        ).protocols(httpConf(baseUrl))
    )
    //.maxDuration(simulationTime)
  }

  def setUpScenario(baseUrl: String)( scenarioBuilder: ScenarioBuilder): Unit = {
    val _ = setUp(
      scenarioBuilder
        .inject(
          constantUsersPerSec(constantUsersPS) during (simulationTime) // 4
        ).protocols(httpConf(baseUrl))
    )
    //.maxDuration(simulationTime)
  }
}

