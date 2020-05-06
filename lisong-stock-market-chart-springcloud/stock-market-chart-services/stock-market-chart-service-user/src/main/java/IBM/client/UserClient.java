package IBM.client;

import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

//this is to define the url for whole service part
@FeignClient(value = "eureka-client-service-mail")
public interface UserClient {

    //this is to define the path(url) for API(method) part, together with service part,
    //the entire url should be below:
    //http//x.x.x.x:port/eureka-client-service-mail/mail/thymeleaf/veri/code
    @PostMapping(value = "/mail/thymeleaf/veri/code")
    JSONObject sendThymeleafEmailVefiCode(@RequestBody JSONObject userJson);

    @PostMapping(value = "/mail/thymeleaf/reset/pwd")
    JSONObject sendThymeleafEmailTmpPwd(@RequestBody JSONObject userJson);
}
