package IBM.controller.logout;

import IBM.entity.User;
import IBM.service.IUserService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(value = "http://localhost:4200")
@RestController
public class UserLogoutController {
    @Autowired
    private IUserService userService;

    public JSONObject userLogout(@RequestBody JSONObject userJson){
        JSONObject retJson = new JSONObject();
        String username = userJson.getString("username");
        User user = userService.userLogout(username);
        if (user == null) {
            retJson.put("data", null);
        } else {
            retJson.put("loginStatus", user.getLoginStatus());
        }

        return retJson;
    }
}
