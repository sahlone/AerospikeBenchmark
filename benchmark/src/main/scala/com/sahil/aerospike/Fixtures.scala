package com.sahil.aerospike

import org.asynchttpclient.DefaultAsyncHttpClient

import scala.concurrent.duration._

trait Fixtures {

  val trackerUrl = "http://localhost:8080"
  val masterDataUrl = "http://localhost:8080/api/v1"
  val aeroUrl: String = "localhost"
  val aeroPort: Int = 3000
  val simulationStartRate = 1
  val simulationEndRate = 200
  val constantUsersPS =200
  val simulationRampTime = 2 * 60 seconds
  val simulationTime = 1 * 30 seconds

  val asyncHttpClient = new DefaultAsyncHttpClient()

}
