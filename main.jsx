import React, {useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'

const fallback = [
 {id:1,name:'Smart Watch Pro',category:'electronics',price:4999,image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',description:'Fitness and smart notifications.'},
 {id:2,name:'Wireless Headphones',category:'electronics',price:2999,image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',description:'Immersive wireless audio.'},
 {id:3,name:'Running Shoes',category:'fashion',price:3499,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',description:'Lightweight everyday running shoes.'},
 {id:4,name:'Minimal Backpack',category:'fashion',price:1999,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',description:'Water-resistant everyday backpack.'}
]

function App(){
 const [products,setProducts]=useState(fallback), [query,setQuery]=useState(''), [cart,setCart]=useState([]), [ai,setAi]=useState(false)
 useEffect(()=>{fetch('http://localhost:8080/api/products').then(r=>r.json()).then(setProducts).catch(()=>{})},[])
 const shown=products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase()))
 return <div>
  <header><div className="logo">NovaCart AI</div><nav><a>Home</a><a>Products</a><a>About</a><button className="cart">Cart ({cart.length})</button></nav></header>
  <main>
   <section className="hero"><div><span className="pill">AI-POWERED SHOPPING</span><h1>Shop smarter.<br/><em>Discover better.</em></h1><p>Personalized products, intelligent recommendations and a seamless e-commerce experience.</p><button onClick={()=>setAi(!ai)} className="primary">✨ {ai?'Hide':'Show'} AI Recommendations</button></div><div className="heroCard"><div className="spark">✦</div><h3>Your shopping, personalized.</h3><p>Our recommendation engine learns from product categories and suggests items you'll love.</p></div></section>
   {ai && <section className="ai"><h2>✨ AI Recommendations</h2><p>Based on your interests, these products are recommended for you.</p></section>}
   <section className="toolbar"><h2>Featured products</h2><input placeholder="Search products..." value={query} onChange={e=>setQuery(e.target.value)}/></section>
   <section className="grid">{shown.map(p=><article className="card" key={p.id}><img src={p.image}/><div className="info"><span>{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><strong>₹{p.price.toLocaleString()}</strong><button onClick={()=>setCart([...cart,p])}>Add to cart</button></div></article>)}</section>
  </main>
  <footer>© 2026 NovaCart AI · AI-Powered Full Stack E-Commerce</footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>)
