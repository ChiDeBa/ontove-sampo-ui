import React from 'react'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import ponLogo from '../../../img/logos/stringa-loghi-jpg-1.jpg'
import dslccLogo from '../../../img/logos/dslcc.png'
import net7Logo from '../../../img/logos/net7.png'

/**
 * A component for creating a footer. The logos are imported inside this component.
 */
const Footer = props => {
  return (
    <Paper
      sx={theme => ({
        boxShadow: '0 -20px 20px -20px #333',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        rowGap: theme.spacing(2),
        columnGap: theme.spacing(3),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down(496)]: {
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2)
        },
        minHeight: {
          xs: props.layoutConfig.footer.reducedHeight,
          hundredPercentHeight: props.layoutConfig.footer.reducedHeight,
          reducedHeight: props.layoutConfig.footer.defaultHeight
        }
      })}
    >
      <Box
        component='a'
        href='http://www.ponricerca.gov.it/pon-ricerca/programma/'
        target='_blank'
        rel='noopener noreferrer'
        sx={theme => ({
          width: 500,
          height: 40,
          [theme.breakpoints.up(props.layoutConfig.reducedHeightBreakpoint)]: {
            width: 167,
            height: 34
          }
        })}
      >
        <Box
          component='img'
          src={ponLogo}
          alt='PaginafinanziamentiPon'
          sx={{
            height: '100%'
          }}
        />
      </Box>
      <Box
        component='a'
        href='https://www.unive.it/pag/16966'
        target='_blank'
        rel='noopener noreferrer'
        sx={theme => ({
          width: 190,
          height: 80,
          [theme.breakpoints.up(props.layoutConfig.reducedHeightBreakpoint)]: {
            width: 168,
            height: 45
          }
        })}
      >
        <Box
          component='img'
          src={dslccLogo}
          alt='CaFoscari Dipartimento di Studi linguistici e culturali comparati'
          sx={{
            height: '100%'
          }}
        />
      </Box>
      <Box
        component='a'
        href='https://www.netseven.it/'
        target='_blank'
        rel='noopener noreferrer'
        sx={theme => ({
          width: 200,
          height: 40,
          [theme.breakpoints.up(props.layoutConfig.reducedHeightBreakpoint)]: {
            width: 130,
            height: 33
          }
        })}
      >
        <Box
          component='img'
          src={net7Logo}
          alt='Pagina web Net7'
          sx={{
            width: '100%'
          }}
        />
      </Box>
    </Paper>
  )
}

Footer.propTypes = {
  layoutConfig: PropTypes.object.isRequired
}

export default Footer
