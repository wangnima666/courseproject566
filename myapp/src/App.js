import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


function createData(name, LastName, Address1, Address2, City, State, Zipcode, SSN,Salary,Part,PriceUnit) {
  return { name,  LastName, Address1, Address2, City, State, Zipcode, SSN,Salary,Part,PriceUnit };
}
function createvendorData(companyname,Part,PriceUnit,Address1,Address2,City,State,Zipcode){
  return{companyname,Part,PriceUnit,Address1,Address2,City,State,Zipcode};
}
function createcustomerData(name, LastName, Address1, Address2, City, State, Zipcode){
  return {name, LastName, Address1, Address2, City, State, Zipcode};
}
function createpayrollData(name,lastname,Salary,Federaltax,Statetax,SSNtax,Med,Actualpay){
  return{name,lastname,Salary,Federaltax,Statetax,SSNtax,Med,Actualpay};
}
function createinventoryData(ipart,iPriceUnit,quantity,Value){
  return{ipart,iPriceUnit,quantity,Value};
}
function createinvoiceData(idate,icustomer,iquantity,ipricepart,itotal){
  return{idate,icustomer,iquantity,ipricepart,itotal};
}
function createPOData(POdate,POSupplier,POPart,POQuantity,POPricePart,POTotal){
  return{POdate,POSupplier,POPart,POQuantity,POPricePart,POTotal};
}
function createBalanceData(bname,bmoney,bname2,bmoney2){
  return{bname,bmoney,bname2,bmoney2};
}
function createIncomeData(iname,imoney){
  return{iname,imoney};
}
var rowsinvoice = [
  createinvoiceData(' ',' ','  ','  ','  '),
  
];
var rowsPOData = [
  createData('','','','','',''),

];
const rows = [
  createData('Tianhe','Wang', '1008 TZ', ' ', 'Urbana', 'IL','61801','123456',5000),

];

var rowvs = [
  createvendorData('DWANG','a',500,'1008 Green St ',' ','Urbana ','IL ','61801'),
  createvendorData('DWANG','a',500,'1008 Green St ',' ','Urbana ','IL ','61801'),
];
//row[1]['salary']+=5000
// rowvs.push(createvendorData('DWANG','a',500,'1008 Green St ',' ','Urbana ','IL ','61801'))
var rowsc = [
  createcustomerData('Beile','Feng','Aolin',' ','Daqing','Heilj','121000'),
];
var rowspay = [
  createpayrollData('KK','Wang',100,200,300,4,5,6),
];
var rowsin = [
  createinventoryData('Leather',3,10000,3*10000),
  createinventoryData('Thread',0.1,10000,0.1*10000),
  createinventoryData('Plastic',0.05,10000,0.05*10000),
];
var rowin =  [
  createinventoryData(rowsin[0]['Value']+rowsin[1]['Value']+rowsin[2]['Value'],3.15,10000,31500),
];
var balance = [
  createBalanceData('Cash',50000,'Accounts Payable',10000),
  createBalanceData('Accounts Receivable',50000,'Notes Payable',5000),
  createBalanceData('Inventory',50000,'Accruals',5000),
  createBalanceData('Total Current Assets',150000,'Total Current Liabilities',10000+5000+5000),
  createBalanceData('Fixed Assets',100000,'Long Term Debt',25000)

];

