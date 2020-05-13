package IBM.controller.security;


import IBM.entity.User;
import IBM.service.IUserService;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@Slf4j
public class UserSecurityController {

    @Autowired
    private IUserService userService;

    @PostMapping(value = "/security")
    public JSONObject userSecurity(@RequestBody JSONObject userJson){
        String username = userJson.getString("username");
        User user= userService.findByUsername(username);
        JSONObject retJson = new JSONObject();
        retJson.put("user", user);
        return retJson;


    }
}
