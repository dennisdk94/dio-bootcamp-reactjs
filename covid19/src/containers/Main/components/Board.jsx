import React, { memo } from 'react';
import Proptypes from 'prop-types';
import { Grid, Skeleton } from '../../../components';
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} />

  return (
    <Grid container spacing={4} >
      <Grid item sx={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78" />
      </Grid>
      <Grid item sx={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item sx={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item sx={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#5d78" />
      </Grid>
      <Grid item sx={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="67CB" />
      </Grid>
    </Grid>
  )
}

export default memo(Board);