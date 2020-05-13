package IBM.entity;

import java.io.Serializable;

public class JWTResponse implements Serializable {

    private static final long serialVersionUID = -3109062394161728590L;

    private String jwtToken;

    public JWTResponse(String jwtToken){
        this.jwtToken = jwtToken;
    }

    public String getToken(){
        return this.getToken();
    }
}
