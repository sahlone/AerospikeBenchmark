


lazy val root = project
  .in(file("."))
  .settings(
    name := "AerospikeBenchmarking",
    mainClass in(Compile, run) := Some("com.sahil.aerospike.AeroOperations")
  ).aggregate(benchmark, api)

lazy val benchmark = project
  .in(file("benchmark"))
  .settings(
    name := "benchmark",
  )
  .enablePlugins(GatlingPlugin)
  .settings(
    libraryDependencies ++= Seq(
      "ch.qos.logback" % "logback-classic" % "1.1.3",
      "io.gatling" % "gatling-core" % "2.3.1",
      "io.gatling" % "gatling-http" % "2.3.1",
      "io.gatling.highcharts" % "gatling-charts-highcharts" % "2.3.0" % "test",
      "io.gatling" % "gatling-test-framework" % "2.3.0" % "test",
      "com.aerospike" % "aerospike-client" % "4.1.0",
      "com.fasterxml.jackson.datatype" % "jackson-datatype-jsr310" % "2.9.4",
      "org.slf4j" % "slf4j-api" % "1.7.25",
      "com.fasterxml.jackson.module" %% "jackson-module-scala" % "2.2.2"
    ),
    javaOptions in Gatling := overrideDefaultJavaOptions("-Xms1024m", "-Xmx2048m"),
      exportJars := true
  ).dependsOn(api)

lazy val api = project.in(file("api"))
  .settings(
    name := "api",
  )
  .settings(
    libraryDependencies ++= Seq(
      "ch.qos.logback" % "logback-classic" % "1.1.3",
      "com.aerospike" % "aerospike-client" % "4.1.0",
      "com.fasterxml.jackson.datatype" % "jackson-datatype-jsr310" % "2.9.4",
      "org.slf4j" % "slf4j-api" % "1.7.25",
      "io.vertx" % "vertx-web" % "3.5.1",
      "com.fasterxml.jackson.module" %% "jackson-module-scala" % "2.9.1"
    )
  )
