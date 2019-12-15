import React, { useState } from 'react';
import logo from '../img/index-fosun-logo.png'



const PageIndex = ({history}) => {
    const [read, setRead] = useState(false)
    const goForm = ()=>{
       if(read){
        history.push({
                pathname:'/form'
            })
       }else{
           alert('请先阅读并同意<活动规则,隐私声明,肖像授权书>')
       }
    }
    return (
        <div className="page page-1">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="index-decoration"></div>

            <div className="index-title">

            </div>
            <div className="index-title-line">

            </div>
            <div className="index-title-des"></div>
            <div className="index-body">

            </div>
            <div className="index-goods-bg">

            </div>
            <div className="index-goods"></div>

            <div className="index-goods-title">

            </div>
            <div className="index-button-wrapper">
                <div className="index-button" onClick={()=>{
                    goForm()
                }}></div>
            </div>
            <div className="index-agreement-box">
                <div className={read ? 'agreement-checkbox read' : 'agreement-checkbox'}
                onClick={()=>setRead(!read)}>
                </div>
                <div className="agreement-haveread" onClick={()=>setRead(!read)}></div>
                <div className="agreeement-link"></div>
            </div>
        </div>
    )
}

export default PageIndex