package com.zh.usercenter.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户登录请求体
 *
 * @author zh
 */
@Data
public class UserLoginRequest implements Serializable {

    private static final long serialVersionUID = 6849204378515905554L;

    private String userAccount;

    private String userPassword;

}