var Income = [
  createIncomeData('Sales',50000),
  createIncomeData('COGS',0),
  createIncomeData('Gross Profit',50000),
  createIncomeData('Expenses',''),
  createIncomeData('Payroll',0),
  createIncomeData('Payroll Witholding',0),
  createIncomeData('Bills',1250),
  createIncomeData('Annual Expenses',10000),
  createIncomeData('Total Expenses',10000+1250),
  createIncomeData('Net Income',50000-10000-1250)


];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 800,
    '& > *': {
      margin: theme.spacing(1),
      
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxwidth: '50ch',
  },
  table: {
    minWidth: 650,
    
  },
  balanceSheet:{
    minWidth:300,
    maxWidth:500
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const [emp_First, setEmp_First ] = React.useState('');
  const [emp_Last, setEmp_Last ] = React.useState('');
  const [emp_Address1, setEmp_Address1 ] = React.useState('');
  const [emp_Address2, setEmp_Address2 ] = React.useState('');
  const [emp_City, setEmp_City ] = React.useState('');
  const [emp_State, setEmp_State ] = React.useState('');
  const [emp_Zipcode, setEmp_Zipcode ] = React.useState('');
  const [emp_SSN, setEmp_SSN ] = React.useState('');
  const [emp_Salary, setEmp_Salary ] = React.useState('');

  const [vendor_company, setVendor_company ] = React.useState('');
  const [vendor_Part, setVendor_Part ] = React.useState('');
  const [vendor_PriceUnit, setVendor_PriceUnit ] = React.useState('');
  const [vendor_Address1, setVendor_Address1 ] = React.useState('');
  const [vendor_Address2, setVendor_Address2 ] = React.useState('');
  const [vendor_City, setVendor_City ] = React.useState('');
  const [vendor_State, setVendor_State ] = React.useState('');
  const [vendor_Zipcode, setVendor_Zipcode ] = React.useState('');

  const [cus_First, setCus_First ] = React.useState('');
  const [cus_Last, setCus_Last ] = React.useState('');
  const [cus_Address1, setCus_Address1 ] = React.useState('');
  const [cus_Address2, setCus_Address2 ] = React.useState('');
  const [cus_City, setCus_City ] = React.useState('');
  const [cus_State, setCus_State ] = React.useState('');
  const [cus_Zipcode, setCus_Zipcode ] = React.useState('');

  const [pay_firstname,setPay_firstname] = React.useState('');
  const [pay_lastname,setPay_lastname] = React.useState('');
  const [pay_salary,setPay_salary] =  React.useState('');

  const [inv_customer,setInv_customer] = React.useState('');
  const [inv_number,setInv_number] = React.useState('');
  const [inv_date,setInv_date] = React.useState('');

  const [PO_date,setPO_date] = React.useState('');
  const [PO_Supplier,setPO_Supplier] = React.useState('');
  var decrease = 0;
  var numberpurchase = 0;
  var numberPO = 0;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="List Employee" {...a11yProps(0)} />
          <Tab label="Add Employee" {...a11yProps(1)} />
          <Tab label="List Vendors" {...a11yProps(1)} />
          <Tab label="Add Vendor" {...a11yProps(1)} />
          <Tab label="List Customers" {...a11yProps(1)} />
          <Tab label="Add Customers" {...a11yProps(1)} />
          <Tab label="Pay Employee" {...a11yProps(1)} />
          <Tab label="Payroll" {...a11yProps(1)} />
          <Tab label="Inventory" {...a11yProps(1)} />
          <Tab label="Create Invoice" {...a11yProps(1)} />
          <Tab label="Invoice History" {...a11yProps(1)} />
          <Tab label="Create PO" {...a11yProps(1)} />
          <Tab label="PO History" {...a11yProps(1)} />
          <Tab label="Balance Sheet" {...a11yProps(1)} />
          <Tab label="Income Statement" {...a11yProps(1)} />
      </Tabs>

      <TabPanel value={value} index={0}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name </TableCell>
            <TableCell align="mid">Last Name</TableCell>
            <TableCell align="right">Address1</TableCell>
            <TableCell align="right">Address2</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zip code</TableCell>
            <TableCell align="right">SSN</TableCell>
            <TableCell align="right">Salary&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="mid">{row.LastName}</TableCell>
              <TableCell align="right">{row.Address1}</TableCell>
              <TableCell align="right">{row.Address2}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
              <TableCell align="right">{row.State}</TableCell>
              <TableCell align="right">{row.Zipcode}</TableCell>
              <TableCell align="right">{row.SSN}</TableCell>
              <TableCell align="right">{row.Salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TextField id="standard-basic" label="First Name" style={{ margin: 4 }} onChange = {(e)=>{setEmp_First(e.target.value)}}/>
      
      <TextField id="standard-basic" label="Last Name" variant="standard" style={{ margin: 4 }} onChange = {(e)=>{setEmp_Last(e.target.value)}}/>
      <TextField id="standard-basic" label="Address 1" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setEmp_Address1(e.target.value)}}/>
      <TextField id="standard-basic" label="Address 2" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setEmp_Address2(e.target.value)}}/>
      <div><TextField id="standard-basic" label="City" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setEmp_City(e.target.value)}}/>
      <TextField id="standard-basic" label="State" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setEmp_State(e.target.value)}}/>
      <TextField id="standard-basic" label="Zip Code" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setEmp_Zipcode(e.target.value)}}/>
      <TextField id="standard-basic" label="Social Security Number" variant="standard"  style={{ margin: 8 }}onChange = {(e)=>{setEmp_SSN(e.target.value)}}/>
      <TextField id="standard-basic" label="Salary" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setEmp_Salary(e.target.value)}}/></div>
      
      

      <Button variant="contained" color="primary" onClick = {()=>{rows.push(createData(emp_First,emp_Last,emp_Address1,emp_Address2,emp_City,emp_State,emp_Zipcode,emp_SSN,emp_Salary))}}>
        Add Employee
      </Button>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name </TableCell>
            <TableCell align="right">Part</TableCell>
            <TableCell align="right">Price Unit&nbsp;($)</TableCell>
            <TableCell align="right">Address1</TableCell>
            <TableCell align="right">Address2</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zip code</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rowvs.map((row) => (
            <TableRow key={row.companyname}>
              <TableCell component="th" scope="row">
                {row.companyname}
              </TableCell>
              <TableCell align="right">{row.Part}</TableCell>
              <TableCell align="right">{row.PriceUnit}</TableCell>
              <TableCell align="right">{row.Address1}</TableCell>
              <TableCell align="right">{row.Address2}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
              <TableCell align="right">{row.State}</TableCell>
              <TableCell align="right">{row.Zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={3}>
        
      <TextField id="standard-basic" label="Company Name" style={{ margin: 8 }} onChange = {(e)=>{setVendor_company(e.target.value)}} />
      <TextField id="standard-basic" label="Part" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setVendor_Part(e.target.value)}}/>
      <TextField id="standard-basic" label="Price/Unit" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setVendor_PriceUnit(e.target.value)}}/>
      <TextField id="standard-basic" label="Address 1" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setVendor_Address1(e.target.value)}}/>
      <div>
      <TextField id="standard-basic" label="Address 2" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setVendor_Address2(e.target.value)}}/>
      <TextField id="standard-basic" label="City" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setVendor_City(e.target.value)}}/>
      <TextField id="standard-basic" label="State" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setVendor_State(e.target.value)}}/>
      <TextField id="standard-basic" label="Zip Code" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setVendor_Zipcode(e.target.value)}}/>
      </div>

      <Button variant="contained" color="primary" onClick = {()=>{rowvs.push(createvendorData(vendor_company,vendor_Part,vendor_PriceUnit,vendor_Address1,vendor_Address2,vendor_City,vendor_State,vendor_Zipcode))}}>
        Add Vendor
      </Button>
      </TabPanel>


      <TabPanel value={value} index={4}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name </TableCell>
            <TableCell align="mid">Last Name</TableCell>
            <TableCell align="right">Address1</TableCell>
            <TableCell align="right">Address2</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zip code</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rowsc.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="mid">{row.LastName}</TableCell>
              <TableCell align="right">{row.Address1}</TableCell>
              <TableCell align="right">{row.Address2}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
              <TableCell align="right">{row.State}</TableCell>
              <TableCell align="right">{row.Zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={5}>

      <TextField id="standard-basic" label="First Name" style={{ margin: 4 }} onChange = {(e)=>{setCus_First(e.target.value)}}/>
      <TextField id="standard-basic" label="Last Name" variant="standard" style={{ margin: 4 }} onChange = {(e)=>{setCus_Last(e.target.value)}}/>
      <TextField id="standard-basic" label="Address 1" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setCus_Address1(e.target.value)}}/>
      <TextField id="standard-basic" label="Address 2" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setCus_Address2(e.target.value)}}/>
      <div><TextField id="standard-basic" label="City" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setCus_City(e.target.value)}}/>
      <TextField id="standard-basic" label="State" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setCus_State(e.target.value)}}/>
      <TextField id="standard-basic" label="Zip Code" variant="standard" style={{ margin: 8 }} onChange = {(e)=>{setCus_Zipcode(e.target.value)}}/></div>
      
      

      <Button variant="contained" color="primary" onClick = {()=>{rowsc.push(createcustomerData(cus_First,cus_Last,cus_Address1,cus_Address2,cus_City,cus_State,cus_Zipcode))}}>
        Add Customer
      </Button>
      
      </TabPanel>


      <TabPanel value={value} index={6}>
      <TextField id="standard-basic" label="First Name" style={{ margin: 8 }} onChange = {(e)=>{setPay_firstname(e.target.value)}}/>
      <TextField id="standard-basic" label="Last Name" variant="standard" style={{ margin: 8 }}onChange = {(e)=>{setPay_lastname(e.target.value)}}/>  
      <TextField id="standard-basic" label="Salary" variant="standard" style={{ margin: 8 }} onChange = {((e)=>{decrease = e.target.value;console.log(decrease)})}/>  
      <Button variant="contained" color="primary" onClick = {()=>{
        var tax = 0;
        if(decrease<=9700/12){
          tax = (0.1*decrease/12);
        }else if(39475/12>=decrease && decrease>9700/12){
          tax = (970+(decrease*12-9700)*0.12)/12
        }else if(84200/12>=decrease && decrease>39475/12){
          tax = (970+3573+(decrease*12-39475)*0.22)/12
        }else if(160725/12>=decrease && decrease>84200/12){
          tax = (970+3573+16835.28+(decrease*12-84200)*0.24)/12
        }else if(204100/12>=decrease && decrease>160725/12){
          tax = (970+3573+16835.28+18366+(decrease*12-160725)*0.32)/12
        }else if(510300/12>=decrease && decrease>204100/12){
          tax = (970+3573+16835.28+18366+13879.68+(decrease*12-204100)*0.35)/12
        }else {
          tax = (970+3573+16835.28+18366+13879.68+107170(decrease*12-510300)*0.37)/12
        }
      
        
        balance[0]['bmoney']-=decrease; 
        balance[3]['bmoney']-=decrease;
        Income[4]['imoney']+=decrease-tax-decrease*0.126;
        Income[5]['imoney']+=tax+decrease*0.126; 
        Income[8]['imoney']+=decrease-tax-decrease*0.126;
        rowspay.push(createpayrollData(pay_firstname,pay_lastname,decrease,tax,decrease*0.0495,decrease*0.062,decrease*0.0145,decrease-tax-decrease*0.126))
        }} >
        Pay Employee
      </Button>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name </TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="mid">Salary</TableCell>
            <TableCell align="right">Federal Tax</TableCell>
            <TableCell align="right">State Tax</TableCell>
            <TableCell align="right">Social Security</TableCell>
            <TableCell align="right">Medcare</TableCell>
            <TableCell align="right">Amount Paid</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rowspay.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="mid">{row.Salary}</TableCell>
              <TableCell align="right">{row.Federaltax}</TableCell>
              <TableCell align="right">{row.Statetax}</TableCell>
              <TableCell align="right">{row.SSNtax}</TableCell>
              <TableCell align="right">{row.Med}</TableCell>
              <TableCell align="right">{row.Actualpay}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      </TabPanel>
      <TabPanel value={value} index={8}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Part </TableCell>
            <TableCell align="right">PriceUnit</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsin.map((row) => (
            <TableRow key={row.ipart}>
              <TableCell component="th" scope="row">
                {row.ipart}
              </TableCell>
              <TableCell align="right">{row.iPriceUnit}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.Value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Total </TableCell>
            <TableCell align="right">COG/Unit</TableCell>
            <TableCell align="right">Complete Unit in Stock</TableCell>
            <TableCell align="right">Total Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowin.map((row) => (
            <TableRow key={row.ipart}>
              <TableCell component="th" scope="row">
                {row.ipart}
              </TableCell>
              <TableCell align="right">{row.iPriceUnit}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.Value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={9}>
      <TextField id="standard-basic" label="Date" style={{ margin: 4 }} onChange = {(e)=>{setInv_date(e.target.value)}}/>
      <TextField id="standard-basic" label="Customer" style={{ margin: 4 }} onChange = {(e)=>{setInv_customer(e.target.value)}}/>
      <TextField id="standard-basic" label="Number of Units to Invoice" variant="standard" style={{ margin: 4 }} onChange = {((e)=>{numberpurchase = e.target.value})}/>
      <div>Number of Units in Stock:10000</div>
      <Button variant="contained" color="primary" onClick = {()=>{Income[0]['imoney']+=numberpurchase*8;Income[1]['imoney']+=numberpurchase*3.15;Income[2]['imoney']+=numberpurchase*(8-3.15);balance[1]['bmoney']+=numberpurchase*8;rowin[0]['quantity']-=numberpurchase;rowin[0]['Value']-=numberpurchase*3.15;balance[3]['bmoney']+=numberpurchase*8; rowsinvoice.push(createinvoiceData(inv_date,inv_customer,numberpurchase,8,numberpurchase*8))}} >
        Create Invoice
      </Button>
      </TabPanel>
      <TabPanel value={value} index={10}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date </TableCell>
            <TableCell align="mid">Customer</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price/Part&nbsp;($)</TableCell>
            <TableCell align="right">Total&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsinvoice.map((row) => (
            <TableRow key={row.idate}>
              <TableCell component="th" scope="row">
                {row.idate}
              </TableCell>
              <TableCell align="mid">{row.icustomer}</TableCell>
              <TableCell align="right">{row.iquantity}</TableCell>
              <TableCell align="right">{row.ipricepart}</TableCell>
              <TableCell align="right">{row.itotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={11}>
      <TextField id="standard-basic" label="Date" style={{ margin: 4 }} onChange = {(e)=>{setPO_date(e.target.value)}}/>
      <TextField id="standard-basic" label="Supplier" style={{ margin: 4 }} onChange = {(e)=>{setPO_Supplier(e.target.value)}}/>
      <TextField id="standard-basic" label="Number of Units to Purchase" variant="standard" style={{ margin: 4 }} onChange = {((e)=>{numberPO = e.target.value})}/>
      <div><Button variant="contained" color="primary" onClick = {()=>{balance[0]['bmoney2']+=numberPO*3;rowsin[0]['quantity']+=numberPO*1;rowin[0]['ipart']+=numberPO*3;rowsin[0]['Value']+=numberPO*3;balance[3]['bmoney2']+=numberPO*3; rowsPOData.push(createPOData(PO_date,PO_Supplier,'Leather',numberPO,3,numberPO*3))}} >
        Create PO of Leather
      </Button>
      <Button variant="contained" color="primary" onClick = {()=>{balance[0]['bmoney2']+=numberPO*0.1;rowsin[1]['quantity']+=numberPO*1;rowin[0]['ipart']+=numberPO*0.1;;rowsin[1]['Value']+=numberPO*0.1;balance[3]['bmoney2']+=numberPO*0.1; rowsPOData.push(createPOData(PO_date,PO_Supplier,'Thread',numberPO,0.1,numberPO*0.1))}} >
        Create PO of Thread
      </Button>
      <Button variant="contained" color="primary" onClick = {()=>{balance[0]['bmoney2']+=numberPO*0.05;rowsin[2]['quantity']+=numberPO*1;rowin[0]['ipart']+=numberPO*0.05;;rowsin[2]['Value']+=numberPO*0.05;balance[3]['bmoney2']+=numberPO*0.05; rowsPOData.push(createPOData(PO_date,PO_Supplier,'Thread',numberPO,0.05,numberPO*0.05))}} >
        Create PO of Plastic
      </Button></div>
      </TabPanel>
      <TabPanel value={value} index={12}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date </TableCell>
            <TableCell align="mid">Supplier</TableCell>
            <TableCell align="right">Part</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price/Part&nbsp;($)</TableCell>
            <TableCell align="right">Total&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsPOData.map((row) => (
            <TableRow key={row.POdate}>
              <TableCell component="th" scope="row">
                {row.POdate} 
              </TableCell>
              <TableCell align="mid">{row.POSupplier}</TableCell>
              <TableCell align="right">{row.POPart}</TableCell>
              <TableCell align="right">{row.POQuantity}</TableCell>
              <TableCell align="right">{row.POPricePart}</TableCell>
              <TableCell align="right">{row.POTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={13}>
      <TableContainer className={classes.balanceSheet} component={Paper}>
      <Table className={classes.balanceSheet} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="cneter">Assets </TableCell>
            <TableCell></TableCell>

            <TableCell align="center">Liabilities</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {balance.map((row) => (
            <TableRow key={row.bname}>
              <TableCell >{row.bname} </TableCell>
              <TableCell align="right">{row.bmoney}</TableCell>
              <TableCell align="left">{row.bname2}</TableCell>
              <TableCell align="right">{row.bmoney2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>   
      </TabPanel>
      <TabPanel value={value} index={14}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sales </TableCell>
            <TableCell align="mid"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Income.map((row) => (
            <TableRow key={row.iname}>
              <TableCell component="th" scope="row">
                {row.iname} 
              </TableCell>
              <TableCell align="mid">{row.imoney}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </TabPanel>

    </div>
  );
}