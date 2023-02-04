plugins {
    java
    kotlin("jvm") version "1.6.10"
    antlr
    id("maven-publish")
    id("signing")
}

group = "org.babyfish.jimmer"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.jetbrains:annotations:24.0.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.6.0")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine")
    antlr("org.antlr:antlr4:4.5")
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}

// Publish to maven-----------------------------------------------------
val NEXUS_USERNAME: String by project
val NEXUS_PASSWORD: String by project

publishing {
    repositories {
        maven {
            credentials {
                username = NEXUS_USERNAME
                password = NEXUS_PASSWORD
            }
            name = "MavenCentral"
            url = if (project.version.toString().endsWith("-SNAPSHOT")) {
                uri("https://oss.sonatype.org/content/repositories/snapshots")
            } else {
                uri("https://oss.sonatype.org/service/local/staging/deploy/maven2/")
            }
        }
    }
    publications {
        register("mavenJava", MavenPublication::class) {
            artifactId = "jimmer-dto-compiler"
            from(components["java"])
            pom {
                name.set("jimmer")
                description.set("immer for java")
                url.set("https://github.com/babyfish-ct/jimmer")
                licenses {
                    license {
                        name.set("MIT")
                        url.set("https://github.com/babyfish-ct/jimmer/blob/main/LICENSE")
                    }
                }
                developers {
                    developer {
                        id.set("babyfish-ct")
                        name.set("陈涛")
                        email.set("babyfish.ct@gmail.com")
                    }
                }
                scm {
                    connection.set("scm:git:git://github.com/babyfish-ct/jimmer.git")
                    developerConnection.set("scm:git:ssh://github.com/babyfish-ct/jimmer.git")
                    url.set("https://github.com//babyfish-ct/jimmer")
                }
            }
        }
    }
}

signing {
    sign(publishing.publications["mavenJava"])
}