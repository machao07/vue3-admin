<template>
    <div style="overflow: auto; height: 100%; width: 100%">
        <header class="header">
            <a href="javascript:;">
                <img src="@/assets/logo.png" class="logo" />
                <span class="companyName">商户中心</span>
            </a>
        </header>
        <div class="login-box">
            <div class="login-main">
                <div class="login-banner">
                    <img src="@/assets/login_b.png" />
                </div>

                <div class="login-tab">
                    <div>
                        <h2 class="login-h">Hi，欢迎登录惠联生花商户管理平台！</h2>
                        <div id="login_failed" class="login_alert" style="display: none"
                            >用户名或密码错</div
                        >
                        <el-form
                            ref="ruleFormRef"
                            label-width="0px"
                            :model="ruleForm"
                            :rules="loginRules"
                            class="ms-content"
                        >
                            <el-form-item prop="account">
                                <el-input
                                    v-model.trim="ruleForm.account"
                                    placeholder="请输入企业账号"
                                >
                                    <el-button icon="el-icon-lx-people" />
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="username">
                                <el-input
                                    v-model.trim="ruleForm.username"
                                    placeholder="请输入用户名"
                                >
                                    <el-button icon="el-icon-lx-people" />
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input
                                    v-model.trim="ruleForm.password"
                                    :type="state.isSecure ? 'password' : 'text'"
                                    placeholder="请输入密码"
                                    @keyup.enter="submitForm(ruleFormRef)"
                                >
                                    <!-- <template #prepend>
                                        <el-button icon="el-icon-lx-lock" />
                                    </template> -->
                                    <i
                                        :class="state.isSecure ? 'fa fa-eye' : 'fa fa-eye-slash'"
                                        style="font-size: 16px; margin-top: 7px"
                                        @click="setSecure()"
                                    ></i>
                                </el-input>
                            </el-form-item>
                            <el-button
                                style="width: 100%"
                                type="primary"
                                @click="submitForm(ruleFormRef)"
                                >登录</el-button
                            >
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            Copyright © 1994-2019 南京云惠联科技有限公司 All Rights Reserved.<br />
            备案号：苏ICP备19006197号 联系方式：025-58856499
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

const ruleFormRef = ref<InstanceType<typeof ElForm>>()
interface FormData {
    account: string
    username: string
    password: string
}
const ruleForm = reactive<FormData>({
    account: '',
    username: '',
    password: ''
})

const loginRules = reactive({
    account: [
        {
            required: true,
            message: '企业账号不能为空',
            trigger: 'blur'
        }
    ],
    username: [
        {
            required: true,
            message: '账户不能为空',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        }
    ]
})

interface StatsBase {
    loading: boolean
    isSecure: boolean
}
const state = reactive<StatsBase>({
    loading: false,
    isSecure: true
})

const setSecure = () => {
    state.isSecure = !state.isSecure
    console.log(state.isSecure)
}

const submitForm = async (ruleFormRef: any) => {
    ruleFormRef.value.validate((valid: boolean) => {
        if (valid) {
        }
    })
}
</script>

<style lang="scss" scoped>
.header {
    height: 88px;
    background: #ffffff;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    line-height: 88px;
    position: relative;
    .logo {
        width: 174px;
        height: 60px;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -30px;
    }
    .companyName {
        color: #666666;
        font-size: 24px;
        position: absolute;
        height: 40px;
        line-height: 40px;
        left: 190px;
        top: 50%;
        margin-top: -20px;
    }
}

.login-box {
    height: 610px;
    background: #e4e4e4 url('@/assets/login_bg.png') center top no-repeat;
    width: 100%;
    position: relative;
    clear: both;
}
.login-box-bg {
    background: #7186ef;
    width: 1230px;
    height: 430px;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -615px;
    z-index: 1;
}
.login-main {
    width: 990px;
    margin: 0 auto;
    height: 610px;
    position: relative;
    z-index: 100;
}
.login-banner {
    width: 645px;
    height: 610px;
    float: left;
    a {
        display: block;
        width: 645px;
        height: 610px;
    }
}
.login-tab {
    width: 305px;
    float: right;
    background: #ffffff;
    padding: 20px;
    margin-top: 140px;
    box-shadow: 0 0 10px #ddd;
    border-radius: 5px;
}
.login_text {
    width: 265px;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        height: 30px;
        margin-bottom: 20px;
        position: relative;
    }
}

.login_text li i {
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 0;
    color: #aaaaaa;
}

.login_text li .label {
    width: 80px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 0;
    color: #333333;
    font-size: 14px;
}

.login_text li input[type='text'],
.login_text li input[type='password'] {
    border: 1px solid #e8e8e8;
    background: transparent;
    height: 28px;
    line-height: 28px;
    margin-left: 80px;
    padding: 0 5px;
    font-size: 12px;
    width: 183px;
    outline: none;
}

.loginBtn {
    width: 265px;
}
.login-h {
    font-size: 16px;
    color: #333333;
    margin-bottom: 20px;
    font-weight: normal;
    text-align: left;
}
.footer {
    text-align: center;
    color: #333;
    font-size: 12px;
    width: 100%;
    padding: 30px 0;
    line-height: 25px;
}
.login_alert {
    background-color: #f2dede;
    height: 30px;
    color: #a94442;
    padding-left: 10px;
    line-height: 30px;
    font-size: 12px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
}
.captcha-img {
    width: 90px;
    height: 30px;
    cursor: pointer;
}
</style>
