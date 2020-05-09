package IBM.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MailBean {

    public static final  String MAIL_SENDER = "zte_lisongandy@163.com";

    private String receiver;
    private String subject;
    private String content;
}
