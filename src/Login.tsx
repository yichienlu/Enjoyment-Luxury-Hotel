import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie'

function App() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })
  function login(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    axios.post('https://enjoyment-luxury-api.onrender.com/api/v1/user/login', formData)
    .then(res=>{
      console.log(res.data)
      setToken(res.data.token)
      alert('登入成功')
      navigate('/')
    })
    .catch(err=>{
      alert(err.response.data.message)
    })
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    const value = e.target.value
    const name = e.target.name
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const cookies = new Cookies();
  const setToken = (token:string) => {
    cookies.set('enjoyment-luxury-token', token, 
    { path: '/',secure: true,sameSite :true}
    );
    console.log(cookies.get('enjoyment-luxury-token'));
    };
  
  // const getAuthToken = () => {
  //   if (cookies.get('enjoyment-luxury-token')===undefined){
  //     return '';
  //   }
  //   return cookies.get('enjoyment-luxury-token');
  // };
  

  return (
    <>
      <div className="bg-neu-100 min-h-[100dvh]">
        <header className="w-full lg:w-1/2 py-4 lg:py-6 px-3 lg:px-20 flex justify-between bg-neu-100 sticky lg:fixed top-0 z-10">
        <Link to="/">
          <img src="images/logo-white.png" alt="" className="h-10 lg:h-[72px]" />
        </Link>
          <button className="text-white lg:hidden">
          <img src="images/icon/ic_menu.svg" alt="" className='p-2 fill-white' />
          </button>
        </header>
        <div className="lg:h-dvh w-full grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden min-h-dvh h-full lg:block bg-[url('https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
          <div className="h-full font-bold px-5 overflow-y-auto relative bg-[url('images/mobile-deco-login.png')] lg:bg-[url('../images/desktop-deco-login.png')] bg-center bg-no-repeat bg-contain">
            <div className="h-full w-full grid items-center">
              <div className="max-w-[416px] w-full mx-auto py-5 lg:py-20">
                <p className="text-sm lg:text-base mb-2 text-primary-100">享樂酒店，誠摯歡迎</p>
                <h2 className="text-4xl lg:text-5xl mb-10 text-white">立即開始旅程</h2>
                <form action="" className="appearance-none text-sm lg:text-base" onSubmit={login}> 
                  <div>
                    <label htmlFor="emailInput" className="text-white block mb-2">電子信箱</label>
                    <input type="email" name="email" id="emailInput" placeholder="hello@example.com" className="block w-full mb-4 p-4 rounded-lg placeholder:text-[#909090] font-normal" required onChange={handleInputChange} />
                  </div>
                  <div>
                    <label htmlFor="passwordInput" className="text-white block mb-2">密碼</label>
                    <input type="password" name="password" id="passwordInput" placeholder="請輸入密碼" className="block w-full mb-4 p-4 rounded-lg placeholder:text-[#909090] font-normal" required onChange={handleInputChange} />
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" name="" id="rememberInfo" className="w-6 h-6 rounded accent-primary-120" />
                    <label htmlFor="rememberInfo" className="text-white ml-2">記住帳號</label>
                    <a href="#" className="text-primary-100 ml-auto underline hover:text-primary-120">忘記密碼？</a>
                  </div>
                  <button className="block w-full text-white bg-primary-100 hover:bg-primary-120 disabled:bg-neu-60 disabled:text-neu-40 py-4 rounded-lg my-10" onClick={()=>login}>會員登入</button>
                  <p>
                    <span className="text-white">沒有會員嗎？</span>
                    <Link to="/signup" className="text-primary-100 hover:text-primary-120 underline ml-2">前往註冊</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
