//Showing Menu
var Menuheadload = React.createClass({
        
        render: function () {
          return ( 
           <div> <a href="../" >HOME</a> | <a href="" > Signup </a> | <a href="http://www.athome.lu"> AtHomelu </a> </div>
          );
        }
      });
      ReactDOM.render(
        <Menuheadload />,
        document.getElementById('menuhead')
      );
      
 
      var Counters = React.createClass({

          getInitialState: function() {
              return {
                  name: '',
                  fname:'',
                  email: '',
                  message: ''
              };
          },
        //Handling validation and current data
          handleSubmit: function(e) {

              //e.preventDefault();

              var userName = this.state.name.trim();
              var userFname = this.state.fname.trim();
              var userEmail = this.state.email.trim();

              if(!userName || !userEmail) return;

              this.setState({
                  name: '',
                  email: '',
                  message: 'Please wait...'
              });

              this.props.onFormSubmit({
                  userName: userName,
                  userName: userFname,
                  userEmail: userEmail,
                  url: "/api/v1/signup"
              }, function(data) {
                  this.setState({ message: data });
              });
          },

          changeName: function(e) {
              this.setState({
                  name: e.target.value
              });
          },
          changeFname: function(e) {
              this.setState({
                  fname: e.target.value
              });
          },
          changeEmail: function(e) {
              this.setState({
                  email: e.target.value
              });
          },
        
        render: function () {
          return (
            //Creating form
            <form onSubmit={this.handleSubmit} method="post" action="../api/v1/signup">
           <div id='fieldsets'>
           <fieldset id='firstfld' > 
                <h3>Step 1</h3> 
                <br / ><br />
                  
                <input name='name' type='text'  placeholder='Name'/> 
                <span> </span> 
                <input type='button' name='next' id='currid' value='Next'  />
              </fieldset>
              
              <fieldset id='sndfld' class='' style={{display: 'none'}} >
                <h3>Step 2</h3> 
                <br / ><br />
                <input name='fname' type='text'  placeholder='Firstname'/> 
                <span> </span><input type='button' name='next' class='' value='Next' id='sndid' />
                <br / ><br />
                <input type='button' name='next' class='' value='Back' id='fstbckid' />
              </fieldset>
               
              <fieldset id='trdfld'  style={{display: 'none'}}>
              <h3>Step 3</h3> 
                <br / ><br />
                <input name='email' type='email'  placeholder='Email'/> 
                <input type='submit' name='submit' class='submit action-button' value='Validate' />
                <br / ><br />
                <input type='button' name='next' class='next action-button' value='Back' id='thrdidbck' />
                  
              </fieldset>
                           
           </div></form>
           
          );
        }
      });


//Displaying
      ReactDOM.render(
        <Counters />,
        document.getElementById('datafrmid')
      );


