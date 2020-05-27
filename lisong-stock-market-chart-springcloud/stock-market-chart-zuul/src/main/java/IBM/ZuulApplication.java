package IBM;

/**
 * Hello world!
 *
 */
import IBM.filter.RequestPostFilter;
import IBM.filter.RequestPreFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.SpringCloudApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;

@EnableZuulProxy
@SpringCloudApplication
//@SpringBootApplication
@EnableDiscoveryClient
public class ZuulApplication {
    public static void main( String[] args ) {
        SpringApplication.run(ZuulApplication.class, args);
    }

    @Bean
    public RequestPreFilter requestPreFilter() {
        return new RequestPreFilter();
    }
    @Bean
    public RequestPostFilter requestPostFilter() {
        return new RequestPostFilter();
    }
}
