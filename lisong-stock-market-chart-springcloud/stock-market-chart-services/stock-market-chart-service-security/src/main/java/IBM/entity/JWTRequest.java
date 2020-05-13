package IBM.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JWTRequest implements Serializable {

    private static final long serialVersionUID = -1734178705675008551L;

    private String username;
    private String password;
}
