import React, { memo } from 'react';
import RefreshIcon from '../../../assets/images/refresh.svg';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share;

function Painel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, recovered, daths, todayCases, todaysDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`Pais-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `Pais: ${country} - recuperados: ${recovered}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netfly.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Comartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="container" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )


  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID19 </Typography>
          <Typography variant="h6" component="span" color="primary">Painel Corona Vírus </Typography>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
        </div>
        <div className="pt-2">
          <Select onChange={onChange} value={country}>
            {COUNTRIES.map(renderCountries)}
          </Select>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Painel);