import React from 'react';
// import {World} from './AMapExample.js'
import { Table } from 'antd';
const columns = [
  {
    title: '校色类型',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    width: 200,
    title: '操作',
    render: (text, record) => {
      return (
        <div>
          {
           true ? (
             <div style={{ display: 'flex', justifyContent: 'space-around' }}>
               <a>密码重置</a>
               <div />
               <a onClick={() => { console.log(record) }}>修改</a>
               <div />
               <a>停用</a>
             </div>
           ) : (
             <div>
               <a>修改</a>
               <div />
               <a>启用</a>
             </div>
           )
         }
        </div>
      );
    },
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: i,
    address: `London, Park Lane no. ${i}`,
  });
}

class ZuoYe extends React.Component {
  componentDidMount(){
      console.log(678237173)
  }
	 state = {
	    selectedRowKeys: [], // Check here to configure the default column
	  };
	  onSelectChange = selectedRowKeys => {
	    console.log('selectedRowKeys changed: ', selectedRowKeys);
	    this.setState({ selectedRowKeys });
	  };
   render(){
	     const { selectedRowKeys } = this.state;
	       const rowSelection = {
	         selectedRowKeys,
	         onChange: this.onSelectChange,
	         hideDefaultSelections: true,
	         selections: [
	           Table.SELECTION_ALL,
	           Table.SELECTION_INVERT,
	           {
	             key: 'odd',
	             text: 'Select Odd Row',
	             onSelect: changableRowKeys => {
	               let newSelectedRowKeys = [];
	               newSelectedRowKeys = changableRowKeys.filter((key, index) => {
	                 if (index % 2 !== 0) {
	                   return false;
	                 }
	                 return true;
	               });
	               this.setState({ selectedRowKeys: newSelectedRowKeys });
	             },
	           },
	           {
	             key: 'even',
	             text: 'Select Even Row',
	             onSelect: changableRowKeys => {
	               let newSelectedRowKeys = [];
	               newSelectedRowKeys = changableRowKeys.filter((key, index) => {
	                 if (index % 2 !== 0) {
	                   return true;
	                 }
	                 return false;
	               });
	               this.setState({ selectedRowKeys: newSelectedRowKeys });
	             },
	           },
	         ],
	       };
	   return (
	        <div>
	            <Table rowSelection={rowSelection}  rowSelection={rowSelection} columns={columns} dataSource={data}  />
	   	   </div>
	   );
   }
}

export default ZuoYe;
