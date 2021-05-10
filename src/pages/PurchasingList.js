import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ProductCard from 'src/components/product//ProductCard';
import LatestOrders from 'src/components/dashboard//LatestOrders';
import LatestProducts from 'src/components/dashboard//LatestProducts';
import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';
import Sales from 'src/components/dashboard//Sales';
import products from 'src/__mocks__/products';

const ProductList = () => (
  <>
    <Helmet>
      <title>Products | DAK</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
      <ProductListToolbar />
      <Box sx={{ pt: 3 }}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={3}
          >
            <Sales />
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          > */}
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
          {/* </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          > */}
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
          {/* </Grid> */}
          {/* <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
        </Grid>
        </Box>
      </Container>
    </Box>
    
  </>
);

export default ProductList;



{/* <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            // {/* {products.map((product) => ( */}
            //   <Grid
            //     // item
            //     // key={product.id}
            //     lg={4}
            //     md={6}
            //     xs={12}
            //   >
            //     <Sales />
            //     {/* <ProductCard product={product} /> */}
            //   </Grid>
            // // {/* ))} */}
    //       </Grid>
    //     </Box>
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         pt: 3
    //       }}
    //     >
    //       <Pagination
    //         color="primary"
    //         count={3}
    //         size="small"
    //       />
    //     </Box>
    //   </Container>
    // </Box>
