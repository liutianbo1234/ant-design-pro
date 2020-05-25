import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import FormRegister from './FormRegister';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Link, connect } from 'umi';
import styles from './style.less';

const Register = props => {
  console.log(props)
  return (
    <div className={styles.main}>
       <FormRegister/>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Register);
