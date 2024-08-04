import BarChartbox from '../../components/barChartbox/BarChartbox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'
import ChartBox from '../../components/chartBox/ChartBox'
import PieChartBox from '../../components/pieChartBox/PieChartBox'
import TopBox from '../../components/topBox/TopBox'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-left">
      <PieChartBox />
      <BarChartbox title={"Revenue Earned"} color={"#4285f4"}/>
      </div>
      <div className="home-center">
          <ChartBox />
          <BigChartBox />
      </div>
      <div className="home-right">
      <TopBox />
          <BarChartbox title={"Profit Earned"} color={"orange"} />
      </div>
    </div>
  )
}

export default Home