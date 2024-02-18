import MyPieChart from './piechart'
import MyComponent from './Graphs'
import './Analytics.css'
import AnalyticCard from './AnalyticCard'
function Analytics() {
  const arr = ['Chocolate', 'Butter', 'Jam']
  return (
    <>
      <div className='flex flex-row mt-5 justify-center' id='main-content'>
        <div className='flex flex-col basis-5/6 ml-5 mr-5 mt-10'>
          <div className='flex justify-center items-center text-3xl text_gradient'>
            ANALYTICS OF YOUR PRODUCTS
            <i className='fa fa-chart-simple fa-5x ml-3 icon-color text-3xl'></i>
          </div>
          <div className='flex flex-row m-5' id='number-analytics'>
            <div className='flex basis-1/3 m-5 bg-green-200 text-analytics justify-center items-center rounded-2xl'>
              <AnalyticCard
                title='Best Selling products'
                products={arr}
                category1={true}
                category2={false}
                category3={false}
              />
              <AnalyticCard
                title='Top Rated products'
                products={arr}
                category1={false}
                category2={true}
                category3={false}
              />
              <AnalyticCard
                title='Decreasing Sales products'
                products={arr}
                category1={false}
                category2={false}
                category3={true}
              />
            </div>
          </div>
          <div
            className='flex flex-row mt-5 justify-center items-start'
            id='visual-analytics'
          >
            <div className='flex flex-col basis-1/2 justify-center items-center graph-box'>
              <p className='text-2xl font-serif text-green-500 mt-12'>
                Weekly Sales report
              </p>
              <div>
                <MyComponent />
              </div>
            </div>
            <div className='flex flex-col basis-1/2 justify-center items-center graph-box'>
              <p className='text-2xl font-serif text-green-500'>
                Sales distribution Pie Chart
              </p>
              <div>
                <MyPieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics
