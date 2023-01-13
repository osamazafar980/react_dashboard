import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Search, Inject } from '@syncfusion/ej2-react-grids'
import {employeesData, contextMenuItems, employeesGrid} from '../data/dummy'
import {Header} from '../components'

const Employees = () => {
  return (
    <div className='m-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header
        title = 'Employees'
        category = 'Page'
      />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
        {
          employeesGrid.map((item,index) => (
            <ColumnDirective
              key={index}
              {...item}
            />
          ))
        }
        </ColumnsDirective>
        <Inject
        services = {[ Page, Toolbar, Search]}
        />
      </GridComponent>
    </div>
  )
}

export default Employees