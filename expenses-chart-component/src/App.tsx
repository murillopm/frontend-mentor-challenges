import { useState } from 'react'

import logo from './assets/logo.svg'
import { maximumAmount, values } from './lib/data'

export function App() {
  const [activeDay, setActiveDay] = useState<string | null>(null)

  function handleBarClick(day: string) {
    if(day === activeDay) {
      setActiveDay(null)
      return
    }
    setActiveDay(day)
  }

  return (
    <div className="h-screen w-screen bg-brand-cream flex flex-col justify-center items-center ">
      <div className="mx-auto h-24 bg-brand-softRed w-[90%] sm:w-full max-w-md rounded-2xl px-6 py-5">
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex flex-col justify-between h-full">
            <p className="font-normal text-sm text-brand-veryPaleOrange font-body">
              My balance
            </p>
            <p className="font-bold text-2xl text-brand-veryPaleOrange font-body">
              $921.48
            </p>
          </div>
          <img src={logo} alt="Logo" className="h-4/6 pr-2"/>
        </div>
      </div>
      <div className="flex flex-col max-w-md w-[90%] sm:w-full bg-brand-veryPaleOrange mt-5 rounded-2xl px-7 py-6">
        <p className="font-bold font-body text-2xl text-brand-darkBrown">Spending - Last 7 days</p>
        <div className="flex h-36 w-full justify-between items-end mt-10">
          { values.map((item, index) => (
            <div key={index} className="flex flex-col h-full justify-end w-8 sm:w-10">
              <div 
                className={`w-full rounded-[4px] ${activeDay === item.day ? 'bg-brand-cyan hover:bg-brand-softCyan' : 'bg-brand-softRed hover:bg-brand-softOrange'} relative flex flex-col items-center group`}
                style={{
                  height: `calc(${(item.amount/maximumAmount)*100}% - 20px)`
                }}
                onClick={() => handleBarClick(item.day)}
                >
                  <span className="hidden group-hover:block absolute w-[52px] py-1 text-body text-brand-veryPaleOrange text-[12px] text-center font-bold bottom-[calc(100%+5px)] bg-brand-darkBrown rounded-md">${item.amount}</span>
              </div>
              <p className="text-center font-body text-sm text-brand-mediumBrown w-full">{item.day}</p>
            </div>
          )) }
        </div>
        <div className="w-full mt-4 border-t-2 border-t-brand-cream pt-6">
          <p className="font-body text-brand-mediumBrown text-lg">Total this month</p>
          <div className="flex justify-between">
            <p className="font-body font-bold text-3xl md:text-5xl text-brand-darkBrown mt-1">$478.33</p>
            <div>
              <p className="text-right font-body text-sm md:text-md font-bold text-brand-darkBrown">+2.4%</p>
              <p className="text-right font-body text-sm md:text-md text-brand-mediumBrown">from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}