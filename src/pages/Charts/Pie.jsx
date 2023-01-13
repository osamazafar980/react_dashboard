import React from 'react'
import {  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts'
import { Header } from '../../components'
import { pieChartData} from '../../data/dummy'

import { useStateContext } from '../../contexts/ContextProvider'

const Pie = () => {

  const {currentMode} = useStateContext()

  return (
    <div >
      <div className='m-4 md:m-10 mt24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header
        category = 'Pie'
        title = 'Expenditure Per Category'
      />
      </div>
      <AccumulationChartComponent 
        id='pie-chart' 
        legendSettings={{ visible: true }} 
        enableSmartLabels={true} 
        enableAnimation={true} 
        tooltip={{ enable: true, format: '${point.x} : <b>${point.y}%</b>' }}
        background = {currentMode === 'Dark' ? '#33373E' : "#fff"}
      >
              <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]}/>
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective 
                  dataSource={pieChartData} 
                  name='Expenditure' 
                  xName='x' 
                  yName='y' 
                  explode={true} 
                  explodeOffset='10%' 
                  explodeIndex={0} 
                  dataLabel={{
                  visible: true,
                  position: 'Inside', name: 'text',
                  font: {
                      fontWeight: '600'
                  }
                  }} radius='70%'>
                </AccumulationSeriesDirective>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>;
    </div>
  )
}

export default Pie