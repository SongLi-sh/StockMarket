package IBM;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * Hello world!
 *
 */

@SpringBootApplication
@EnableJpaAuditing
@EnableFeignClients
@EnableEurekaClient
@EnableCircuitBreaker
public class SectorApplication {
    public static void main( String[] args ) {
        SpringApplication.run(SectorApplication.class,args);
    }
}
