import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Paper from '@material-ui/core/Paper';


class App extends Component {

  state = {
    total:{
      amount: 0,
      count: 0,
    },
    
    menus:[
      {
        title: 'Sushi',
        price: 1.00,
        count: 0
      },
      {
        title: 'Sushi',
        price: 1.20,
        count: 0
      },
      {
        title: 'Sushi',
        price: 1.50,
        count: 0
      },
      {
        title: 'Sushi',
        price: 1.80,
        count: 0
      },
      {
        title: 'Sushi',
        price: 2.00,
        count: 0
      },
      {
        title: 'Sushi',
        price: 2.50,
        count: 0
      },
      {
        title: 'Sushi',
        price: 2.80,
        count: 0
      },
      {
        title: 'Sushi',
        price: 3.00,
        count: 0
      }
    ]
  }

  add(index){
    const menus = [...this.state.menus];
    const total = {...this.state.total};
    
    menus[index].count++;
    total.count++;
    total.amount += menus[index].price;
    this.setState({menus, total});
  }

  del(index){
    const menus = [...this.state.menus];
    const total = {...this.state.total};
    if(menus[index].count === 0) return;
    menus[index].count--;
    total.count--;
    total.amount -= menus[index].price;
    this.setState({menus, total});
  }

  reset(){
    const menus = this.state.menus.map(menu => {
      menu.count = 0;
      return menu;
    });

    const total = {
      amount: 0,
      count: 0
    };

    this.setState({menus, total});

  }

  render() {
    return (
      <div>
        <TitleBar title="Sushi Calculator"/>
        <main>
          <SushiCalculator 
            menus={this.state.menus} 
            total={this.state.total} 
            add={this.add.bind(this)} 
            del={this.del.bind(this)} 
            reset={this.reset.bind(this)}
          />  
        </main>

      </div>
    );
  }
}

export default App;

const TitleBar = (props) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);

const SushiCalculator = (props) => (
  <Grid direction="row" container justify="center" spacing={24} style={{margin: 10}}>
    <Grid  xs={12} item>
      <Typography variant="h4" >Total : {props.total.count} Price : {props.total.amount.toFixed(2)}</Typography>
      <Button onClick={() => props.reset()} variant="outlined" >
        Reset
      </Button>
    </Grid>
    {props.menus.map( (menu, index) => (
    <Grid key={index} item xs={6} md={4} lg={3}>
        <Card >
          <CardActionArea>
            <CardContent>
              <Grid direction="row" justify="center" container spacing={24}>
  
                <Grid item >
                  <IconButton aria-label="Cart">
                    <Badge badgeContent={menu.count} color={menu.count === 0?'primary':'secondary'}>
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item >
                  <Typography variant="h6">
                    {menu.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {menu.price.toFixed(2)}
                  </Typography>
                </Grid>
                

              </Grid>
            </CardContent>
              
          </CardActionArea>
          <CardActions>
          <Grid direction="row" justify="center" container spacing={24}>
            <Grid item >
              <Button onClick={() => props.add(index)} variant="contained" color="primary" aria-label="Add">
                <AddIcon />
              </Button>
              <Button onClick={() => props.del(index)} variant="contained" color="secondary" aria-label="Add">
                <RemoveIcon />
              </Button>
            </Grid>
          </Grid>
          </CardActions>
        </Card>
    </Grid>
    ))}
    
  </Grid>
);


