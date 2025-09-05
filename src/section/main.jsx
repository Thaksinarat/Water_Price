import { useState } from "react";

export const Main = () => {
    const [unitPrice, setUnitPrice] = useState();
    const [maintainFee, setMaintainFee] = useState();
    const [previousMonth, setPreviousMonth] = useState();
    const [currentMonth, setCurrentMonth] = useState();
    const [result, setResult] = useState();

    const handleCalculate = () => {
            const calUsage = currentMonth - previousMonth;
            const calResult = (calUsage * unitPrice) + maintainFee;

            setResult(calResult);
        }

    return (
        <>
            <section className="flex flex-col items-center mt-10 min-h-screen">
                <h1 className="text-2xl md:text-5xl font-bold mb-2">💧Water Price Calculator</h1>
                <h1 className="text-lg md:text-2xl font-bold">โปรแกรมคำนวณค่าน้ำ</h1>

                <div className="flex flex-col md:flex-row md:gap-4 max-w-screen-sm items-between justify-between">
                    <div className="mt-10 md:mt-10 flex flex-col items-start">
                        <label className="text-md">Enter price/a unit</label>
                        <input type="number" step={0.01} value={unitPrice} onChange={(e) => setUnitPrice(parseFloat(e.target.value) || "")} className="pl-2 border border-gray-500 rounded" placeholder="0.00" />
                    </div>

                    <div className="mt-2 md:mt-10 flex flex-col items-start">
                        <label className="text-md">Enter maintain fee</label>
                        <input type="number" step={0.01} value={maintainFee} onChange={(e) => setMaintainFee(parseFloat(e.target.value) || "")} className="pl-2 border border-gray-500 rounded" placeholder="0.00" />
                    </div>
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:gap-4 max-w-screen-sm items-between justify-between bg-gray-300 rounded-lg p-5 mt-4 md:mt-20">
                    <div className="flex flex-col items-start text-xl font-bold">
                        <label>🗓️ Previously mounth</label>
                        <input type="text" value={previousMonth} onChange={(e) => setPreviousMonth(parseFloat(e.target.value) || "")} className="pl-2 border border-gray-500 rounded" placeholder="0" />
                    </div>

                    <div className="flex items-center text-3xl font-bold">
                        <p className="hidden md:flex">➡️</p>
                        <p className="md:hidden pl-22">⬇️</p>
                    </div>

                    <div className="flex flex-col items-start text-xl font-bold">
                        <label>📌 Current mounth</label>
                        <input type="text" value={currentMonth} onChange={(e) => setCurrentMonth(parseFloat(e.target.value) || "")} className="pl-2 border border-gray-500 rounded" placeholder="0" />
                    </div>
                </div>

                <div className="mt-5">
                    <button onClick={handleCalculate} className="text-lg font-medium text-white bg-blue-600 rounded-xl p-4 cursor-pointer hover:bg-blue-700 transition hover:-translate-y-1 hover:shadow-lg">Calculate✨</button>
                </div>

                <div className="mt-10 text-4xl font-bold">
                    <p>Result: {result}</p>
                </div>

            </section>
        </>
    )
}