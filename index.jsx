const {Typography,Box,Button,Icon,BottomNavigationAction,Fab,Container,Grid,Paper,withStyles,InputLabel,makeStyles,ImageList,ImageListItem,BottomNavigation,Breadcrumbs,IconButton,Stepper,Step,StepLabel,MobileStepper,Tabs,Tab,AppBar,Divider,withWidth,FormLabel,FormControl,FormGroup,Hidden,Slide,TextField,FormControlLabel,Toolbar}=MaterialUI
const {useScrollTrigger,Snackbar,TextareaAutosize,createStyles,CardHeader,CardMedia,Card,CardContent,SwipeableDrawer,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions}=MaterialUI
  const useStyles = theme => ({
    main:{
      // backgroundColor:"rgba(21,21,21, 0.8)"
    },
    in:{backgroundColor:"rgba(21,21,21, 0.8)"},
    appbar:{
      backgroundColor: "rgba(21,21,21, 0.01)",
      height:"10vh",
      position:"initial",
      "box-shadow":"none"
    },
    intro1:
    {
     
      filter:" blur(3px)",
      "-webkit-filter": "blur(3px)",
     
      display:"flex",
      "z-index": -1,
      overflow:"hidden",  
      height:"100%"
    },
    Intro:
    {
      "background-color": "#000000",
      " background-image":" linear-gradient(147deg, #000000 0%, #434343 74%)",
      height:"100%"
    },
    body_section:{
      background: "linear-gradient(to right, #232526, #414345)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      height:"100%",
      "padding-top": "25px"
    },
    conclusion:
    {
      background: "rgb(3,3,5)",

// background: "linear-gradient(180deg, rgba(65,67,69,1) 20%, rgba(174,173,67,0.75) 75%, rgba(65,67,69,1) 97%)",
background: "linear-gradient(180deg, rgba(65,67,69,1) 5%, rgba(47,48,49,1) 26%, rgba(202,39,39,0.75) 98%)",
      height:"100vh"
},
    footer:{
      background:"linear-gradient(180deg, rgba(202,39,39,0.75) 0%, rgba(47,48,49,1) 8%, rgba(65,67,69,1) 88%)",
    },
    obsorver:{
      backgroundColor:"pink",
      height:"50vh",
      width:"50vw",
      // left: "0",
      // top: "0",
      position: "fixed",
      "z-index": 1,
      // margin:"20% 50px 20% 5%",
      // height:"70vh",
      // width:"90vw",
      left: "50px",
      top: "250px",
      left:"50px",
      bottom:"250px"
    },

    introimagelg:{
      padding:"150px","padding-top":"0px",
      [theme.breakpoints.up('lg')]: {
        padding:"200px",
        "padding-top":"0px"
      },

      
    },

    theme2:{
      width:"90vw",
      [theme.breakpoints.between('sm',"xl")]: {
      "padding-left":"3vw",
      },
      // backgroundColor:"pink",
      height:"100vh",
      display:"flex"
      
    },
    teme2img:{

        // backgroundColor:"pink",
      height: "100%", 
      "border-radius": "15px",
      "width":"100%",
      // backgroundColor:"yellow",
     
      [theme.breakpoints.down('md')]: {
      // backgroundColor:"red",
      height: "30vh",
      padding:"0px 30vw",
      "padding-top":"1vh",
        },
      
        [theme.breakpoints.down('sm')]: {
      // backgroundColor:"red",
      padding:"0px 10vw",
      "padding-top":"1.3vh"

        },
    },
    teme2header:{
        // backgroundColor:"red",
        height: "100%",
        [theme.breakpoints.down('md')]: {
        height: "50vh",},
        width:"100%",
        
    }
    ,
    theme2main:{
      height:"65vh",
      [theme.breakpoints.down('md')]: {
        // backgroundColor:"red",
        height: "45vh",
          },
      // backgroundColor:"yellow",
      "overflow-y":"scroll",
      'text-align':"center"
      
    },
    theme2mainp:
    {
      // backgroundColor:"grey",
      "font-size":"4vh"
    }

  });
          {/* <MediaCard  title={"Lizard"}  url={"/cat.jpg"} body={ "Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"} /> */}
        
  class App extends React.Component
{
  constructor(props)
  {
    super(props)

    window.$=new Loader()
    this.state={
      swipe:false,
      dialog:false,
      edit:false
    }

    this.close=this.close.bind(this)
    this.open=this.open.bind(this)
    this.iconbuttton=this.iconbuttton.bind(this)
    document.addEventListener("ocm",()=>{this.setState((state, props) => ({
      dialog:true
    }))  })
    setTimeout(()=>{document.dispatchEvent(new Event('ocm'))},20000)
    document.addEventListener("cm",()=>{this.setState((state, props) => ({
      dialog:state.dialog
    }))  })


    
    document.addEventListener("oedit",()=>{this.setState((state, props) => ({
      swipe:true,
      edit:true
    }))  })
  }

  close(s)
  {
  
    this.setState((state, props) => ({
      swipe:false
    }));  
  }

  open(s)
  {
  
    this.setState((state, props) => ({
      swipe:true
    })); 
    
    console.log("s")
    }


  iconbuttton()
  {
    

     this.setState((state, props) => ({
      swipe: !state.a 
    }));
  
  }
  
  render()  
  {
    let a={"text-align": "center","font-family": "Poppins",color:"white"}

    let q={display:"flex","flex-direction":"column",justifyContent:"center","align-items":"center",height:"30vh",width:"100%",position: "absolute",top:" 25%"}
    if(window.$$ ==1)
    {
      q["top"]="12%"
      q["height"]="83vh"
    }
    const { classes } = this.props;

    return (<>
      <Swipe cl={this.close} op={this.open} val={this.state.swipe} on={this.state.edit}/>  
      <SimpleSnackbar/>
         <main className={classes.main}>
     
       {/* <MediaCard  title={"Lizard"}  url={"/cat.jpg"} body={ "Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"} /> */}

          <Grid Container  xs={12} >
          
          
          
          {/* header */}
          <Grid item xs={12} className={classes.in} style={{height:54 }}>
              <HideOnScroll ib={this.iconbuttton} appbar={classes.appbar} />
            </Grid>
          
          
          {/* intro */}
          <Grid item xs={12} style={{height:"95vh"}} >
              <Box className={classes.Intro}>

               <Box className={classes.intro1}>
                <Container maxWidth="md">
                <img  draggable={false} src={$._data.Intro.Image} alt="Trulli" width="100%" height="100%" ></img>  
                </Container>
              </Box>
      
              <Box style={q} >
              {window.$$ ==1 && 
                  <>
                    <Box className={classes.theme2}>
                      <Grid container >
                        <Grid item xs={12} lg={6} id="w" className={classes.teme2img}>
                        {/* hhh */}
                        <CardMedia
                            image={$._data.theme2.img}
                            title="Contemplative Reptile"   
                            style={{width:"100%",height:"100%", "border-radius": "30vh", "background-size": "contain"}}
                          />
                        </Grid>
                        <Grid item className={classes.teme2header}  lg={6}>
                        <Hidden xsDown>
                            <Typography variant="h2" style={a} noWrap>{$._data.theme2.header}</Typography>
                            <Box className={classes.theme2main}><Typography variant="p" style={a} className={classes.theme2mainp} wrap>{$._data.theme2.main}</Typography></Box>
                        </Hidden>

                          <Hidden smUp>
                            <Typography variant="h4" style={a} noWrap>{$._data.theme2.header}</Typography>
                              <Box className={classes.theme2main}>
                                <Typography variant="p" style={a} className={classes.theme2mainp} wrap>{$._data.theme2.main}</Typography>
                              </Box>
                          </Hidden>
                        </Grid>
                        
                      </Grid>

                    </Box>
                      {/* <CardMedia
                      style={{height: "70vh", "border-radius": "15px","width":"70vw"}}
                        image="/cat.jpg"
                        title="Contemplative Reptile"   
                           
                      /> */}
                  </>
                  }
              {window.$$ ==2 && 
                  <>
                    <Hidden xsDown>
                      <Typography variant="h1" style={a} noWrap>{$._data.Intro.main}</Typography>
                      <Typography variant="h4" style={a} wrap>{$._data.Intro.submain}</Typography>
                    </Hidden>

                    <Hidden smUp>
                      <Typography variant="h4" style={a} noWrap>{$._data.Intro.main}</Typography>
                      <Typography variant="span" style={a} wrap>{$._data.Intro.submain}</Typography>
                    </Hidden>
                  </>}
  
              </Box>       
              </Box>
              <Divider />
              
            </Grid>
          
          
          {/* body */}
          {window.$$ ==2 && 
          <Grid item xs={12}  >        
              <Box className={classes.body_section}>
                <Grid container lg={12} xs={12}  direction="row"  justifyContent="flex-start" >
                <Obsorvermaster/>    
                </Grid>
              </Box>
            </Grid>}
          
          
          {/* conclusion */}
          {window.$$ ==2 && 

          <Grid item xs={12}  style={{height:"100%"}}>
              <Box className={classes.conclusion} style={{height:"100%"}}>
                <Splider />            
              </Box>
            </Grid>
  }          
           
           
          {/* footer */}
          <Grid item xs={12} style={{height:"100%"}}  className={classes.footer} >
              <Divider/>
              <br/>
              {/* <Divider style={{background:"black"}} /> */}

              <Box>
              <Container maxWidth="md" >
              {/* <Typography variant="h2" style={{"font-family": "Poller One",color:"white","text-align":" left","padding-left": "8vw"}} noWrap>Cards</Typography> */}
           
              <Hidden xsDown>
                    <Typography variant="h2" style={{"font-family": "Poppins",color:"white","text-align":" left"}} noWrap>cards</Typography>
                    <Typography variant="h4" style={{"text-align": "center","font-family": "Poppins",color:"white","text-align":" left",  "font-size": "13px"}} wrap>wish your loved ones using cards</Typography>

              </Hidden>

              <Hidden smUp>
                    <Typography variant="h4" style={{"font-family": "Poppins",color:"white","text-align":" left",}} noWrap>cards</Typography>
                    <Typography variant="span" style={{"text-align": "center","font-family": "Poppins",color:"white","text-align":" left",  "font-size": "13px"}} wrap>wish your loved ones using cards</Typography>
              </Hidden>

             
              <Typography variant="h5" style={{color:"grey"}}>
                by :<ul>
                <li> Seven<br/> </li>
                 <a href="https://www.instagram.com/sevennn.07/" class="fa fa-instagram"></a>
                <br/>
                <li> Rehan khan<br/></li>
                <a href="https://www.instagram.com/rehaaaan.03/" class="fa fa-instagram"></a>
                </ul>
              </Typography>
              </Container>
              </Box>
            </Grid>
          </Grid>



          {/* <HideOnScroll  appbar={classes.appbar} /> */}


        </main>
       {this.state.dialog && <AlertDialogSlide /> }
      
        </>
      
    )
  }
}

