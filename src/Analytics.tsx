import MyPieChart from "./piechart"
import MyComponent from "./Graphs"

function Analytics(){
    return(
        <>
            <div className="bg-green-300" id="fullScreen">

            </div>
            <div className="flex flex-row mt-5" id="main-content">
                <div className="flex basis-1/6 bg-green-300">

                </div>
                <div className="flex flex-col basis-5/6 ml-5 mr-5 mt-10">
                    <div className="flex justify-center items-center">
                        <p className="text-green-500 text-5xl font-serif">
                            ANALYTICS OF YOUR PRODUCTS
                        </p>
                        <i className="fa fa-chart-simple fa-5x ml-3 icon-color"></i>
                    </div>
                    <div className="flex flex-row mt-5 mb-5" id="number-analytics"> 
                        <div className="flex flex-col basis-1/3 m-3 bg-green-200 text-analytics justify-center items-center rounded-2xl">
                            <div className="flex flex-row">
                                <p className="font-bold text-3xl text-green-900">Best Selling products</p>
                                <i className="fa fa-chart-line fa-3x icon-color ml-3"></i>
                            </div>
                            <div className="mt-5">
                                <ul className="font-bold text-3xl text-green-700">
                                    <li className="m-2">chocolate</li>
                                    <li className="m-2">Butter</li>
                                    <li className="m-2">Jam</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col basis-1/3 m-3  bg-green-200 text-analytics justify-center items-center rounded-2xl">
                            <div className="flex flex-row">
                                <p className="font-bold text-3xl text-green-900">Top rated products</p>
                                <i className="fa fa-star fa-3x icon-color ml-3"></i>
                            </div>
                            <div className="mt-5">
                                <ul className="font-bold text-3xl text-green-700">
                                    <li className="m-2">chocolate</li>
                                    <li className="m-2">Butter</li>
                                    <li className="m-2">Jam</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col basis-1/3 m-3  bg-green-200 text-analytics justify-center items-center rounded-2xl">
                            <div className="flex flex-row">
                                <p className="font-bold text-3xl text-green-900">Products with decreasing sales</p>
                                <i className="fa fa-angles-down fa-3x icon-color ml-1"></i>
                            </div>
                            <div className="mt-5">
                                <ul className="font-bold text-3xl text-green-700">
                                    <li className="m-2">chocolate</li>
                                    <li className="m-2">Butter</li>
                                    <li className="m-2">Jam</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-5 justify-center items-start" id="visual-analytics">
                        <div className="flex flex-col basis-1/2 justify-center items-center graph-box">
                            <p className="text-2xl font-serif text-green-500 mt-12">Weekly Sales report</p>
                            <div>
                            <MyComponent/>
                            </div>
                        </div>
                        <div className="flex flex-col basis-1/2 justify-center items-center graph-box">
                            <p className="text-2xl font-serif text-green-500">Sales distribution Pie Chart</p>
                            <div>
                            <MyPieChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics