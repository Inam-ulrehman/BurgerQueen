// import * as React from 'react'
// import { styled } from '@mui/material/styles'
// import {
//   Box,
//   Paper,
//   Grid,
//   Button,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
// } from '@mui/material/'

// import { landingTwo } from '../utils/data'
// import { Link } from 'react-router-dom'
// import TestPageTwo from '../components/TestPageTwo'

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }))

// export default function ColumnsGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container justifyContent='center' spacing={2}>
//         {landingTwo.map((item) => {
//           const { id, title, classType, paragraph, path, image, buttonTitle } =
//             item
//           return (
//             <Grid justifyContent='center' key={id} item xs={12} md={6}>
//               <Item>
//                 <Card sx={{ maxWidth: 370 }}>
//                   <CardMedia
//                     component='img'
//                     height='140'
//                     image={image}
//                     alt='burger'
//                   />
//                   <CardContent>
//                     <Typography variant='body2'>{paragraph}</Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button variant='outlined'>
//                       <Link to={path}>{buttonTitle}</Link>
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Item>
//             </Grid>
//           )
//         })}
//       </Grid>
//       <TestPageTwo />
//     </Box>
//   )
// }

import React from 'react'
import TestPageTwo from '../components/TestPageTwo'

const TestPage = () => {
  return (
    <div>
      <TestPageTwo />
    </div>
  )
}

export default TestPage
