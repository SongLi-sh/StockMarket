package IBM.service.impl;

import IBM.dto.MailBean;
import IBM.service.IMailService;
import com.netflix.discovery.converters.Auto;
import feign.template.Template;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import java.io.File;

import static IBM.dto.MailBean.MAIL_SENDER;

@Slf4j
@Service
public class IMailServiceImpl implements IMailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private TemplateEngine templateEngine;

    @Override
    public void sendSimpleMail(MailBean mailBean) {
        try {
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setFrom(MAIL_SENDER);
            simpleMailMessage.setTo(mailBean.getReceiver());
            simpleMailMessage.setSubject(mailBean.getSubject());
            simpleMailMessage.setText(mailBean.getContent());
            javaMailSender.send(simpleMailMessage);
        } catch (MailException e) {
            e.printStackTrace();
        }

    }

    @Override
    public void sendHTMLMail(MailBean mailBean, String html) {
        MimeMessage mimeMailMessage = null;
        mimeMailMessage = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, true);
            mimeMessageHelper.setFrom(MAIL_SENDER);
            mimeMessageHelper.setTo(mailBean.getReceiver());
            mimeMessageHelper.setSubject(mailBean.getSubject());
            StringBuilder sb = new StringBuilder();
            mimeMessageHelper .setText(html,true);
            javaMailSender.send(mimeMailMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void sendAttachmentMail(MailBean mailBean, String path) {
        MimeMessage mimeMailMessage = null;
        mimeMailMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper mimeMessageHelper = null;
        try {
            mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, true);
            mimeMessageHelper.setFrom(MAIL_SENDER);
            mimeMessageHelper.setTo(mailBean.getReceiver());
            mimeMessageHelper.setSubject(mailBean.getSubject());
            mimeMessageHelper .setText(mailBean.getContent());

            FileSystemResource file = new FileSystemResource(new File(path));
            mimeMessageHelper.addAttachment("test.png", file);

            javaMailSender.send(mimeMailMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void sendTemplateMail(MailBean mailBean, String templateName, Context context) {
        String emailContent = templateEngine.process(templateName, context);
        sendHTMLMail(mailBean,emailContent);
    }
}
