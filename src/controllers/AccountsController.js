const Accounts=require('../models/Accounts')
const {findOne}=require('../models/Accounts')
const accountController={
    getSignUp:(req,res)=>{
        return res.render('accounts/signup')
    },
    postSignUp:(req,res)=>{
        const{password,fullname,birthdate,location,phone,email,address,kind}=req.body
        if(!password||!fullname||!birthdate||!location||!phone||!email||!address||!kind)
        {
            console.log({password,fullname,birthdate,location,phone,email,address,kind})
            return res.redirect('/accounts/signup')
        }
        Accounts.findOne({phone:phone}).then(account=>{
            if(account)
            {
                console.log('a')
                return res.redirect('/accounts/signup')
            }
            else{
                var newAcc={
                    address:address,
                    fullname:fullname,
                    phone:phone,
                    password:password,
                    birthdate:birthdate,
                    location:location,
                    email:email,
                    kind:kind,
                }
                new Accounts(newAcc).save()
                console.log(newAcc)
                return res.redirect('/accounts/login')
            }
        })
    },
    
    getLogIn:(req,res)=>{
        return res.render('accounts/login')
    },
    postLogIn:(req,res)=>{
        const {phone,password}=req.body
        Accounts.findOne({phone:phone}).then((account)=>{
            if(!account){
                return res.redirect('/accounts/login')
            }
            else{
                if(account.password==password)
                {
                    req.session.fullname=account.fullname
                    req.session.kind=account.kind
                    req.session.slug=account.slug
                    return res.redirect('/')
                }
                else{
                    return res.redirect('/accounts/login')
                }
            }
        })
    },

    getAddInvoice:(req,res)=>{
        return res.render('accounts/invoice')
    },
    postAddInvoice:(req,res)=>{
        
    },

    getDetails:(req,res)=>{
        const slugUrl=req.params.slug 
        Accounts.findOne({slug:slugUrl})
        .then(account=>{
            if(!account)
            {
                return res.json({success:false,msg:'Account no exist'})
            }
            const data={
                email:account.email,
                location:account.location,
                fullname:account.fullname,
                phone:account.phone,
                kind:account.kind,
                slug:account.slug,
            }
            console.log({data:data})
            return res.render("accounts/details",{
                show:true,
                data:data, 
                fullname:req.session.fullname, 
                admin:req.session.kind=="seller"?true:false,
                slug:req.session.slug,
            })
        })
    }
}
module.exports=accountController