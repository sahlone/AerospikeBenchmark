package com.sahil.aerospike

import java.time.Instant
import java.util.UUID
import play.api.libs.json._
import com.aerospike.client.{AerospikeClient, Bin, Key}
import io.gatling.core.feeder.Record

import scala.concurrent.Future
import com.sahil.aerospike.AeroConstants._
import org.asynchttpclient.DefaultAsyncHttpClient

object DataFeeder extends LazyLogger with Fixtures {
  def getAerospikeRecordKeys(): IndexedSeq[Record[String]] = {
    recordIds.map(no => {
      Map {
        "key" -> no
      }
    }).toIndexedSeq
  }

  def getRandomRecordKeys(): IndexedSeq[Record[String]] =
    (1 to 10000).map(no => {
      Map {
        "key" -> UUID.randomUUID().toString
      }
    })


  def getOfferRecordKeys(): IndexedSeq[Record[String]] = {
    val offerIds = getAlreadyDefinedOffers()
    if (offerIds.isEmpty) {
      val advertiserId = createAdvertiser()
      (1 to 500).map(no => {
        Map {
          "offerId" -> createOffer(advertiserId)
        }
      })
    } else {
      offerIds.map(id => {
        Map {
          "offerId" -> id
        }
      })
    }.toIndexedSeq
  }

  def getAlreadyDefinedOffers() = {

    val responseBody = asyncHttpClient
      .prepareGet(s"$masterDataUrl/offers")
      .addHeader("Content-type", "application/json")
      .execute()
      .get()
      .getResponseBody()
    val offers = (Json.parse(responseBody) \ "offers").as[List[JsObject]]
    offers.map(jsobject => (jsobject \ "id").as[String])
  }

  def getAdvertiser() = {

    val responseBody = asyncHttpClient
      .prepareGet(s"$masterDataUrl/advertisers")
      .addHeader("Content-type", "application/json")
      .execute()
      .get()
      .getResponseBody()
    val offers = (Json.parse(responseBody) \ "advertisers").as[List[JsObject]]
    offers.map(jsobject => (jsobject \ "id").as[String])
  }

  private def createAdvertiser() = {
    val responseBody = asyncHttpClient
      .preparePut(s"$masterDataUrl/advertisers")
      .addHeader("Content-type", "application/json")
      .setBody(createAdvertiserBody)
      .execute()
      .get()
      .getResponseBody()
    (play.api.libs.json.Json.parse(responseBody) \ "id").as[String]
  }

  private def createOffer(advertiserId: String) = {
    val responseBody = asyncHttpClient
      .preparePut(s"$masterDataUrl/offers")
      .addHeader("Content-type", "application/json")
      .setBody(createOfferBody(advertiserId))
      .execute()
      .get()
      .getResponseBody()
    (play.api.libs.json.Json.parse(responseBody) \ "id").as[String]
  }


  private def createAdvertiserBody() =
    s"""
       |{
       |"display_name": "Perf test Advertiser ${Instant.now()}",
       |"status": "ACTIVE"
       |}
    """.stripMargin


  private def createOfferBody(advertiserId: String) =
    s"""
       |{
       |"advertiser_id": "$advertiserId",
       |"display_name": "Vikings iOS",
       |"state": "ACTIVE",
       |"start_time": "2018-06-12T17:32:28Z",
       |"end_time": "2018-06-21T17:32:28Z",
       |"revenue": 2.5,
       |"revenue_currency": "USD",
       |"payout": 2.3,
       |"payout_currency": "USD",
       |"offer_url": "http://tracking.applift.com/aff_c?offer_id=57532&aff_id=21020",
       |"preview_url": "https://itunes.apple.com/app/id966810173?mt=8",
       |"daily_revenue_cap": 20,
       |"daily_revenue_cap_currency": "USD",
       |"total_revenue_cap": 500,
       |"total_revenue_cap_currency": "USD",
       |"daily_conversion_cap": 30,
       |"total_conversion_cap": 100,
       |"geo_targeting_rules":[{"country_code":"DE"}]
       |}
    """.stripMargin

}

object Test extends App {

  println(DataFeeder.getAlreadyDefinedOffers())
}
