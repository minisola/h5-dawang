import React, { useState } from 'react';
import Axios from 'Axios'

import logo from '../img/index-fosun-logo.png'


const Form = () => {

    const ageList = [
        '1-3个月', '3-6个月', '6-12个月', '1-3岁', '3-6岁', '6-12岁', '12岁以上'
    ]

    const [sex, setSex] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState(ageList[0])

    let loading = false

    const submitForm = ()=>{

        if(loading){
            alert('正在提交中..请稍候')
        }
        const data = {
            sex:sex.trim()
            ,name:name.trim()
            ,phone:phone.trim()
            ,age:age.trim()
        }

        if(!data.sex){
            return alert('请选择性别')
        }
        if(!data.sex){
            return alert('请选择性别')
        }
        if(!data.name){
            return alert('请填写姓名')
        }
        if(!data.name.length > 20){
            return alert('请填写正确的姓名')
        }
        if(!data.phone){
            return alert('请填写电话')
        }
        if(!/^[1-9]\d{10}$/.test(data.phone)){
            return alert('请填写正确的电话号码')
        }
        loading = true
        Axios.post('http://139.196.20.56:10300/formsubmit',data).then(res=>{
            loading = false
            if(res.data.code){
                alert('提交成功!')
                window.location.href=window.location.origin + window.location.pathname
            }else{
                alert(res.data.msg)
            }
        })
    }

    return (
        <div className="page page-2">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="form">
                <div className="input-group">
                    <div className="input-title sex">
                    </div>
                    <div className="input-radio-group">
                        <div className="input-radio male"
                            onClick={() => setSex('男')}>
                            <div className="input-radio-label">

                            </div>
                            <div className={sex === '男' ? 'input-radio-checkbox checked' : 'input-radio-checkbox'}>

                            </div>
                        </div>
                        <div className="input-radio female"
                            onClick={() => setSex('女')}>
                            <div className="input-radio-label">

                            </div>
                            <div className={sex === '女' ? 'input-radio-checkbox checked' : 'input-radio-checkbox'}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-title name">

                    </div>
                    <div className="input-form">
                        <input type="text" placeholder='姓名(家长)'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-title phone">

                    </div>
                    <div className="input-form">
                        <input type="text" placeholder='手机号码'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-title age">

                    </div>
                    <div className="input-form">
                        <select name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)} >
                            {
                                ageList.map(el => (
                                    <option key={el} value={el}>{el}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="reminder"></div>
                <div className="form-button" onClick={()=>{
                    submitForm()
                }}></div>
            </div>
        </div>
    )
}

export default Form