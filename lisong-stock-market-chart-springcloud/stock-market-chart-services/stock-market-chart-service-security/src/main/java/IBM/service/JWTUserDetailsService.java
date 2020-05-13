package IBM.service;

import IBM.client.UserClient;
import IBM.dto.User;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;

public class JWTUserDetailsService implements UserDetailsService {
    @Autowired
    private UserClient userClient;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", username);
        JSONObject userJson = userClient.findUserByUsername(jsonObject);
        User user = (User)(userJson.get("user"));
        if(user == null){
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList());
    }
}
