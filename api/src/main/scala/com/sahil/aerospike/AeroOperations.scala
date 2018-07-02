package com.sahil.aerospike

import com.aerospike.client.{AerospikeClient, AerospikeException, Bin, Key}
import com.fasterxml.jackson.databind.ObjectMapper
import com.sahil.aerospike.AeroConstants._
import io.vertx.core.Vertx
import io.vertx.core.http.HttpMethod
import io.vertx.ext.web.{Router, RoutingContext}

import scala.util.Try
import scala.util.control.NonFatal
import com.fasterxml.jackson.databind
import com.fasterxml.jackson.module.scala.DefaultScalaModule

object AeroOperations extends App with LazyLogger {


  val ac = new AerospikeClient("localhost", 3000)
  val om = new ObjectMapper()
  om.registerModule(new DefaultScalaModule)
  val vx = Vertx.vertx()
  deleteAllDataInAerospike()
  insertDataInAerospike()

  Try {
    Router.router(vx)
  }.map(router => {
    logger.debug("Creating server ...")
    router.route(HttpMethod.GET, "/aero/bin/:id")
      .handler { context => binHandler(context) }

    router.route(HttpMethod.GET, "/aero/json/:id")
      .handler { context => jsonHandler(context) }

    vx.createHttpServer().requestHandler(req => {
      logger.debug(s"Received request with path ${req.uri()}")
      router.accept(req)
    }).listen(9000)
    logger.debug("Server started at port 9000 ...")
  }).recover {
    case NonFatal(e) => logger.error("Unable to start server", e)
      System.exit(0)
  }


  val binHandler: RoutingContext => Unit = context => {
    Try {
      val id = context.pathParams().get("id")
      val key = new Key(namespace, binSet, id)
      Option(ac.get(null, key))
        .map(record => {
          Try {
            val bins = record.bins
            val entity = Entity(bins.get("bin0").toString,
              bins.get("bin1").toString,
              bins.get("bin2").toString,
              bins.get("bin3").toString,
              bins.get("bin4").toString,
              bins.get("bin5").toString,
              bins.get("bin6").toString,
              bins.get("bin7").toString,
              bins.get("bin8").toString,
              bins.get("bin9").toString)
            context.response().setStatusCode(200).end()
          }.recover {
            case e: Throwable =>
              logger.error("Error in /aero/json",e)
              context.response().setStatusCode(500).end()
          }
        })
        .getOrElse(context.response().setStatusCode(404).end())
    }.recover {
      case e: Throwable =>
        logger.error("Error in /aero/json",e)
        context.response().setStatusCode(500).end()
    }.get
  }

  val jsonHandler: RoutingContext => Unit = context => {
    Try {
      val id = context.pathParams().get("id")
      val key = new Key(namespace, jsonSet, id)
      Option(ac.get(null, key))
        .map(record => {
          Try {
            val entity = om.readValue(record.bins.get("entity").toString, classOf[Entity])
            context.response().setStatusCode(200).end()
          }.recover {
            case e: Throwable =>
              logger.error("Error in /aero/json",e)
              context.response().setStatusCode(500).end()
          }
        })
        .getOrElse(context.response().setStatusCode(404).end())
    }.recover {
      case e: Throwable =>
        logger.error("Error in /aero/json",e)
        context.response().setStatusCode(500).end()
    }
  }


  def deleteAllDataInAerospike(): Unit = {
    recordIds.foreach(no => {
      logger.debug(s"Deleting record in aerospike with key :$no")
      val binKey = new Key(namespace, binSet, no)
      val jsonKey = new Key(namespace, jsonSet, no)
      ac.get(null, binKey)
      ac.delete(null, binKey)
      ac.delete(null, jsonKey)
    })
  }

  def insertDataInAerospike(): Unit = {
    recordIds.foreach(no => {
      logger.debug(s"Creating record in aerospike with key :$no")
      val entity: Entity = Entity()
      val binKey = new Key(namespace, binSet, no)
      val bins = recordBinNos.foldLeft(List.empty[Bin])((binList, no) => {
        new Bin(s"bin$no", entity.bin0) :: binList
      })
      ac.put(null, binKey, bins: _*)
      val jsonKey = new Key(namespace, jsonSet, no)
      val entityJson = om.writeValueAsString(entity)
      ac.put(null, jsonKey, new Bin("entity", entityJson))
    })
    logger.debug(s"Finished creating record in aerospike.")
  }

}


