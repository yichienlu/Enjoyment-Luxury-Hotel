import { useState } from 'react'
import { useNavigate, Route, Link } from "react-router-dom";
import axios from 'axios';
import ZipCodeMap from "./zipcodes"

function App() {
  let navigate = useNavigate();
  console.log(navigate)

  const [step, setStep] = useState(1)
  const [checkPasswordInput, setCheckPasswordInput] = useState("")
  function nextStep(){
    if(checkPasswordInput==formData.password && formData.email && formData.password){
      setStep(2)
    }
  }

  function findZipcode(){
    const area = `${formData.city}${formData.district}`
    console.log(area)
    return ZipCodeMap.find(item=>item.detail.includes(area))?.zipcode
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
    district:"",
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
        zipcode:findZipcode(),
        detail: formData.address
      }
    }
    console.log(data)
    // 打 API
    axios.post('https://enjoyment-luxury-api.onrender.com/api/v1/user/signup', data)
    .then(res=>{
      console.log(res.data)
      alert('註冊成功')
      
    })
    .catch(err=>console.dir(err))



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
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>){
    const value = e.target.value
    const name = e.target.name
    setFormData({
      ...formData,
      [name]:value
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    formatFormData()
  }



  return (
    <>
    <div className="relative bg-neu-100 min-h-[100dvh]">
    <header className="w-full lg:w-1/2 py-4 lg:py-6 px-3 lg:px-20 flex justify-between bg-neu-100 sticky lg:fixed top-0 z-10">
      <Link to="/">
        <img src="images/logo-white.png" alt="" className="h-10 lg:h-[72px]" />
      </Link>
      <button className="text-white lg:hidden">三</button>
    </header>
    <div className="lg:h-dvh items-start w-full relative grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden min-h-dvh h-full  lg:block bg-[url('https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
      <div className=" h-full  font-bold px-5 overflow-y-auto relative bg-[url('images/mobile-deco-login.png')] lg:bg-[url('../images/desktop-deco-login.png')] bg-center bg-no-repeat bg-contain">
        <div className="h-full w-full grid items-center">
          <div className="max-w-[416px] w-full mx-auto  py-5 lg:py-20 ">
          <p className="text-sm lg:text-base mb-2 text-primary-100">享樂酒店，誠摯歡迎</p>
          <h2 className="text-4xl lg:text-5xl mb-4 text-white">立即註冊</h2>
          {/* <!-- Step Graph --> */}
          <div className="flex items-center text-sm lg:text-base py-4 mb-10">
            <div className="grow-0 shrink-0">
              <div className="w-8 h-8 flex justify-center items-center rounded-full mx-auto bg-primary-100">
                <span className={`text-white ${step==2 ? 'hidden' : 'inline'}`}>1</span>
                <span className={`text-white ${step==1 ? 'hidden' : 'inline'}`}>✓</span>
              </div>
              <p className="mt-1 text-white">輸入信箱及密碼</p>
            </div>
            <div className={`grow shrink h-[2px] mx-2 ${step==1 ? 'bg-neu-60' : 'bg-neu-40'}`}></div>
            <div className="grow-0 shrink-0">
              <div className={`w-8 h-8 flex justify-center items-center rounded-full mx-auto  ${step==1 ? 'border border-neu-60' : 'bg-primary-100'}`}>
                <span className="text-white">2</span>
              </div>
              <p className={`mt-1 ${step==1? 'text-neu-60' : 'text-white'}`}>填寫基本資料</p>
            </div>
          </div>
          <form className=" appearance-none text-sm lg:text-base " onSubmit={handleSubmit}>
            <section id="step1" className={`text-white ${step==1 ? 'block' : 'hidden'}`}>
            <div>
              <label htmlFor="emailInput" className="text-white block mb-2">電子信箱</label>
              <input type="email" name="email" id="emailInput" placeholder="hello@example.com" className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" value={formData.email} onChange={handleInputChange}/>
            </div>
            <div>
              <label htmlFor="passwordInput" className="text-white block mb-2">密碼</label>
              <input type="password" name="password" id="passwordInput" placeholder="請輸入密碼" minLength={8} className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" value={formData.password} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="checkPasswordInput" className="text-white block mb-2">確認密碼</label>
              <input type="password" id="checkPasswordInput" placeholder="請再輸入一次密碼" minLength={8} className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" value={checkPasswordInput} onChange={e=>setCheckPasswordInput(e.target.value)} />
            </div>
            <button type="button" className="block w-full text-white bg-primary-100 hover:bg-primary-120 disabled:bg-neu-60 disabled:text-neu-40 py-4 rounded-lg my-10" onClick={()=>nextStep()}>下一步</button>
            </section>

            <section id="step2" className={`text-white ${step==2 ? 'block' : 'hidden'}`}>
            <div>
              <label htmlFor="nameInput" className="text-white block mb-2">姓名</label>
              <input type="text" name="name" id="nameInput" placeholder="請輸入姓名" className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="telInput" className="text-white block mb-2">手機號碼</label>
              <input type="tel" name="phone" id="telInput" placeholder="請輸入手機號碼" className="block w-full mb-4 p-4 rounded-lg text-black placeholder:text-[#909090] font-normal" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="yearSelect" className="text-white block mb-2">生日</label>
              <div className="grid grid-cols-3 gap-2 font-normal ">
                {/* <!-- <select name="" id="yearSelect" className="p-4 rounded-lg">
                  <option value="1990" className="">1990</option>
                </select>
                <select name="" id="monthSelect" className="p-4 rounded-lg">
                  <option value="8">8月</option>
                </select>
                <select name="" id="daySelect" className="p-4 rounded-lg">
                  <option value="15">15日</option>
                </select> --> */}
                <input type="number" min="1900" max="2099" step="1" name="year" placeholder="請輸入年份"  className="p-4 rounded-lg text-black"  value={formData.year} onChange={handleInputChange}/>
                <select name="month" id="monthSelect" className="p-4 rounded-lg text-black" value={formData.month} onChange={handleSelectChange}>
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
                <input type="number" min="1" max="31" step="1" name="day" placeholder="請輸入日期"  className="p-4 rounded-lg text-black" value={formData.day}  onChange={handleInputChange}/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="countySelect" className="text-white block mb-2">地址</label>
              <div className="grid grid-cols-2 gap-2">
                {/* <!-- <select name="" id="countySelect" className="p-4 rounded-lg">
                  <option value="高雄市">高雄市</option>
                </select> --> */}
                {/* <!-- <select name="" id="districtSelect" className="p-4 rounded-lg">
                  <option value="新興區">新興區</option>
                </select> --> */}
                <input type="text" name="city" placeholder="請輸入縣市" className="p-4 rounded-lg text-black" required value={formData.city} onChange={handleInputChange} />
                <input type="text" name="district" placeholder="請輸入鄉鎮" className="p-4 rounded-lg text-black" required value={formData.district} onChange={handleInputChange} />
                <input type="text" name="address" placeholder="請輸入詳細地址" className="col-span-2 p-4 rounded-lg text-black" required value={formData.address} onChange={handleInputChange} />
              </div>
            </div>
            <div className="flex items-center mb-10">
              <input type="checkbox" name="agreed" id="readInfo" className="w-6 h-6 rounded accent-primary-120" required />
              <label htmlFor="readInfo" className="text-white ml-2">我已閱讀並同意本網站個資使用規範</label>
            </div>
            <button type='submit' className="block w-full text-white bg-primary-100 hover:bg-primary-120 disabled:bg-neu-60 disabled:text-neu-40 py-4 rounded-lg mb-4">完成註冊</button>
            </section>

            <p>
              <span className="text-white">已經有會員了嗎？</span>
              <Link to="/login" className="text-primary-100 hover:text-primary-120 underline ml-2">立即登入</Link>
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