// function Intro

const useStyles_card = makeStyles((theme) => createStyles(
  {
  root: {
    // maxWidth: 345,
    // margin:"5px"
    // width: "100vh",
    // background: "linear-gradient(to right, #485563, #29323c)"
    backgroundColor:"rgb(225, 225, 225)"
  },
  media: {
    height: "50vh",
    
    [theme.breakpoints.up('lg')]: {
      height: "70vh",
    
    }
  },
  text:{
    "font-family": "Poppins"
  },
  header:{
    padding:"5px",
    "padding-left": "12px"
  },
  grid:{
    margin:"3vh",
    display:"flex",
    // alignItems:"center"  ,
    "align-items": "center",
    "flex-direction": "column",
    "min-width":"70vw"
  },
  box:{
    height:"70vh",
    width:"70vw",
    left:"30%",   
    backgroundColor:"rgba(21,21,21, 0.1)"
  }
}));

 function MediaCard(props) {
  const classes = useStyles_card();
  const [checked, setChecked] = React.useState(props.display);
  document.addEventListener(`${props.title}`,ev=>{
                                // console.log(props.title)
                                setChecked(!checked);
                                })
  document.addEventListener(`insert`,ev=>{
    // console.log(props.title,ob)
    window.ob.observe(props.refrence.current)
    // setChecked(false)  
    })
    // console.log(props)
  


  let display=checked? "none":"block"
  return (<>
<Box className={classes.box} style={{display:display}} ref={props.refrence} id={props.title} ></Box>
{checked && 
<Slide ref={props.refrence} direction={props.direction} in={checked} id={props.title}  timeout={1200} >
  <Grid item lg={12} xs={12}  className={classes.grid} id="2222">
        
      <Card className={classes.root}>
        {props.t == 1 &&
         <CardMedia
            className={classes.media}
            image={props.url}
            title="Contemplative Reptile"
            style={{"min-width":"70vw"}}
          />
        }
            

        {props.t == 2 && 
        <Container maxWidth="lg" style={{display:"flex","justify-content": "center","min-width":"70vw","bacgtound-color":"white"}}>
        <video  autoplay muted loop id="myVideo" className={classes.media}>
        <source src={props.url} type="video/mp4" />
                </video><Divider style={{"background-color":"black"}}/>
                </Container>
         }
         {props.title == "Video" && setTimeout(()=>{document.querySelector("video").play()},11) }
        
        
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" className={props.text}>
              {props.body}
            </Typography>
          </CardContent>
      </Card>
      <br/>
      
      
  <Divider/>
  {/* </Slide> */}
  </Grid>
  </Slide>
 }
    </>
  )

}


