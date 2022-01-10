import react from "react";
import {connect} from 'react-redux'
import {setData} from './store/action'

class App extends react.Component{
  constructor(){
    super();
    this.state={
      count:0,
      data:[]
    }
      console.log("constructor is called")
  }
  // static getDerivedStateFromProps(props,state){
  //   console.log("getDeriveStateFromProps is called",state)
  //   return null
  // }
 
  // componentDidMount(){
  //   console.log("componentDidMount is called")
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(data =>{
  //   console.log(data)
  //   this.setState({
  //     data:data
  //   })
  // })
  // .catch(err=>console.log(err))
  // }
 
  // shouldComponentUpdate(){
  //   if(this.state.count<5)
  //   {
  //     return true
  //   }
  //   else 
  //   {
  //     return false
  //   }
  // }
//  getSnapshotBeforeUpdate(preProps,preState){
//   console.log("getSnapshotBeforeUpdate",preState)
//   return 10
//  }
//  componentDidUpdate(preProps,preState,snapShots){
//    console.log("componentDidUpdate is called",snapShots)
//  }
// componentWillUnmount()
// {
//   console.log("unmount  .... khalas")
// }
  render(){
    // console.log("Render is called====>", this.state.data)
    console.log("redux_data",this.props)
    
    return(
      <div style={{textAlign:'center'}}>
        <h1>Life cycle in React</h1>
       {this.state.count} <br/>
       <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
       <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
        <br/>
      
        {/* <button onClick={this.props.setData()}>SetData</button> */}
      </div>
    )
  }
}

const mapStateToProps=((state)=>{
return{
 username:state.auth.username,
//  email:"muhammad@gmail.com",
//  regNo:state.regNo
email:state.reducer.email
  }
})
// function mapStateToProps(state) {
//   return {
//     a: 42,
//     name:state.name
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    setData: ()=>{console.log("My Update State is ::::")}
    //setData:dispatch(setData)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


