import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Tooltip, Zoom, Crosshair, CandleSeries } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components'
import { financialChartData} from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const Financial = () => {

  const {currentMode} = useStateContext()
  const primaryxAxis = { title: 'Date', valueType: 'Category',majorGridLines: { width: 0 }  };
  const primaryyAxis = { title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 15 };
  const style = { textAlign: "center" };
  const legendSettings = { visible: true };
  return (
    <div >
      <div className='m-4 md:m-10 mt24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category = 'Pie'
        title = 'Expenditure Per Category'
      />
      </div>
      <ChartComponent id='charts' style={style} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} legendSettings={legendSettings} title='Shirpur Gold Refinery Share Price'>
      <Inject services={[CandleSeries, Tooltip, Category, Crosshair, Zoom]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={financialChartData} xName='x' yName='low' name='SHIRPUR-G' type='Candle' low='low' high='high' open='open' close='close' bearFillColor='#e56590' bullFillColor='#f8b883'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
    </div>
  )
}

export default Financial