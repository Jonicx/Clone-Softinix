import React, { useEffect, useState } from 'react'
import './Orders.css'
import { db } from "./firebase";
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [{basket,user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
                .collection('users')//accessing the users 
                .doc(user?.uid)// giving us the a particular user that is purchasing an order
                .collection('orders')//bring all orders
                .orderBy('created', 'desc')//Return all orders in descending orders
                .onSnapshot(snapshot => (//this bring the snapshot of the database in the realtime
                    setOrders(snapshot.docs.map(doc => ({//like walk or map through all documents return an object
                        id: doc.id,// with an id
                        data: doc.data()//and with data
                    })))
                ))
        }else{
            setOrders([])
        }

    }, [user])

    return (
        <div className="orders">
            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders
