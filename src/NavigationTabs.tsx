import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import React, { useState } from 'react'
import Dashboard from '@material-ui/icons/Dashboard';
import Work from '@material-ui/icons/Work';
import List from '@material-ui/icons/List';
import History from '@material-ui/icons/History';
import Help from '@material-ui/icons/Help';

export const NavigationTabs = () => {
  const [value, setValue] = useState('3')
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label='Tabs example' centered>
            <Tab label='Board' value='1' icon={<Dashboard />}/>
            <Tab label='Task' value='2' icon={<Work />}/>
            <Tab label='List' value='3' icon={<List />}/>    
            <Tab label='Record' value='4' icon={<History />}/>
            <Tab label='Helper' value='5' icon={<Help />}/>                      
          </TabList>
        </Box>
        <TabPanel value='1'>This is Board.</TabPanel>
        <TabPanel value='2'>This is Task.</TabPanel>
        <TabPanel value='3'>This is List.</TabPanel>
        <TabPanel value='4'>This is Record. Probably it stores previous tasks?</TabPanel>
        <TabPanel value='5'>This is Helper. What kind of helper function do we need, clipper?</TabPanel>
      </TabContext>
    </Box>
  )
}
