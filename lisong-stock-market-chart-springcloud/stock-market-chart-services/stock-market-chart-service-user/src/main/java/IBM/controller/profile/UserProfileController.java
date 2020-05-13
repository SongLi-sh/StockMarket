package IBM.controller.profile;

import IBM.entity.User;
import IBM.service.IUserService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(value = "http://localhost:4200")
public class UserProfileController {

    @Autowired
    private IUserService userService;

    @PutMapping(value = "/profile")
    public JSONObject userProfile(@RequestBody JSONObject userJson){
        String username = userJson.getString("username");
        String contactNo = userJson.getString("contactNo");

        User user = new User();
        user.setUsername(username);
        user.setContactNo(contactNo);
        user = userService.userProfile(user);
        JSONObject retJson = new JSONObject();
        if (user == null) {
            retJson.put("data", null);
        } else {
            retJson.put("contactNo", user.getContactNo());
        }
        return retJson;
    }

}
