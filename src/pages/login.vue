<template>
    <div class="login">
        <div class="wrapper">
            <div class="form-container">
                <!-- Title区域 -->
                <div class="title animate__animated  animate__swing">
                    <p class="text-18px font-bold text-gray-400">START FOR FREE</p>
                    <p class="text-46px font-bold">Create new account</p>
                    <p class="text-18px text-gray-400">Already A Member?
                        <span class="text-blue-400">Log in</span>
                    </p>
                </div>

                <!-- 表单区域 -->
                <div class="body animate__animated animate__bounceInLeft">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <el-input v-model="loginForm.firstName" label="First Name" placeholder="First Name">
                                <template #suffix>
                                    <i-fluent-contact-card-16-filled />
                                </template>
                            </el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-input v-model="loginForm.lastName" label="Last Name" placeholder="Last Name">
                                <template #suffix>
                                    <i-fluent-contact-card-16-filled />
                                </template>
                            </el-input>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-input v-model="loginForm.email" label="Email" placeholder="Email">
                            <template #suffix>
                                <i-fluent-folder-mail-16-filled />
                            </template>
                        </el-input>
                    </el-row>

                    <el-row>
                        <el-input type="password" show-password v-model="loginForm.password" label="Password"
                            placeholder="Password">
                            <template #suffix v-if="!loginForm.password">
                                <i-fluent-eye-12-filled />
                            </template>
                        </el-input>
                    </el-row>

                    <el-row class="justify-between ">
                        <el-button round>Reset</el-button>
                        <el-button type="primary" round>Create Account</el-button>
                    </el-row>

                </div>
            </div>

            <div class="bg-container">
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
const loginForm = ref({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
})

</script>
    
<style lang="less" scoped>
.login {
    @apply h-100vh flex items-center justify-center bg-light-700 overflow-hidden;

    .wrapper {
        @apply w-1000px h-680px bg-white border-rd-20px flex;

        .form-container {
            @apply flex flex-col justify-center pl-70px;
            width: 50%;
            height: 100%;
            line-height: 5px;

            .body {
                padding: 20px 100px 0 0;

                .el-row {
                    margin-bottom: 30px;
                }

                .el-input {
                    height: 50px;
                    border-radius: 20px;

                    :deep(.el-input__wrapper) {
                        background: #f3f6fb;
                        border-radius: 15px;
                        box-shadow: none;
                        height: 100%;

                        .el-input__inner {
                            height: 100%;
                        }

                        :focus {
                            &::placeholder {
                                display: block !important;
                                position: relative;
                                top: -15px;
                                font-size: 12px;
                                transition: 1s ease-out;
                            }
                        }
                    }

                }

                .el-button {
                    width: 45%;
                    height: 50px;
                    font-weight: bold;
                    border-radius: 25px;
                }
            }
        }

        .bg-container {
            background-image: url('src/assets/img/login-background.png');
            background-size: cover;
            flex: 1;
            border-radius: 20px;
        }
    }
}
</style>