package com.sahil.aerospike

import org.slf4j.LoggerFactory

trait LazyLogger {
  val logger = LoggerFactory.getLogger(this.getClass)
}