class Obsorvermaster  extends React.Component
{
  constructor(props)
  {
    super(props)
    
    this.e=[]
    window.e=()=>this.e
    this.perform=this.perform.bind(this)
      // this.obsorver={}
  
      }

    componentDidMount()
      {
        this.obsorver= new IntersectionObserver(this.perform,
          {
            root:null,
            // top, right, bottom, left
            // 10% 5% 40% 5%
            rootMargin:"-250px -50px ",
            threshold:0.05
          })
          window.ob=this.obsorver
          document.dispatchEvent(new Event("insert"))
        }

  perform(entries,ob)
  {
    
    // console.log(this)
    entries.forEach(ev=>{
      if(ev.isIntersecting == true)
      {
        // console.log(ev.target.id)
        document.dispatchEvent(new Event(`${ev.target.id}`))
      }
    })
  }    

  render()
  {let q=false
    return(<>
        {
          $._data.body_section
          .map(ev=>{
            let a=React.createRef();
            let b= <MediaCard refrence={a} 
             direction={q?"left":"right"} id={ev.title} t={ev.t} title={ev.title} display={false} url={ev.url} body={ ev.body} tr={()=>{console.log(props)}} />
            this.e.push(a)
            if(q)
            {
              q=false
            }
            else
            {
              q=true
            }
            return b
            })
        
        }
    </>)
  }
}


// app bar
function HideOnScroll(props) {
  const { children, window  } = props;
  // console.log(props)
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = true
  let a={"text-align": "center","font-family": "Poppins",color:"white","text-align":" left", "font-size":"5vh"}
  
  // useScrollTrigger({ target: window ? window() : undefined });
  return (
    // <Slide appear={false} direction="down" in={!trigger}>
        <AppBar className={props.appbar}>

          <Toolbar>
            <IconButton onClick={props.ib}   style={{padding:"0px 12px 0px 0px ",color:"white", "font-size":"5vh"}} ><Icon >menu</Icon></IconButton>
            <Typography variant="h5" style={a}>Cards</Typography>
          </Toolbar>
        </AppBar>
    // </Slide>
  );
}


class Splider extends React.Component
{
  componentDidMount()
  {
    window.abc= new Splide( '.splide', {
      type    : 'loop',
    perPage : 1,
    autoplay: true,
  } ).mount();
  
  }

    

