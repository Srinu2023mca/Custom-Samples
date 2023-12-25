import React, {useState } from 'react'
import "./Sidebar.css"
import {FaUserCheck,FaUsers,FaAddressCard} from 'react-icons/fa';
import { BsBarChartLine,BsGrid } from "react-icons/bs";
import { LuTableProperties,LuBellRing ,LuClipboardEdit  } from "react-icons/lu";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { RxMixerHorizontal } from "react-icons/rx";
import { AiTwotoneReconciliation } from "react-icons/ai";
import {TbFileInvoice } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import Logo from "../asets/Logo.svg"


const Sidebar = ({child}) => {
    // const [isOpen,setIsOpen] =useState(false)
    // const toggle = ()=> setIsOpen(!isOpen)
    const menuItem =[
        {
            path:"/",
            name:"Dashboard",
            icon:<BsGrid/>
        },{
            path:"/menu/orders",
            name:"Orders",
            icon:<BsBarChartLine/>
        },{
            path:"/menu/products",
            name:"Products",
            icon:<LiaCheckDoubleSolid/>
        },{
            path:"/menu/services",
            name:"Services",
            icon:<RxMixerHorizontal/>
        },{
            path:"/menu/deliveries",
            name:"Deliveries",
            icon:<AiTwotoneReconciliation/>
        },
        {
            path:"/menu/invoices",
            name:"Invoices",
            icon:<TbFileInvoice/>
        },
        {
            path:"/menu/reports",
            name:"Reports",
            icon:<LuClipboardEdit/>
        },
    ]
    const mastersItem =[
        {
            path:"/masters/customers",
            name:"Customers",
            icon:<FaUserCheck/>
        },{
            path:"/masters/staff",
            name:"Staff",
            icon:<FaUsers/>
        },{
            path:"/masters/inventory",
            name:"Inventory",
            icon:<LuTableProperties/>
        },{
            path:"/masters/designation",
            name:"Designation",
            icon:<FaAddressCard/>
        },
        
    ]
    const settingsItem =[
        {
            path:"/settings/profile",
            name:"Profile",
            icon:<CgProfile/>
        },{
            path:"/settings/notifications",
            name:"Notifications",
            icon:<LuBellRing/>
        }
        
    ]
    
  return (
    <div className='container1'>
        <div className='sidebar'>
            <div className='top_section'>
                <div className='w-100 pb-1 border-bottom'>
                    <div className='bars w-75 '>
                        <div className='text-center'><img src={Logo} className='Mainlogo' alt='logo'/></div>
                    </div>

                </div>
                
            </div>
            <div className='head'>Menu</div>
            {
             menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeClassName="active">
                    <div className='icon'>{item.icon}</div>
                    <div className='link_text' >{item.name}</div>
                </NavLink>
             ))   
            }
            
            <div className='head' >Masters</div>
            {
             mastersItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeClassName="active" >
                    <div className='icon'>{item.icon}</div>
                    <div className='link_text'>{item.name}</div>
                </NavLink>
             ))   
            }
            
            <div className='head' >Settings</div>
            {
             settingsItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeClassName="active" >
                    <div className='icon'>{item.icon}</div>
                    <div className='link_text' >{item.name}</div>
                </NavLink>
             ))   
            }
            
            <div className='bottom text-center p-3'>© Copyright 2023 Mventus</div>   
        </div>
    </div>
  )
}

export default Sidebar

