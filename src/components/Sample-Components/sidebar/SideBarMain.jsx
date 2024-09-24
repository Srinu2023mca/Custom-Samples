import React,{useState} from 'react'
import items from "./Sidebar.json"
import Crown from "./crown.svg"
import {NavLink } from 'react-router-dom'


const SidebarItem = ({item}) => {
    const [open,setOpen]=useState(false)
    console.log(item)
        if(item.childrens){
            return (
                <div className={ open ? 'sidebar-item open' : 'sidebar-item'}>
                    <div className='sidebar-title' onClick={()=>setOpen(!open)}>
                        <div>
                            <span>{item.icon && <i className={item.icon}></i>}</span>
                            <span className='hide'>{item.title}</span> 
                        </div>
                        <i className='bi-chevron-right toggle-btn' ></i>
                    </div>
                    <div className="sidebar-content ">
                        {item.childrens.map((item,i)=> <SidebarItem key={i} item={item} />)} 
                    </div>
                </div>
                
            )
    
        }
        else{
            console.log(item);

            return (
                <div>
                    <NavLink to={item.path}  className="plain active">
                    <div className='sidebar-item' >
                        <span className='me-2'>{item.icon && <i className={item.icon}></i>}</span>
                           <span className='hide'> {item.title}</span>
                              
                        
                    </div>
                    </NavLink>
                </div>
                
            )
    
        }
    }
    

const SideBarMain = () => {
  return (
    <div className='sidebar'>
        <div>
            <div className=''>
                <div className='heading'><i class="bi-list"></i><span>Sidebar</span> </div>
                
                
            </div>

        </div>
        <div>
        {items.map((main,i)=>(
           <div key={i} className='mainHead'>
                <div className='hide' >{main.title}</div>
            {main.childrens.map((item,i) =><SidebarItem key={i} item={item}/>)}
           </div> 
        ))}
        </div>
        <div className='sidebar-bottom'>
            <i className='bi-nut'></i>
            <span className="hide">
                <div className='fs-12'>Settings</div>
                <div className='fs-10'>Profile,Notifications,Themes</div>

            </span>
            <i className='bi-chevron-right'></i>
        </div>
    </div>
  )
}

export default SideBarMain