  render()
  {
    let a={"text-align": "center","font-family": "Poppins",color:"white"}
    
    let b={"text-align": "center","font-family": "Poppins",color:"white"}
    return(  
      <Container maxWidth="md" >
   
      <Box style={{display:"flex","flex-direction":"column",justifyContent:"center",height:"30vh",width:"100%"}} >
          <Hidden xsDown>
          <Typography variant="h2" style={a} noWrap>{$._data.conclusion.header}</Typography>
          <Typography variant="h4" style={a} wrap>{$._data.conclusion.sub}</Typography>
          </Hidden>

          <Hidden smUp>
          <Typography variant="h5" style={a} noWrap>{$._data.conclusion.header}</Typography>
          <Typography variant="span" style={a} wrap>{$._data.conclusion.sub}</Typography>
           </Hidden>
      </Box>

      <Box className="splide">
        <div class="splide__track">
          <ul class="splide__list">

            {$._data.conclusion.Images.map(ev=>{
              return <li class="splide__slide">  
                     <CardMedia
                      style={{height: "60vh", "border-radius": "15px","background-size": "contain"}}
                        image={`${ev}`}
                        title="Contemplative Reptile"      
                      />
                    </li>
            })}
       
          </ul>
        </div>
        <div class="splide__progress">
          <div class="splide__progress__bar">
          </div>
        </div>
      </Box>
         
      <Box style={{display:"flex","flex-direction":"column",justifyContent:"center",height:"100%",width:"100%"}} >
          <Typography variant="p" style={b} >{$._data.conclusion.note}</Typography>
      </Box>

    </Container>
    )
  }
}

class Swipe extends React.Component
{

  constructor(props)
  {
    super(props)
    this.state={
      a:true,
      value:0,
      edit:0
    }
    this.tags=this.tags.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
    this.a={"text-align": "center","font-family": "Poppins",color:"white","text-align":" left"}
    this.c={"text-align": "center","font-family": "Comfortaa",color:"white","text-align":" left",  "font-size": "13px"}
    this.b={
      a:"Cards",
      b:"wish your loved ones using cards"
    }

    if(props.on ==true)
    {
      this.setState({value:1})

    }

    
  }

  
  a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  handleChange(a,b)
  {
    this.setState({value:b})
  }


  handleEdit(a,b)
  {
    this.setState({edit:b})
  }

  tags()
  {
    let a={"font-family": "Poppins",color:"white","text-align":" left","padding-left": "8vw"}
    let c={"font-family": "Comfortaa",color:"white","text-align":" left",  "font-size": "13px","padding-left": "8vw"}
    let d={"font-family": "Comfortaa",color:"white","text-align":" left",  "font-size": "13px"}
    let b={
      a:"Cards",
      b:"wish your loved ones using cards"
    }

    return<>
          <Grid container  direction="column"  style={{background:" linear-gradient(147deg, #000000 0%, #434343 74%)"}}>
          <Grid item container className="ffffffffffffffffffffff" direction="row"  >
            <Grid item container  direction="column" justifyContent="flex-start" xs={10} sm={10} md={10} lg={10} 
          
            >
              <Grid item >
                  <Hidden xsDown>
                    <Typography variant="h2" style={a} noWrap>{b.a}</Typography>
                  </Hidden>

                  <Hidden smUp>
                    <Typography variant="h4" style={a} noWrap>{b.a}</Typography>
                  </Hidden>
              </Grid>
              <Grid item style={{height:"5vh"}}>
                <Hidden xsDown>
                    <Typography variant="h4" style={c} wrap>{b.b}</Typography>
                  </Hidden>

                  <Hidden smUp>
                    <Typography variant="span" style={c} wrap>{b.b}</Typography>
                  </Hidden>

              </Grid>

            </Grid>
            <Grid item style={{display:"flex",width:"5vw",  "align-items": "center","justify-content": "center","padding-left":"8vw"}}> 
              <Box>
              <IconButton  onClick={this.props.cl} style={{padding:"0px 12px 0px 0px ",color:"white"}} ><Icon >arrow_forward_ios</Icon></IconButton>
                         
              </Box>
            
            </Grid>
          </Grid>
          <Grid item style={{height:"8.5vh"}} >
          <Tabs value={this.state.value} onChange={this.handleChange}  variant="fullWidth" aria-label="simple tabs example">
              <Tab label={<Typography variant="span" style={d}>About us</Typography>} {...this.a11yProps(0)} />
              <Tab label={<Typography variant="span" style={d}>Edit</Typography>} {...this.a11yProps(1)} />
            </Tabs>
            
          <Divider style={{background:"black","top":"-1"}}/>
          </Grid>
          <Grid item style={{height:"79vh","overflow-x":"hidden","overflow-y": "scroll",}}>
          {this.state.value==1 &&    <Edit value={this.state.edit} change={this.handleEdit}/> }
{this.state.value==0 &&   <Container maxWidth="md">    <DialogContent style={{    background: "rgb(225 225 225)"}}>
        <Typography variant="p" style={{"font-size":"3vh","font-family":"Poppins"}}>Hey there,<br/></Typography>
          <DialogContentText id="alert-dialog-slide-description">
                <ul>
                  <li><Typography variant="p" style={b}>this is a prototype of our product</Typography></li>
                  <li><Typography variant="p" style={b}> you can make your own Card using Edit   in main menu.<br/></Typography></li>
                  {/* <li><Typography variant="p" style={b}> to Know more <mark>about us </mark>in main menu </Typography></li> */}
            <br/>
                  {/* <Divider style={{"background-color":"#1b1919"}} /> */}
                  <li><Typography variant="p" style={b}>if you like Cards please submit your email id so that we can reach u when we are up running</Typography></li>
                 <Form />
              </ul>
          </DialogContentText>
        </DialogContent></Container>
  }
          </Grid>

        </Grid>
    </>
  }
  
