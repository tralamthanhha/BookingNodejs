const express=require('express')
const app=express()

const handlebars=require('express-handlebars')
const bodyParser=require('body-parser')

const session=require('express-session')
const cookieParser=require('cookie-parser')

const database=require('./config/db')
const flash=require('express-flash')
const upload=require('./middleware/multer')
const path=require('path')
const accountRouter=require('./routes/AccountsRouter')
const StaysRouter=require('./routes/StaysRouter')
const restaurantsRouter=require('./routes/RestaurantRouter')
const transportsRouter=require('./routes/TransportsRouter')
const ticketsRouter=require('./routes/TicketsRouter')
// const stayRouter=require('./routes/StaysRouter')


app.set('view engine','hbs')
app.engine('hbs',handlebars.engine({
    extname:'hbs'
}))

app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname,'views'))

app.use(bodyParser.json())
// app.use(express.json());
// app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(cookieParser('cookieParser'))
app.use(session({
    cookie:{
        maxAge:30000
    }
}))

app.use(flash())
// app.use('/stays',stayRouter)
database.connect()
const port=8888
app.listen(port,()=>{
    console.log('success')
})
app.use('/accounts',accountRouter)
// app.use('./restaurant',restaurantsRouter)
// app.use('./transports',transportsRouter)
// app.use('./tickets',ticketsRouter)
app.get('/',(req,res)=>{
    // if(req.session.type=="Seller")
    // {
    //     return res.render('home',{fullname:req.session.fullname})
    // }
    // else if(req.session.type="Guest")
    // {
    //     return res.render('home',{fullname:req.session.fullname?req.session.fullname:'Log in', kind:req.session.kind})
    // }
    return res.render('home',{fullname:req.session.fullname})
})
