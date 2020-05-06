package IBM.service.impl;

import IBM.client.UserClient;
import IBM.dao.UserDao;
import IBM.entity.User;
import IBM.entity.UserConstant;
import IBM.service.IUserService;
import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Slf4j
@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserClient userClient;

    @Autowired
    private UserDao userDao;

    @Override
    public JSONObject sendThymeleafEmailVeriCode(String username) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", username);
        return userClient.sendThymeleafEmailVefiCode(jsonObject);
    }

    @Override
    public JSONObject sendThymeleafEmailTmpPwd(String username) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", username);
        JSONObject retJson = userClient.sendThymeleafEmailTmpPwd(jsonObject);
        String resetPwd = retJson.getString("resetPwd");
        User user = userDao.findByUsername(username);
        user.setPassword(resetPwd);
        user.setResetPwd(true);
        user.setResetPwdDate(new Date());
        userDao.save(user);
        return retJson;
    }

    @Override
    public User userSignin(String username, String password) {
        User user = userDao.findByUsernameAndPassword(username, password);
        if(user != null){
            user.setLoginStatus(Boolean.TRUE);
            userDao.save(user);
        }
        return user;
    }

    @Override
    public User userResetPwd(String username, String password) {
        User user = userDao.findByUsername(username);
        user.setPassword(password);
        user.setResetPwd(Boolean.FALSE);
        user.setResetPwdDate(new Date());
        userDao.save(user);
        return user;
    }

    @Override
    public JSONObject userSignup(String username, String password) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setResetPwd(Boolean.FALSE);
        user.setResetPwdDate(new Date());
        user.setUserType(UserConstant.USER_TYPE_USER);
        User retUser = userDao.save(user);

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", retUser.getUsername());
        jsonObject.put("password", retUser.getPassword());
        return jsonObject;
    }

    @Override
    public User userLogout(String username) {
        User user = userDao.findByUsername(username);
        if(user != null){
            user.setLoginStatus(Boolean.FALSE);
            user = userDao.save(user);
        }
        return user;
    }

    @Override
    public User userProfile(User user) {
        String username = user.getUsername();
        User findUser = userDao.findByUsername(username);
        findUser.setContactNo(user.getContactNo());
        findUser = userDao.save(findUser);
        return findUser;
    }

    @Override
    public User findByUsername(String username) {
        return userDao.findByUsername(username);
    }
}