  // <Tab icon={this.svg_name["object"]}  className={this.props.passive}  {...this.a11yProps(i)}/>
  render()
  {
    
    let a={"text-align": "center","font-family": "Poller One",color:"white","text-align":" left"}
    let c={"text-align": "center","font-family": "Comfortaa",color:"white","text-align":" left",  "font-size": "13px"}
    let b={
      a:"Cards",
      b:"wish your loved ones using cards"
    }
    return<>
     <SwipeableDrawer
      anchor={"left"}
      open={this.props.val}
      onClose={this.props.cl}
      onOpen={this.props.op}
      style={{background:`rgba(225 220 220 / 10%)`,}}
      className={"hello1"} 
    >
      <Box className={"hello"} style={{width:"100vw",height:"100vh","background":`rgb(225 220 220 / 10%)`,}}>
      <Hidden xsUp>
    {setTimeout(()=>{document.querySelector(".MuiDrawer-paperAnchorLeft").style.background="rgba(0,0,0,0)"},1)}
    
    </Hidden>
      <Hidden xsDown>
          <Container maxWidth="lg"  style={{height:"100vh",}}>
          {this.tags()}
          </Container>
      </Hidden>
      
      <Hidden smUp>
          {/* <Container maxWidth="lg"  style={{height:"100vh",}}> */}
          {this.tags()}
          {/* </Container> */}
      </Hidden>
      </Box>
    </SwipeableDrawer>
    </>
  }
  
}

class Edit extends React.Component
{

  // (event, newValue) => {
  //   setValue(newValue);
  // }
render()
{
  let d={"font-family": "Comfortaa",color:"green","text-align":" left",  "font-size": "13px"}
   
  let a={}
  let b={}
  if(this.props.value == 0)
  {
    a={color: "white"}
  }
  else
  {
    b={color: "white"}
  }
  return<>
     <BottomNavigation
      value={this.props.value}
      onChange={this.props.change}
      showLabels
      style={{backgroundColor:"rgba(0,0,0,0)"}}
      
    >
      <BottomNavigationAction label={<Typography  style={d}>Type 1</Typography>} icon={<Icon style={a} >apps</Icon>} />
      <BottomNavigationAction label={<Typography  style={d}>Type 2</Typography>} icon={<Icon style={b}>apps</Icon>} />
    </BottomNavigation>

    <Divider />
    <Container maxWidth="md">
      <Box  style={{background: "rgb(225, 225, 225)",padding:"2vw"}}>
    <Typography variant="h5"> Edit page is Under Development  please submit youe email id  so that we can reach u when we are up </Typography>
    <Form />
     
    </Box>
    </Container>
  </>
}

}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    document.dispatchEvent(new Event('cm'))
  };

  let a={"text-align": "center","font-family": "Poppins",color:"white","text-align":" left", "font-size":"5vh"}
  let b={"text-align": "center","font-family": "Poppins","font-size":"3vh"}

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        
      >
        <DialogTitle style={{    background: "rgb(17 17 17)"}} id="alert-dialog-slide-title"><Typography variant="h5" style={a}>Cards</Typography>
       </DialogTitle>
        <DialogContent style={{    background: "rgb(225, 225, 225)"}}>
        <Typography variant="p" style={{"font-size":"3vh","font-family":"Poppins"}}>Hey there,<br/></Typography>
          <DialogContentText id="alert-dialog-slide-description">
                <ul>
                  <li><Typography variant="p" style={b}>this is a prototype of our product</Typography></li>
                  <li><Typography variant="p" style={b}> you can make your own Card using Edit   in main menu.<br/></Typography></li>
                  {/* <li><Typography variant="p" style={b}> to Know more <mark>about us </mark>in main menu </Typography></li> */}
            <br/>
                  {/* <Divider style={{"background-color":"#1b1919"}} /> */}
                  <li><Typography variant="p" style={b}>if you like Cards please submit your email id so that we can reach u when we are up running</Typography></li>
                 <Form />
              </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{    background: "rgb(225, 225, 225)"}}>
          <Button onClick={handleClose} color="#424345">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

