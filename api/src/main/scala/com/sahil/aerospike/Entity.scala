package com.sahil.aerospike

import java.util.UUID

import com.fasterxml.jackson.annotation.JsonProperty

import scala.annotation.meta.field

case class Entity(
                   @(JsonProperty @field)("bin0") bin0: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin1: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin2: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin3: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin4: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin5: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin6: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin7: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin8: String = UUID.randomUUID().toString,
                   @(JsonProperty @field) bin9: String = UUID.randomUUID().toString
                 )

