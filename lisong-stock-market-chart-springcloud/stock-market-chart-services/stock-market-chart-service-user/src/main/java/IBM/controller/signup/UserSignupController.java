package IBM.controller.signup;

import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import IBM.service.IUserService;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class UserSignupController {

    @Autowired
    private IUserService userService;

    @PostMapping("/veri/code")
    public JSONObject userVeriCode(@RequestBody JSONObject userJson){
        log.info("the username to signup is : {}", userJson.getString("username"));
        return userService.sendThymeleafEmailVeriCode(userJson.getString("username"));
    }

    @PostMapping("/reset/pwd")
    public JSONObject userResetPwd(@RequestBody JSONObject userJson){
        log.info("the username of reset pwd is : {}", userJson.getString("username"));
        return userService.sendThymeleafEmailTmpPwd(userJson.getString("username"));
    }

    @PostMapping("/signup/pwd")
    public JSONObject userSignupPwd(@RequestBody JSONObject userJson){
        String username = userJson.getString("username");
        String password = userJson.getString("password");
        log.info("the username of signup user is : {}, and the password of signup user is {}", username, password);
        return userService.userSignup(username, password);
    }
}
