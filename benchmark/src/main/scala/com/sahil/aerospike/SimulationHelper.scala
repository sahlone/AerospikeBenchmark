package com.sahil.aerospike

import com.aerospike.client.Key
import io.gatling.core.Predef.{constantUsersPerSec, rampUsersPerSec, _}
import io.gatling.core.feeder.{Circular, Record}
import io.gatling.core.structure.{ScenarioBuilder, ScenarioContext}
import io.gatling.http.Predef.http
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration._

trait SimulationHelper {
  simulation: Simulation =>

  val aeroUrl: String = "localhost"
  val aeroPort: Int = 3000
  val simulationStartRate = 10
  val simulationEndRate = 10000
  val constantUsers= 500
  val simulationRampTime = 60 seconds
  val simulationTime = 5 * 60 seconds

  private val httpConf: HttpProtocolBuilder =
    http.baseURL(s"http://localhost:9000")

  def circularFeederBuilder(records: => IndexedSeq[Record[String]]) =
    new FeederBuilder[String] {
      override def build(ctx: ScenarioContext): Feeder[String] =
        Circular.feeder(records, ctx)
    }

  def setUpScenario(scenarioBuilder: ScenarioBuilder): Unit = {
    val _ = setUp(
      scenarioBuilder
        .inject(
          atOnceUsers(simulationStartRate),
          rampUsers(simulationEndRate) over (simulationRampTime),
          constantUsersPerSec(constantUsers) during (20 seconds) randomized,
          rampUsersPerSec(simulationStartRate)
            .to(simulationEndRate)
            .during(simulationRampTime)
        ).protocols(httpConf)
    ).maxDuration(simulationTime)
  }
}