class Form extends React.Component
{
  constructor(props)
  {
    super(props)
    this.ref=React.createRef()
    this.ref2=React.createRef()
    this.state={
      email:"",
      feedback:"",
      error:false
    }
    this.handel=this.handel.bind(this)
    this.change=this.change.bind(this)
    this.change2=this.change2.bind(this)
  }
   validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  change(ev)
  {
   
    let a=ev.target.id
    let b=ev.target.value
      // console.log(a)
    this.setState(
      (state, props) => 
      (
        {
        email : b
      
        }
        )
      ) 

  }

  change2(ev)
  {
   
    let a=ev.target.id
    let b=ev.target.value
      // console.log(a)
    this.setState(
      (state, props) => 
      (
        {
        feedback : b
      
        }
        )
      ) 

  }
  handel()
  { 
  // console.log(this.state)
  if(this.validateEmail(this.state.email))
    {
      this.setState({error:false})
      // fetch('https://docs.google.com/forms/d/e/1FAIpQLSd0LuJgfrKyaJuMAlzfs2F5xUvkaDPAJU2UFB6FfO2jxmoirg/viewform', 
      // {
      //   method: 'post',
      //   mode: 'cors',
      //   // headers: {
      //   //   "Access-Control-Allow-Origin": "*",
      //   // },
      //   body: JSON.stringify({email: this.state.email, feedback: this.state.feedback})
      // })
      // .then(response => console.log(response,"done"))
      //   .catch(error => showErrorMessage(error))
 
      
      fetch("https://sheet.best/api/sheets/9db644c9-0334-4a56-b19a-1c1f1a6814a4", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: this.state.email, feedback: this.state.feedback})
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data,"jjjjjj");
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
      
      document.dispatchEvent(new Event('snack'))    
    } 
    else
    {
      this.setState({error:true})
    }

  }

    render()
    {


      return <Box style={{display:"flex","justify-content": "center","flex-direction":" column",height:"45vh"}}>
      <form  style={{display:"flex","justify-content": "center","flex-direction":" column"}}>
        {/* <br/>
        <TextField ref={this.ref} error={this.state.error} onChange={this.change} id="email" label={<Typography style={{color:"white"}}>email</Typography>} variant="filled" style={{color:"white"}}  /> */}
        <br/>
        <TextField  autoComplete={"off"} style={{"background-color":"rgb(19 19 19)",color:"white"}} ref={this.ref} error={this.state.error} onChange={this.change} id="email" label={<Typography style={{color:"white"}}>Email</Typography>} variant="filled"  />
        <br/>
        <TextField  autoComplete={"off"} style={{background:"rgb(19 19 19)"}} ref={this.ref2} onChange={this.change2} id="feedback" label={<Typography style={{color:"white"}}>Feedback</Typography>}  multiline rows={1} variant="filled"  />
        <br/>
        
        <Button  color="#424345" style={{width: "35vw",margin: "auto",border: "1px solid #1a1a1a",}} onClick={this.handel}>
          Submit 
        </Button>
       
      </form>
    </Box>
    }
    
}

function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    // console.log("hello0")
    setOpen(true);
  };

  document.addEventListener("snack",handleClick)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="email sent sucesfully"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <Icon>close</Icon>
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}


const A=withStyles(useStyles)(App)
ReactDOM.render(<A/>, document.querySelector(".root"));