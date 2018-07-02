package com.sahil.aerospike

import java.util.UUID

import com.aerospike.client.{AerospikeClient, Bin, Key}
import io.gatling.core.feeder.Record

import scala.concurrent.Future
import com.sahil.aerospike.AeroConstants._

object DataFeeder extends LazyLogger {


  def getAerospikeRecordKeys(): IndexedSeq[Record[String]] = {
    recordIds.map(no => {
      Map {
        "key" -> no
      }
    }).toIndexedSeq
  }

}
