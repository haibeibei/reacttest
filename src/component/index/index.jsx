import React from 'react';
import {Button, Input, Form} from 'antd';
class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            number: '',
            balance:[]
        }
    }

    setNumber = (e) => {
        this.setState({
            number: e.target.value
        })
    }

    handleSubmit = (e) => {
        let arr1 = [];
        e.preventDefault();
        var arr = this.state.number.split(',');
        arr = arr.map((v) => {
            return parseInt(v);
        });
        arr=arr.filter((v)=>{
            return v!==NaN
        });
        console.log(arr);
        arr.forEach((v, i) => {
            var sumleft = 0, sumright = 0;
            for (let j = 0; j <= i; j++) {
                sumleft += arr[j];
            }
            for (let k = i; k < arr.length; k++) {
                sumright += arr[k];
            }
            if (sumleft === sumright) {
                arr1.push(i)
            } else if (sumleft !== sumright) {
                arr1.push(-1);
            }
        });
        arr1=arr1.filter((v,i)=>{
            return v!==-1
        });
        if(arr1.length){
            this.setState({
                balance:arr1
            })
        }else{
            this.setState({
                balance:[-1]
            })
        }
    };
    render()
    {
        if(this.state.balance.length){
            var els=this.state.balance.map((v,i)=>{
                if(v!==-1){
                    return(
                        <span key={i}>平衡点是:-{v}-</span>
                    )

                }else{
                    return(
                        <span key={i}>-1</span>
                    )
                }
            });
        }
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <p>请输入数据:(以逗号隔开)</p>
                    <Input value={this.state.number} onChange={this.setNumber} style={{width:300,marginRight:10}}/>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form>
                {els}
            </div>
        );
    }
}
export default Index