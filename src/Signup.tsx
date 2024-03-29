import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie'
import ZipCodeMap from "./zipcodes"

function App() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1)
  const [checkPasswordInput, setCheckPasswordInput] = useState("")


  type District = {
    detail:string;
    zipcode:number;
    city:string;
    county:string
  }
  const [districts, setDistricts] = useState<District[]>([])
  const districtSet = new Set(ZipCodeMap.map(item=>item.city))
  const cities = Array.from(districtSet)
  function findDistricts(city:string){
    const districtsList = ZipCodeMap.filter(item=>item.city==city)
    setDistricts([...districtsList])
    setFormData({
      ...formData,
      city:city,
      district:"000"
    })
  }

  const [formData, setFormData] = useState({
    email:"",
    password:"",
    name:"",
    phone:"",
    month:"",
    day:"",
    year:"",
    city:"",
    district:"000",
    address:""
  })

  function formatFormData(){
    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      birthday:`${formData.year}/${formData.month}/${formData.day}`,
      address:{
        zipcode:formData.district,
        detail: formData.address
      }
    }

    axios.post('https://enjoyment-luxury-api.onrender.com/api/v1/user/signup', data)
    .then(res=>{
      console.log(res.data)
      setToken(res.data.token)
      alert('註冊成功')
      navigate('/')
    })
    .catch(err=>{
      alert(err.response.data.message)
    })
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>){
    e.preventDefault()
    const value = e.target.value
    const name = e.target.name
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const letterRegex = /[a-zA-Z]/;
  const numberRegex = /\d/;
  function handleSubmitFirst(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    if(checkPasswordInput!==formData.password){
      alert("需輸入相同密碼")
    } else if(!letterRegex.test(formData.password) 
    || !numberRegex.test(formData.password)) {
      alert("密碼須包含英文字母及數字")
    } else {
      console.log(formData)
      setStep(2)
    }
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    formatFormData()
  }

  const cookies = new Cookies();
  const setToken = (token:string) => {
    cookies.set('enjoyment-luxury-token', token, 
    { path: '/',secure: true,sameSite :true}
    );
    console.log(cookies.get('enjoyment-luxury-token'));
  };

  return (
    <>
    <div className="relative bg-neu-100 min-h-[100dvh]">
    <header className="w-full lg:w-1/2 py-4 lg:py-6 px-3 lg:px-20 flex justify-between bg-neu-100 sticky lg:fixed top-0 z-10">
      <Link to="/">
        <img src="images/logo-white.png" alt="" className="h-10 lg:h-[72px]" />
      </Link>
      <button className="text-white lg:hidden">
      <img src="images/icon/ic_menu.svg" alt="" className='p-2 fill-white' />
      </button>
    </header>
    <div className="lg:h-dvh items-start w-full relative grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden min-h-dvh h-full  lg:block bg-[url('https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className=" h-full  font-bold px-5 overflow-y-auto relative bg-[url('../images/mobile-deco-login.png')] lg:bg-[url('../images/desktop-deco-login.png')] bg-center bg-no-repeat bg-contain">
        <div className="h-full w-full grid items-center">
          <div className="max-w-[416px] w-full mx-auto  py-5 lg:py-20 ">
          <p className="text-sm lg:text-base mb-2 text-primary-100">享樂酒店，誠摯歡迎</p>
          <h2 className="text-4xl lg:text-5xl mb-4 text-white">立即註冊</h2>
          {/* <!-- Step Graph --> */}
          <div className="flex items-center text-sm lg:text-base py-4 mb-10">
            <div className="grow-0 shrink-0">
              <div className="w-8 h-8 flex justify-center items-center rounded-full mx-auto bg-primary-100 cursor-pointer" onClick={()=>setStep(1)}>
                <span className={`text-white ${step==2 ? 'hidden' : 'inline'}`}>1</span>
                <span className={`text-white ${step==1 ? 'hidden' : 'inline'}`}>✓</span>
              </div>
              <p className="mt-1 text-white cursor-pointer" onClick={()=>setStep(1)}>輸入信箱及密碼</p>
            </div>
            <div className={`grow shrink h-[2px] mx-2 ${step==1 ? 'bg-neu-60' : 'bg-neu-40'}`}></div>
            <div className="grow-0 shrink-0">
              <div className={`w-8 h-8 flex justify-center items-center rounded-full mx-auto  ${step==1 ? 'border border-neu-60' : 'bg-primary-100'} `}>
                <span className="text-white">2</span>
              </div>
              <p className={`mt-1 ${step==1? 'text-neu-60' : 'text-white'}`}>填寫基本資料</p>
            </div>
          </div>
          {/* 第一步表單 */}
          <form id="step1" className={`appearance-none text-sm lg:text-base text-white ${step==1 ? 'block' : 'hidden'}`} onSubmit={handleSubmitFirst}>
          <div>
              <label htmlFor="emailInput" className="text-white block mb-2">電子信箱</label>
              <input type="email" name="email" id="emailInput" placeholder="hello@example.com" className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" required value={formData.email} onChange={handleInputChange}/>
            </div>
            <div>
              <label htmlFor="passwordInput" className="text-white block mb-2">密碼</label>
              <input type="password" name="password" id="passwordInput" placeholder="請輸入密碼" required minLength={8} className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" value={formData.password} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="checkPasswordInput" className="text-white block mb-2">確認密碼</label>
              <input type="password" id="checkPasswordInput" placeholder="請再輸入一次密碼" required minLength={8} className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" value={checkPasswordInput} onChange={e=>setCheckPasswordInput(e.target.value)} />
            </div>
            <button type="submit" className="block w-full text-white bg-primary-100 hover:bg-primary-120 disabled:bg-neu-60 disabled:text-neu-40 py-4 rounded-lg my-10" >下一步</button>
          </form>

          {/* 第二步表單 */}
          <form id="step2" className={`appearance-none text-sm lg:text-base text-white ${step==2 ? 'block' : 'hidden'}`} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nameInput" className="text-white block mb-2">姓名</label>
              <input type="text" name="name" id="nameInput" placeholder="請輸入姓名" className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" required minLength={2} value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="telInput" className="text-white block mb-2">手機號碼</label>
              <input type="tel" name="phone" id="telInput" placeholder="請輸入手機號碼" className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" required value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="yearSelect" className="text-white block mb-2">生日</label>
              <div className="grid grid-cols-3 gap-2 font-normal ">
                <input type="number" min="1900" max="2099" step="1" name="year" placeholder="請輸入年份"  className="p-4 rounded-lg text-black" required value={formData.year} onChange={handleInputChange}/>
                <select name="month" id="monthSelect" className="p-4 rounded-lg text-black" required value={formData.month} onChange={handleInputChange}>
                  <option value="" disabled>請選擇月份</option>
                  <option value="1">1月</option>
                  <option value="2">2月</option>
                  <option value="3">3月</option>
                  <option value="4">4月</option>
                  <option value="5">5月</option>
                  <option value="6">6月</option>
                  <option value="7">7月</option>
                  <option value="8">8月</option>
                  <option value="9">9月</option>
                  <option value="10">10月</option>
                  <option value="11">11月</option>
                  <option value="12">12月</option>
                </select>
                <input type="number" min="1" max={
                  formData.month == '' ? 1 : 
                  formData.month == '2' ? 28 : 
                  formData.month == '4' || formData.month == '6' || formData.month == '9' || formData.month == '11' ? 30 : 31
                } step="1" name="day" placeholder="請輸入日期"  className="p-4 rounded-lg text-black" required value={formData.day}  onChange={handleInputChange}/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="countySelect" className="text-white block mb-2">地址</label>
              <div className="grid grid-cols-2 gap-2">
                <select name="city" id="city" value={formData.city} className="p-4 rounded-lg text-black" required onChange={(e)=>{findDistricts(e.target.value);}}>
                  <option value="" disabled >請選擇縣市</option>
                  { cities.map(item=>
                    <option value={item} key={item}>{item}</option>
                  )}
                </select>
                <select name="district" id="district" value={formData.district} className="p-4 rounded-lg text-black" required  onChange={handleInputChange}>
                <option value="000" disabled >請選擇鄉鎮</option>
                { districts.map(item=>
                  <option value={item?.zipcode} key={item?.zipcode}>{item?.county}</option>
                )}
                </select>
                <input type="text" name="address" placeholder="請輸入詳細地址" className="col-span-2 p-4 rounded-lg text-black" required value={formData.address} onChange={handleInputChange} />
              </div>
            </div>
            <div className="flex items-center mb-10">
              <input type="checkbox" name="agreed" id="readInfo" className="w-6 h-6 rounded accent-primary-120" required />
              <label htmlFor="readInfo" className="text-white ml-2">我已閱讀並同意本網站個資使用規範</label>
            </div>
            <button type='submit' className="block w-full text-white bg-primary-100 hover:bg-primary-120 disabled:bg-neu-60 disabled:text-neu-40 py-4 rounded-lg mb-4">完成註冊</button>
          </form>
          <p>
              <span className="text-white">已經有會員了嗎？</span>
              <Link to="/login" className="text-primary-100 hover:text-primary-120 underline ml-2">立即登入</Link>
            </p>
        </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
