package com.sahil.aerospike

import java.util.UUID

object AeroConstants {
  val namespace = "operations"
  val binSet = "bin"
  val jsonSet = "json"
  val pathParam = "id"
  val jsonEntityBinName = "entity"

  val recordIds = (1 to 10000).toList.map(no => s"84ab1ed0-be26-4949-9a13-43c2501e7c49$no")
  val recordBinNos = (0 to 9).toList
}
